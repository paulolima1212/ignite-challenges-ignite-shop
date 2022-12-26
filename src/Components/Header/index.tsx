import Image from 'next/image';
import { HeaderContainer } from '../../Styles/Components/Header/header';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt='' />
    </HeaderContainer>
  );
}
