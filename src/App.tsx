import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="app">
      {/* L'Header è fisso e visibile in tutte le pagine */}
      <Header />

      {/* Il 'main' contiene la pagina dinamica */}
      <main>
        {/* 'Routes' gestisce quale pagina mostrare */}
        <Routes>
          {/* URL "/" mostra la HomePage */}
          <Route path="/" element={<HomePage />} />

          {/* URL "/product/1", "/product/2", ecc. */}
          <Route path="/product/:id" element={<ProductDetailPage />} />

          {/* URL "/cart" mostra la CartPage */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>

      {/* Il Footer è fisso e visibile in tutte le pagine */}
      <Footer />
    </div>
  );
}

export default App;
