import Image from 'next/image';
import { ImageContainer, SuccessContainer } from '../Styles/Pages/Success';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { getSession } from '../Services/http/gets/getSessionCheckout';

export default function Success({ purchase }: { purchase: PurchaseProps }) {
  return (
    <SuccessContainer>
      <h1>Successfully completed purchase</h1>
      <ImageContainer>
        <Image src={purchase?.imageProduct} alt='' width={120} height={110} />
      </ImageContainer>
      <p>
        Wow, <strong>{purchase?.name}</strong>, your{' '}
        <strong>{purchase?.product}</strong> is coming soon
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
