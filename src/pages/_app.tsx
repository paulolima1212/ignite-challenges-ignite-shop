import type { AppProps } from 'next/app';
import { globalStyles } from '../Styles/global';
import Header from '../Components/Header';
import { Container } from '../Styles/Pages/App/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}
