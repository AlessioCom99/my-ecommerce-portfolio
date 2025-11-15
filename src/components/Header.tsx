// src/components/Header.tsx
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    // L' <header> ora funge solo da contenitore per posizionare la "pillola"
    <header className={styles.header}>
      {/* Questo è il nuovo "header pill" scuro */}
      <div className={styles.headerContent}>
        {/* 1. SEZIONE SINISTRA (Navigazione) */}
        <nav className={styles.navLeft}>
          <Link to="/">Home</Link>
          {/* Potremmo aggiungere altri link qui, es. "Prodotti" */}
        </nav>

        {/* 2. SEZIONE CENTRALE (Logo) */}
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            Mio E-Commerce
          </Link>
        </div>

        {/* 3. SEZIONE DESTRA (Azioni, es. Carrello) */}
        <div className={styles.navRight}>
          <Link to="/cart" className={styles.cartButton}>
            Carrello ({totalItems})
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
