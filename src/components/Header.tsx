// src/components/Header.tsx
import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <div className={styles.logo}>Mio E-Commerce</div>
        <nav className={styles.nav}>
          {/* Qui useremo i Link di React Router tra poco */}
          <Link to="/">Home</Link>
          <Link to="/cart">Carrello</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
