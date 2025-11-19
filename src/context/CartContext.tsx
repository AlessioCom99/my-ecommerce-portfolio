import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react"; // Importazione del TIPO ReactNode
import type { Product } from "../types/Product";

// Interfaccia per l'articolo nel carrello (Prodotto + quantità)
export interface CartItem extends Product {
  quantity: number;
}

// Interfaccia per il valore del nostro contesto
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

// 1. Creazione del Contesto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Interfaccia per le props del Provider
interface Props {
  children: ReactNode;
}

// 2. Creazione del Provider 
export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Funzione per aggiungere un prodotto
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart deve essere usato dentro un CartProvider");
  }
  return context;
};
