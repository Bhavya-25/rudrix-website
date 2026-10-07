'use client';
import { LazyMotion } from 'framer-motion';

// Animation features (gestures, layout, in-view) are fetched after the first paint instead of shipping in the first JS payload.
const features = () => import('./motionFeatures').then((m) => m.default);

export default function MotionProvider({ children }) {
  return <LazyMotion features={features}>{children}</LazyMotion>;
}
