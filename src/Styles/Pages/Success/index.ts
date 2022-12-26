import { styled, theme } from '../..';

export const SuccessContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: theme.fontSizes['title-l'],
  },

  p: {
    fontSize: theme.fontSizes['regular-text-m'],
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    marginTop: '8.8rem',
    fontSize: '$regular-text-s',
    color: '$green300',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
      color: '$green500',
    },
  },
});

export const ImageContainer = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 130,
  height: 145,
  flexDirection: 'column',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4rem',

  img: {
    objectFit: 'cover',
  },
});
