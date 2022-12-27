import { styled, theme } from '../..';
import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '48rem',
  height: '100vh',
  backgroundColor: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontWeight: '700',
    fontSize: theme.fontSizes['title-m'],
    color: '$gray100',
    marginBottom: '2rem',
  },

  section: {
    flex: 1,
    marginTop: '4rem',
    marginBottom: '4rem',
    gap: '3rem',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
  },
});

export const CartClose = styled(Dialog.Close, {
  position: 'absolute',
  top: '2.4rem',
  right: '2.4rem',
  border: 'none',
  background: 'none',
  color: '$gray500',
});

export const CartProduct = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',
  height: '9.4rem',
});

export const CartProductImage = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: '9.3rem',
  height: '10.194rem',
  flexDirection: 'column',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});

export const CartProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'space-between',
  height: '10rem',

  p: {
    fontSize: theme.fontSizes['regular-text-m'],
    lineHeight: '1.6',
  },

  strong: {
    fontSize: theme.fontSizes['regular-text-m'],
    lineHeight: 1.6,
  },

  button: {
    background: 'none',
    width: 'max-content',
    border: 'none',
    color: '$green500',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: theme.fontSizes['regular-text-s'],
    marginTop: 'auto',
  },
});

export const CartFinalization = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
  gap: '1rem',

  button: {
    padding: '2rem 12.45rem',
    borderRadius: 8,
    border: 'none',
    background: '$green300',
    color: '$gray100',
    fontSize: theme.fontSizes['regular-text-m'],
    fontWeight: 700,

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green500',
    },
  },

  div: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  '.quantity': {
    fontSize: theme.fontSizes['regular-text-s'],
  },

  '.total': {
    fontSize: theme.fontSizes['regular-text-m'],
  },
  '.total-value': {
    fontSize: theme.fontSizes['regular-text-xl'],
  },
});
