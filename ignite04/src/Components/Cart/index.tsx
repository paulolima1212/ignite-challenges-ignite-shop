import { X } from 'phosphor-react';
import {
  CartClose,
  CartContent,
  CartFinalization,
  CartProduct,
  CartProductDetails,
  CartProductImage,
} from '../../Styles/Components/Cart';
import { CartButton } from '../CartButton';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { api } from '../../Libs/axios';
import { useCartContext } from '../../Hooks/useCartContext';
import { currencyFormat } from '../../Utils/Formatter';

export default function Cart() {
  const { productList, handlerDeleteItem } = useCartContext();
  const { isFallback } = useRouter();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  if (isFallback) {
    return <p>Loading...</p>;
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert(error);
    }
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
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton size='medium' />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight='bold' />
          </CartClose>
          <h2>Shopping bag</h2>
          <section>
            {productList.map((product) => {
              console.log(product.price);
              return (
                <CartProduct key={product.id}>
                  <CartProductImage>
                    <Image
                      src={product.imageUrl}
                      width={100}
                      height={93}
                      alt=''
                    />
                  </CartProductImage>
                  <CartProductDetails>
                    <p>{product.name}</p>
                    <strong>{currencyFormat.format(product.price)}</strong>
                    <button onClick={() => handlerDeleteItem(product.id)}>
                      Remove
                    </button>
                  </CartProductDetails>
                </CartProduct>
              );
            })}
          </section>
          <CartFinalization>
            <div>
              <span className='quantity'>Quantity</span>
              <span className='quantity'>
                {totalItemsInfo.totalItems} items
              </span>
            </div>
            <div>
              <span className='total'>Total order</span>
              <span className='total-value'>
                {currencyFormat.format(totalItemsInfo.totalValue)}
              </span>
            </div>
            <button
              onClick={handleBuyProduct}
              disabled={isCreatingCheckoutSession}
            >
              Finish order
            </button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
