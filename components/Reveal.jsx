'use client';
import { motion, useReducedMotion } from 'framer-motion';

// Scroll-triggered fade/translate used across the footer.
export default function Reveal({ children, delay = 0, y = 30, className = '', as = 'div', ...rest }) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: reduce ? 0.2 : 0.85, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
