import React from "react";
import type { Product } from "../types/Product"; 
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

// Definiamo le props (proprietà) che questo componente riceve
interface Props {
  product: Product;
}

// Funzione utility per formattare il prezzo
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      {/* Contenitore Immagine */}
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>

      {/* Informazioni testuali */}
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
