import { useContext } from 'react';
import { CartContext } from '../Contexts/cartContext';

export function useCartContext() {
  return useContext(CartContext);
}
