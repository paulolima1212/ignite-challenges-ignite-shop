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

  variants: {
    color: {
      gray: {
        background: '$gray800',
      },
      green: {
        background: '$green500',
        svg: {
          color: '$gray100',
        },
      },
    },

    size: {
      medium: {
        width: '4.8rem',
        height: '4.8rem',

        svg: {
          fontSize: '2.4rem',
        },
      },
      large: {
        width: '5.6rem',
        height: '5.6rem',

        svg: {
          fontSize: '3.2rem',
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
    size: 'medium',
  },
});
