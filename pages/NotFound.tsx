import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const MotionLink = motion(Link);

export const NotFound: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 60 }
        }
    };

    return (
        <div className="relative min-h-[85vh] bg-cream dark:bg-tech-black flex flex-col items-center justify-center px-4 overflow-hidden transition-colors duration-500">
            <SEO title="404 - Page Not Found | Amal S Kumar" description="The page you are looking for does not exist." />

            {/* Background Mesh/Grid Effect */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-[0.03] z-0 pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse-glow" />
            <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-neon-cyan/5 dark:bg-neon-cyan/2 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse-glow" />

            <motion.div
                className="relative z-10 max-w-xl w-full mx-auto px-6 py-12 md:py-16 text-center bg-white/40 dark:bg-white/5 border border-lavender-300/50 dark:border-white/10 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* 404 Header with Spinning Star SVG inside */}
                <motion.div 
                    className="flex items-center justify-center gap-2 text-8xl md:text-9xl font-serif text-gray-900 dark:text-white font-light select-none mb-6"
                    variants={itemVariants}
                >
                    <span>4</span>
                    <svg className="w-16 h-16 md:w-20 md:h-20 text-neon-purple dark:text-neon-cyan animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                    </svg>
                    <span>4</span>
                </motion.div>

                <motion.h2 
                    className="text-2xl md:text-3xl font-serif italic text-neon-purple dark:text-neon-cyan font-normal mb-4"
                    variants={itemVariants}
                >
                    Lost in the backend?
                </motion.h2>

                <motion.p 
                    className="text-gray-600 dark:text-gray-400 font-sans font-light max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed"
                    variants={itemVariants}
                >
                    The route you are looking for does not exist, has been moved, or is currently executing in an unreachable thread.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <MotionLink
                        to="/"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2.5 px-8 py-4 bg-lavender-100/40 dark:bg-white/5 border border-lavender-300/50 dark:border-white/10 text-lavender-900 dark:text-white rounded-full font-bold hover:bg-lavender-200/50 dark:hover:bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                        <Home size={16} className="text-neon-purple dark:text-neon-cyan group-hover:scale-110 transition-transform" />
                        <span>Return Home</span>
                    </MotionLink>
                </motion.div>
            </motion.div>
        </div>
    );
};
