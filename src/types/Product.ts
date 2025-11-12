// Definiamo prima la "forma" dell'oggetto rating
export interface Rating {
  rate: number;
  count: number;
}

// Definiamo la "forma" principale del prodotto
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating; // Usiamo l'interfaccia Rating definita sopra
}
