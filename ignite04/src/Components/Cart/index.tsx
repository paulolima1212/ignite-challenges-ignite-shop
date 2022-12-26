import { X } from 'phosphor-react';
import {
  CartClose,
  CartContent,
  CartProduct,
  CartProductDetails,
  CartProductImage,
} from '../../Styles/Components/Cart';
import { CartButton } from '../CartButton';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';

export default function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight='bold' />
          </CartClose>
          <h2>Shopping bag</h2>
          <section>
            <CartProduct>
              <CartProductImage>
                <Image
                  src='https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1673222400&Signature=ndHdUNbMaqbG4CdUF4ndiDZcnp1copgB6ETmP-zbPbxjET6UbRJ4C5WLunNH5U~2lJTR9R4cmNoalAVAMZjZdT9eegjDSV7pVfuAkirlIZipBHcMZ4Mrn0jmufHd~LmT3MvedL4J7FrFZn-w~809dUhylrkP-2tMPnB41agaO9tQF2QTWhX-fiaY-r0XN5HgRQ3dGnsZcdvW2LJ5gYHaiG-vTVh5Uwtix91Parj4hXn45UrvQPePyHURpojiGqPQ~cT94LHdDwyKqsN2YX4hDBZEkosHzqcXfIrmA0D1p3d0YoAP~tfbFWYN-gmaGpUA8l1QMD91CRaqLfhCPOiURw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                  width={100}
                  height={93}
                  alt=''
                />
              </CartProductImage>
              <CartProductDetails>
                <p>Product 1</p>
                <strong>15.00€</strong>
                <button>Remove</button>
              </CartProductDetails>
            </CartProduct>
          </section>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
