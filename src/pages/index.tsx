import Image from 'next/image';
import { GetStaticProps } from 'next';

import { getProducts } from '../Services/http/gets/getProducts';
import { ProductsProps } from '../interfaces/product';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { HomeContainer, Product } from '../Styles/Pages/Home';
import Link from 'next/link';
import Head from 'next/head';
import favicon from '../assets/favicon.ico';

export default function Home({ products }: ProductsProps) {
  const [keenRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

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
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
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
