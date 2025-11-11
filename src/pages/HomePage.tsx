// src/pages/HomePage.tsx
import React from "react";
import useFetchData from "../hooks/useFetchData"; // Importa il nostro hook
import type { Product } from "../types/Product"; // Importa la nostra interfacciass

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
      <div className="container">
        <h2>Prodotti</h2>
        <p>Caricamento in corso...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h2>Errore</h2>
        <p>Si è verificato un errore: {error}</p>
      </div>
    );
  }

  // 4. Se tutto è andato bene (non c'è loading e non c'è errore)
  //    per ora facciamo solo un console.log dei dati per vederli.
  //    Nella prossima fase li mostreremo a schermo.
  console.log("Dati ricevuti:", products);

  return (
    <div className="container">
      <h2>Prodotti</h2>
      <p>
        Controlla la console del browser (tasto F12 o Click Destro - Ispeziona)
        per vedere l'array di prodotti!
      </p>
    </div>
  );
};

export default HomePage;
