// src/types/Product.ts

// Definiamo prima la struttura del rating
export interface Rating {
  rate: number;
  count: number;
}

// Definiamo la struttura principale del prodotto
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating; // Usiamo l'interfaccia Rating che abbiamo definito sopra
}
