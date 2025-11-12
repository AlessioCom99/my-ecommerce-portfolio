import React from "react";
import { useParams } from "react-router-dom"; // Hook per leggere l'URL
import useFetchData from "../hooks/useFetchData";
import type { Product } from "../types/Product";
import styles from "./ProductDetailPage.module.scss";
import { useCart } from "../context/CartContext"; // Hook per il carrello

// Funzione utility per formattare il prezzo
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const ProductDetailPage = () => {
  // 1. Legge l'ID dall'URL (es. "/product/5" -> id = "5")
  const { id } = useParams<{ id: string }>();

  // 2. Crea l'URL dinamico per l'API
  const apiUrl = `https://fakestoreapi.com/products/${id}`;

  // 3. Fetcha i dati per UN solo prodotto
  const { data: product, loading, error } = useFetchData<Product>(apiUrl);

  // 4. Accede alla funzione 'addToCart' dal contesto
  const { addToCart } = useCart();

  // Gestione stati di caricamento ed errore
  if (loading) {
    return (
      <div className={`${styles.loading} container`}>
        Caricamento prodotto...
      </div>
    );
  }
  if (error) {
    return <div className={`${styles.error} container`}>Errore: {error}</div>;
  }
  if (!product) {
    return (
      <div className={`${styles.error} container`}>Prodotto non trovato.</div>
    );
  }

  // 5. Funzione chiamata al click del pulsante
  const handleAddToCart = () => {
    addToCart(product); // Aggiunge il prodotto corrente
    alert("Prodotto aggiunto al carrello!");
  };

  // 6. Mostra i dettagli
  return (
    <div className={`${styles.pageContainer} container`}>
      <div className={styles.detailLayout}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>

        <div className={styles.infoContainer}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.rating}>
            <span>
              ⭐ {product.rating.rate} ({product.rating.count} recensioni)
            </span>
          </div>

          <p className={styles.price}>{formatPrice(product.price)}</p>
          <p className={styles.description}>{product.description}</p>

          <button
            className={styles.addToCartButton}
            onClick={handleAddToCart} // Collega la funzione al click
          >
            Aggiungi al Carrello
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
