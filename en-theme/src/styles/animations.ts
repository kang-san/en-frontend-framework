import { keyframes } from '../themes/index';

export const FadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const FadeOut = keyframes({
  from: { opacity: 1},
  to: { opacity: 0 },
})

export const SlideFromTop = keyframes({
  from: { transform: 'translateY(4px) scale(0.97)' },
  to: { transform: 'translateY(0) scale(1)' },
});

export const SlideToTop = keyframes({
  from: { transform: 'translateY(0) scale(1)' },
  to: { transform: 'translateY(4px) scale(0.97)' },
});

export const SlideFromBottom = keyframes({
  from: { transform: 'translateY(-4px) scale(0.97)' },
  to: { transform: 'translateY(0) scale(1)' },
});

export const SlideToBottom = keyframes({
  from: { transform: 'translateY(0) scale(1)' },
  to: { transform: 'translateY(-4px) scale(0.97)' },
});

export const SlideFromLeft = keyframes({
  from: { transform: 'translateX(4px) scale(0.97)' },
  to: { transform: 'translateX(0) scale(1)' },
});

export const SlideToLeft = keyframes({
  from: { transform: 'translateX(0) scale(1)' },
  to: { transform: 'translateX(4px) scale(0.97)' },
});

export const SlideFromRight = keyframes({
  from: { transform: 'translateX(-4px) scale(0.97)' },
  to: { transform: 'translateX(0) scale(1)' },
});

export const SlideToRight = keyframes({
  from: { transform: 'translateX(0) scale(1)' },
  to: { transform: 'translateX(-4px) scale(0.97)' },
});