import { Handbag } from 'phosphor-react';
import { CartButtonContainer } from '../../Styles/Components/CartButton';
import { ComponentProps } from 'react';

type CartButtonProps = ComponentProps<typeof CartButtonContainer>;

export function CartButton({ ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      <Handbag weight='bold' size={24} />
    </CartButtonContainer>
  );
}
