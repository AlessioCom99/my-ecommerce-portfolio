import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Importa l'hook del carrello

const Header = () => {
  // Accede allo stato del carrello
  const { cartItems } = useCart();

  // Calcola il totale degli articoli (somma le quantità)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        {/* Link alla Home */}
        <Link to="/" className={styles.logo}>
          Mio E-Commerce
        </Link>

        {/* Navigazione */}
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/cart">
            {/* Mostra il numero di articoli dinamicamente */}
            Carrello ({totalItems})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
