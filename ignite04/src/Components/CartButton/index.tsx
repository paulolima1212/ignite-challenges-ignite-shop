import { Handbag } from 'phosphor-react';
import { CartButtonContainer } from '../../Styles/Components/CartButton';
import { theme } from '../../Styles';

export function CartButton() {
  return (
    <CartButtonContainer>
      <Handbag weight='bold' size={24} />
    </CartButtonContainer>
  );
}
