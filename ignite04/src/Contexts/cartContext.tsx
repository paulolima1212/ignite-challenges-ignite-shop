import { ReactNode, createContext, useState } from 'react';
import { ProductProps } from '../interfaces/product';
import { produce } from 'immer';

interface CartContextProps {
  productList: ProductProps[];
  handlerCreateProductList: (product: ProductProps) => void;
  handlerDeleteItem: (productID: string) => void;
  totalItemsInfo: {
    totalItems: number;
    totalValue: number;
  };
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [productList, setProductList] = useState<ProductProps[]>([]);

  function handlerCreateProductList(product: ProductProps) {
    setProductList((prev) => [...prev, product]);
  }

  function handlerDeleteItem(productId: string) {
    const newProductList = produce(productList, (draft) => {
      const productIndex = productList.findIndex(
        (product) => product.id === productId
      );
      if (productIndex >= 0) {
        draft.splice(productIndex, 1);
      }
    });

    setProductList(newProductList);
  }

  const totalItemsInfo = productList.reduce(
    (acc, product) => {
      acc.totalValue += product.price;

      return acc;
    },
    {
      totalItems: productList.length,
      totalValue: 0,
    }
  );

  return (
    <CartContext.Provider
      value={{
        productList,
        totalItemsInfo,
        handlerCreateProductList,
        handlerDeleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
