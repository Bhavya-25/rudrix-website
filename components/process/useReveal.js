'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

// Returns [ref, show, reduce, live]: show flips true once when the element scrolls into view
// (and is always true under reduced motion).
export default function useReveal(margin = '-12% 0px') {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin });
  const live = useInView(ref, { margin: '0px' }); // true only while on screen (to pause loops)
  return [ref, reduce || inView, reduce, live];
}
