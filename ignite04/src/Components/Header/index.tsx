import Image from 'next/image';
import { HeaderContainer } from '../../Styles/Components/Header/header';
import logo from '../../assets/logo.svg';
import Cart from '../Cart';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();

  console.log(pathname);
  return (
    <HeaderContainer>
      <Image src={logo} alt='' />
      {pathname !== '/success' && <Cart />}
    </HeaderContainer>
  );
}
