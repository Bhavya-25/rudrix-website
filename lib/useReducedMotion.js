'use client';
import { useEffect, useState } from 'react';
import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

// Hydration-safe wrapper around framer-motion's useReducedMotion.
// The server cannot know the visitor's motion preference, so the first client render must match the server (false).
// Without this, visitors with "Reduce Motion" turned on (common on iPhones) got a hydration mismatch on every page.
// The real preference is applied right after mount, so reduced-motion behaviour is unchanged.
export function useReducedMotion() {
  const reduce = useFramerReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? Boolean(reduce) : false;
}
