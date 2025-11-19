import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; 2025 Alessio Comentale. Creato con React & TypeScript.</p>
      </div>
    </footer>
  );
};

export default Footer;
