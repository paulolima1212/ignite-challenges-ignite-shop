import { styled, theme } from '../..';

export const CartButtonContainer = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',
  background: '$gray800',
  height: '4.8rem',
  width: '4.8rem',
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  svg: {
    color: '$gray500',
  },
});
