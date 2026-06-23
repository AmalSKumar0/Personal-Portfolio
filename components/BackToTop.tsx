import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 12 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-lavender-200/60 bg-white/70 text-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-lavender-300 hover:bg-white hover:text-neon-purple dark:border-white/10 dark:bg-tech-black/60 dark:text-gray-200 dark:hover:border-lavender-500/50 dark:hover:bg-tech-black/90 dark:hover:text-neon-cyan dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] active:scale-95 cursor-pointer"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} className="stroke-[2.5]" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
