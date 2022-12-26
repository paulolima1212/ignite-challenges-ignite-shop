import Image from 'next/image';
import {
  ImageContainer,
  ProductContainer,
  ProductDetailsContainer,
} from '../../Styles/Pages/Product';

import { GetStaticPaths, GetStaticProps } from 'next';
import { getProduct } from '../../Services/http/gets/getProduct';
import { ProductProps } from '../../interfaces/product';
import { useRouter } from 'next/router';
import { api } from '../../Libs/axios';
import { useState } from 'react';

export default function Product({ product }: { product: ProductProps }) {
  const { isFallback } = useRouter();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  if (isFallback) {
    return <p>Loading...</p>;
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await api.post('/', {
        priceId: product.priceId,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert(error);
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product?.imageUrl} alt={''} width={450} height={450} />
      </ImageContainer>
      <ProductDetailsContainer>
        <h1>{product?.name}</h1>
        <span>{product?.price}</span>
        <p>{product?.description}</p>
        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
          Buy
        </button>
      </ProductDetailsContainer>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_N35rMln2DBucUh' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await getProduct(productId);

  return {
    props: { product },
    revalidate: 60 * 60 * 1,
  };
};
