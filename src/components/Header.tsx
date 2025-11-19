// src/components/Header.tsx
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <nav className={styles.navLeft}>
          <Link to="/">Home</Link>
        </nav>

        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            AC E-Commerce
          </Link>
        </div>

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
