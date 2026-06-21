import React, { useState, useEffect } from 'react';
import { LavenderPetals } from './LavenderPetals';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    const [resumeUrl, setResumeUrl] = useState('/resume');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setResumeUrl('/resume/resume.pdf');
            } else {
                setResumeUrl('/resume');
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 50 }
        }
    };

    return (
        <>
            <section className="relative overflow-hidden bg-cream dark:bg-tech-black min-h-[calc(100vh-5rem)] flex-grow flex flex-col items-center justify-center transition-colors duration-300">
                {/* Glassmorphic Container wrapping the entire hero content - covers remaining viewport */}
                <motion.div
                    className="w-full min-h-[calc(100vh-5rem)] flex-grow relative overflow-hidden z-20 bg-white/20 dark:bg-tech-black/30 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center py-12 md:py-16 px-4 sm:px-8 md:px-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Canvas Lavender Petals (flowing like a river NW to SE, z-10 inside glassmorphic card) */}
                    <LavenderPetals />

                    <div className="max-w-6xl w-full flex flex-col items-center relative z-20">
                        {/* Availability Badge */}
                    <motion.div
                        className="inline-flex items-center gap-3 bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-full pl-2 pr-4 py-1.5 mb-8 shadow-md hover:shadow-lg transition-all cursor-default hover:bg-white/40 dark:hover:bg-white/10"
                        variants={itemVariants}
                    >
                        <div className="bg-neon-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Status</div>
                        <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2">
                            Open to work <span className="text-gray-300 dark:text-gray-600">|</span> <span className="text-neon-blue dark:text-neon-cyan font-semibold">Available for backend roles</span>
                        </span>
                    </motion.div>

                    {/* Headline Grid Layout */}
                    <motion.div
                        className="flex flex-col items-center mb-12 w-full text-center"
                        variants={itemVariants}
                    >
                        {/* Line 1: Amal [Capsule] S Kumar */}
                        <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-gray-900 dark:text-white font-light leading-none">
                            <span>Amal S Kumar</span>
                            <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-neon-cyan animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                            </svg>
                        </div>

                        {/* Line 2: [Sparkle Star] Backend Engineer */}
                        <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-gray-900 dark:text-white italic font-normal mt-3 leading-tight">
                            <div className="inline-flex items-center justify-center w-16 sm:w-20 md:w-32 h-10 sm:h-12 md:h-16 rounded-full border border-neon-purple/20 bg-neon-purple/10 overflow-hidden relative shadow-inner">
                                {/* Glowing nodes indicator representing backend network inside capsule */}
                                <div className="absolute inset-0 flex items-center justify-center gap-1 sm:gap-1.5">
                                    <span className="w-1.5 md:w-2 h-6 md:h-8 bg-neon-purple rounded-full animate-pulse"></span>
                                    <span className="w-1.5 md:w-2 h-8 md:h-12 bg-neon-cyan rounded-full animate-pulse delay-75"></span>
                                    <span className="w-1.5 md:w-2 h-5 md:h-7 bg-neon-purple rounded-full animate-pulse delay-150"></span>
                                </div>
                            </div>
                            <span>Full-Stack Developer</span>
                        </div>

                        {/* Line 3: & Systems Builder [Hire Me Oval Link] */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-neon-purple/15 dark:bg-white/10 text-neon-purple dark:text-white backdrop-blur-md text-sm sm:text-base font-sans font-bold rounded-full transition-all shadow-lg border border-neon-purple/30 dark:border-white/20 hover:bg-neon-purple/25 dark:hover:bg-white/20 hover:shadow-xl cursor-pointer"
                            >
                                <span>Get in touch</span>
                                <span className="text-neon-purple">→</span>
                            </motion.a>
                            <motion.a
                                href={resumeUrl}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 dark:bg-white/5 text-gray-800 dark:text-white backdrop-blur-md text-sm sm:text-base font-sans font-bold rounded-full transition-all shadow-md border border-gray-300/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/10 cursor-pointer"
                            >
                                <span>View Resume</span>
                                <span className="text-neon-cyan">↓</span>
                            </motion.a>
                        </div>
                    </motion.div>
 
                    {/* Bottom Column Layout (Approach, Arched Graphic, Specialties) */}
                 
                    </div>
                </motion.div>
            </section>
        </>
    );
};
