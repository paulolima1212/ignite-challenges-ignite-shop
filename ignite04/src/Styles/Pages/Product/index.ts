import { styled, theme } from '../..';

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  width: '100%',
  margin: '0 auto',
});

export const ImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: '100%',
  maxWidth: 576,
  height: 656,

  borderRadius: 8,
  padding: '0.25rem',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});

export const ProductDetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: theme.fontSizes['title-l'],
    color: theme.colors.gray300,
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: theme.fontSizes['title-l'],
    color: theme.colors.green300,
  },

  p: {
    marginTop: '2.5rem',
    lineHeight: 1.6,
    fontSize: theme.fontSizes['regular-text-m'],
    color: theme.colors.gray300,
  },

  button: {
    marginTop: 'auto',
    background: theme.colors.green500,
    color: theme.colors.white,
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: theme.fontSizes['regular-text-m'],

    '&:disabled': {
      opacity: '0.6',
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: theme.colors.green300,
      transition: '0.2s',
    },
  },
});
