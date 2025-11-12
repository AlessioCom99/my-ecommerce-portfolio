// src/pages/HomePage.tsx
import React from "react";
import useFetchData from "../hooks/useFetchData"; // Importa il nostro hook
import type { Product } from "../types/Product"; // Importa la nostra interfacciass
import ProductCard from "../components/ProductCard"; // IMPORTA LA CARD
import styles from "./HomePage.module.scss"; // IMPORTA LO STILE DELLA PAGINA

const HomePage = () => {
  // 1. Definiamo l'URL dell'API
  const apiUrl = "https://fakestoreapi.com/products";

  // 2. Usiamo il nostro hook
  //    Gli passiamo l'interfaccia "Product[]" (un array di Prodotti)
  //    come tipo generico, così sa cosa aspettarsi.
  const { data: products, loading, error } = useFetchData<Product[]>(apiUrl);

  // 3. Gestiamo i vari stati (caricamento, errore, successo)
  if (loading) {
    return (
      <div className={`${styles.loading} container`}>
        Caricamento prodotti...
      </div>
    );
  }

  if (error) {
    return <div className={`${styles.error} container`}>Errore: {error}</div>;
  }

  // 4. Se tutto è andato bene (non c'è loading e non c'è errore)

  return (
    <div className="container">
      <h2>I nostri prodotti</h2>

      {/* 3. Creiamo la griglia */}
      <div className={styles.productGrid}>
        {/* 4. Usiamo .map() per creare una card per ogni prodotto */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
