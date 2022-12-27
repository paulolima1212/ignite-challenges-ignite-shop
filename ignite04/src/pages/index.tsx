import Image from 'next/image';
import { GetStaticProps } from 'next';

import { getProducts } from '../Services/http/gets/getProducts';
import { ProductProps, ProductsProps } from '../interfaces/product';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { HomeContainer, Product } from '../Styles/Pages/Home';
import Link from 'next/link';
import Head from 'next/head';
import favicon from '../assets/favicon.ico';
import { CartButton } from '../Components/CartButton';
import { useCartContext } from '../Hooks/useCartContext';
import { currencyFormat } from '../Utils/Formatter';
import { MouseEvent } from 'react';

export default function Home({ products }: ProductsProps) {
  const [keenRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const { handlerCreateProductList } = useCartContext();

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: ProductProps
  ) {
    e.preventDefault();
    handlerCreateProductList(product);
  }

  return (
    <>
      <Head>
        <link rel='icon' href={favicon.src} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='robots' content='noindex' />
        <title>Ignite - Shop</title>
      </Head>
      <HomeContainer ref={keenRef} className='keen-slider'>
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className='keen-slider__slide'>
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt={''}
                />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{currencyFormat.format(product.price)}</span>
                  </div>
                  <CartButton
                    onClick={(e) => handleAddToCart(e, product)}
                    color={'green'}
                    size='large'
                  />
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
    revalidate: 300,
  };
};
