import useFetchData from "../hooks/useFetchData";
import type { Product } from "../types/Product"; // Importa il TIPO
import ProductCard from "../components/ProductCard";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  // Definisce l'URL dell'API per tutti i prodotti
  const apiUrl = "https://fakestoreapi.com/products";

  // Usa l'hook per fetchare i dati. Specifichiamo che ci aspettiamo un ARRAY di Prodotti
  const { data: products, loading, error } = useFetchData<Product[]>(apiUrl);

  // Mostra un messaggio durante il caricamento
  if (loading) {
    return (
      <div className={`${styles.loading} container`}>
        Caricamento prodotti...
      </div>
    );
  }

  // Mostra un messaggio in caso di errore
  if (error) {
    return <div className={`${styles.error} container`}>Errore: {error}</div>;
  }

  // Se tutto ok, mostra la griglia
  return (
    <div className="container">
      <h2>I nostri prodotti</h2>

      <div className={styles.productGrid}>
        {/* Usiamo .map() per "ciclare" sull'array di prodotti.
          Per ogni 'product' nell'array, crea un componente <ProductCard>.
          La 'key' è obbligatoria per React per ottimizzare le liste.
        */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
