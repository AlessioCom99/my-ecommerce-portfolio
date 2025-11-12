// src/components/ProductCard.tsx
import React from "react";
import type { Product } from "../types/Product"; // Importiamo il nostro TIPO
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom"; // Ci servirà tra poco

// 1. Definiamo le props che questo componente riceverà
interface Props {
  product: Product;
}

// 2. Formattiamo il prezzo per mostrarlo come valuta
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

// 3. Usiamo "React.FC" (Functional Component) e gli passiamo
//    le nostre Props per una type-safety completa.
const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    // 4. Usiamo <Link> per rendere l'intera card cliccabile
    //    e portarci alla pagina di dettaglio
    <Link to={`/product/${product.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
