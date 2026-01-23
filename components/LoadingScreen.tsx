import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING CACHE');

  useEffect(() => {
    const duration = 2000; // 2 seconds total loading
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden font-mono">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="relative flex flex-col items-center justify-center">

        {/* Main Reactor Container */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">

          {/* Outer Ring - Cyan Dashed */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Middle Ring - Blue Dashed Reverse */}
          <motion.div
            className="absolute inset-4 rounded-full border border-dashed border-blue-500/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Track */}
          <div className="absolute inset-0 rounded-full border border-white/5"></div>

          {/* Rotating Scanner Arc */}
          <motion.div
            className="absolute inset-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-full w-full rounded-full border-t-4 border-cyan-400 opacity-50 blur-[2px]"></div>
          </motion.div>

          {/* Core Pulse */}
          <motion.div
            className="absolute w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Center Text */}
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              {Math.round(progress)}
            </span>
            <span className="text-xs text-cyan-500 font-bold uppercase tracking-[0.2em] mt-1">
              % Loaded
            </span>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-12 w-64 md:w-80">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs text-cyan-400 font-bold tracking-widest animate-pulse">
              {status}
            </span>
            <span className="text-[10px] text-gray-500">
              v2.0.4
            </span>
          </div>

          {/* Progress Bar Line */}
          <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-600 to-blue-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
