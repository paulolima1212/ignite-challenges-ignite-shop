import { createStitches } from '@stitches/react';

export const {
  theme,
  config,
  css,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },
    fontSizes: {
      'title-m': '2rem',
      'title-l': '3.2rem',
      'regular-text-s': '1.6rem',
      'regular-text-m': '1.8rem',
      'regular-text-l': '2rem',
      'regular-text-xl': '24rem',
    },
  },
});
