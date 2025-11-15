// src/pages/NotFoundPage.tsx
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="container"
      style={{ textAlign: "center", padding: "4rem 0" }}
    >
      <h2>Oops! Pagina Non Trovata</h2>
      <p style={{ margin: "1rem 0" }}>Sembra che tu ti sia perso.</p>
      <Link
        to="/"
        style={{
          color: "#0a4a8f",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Torna alla Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
