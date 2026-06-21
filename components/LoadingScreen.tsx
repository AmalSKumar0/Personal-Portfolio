import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LavenderPetals } from './LavenderPetals';

export const LoadingScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING SYSTEMS');

  useEffect(() => {
    const duration = 100; // 2 seconds total loading
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete?.(), 500); // Small delay before unmounting
          return 100;
        }

        // Update status text based on progress
        if (next > 70) setStatus('STARTING SERVICES');
        else if (next > 40) setStatus('LOADING ASSETS');

        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream dark:bg-tech-black overflow-hidden font-sans transition-colors duration-300">
      
      {/* Falling Cherry Blossom/Lavender Petals */}
      <LavenderPetals />

      {/* Background Grid with subtle opacity */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 z-0"></div>

      {/* Soft Ambient Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-neon-purple/5 dark:bg-neon-purple/3 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-neon-cyan/5 dark:bg-neon-cyan/3 rounded-full blur-[120px] pointer-events-none z-0"></div>


    </div>
  );
};
