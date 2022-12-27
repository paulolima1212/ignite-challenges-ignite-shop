import { keyframes, styled } from '../..';

const skeletonAnimation = keyframes({
  '0%': {
    backgroundPosition: '-200px 0',
  },
  '100%': {
    backgroundPosition: 'calc(200px + 100%) 0',
  },
});

export const ProductSkeletonContainer = styled('div', {
  width: 696,
  height: 656,
  display: 'grid',
  gridTemplateRows: '1fr 32px',
  gap: 24,

  div: {
    display: 'grid',
    gridTemplateColumns: '80% calc(20% - 1rem)',
    gap: '1rem',
  },
});

export const SkeletonItem = styled('div', {
  animation: `${skeletonAnimation} 1300ms ease-in-out infinite`,
  background: '$gray800',
  backgroundImage: 'linear-gradient(90deg, $gray800, $gray700, $gray800)',
  backgroundSize: '200px 100%',
  backgroundRepeat: 'no-repeat',
  borderRadius: 8,
  width: '100%',
  height: '100%',
});
