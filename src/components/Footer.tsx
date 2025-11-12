import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; 2025 Il Mio Portfolio. Creato con React & TypeScript.</p>
      </div>
    </footer>
  );
};

export default Footer;
