import {
    Server, Database, Activity, Zap, Boxes,
    Shield, Globe, CheckCircle, Brain, Lock
} from 'lucide-react';
import { Satellite } from './Satellite';
import { SpaceBattle } from './SpaceBattle';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';
import { TelemetrySection } from './TelemetrySection';

export const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate position relative to center of screen
            // "Very slow" follow means a small factor (e.g. 0.02)
            const x = (e.clientX - window.innerWidth / 2) * 0.05;
            const y = (e.clientY - window.innerHeight / 2) * 0.05;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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
            <div className="hidden md:block">
                <SpaceBattle />
            </div>
            <section className="pt-48 pb-24 px-6 relative overflow-hidden bg-gray-50 dark:bg-tech-black min-h-screen flex flex-col items-center transition-colors duration-300">

                {/* Abstract Perspective Grid Background */}
                <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.05] z-0 pointer-events-none opacity-50 transition-opacity duration-300"></div>

                {/* Geometric Decorations */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
                    <svg className="absolute top-0 right-[-20%] w-[800px] h-[800px] opacity-30 text-purple-500 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                        <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                    <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
                </div>

                {/* Orbiting Interactive Satellite */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 hidden lg:block">
                    <div className="w-full h-full animate-[spin_60s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-auto">
                            <div className="w-full h-full animate-[spin_60s_linear_infinite_reverse]">
                                <div
                                    className="transition-transform duration-100 ease-out flex items-center justify-center p-4 hover:scale-110 transition-all duration-500"
                                    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                                >
                                    <Satellite className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {/* Availability Badge */}
                    <motion.div
                        className="inline-flex items-center gap-3 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full pl-2 pr-4 py-1.5 mb-8 shadow-sm hover:shadow-md transition-all cursor-default"
                        variants={itemVariants}
                    >
                        <div className="bg-gray-900 dark:bg-white text-white dark:text-tech-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Status</div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2">
                            Open to work <span className="text-gray-300 dark:text-gray-600">|</span> <span className="text-blue-500 dark:text-neon-blue">Available for projects</span>
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        className="flex flex-col items-center mb-10 relative z-10 w-full"
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-6 mb-4 transition-all duration-300">
                            <span className="text-6xl md:text-8xl font-display font-bold text-gray-900 dark:text-white leading-none transition-colors duration-300">Hello, I'm</span>
                            <div className="hidden md:block w-48 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full shadow-lg overflow-hidden relative group rotate-3 hover:rotate-0 transition-all duration-300">
                                <img
                                    src="/avatar-badge.jpg"
                                    alt="Avatar"
                                    width="192"
                                    height="96"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-display font-bold text-gray-900 dark:text-white leading-[1.05] tracking-tight transition-all duration-300 text-center">
                            <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                Amal S Kumar
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subheadline */}
                    <motion.p
                        className="text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-12 text-balance leading-relaxed transition-colors duration-300"
                        variants={itemVariants}
                    >
                        Full-Stack Developer & AI Explorer. <br className="hidden md:block" />
                        Technology should solve real problems — I build systems that make that happen.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 mb-24"
                        variants={itemVariants}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-all text-white dark:text-tech-black px-8 py-4 rounded-full text-base font-bold shadow-2xl shadow-blue-500/20 flex items-center gap-2"
                        >
                            Get in Touch with me
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30 transition-all text-gray-900 dark:text-white px-8 py-4 rounded-full text-base font-bold flex items-center gap-2"
                        >
                            Download Resume
                        </motion.button>
                    </motion.div>

                    {/* Main Visual Composition */}

                </motion.div>
            </section>
        </>
    );
};
