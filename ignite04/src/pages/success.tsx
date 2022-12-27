import Image from 'next/image';
import { ImageContainer, SuccessContainer } from '../Styles/Pages/Success';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { getSession } from '../Services/http/gets/getSessionCheckout';

export default function Success({ purchase }: { purchase: PurchaseProps }) {
  console.log(purchase);
  return (
    <SuccessContainer>
      <h1>Successfully completed purchase</h1>
      <div className='image-container'>
        {purchase.imageProduct.map((productImage) => {
          return (
            <ImageContainer>
              <Image src={productImage} alt='' width={120} height={110} />
            </ImageContainer>
          );
        })}
      </div>
      <p>
        Wow, <strong>{purchase?.name}</strong>, your purchase of{' '}
        {purchase!.quantity > 0
          ? `${purchase.quantity} shirts`
          : `${purchase.quantity} shirt`}{' '}
        is already on it's way home
      </p>

      <Link href={'/'}>Back to Shop</Link>
    </SuccessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const purchase = await getSession(sessionId);

  return {
    props: {
      purchase,
    },
  };
};
