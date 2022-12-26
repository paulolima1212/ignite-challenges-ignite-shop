import type { AppProps } from 'next/app';
import { globalStyles } from '../Styles/global';
import Header from '../Components/Header';
import { Container } from '../Styles/Pages/App/app';
import { CartContextProvider } from '../Contexts/cartContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  );
}
