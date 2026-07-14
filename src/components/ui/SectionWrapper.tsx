'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  /** Set true to skip the trading pattern overlay */
  noPattern?: boolean;
  /** Use dark (white) trading pattern instead of light (black) — for dark bg sections */
  darkPattern?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className,
  containerClassName,
  direction = 'up',
  delay = 0,
  noPattern = false,
  darkPattern = false,
}: SectionWrapperProps) {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
      case 'down':
        return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
      case 'left':
        return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
      case 'right':
        return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
      case 'none':
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default:
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <section id={id} className={cn('py-20 relative overflow-hidden', className)}>
      {/* Trading/finance pattern overlay — transparent on all sections */}
      {!noPattern && (
        <div
          className={cn(
            'absolute inset-0 pointer-events-none select-none',
            darkPattern ? 'pattern-trading opacity-[0.05]' : 'pattern-trading-light opacity-[0.03]'
          )}
        />
      )}
      <motion.div
        className={cn('container mx-auto px-4 sm:px-6 lg:px-8 relative z-10', containerClassName)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay, ease: 'easeOut' }}
        variants={getVariants()}
      >
        {children}
      </motion.div>
    </section>
  );
}

