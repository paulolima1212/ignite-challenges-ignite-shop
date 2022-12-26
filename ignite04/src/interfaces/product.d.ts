export interface ProductsProps {
  products: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  }[];
}

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  priceId: string;
}
