import React from 'react';
import { motion } from 'framer-motion';

interface ScrollFadeProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'none';
  duration?: number;
  amount?: number;
}

export const ScrollFade: React.FC<ScrollFadeProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.8,
  amount = 0.15
}) => {
  const yOffset = direction === 'up' ? 30 : direction === 'down' ? -30 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: amount }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1] // premium cubic-bezier easeOut
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
