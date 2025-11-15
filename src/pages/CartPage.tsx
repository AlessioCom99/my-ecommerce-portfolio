import { useCart } from "../context/CartContext"; // Importa l'hook del carrello
import styles from "./CartPage.module.scss";
import { Link } from "react-router-dom";

// Funzione utility per formattare il prezzo
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const CartPage = () => {
  // Prende stato e funzioni dal contesto
  const { cartItems, removeFromCart } = useCart();

  // Calcola il prezzo totale (prezzo * quantità)
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Caso 1: Carrello vuoto
  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h2>Carrello</h2>
        <p className={styles.emptyCart}>Il tuo carrello è vuoto.</p>
      </div>
    );
  }

  // Caso 2: Carrello pieno
  return (
    <div className="container">
      <h2>Carrello</h2>

      <div className={styles.cartList}>
        {/* Mappa gli articoli del carrello */}
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.title} className={styles.image} />

            <div className={styles.info}>
              <Link to={`/product/${item.id}`} className={styles.title}>
                {item.title}
              </Link>
              <p className={styles.quantity}>Quantità: {item.quantity}</p>
            </div>

            <div className={styles.actions}>
              <p className={styles.price}>
                {formatPrice(item.price * item.quantity)}
              </p>
              <button
                className={styles.removeButton}
                onClick={() => removeFromCart(item.id)} // Rimuove l'articolo
              >
                Rimuovi
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mostra il totale finale */}
      <div className={styles.total}>Totale: {formatPrice(total)}</div>
    </div>
  );
};

export default CartPage;
