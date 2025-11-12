// src/pages/ProductDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom"; // IMPORTA useParams
import useFetchData from "../hooks/useFetchData";
import type { Product } from "../types/Product";
import styles from "./ProductDetailPage.module.scss";

// Importiamo la funzione per formattare il prezzo
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const ProductDetailPage = () => {
  // 1. Usiamo useParams per leggere i parametri dall'URL
  //    Il nome "id" deve corrispondere a quello in App.tsx (:id)
  const { id } = useParams<{ id: string }>();

  // 2. Creiamo un URL dinamico per l'API
  const apiUrl = `https://fakestoreapi.com/products/${id}`;

  // 3. Usiamo il nostro hook. Stavolta il tipo generico è Product (singolo)
  const { data: product, loading, error } = useFetchData<Product>(apiUrl);

  // 4. Gestiamo i soliti stati
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

  // 5. Se il prodotto non viene trovato (ma non c'è errore),
  //    è buona norma mostrare un messaggio
  if (!product) {
    return (
      <div className={`${styles.error} container`}>Prodotto non trovato.</div>
    );
  }

  // 6. Mostriamo i dettagli del prodotto
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

          <button className={styles.addToCartButton}>
            Aggiungi al Carrello
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
