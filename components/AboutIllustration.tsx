import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

export const AboutIllustration: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(true);

    // Track responsive layout state
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Track scroll progress of the scroll track container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Create a smooth spring to drive transitions
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 25, mass: 1.0 });

    // ========================================================
    // SCROLL-LINKED CARD TRANSFORMS (0 to 0.45: ZOOM, 0.45 to 0.80: FADE OUT)
    // ========================================================

    // Left Card: zooms back/tilts (0 to 0.45), then fades out completely (0.45 to 0.80)
    const leftZ = useTransform(smoothProgress, [0, 0.45], [0, -250], { clamp: true });
    const leftScale = useTransform(smoothProgress, [0, 0.45], [1, 0.75], { clamp: true });
    const leftX = useTransform(smoothProgress, [0, 0.45], [0, -120], { clamp: true });
    const leftRotateY = useTransform(smoothProgress, [0, 0.45], [0, 18], { clamp: true });
    const leftOpacity = useTransform(smoothProgress, [0, 0.35, 0.45, 0.80], [1, 0.15, 0.15, 0], { clamp: true });

    // Right Card: zooms back/tilts (0 to 0.45), then fades out completely (0.45 to 0.80)
    const rightZ = useTransform(smoothProgress, [0, 0.45], [0, -250], { clamp: true });
    const rightScale = useTransform(smoothProgress, [0, 0.45], [1, 0.75], { clamp: true });
    const rightX = useTransform(smoothProgress, [0, 0.45], [0, 120], { clamp: true });
    const rightRotateY = useTransform(smoothProgress, [0, 0.45], [0, -18], { clamp: true });
    const rightOpacity = useTransform(smoothProgress, [0, 0.35, 0.45, 0.80], [1, 0.15, 0.15, 0], { clamp: true });

    // Middle Card: zooms forward (0.05 to 0.45), then fades out completely (0.45 to 0.80)
    const middleScale = useTransform(smoothProgress, [0.05, 0.45], [0.45, 1.0], { clamp: true });
    const middleZ = useTransform(smoothProgress, [0.05, 0.45], [0, 180], { clamp: true });
    const middleRotateX = useTransform(smoothProgress, [0.05, 0.45], [-4, 4], { clamp: true });
    const middleRotateY = useTransform(smoothProgress, [0.05, 0.45], [-4, 4], { clamp: true });
    const middleOpacity = useTransform(smoothProgress, [0, 0.45, 0.80], [1, 1, 0], { clamp: true });

    // Scroll helper instructions opacity
    const helperOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0], { clamp: true });

    // Initial entrance animation variants for cards
    const cardEntranceVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (customDelay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: customDelay
            }
        })
    };

    // Component Content for Card 2 (Middle Card)
    const renderMiddleCardContent = () => (
        <div className={`w-full ${isDesktop ? 'h-[1022px] relative overflow-hidden p-16' : 'min-h-[500px] p-8'} bg-white/[0.03] dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(139,92,246,0.02)] transition-all duration-300 flex flex-col justify-between`}>
            {/* Decorative Ticket Cuts */}
            <div className="absolute left-0 top-[62%] -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/10 z-30 pointer-events-none" />
            <div className="absolute right-0 top-[62%] translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/10 z-30 pointer-events-none" />

            <div>
                <div className="flex justify-between items-center mb-6 lg:mb-10">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 lg:w-4 lg:h-4 rounded-full bg-[#E9D5FF]" />
                        <span className="text-[10px] lg:text-[22px] font-mono font-bold tracking-widest text-[#E9D5FF] uppercase">GitHub Statistics</span>
                    </div>
                    <span className="text-[10px] lg:text-[22px] font-bold text-black bg-white px-2.5 py-0.5 lg:px-6 lg:py-2 rounded-md tracking-wider">
                        Grade: C+
                    </span>
                </div>

                <h2 className="text-xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 lg:mb-12">
                    AmalSKumar0 Profile Stats
                </h2>

                <ul className="space-y-3.5 lg:space-y-8 text-left">
                    <li className="flex justify-between items-center border-b border-white/10 pb-2 lg:pb-6">
                        <span className="text-xs lg:text-3xl text-white/60 font-light">Total Contributions</span>
                        <span className="text-xs lg:text-3xl font-bold text-[#E9D5FF]">549</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-2 lg:pb-6">
                        <span className="text-xs lg:text-3xl text-white/60 font-light">Commits (Last Year)</span>
                        <span className="text-xs lg:text-3xl font-bold text-[#E9D5FF]">309</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-2 lg:pb-6">
                        <span className="text-xs lg:text-3xl text-white/60 font-light">Public Repositories</span>
                        <span className="text-xs lg:text-3xl font-bold text-[#E9D5FF]">17</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-2 lg:pb-6">
                        <span className="text-xs lg:text-3xl text-white/60 font-light">Total PRs / Stars</span>
                        <span className="text-xs lg:text-3xl font-bold text-[#E9D5FF]">10 PRs / 8 Stars</span>
                    </li>
                </ul>
            </div>

            <div className="border-t border-dashed border-white/10 pt-4 bg-transparent mt-6 lg:mt-12">
                <div className="flex justify-between items-center mb-2 lg:mb-6">
                    <div>
                        <span className="text-[8px] lg:text-[18px] font-mono text-white/40 block">JOINED</span>
                        <span className="text-xs lg:text-2xl font-bold text-[#E9D5FF]">2 years ago</span>
                    </div>
                    <div className="text-right">
                        <span className="text-[8px] lg:text-[18px] font-mono text-white/40 block">STREAK</span>
                        <span className="text-xs lg:text-2xl font-bold text-[#E9D5FF]">10 Days</span>
                    </div>
                </div>

                <div className="flex items-end justify-between h-8 lg:h-20 bg-black/60 rounded-md lg:rounded-2xl px-3 py-1 lg:px-6 lg:py-3 border border-white/10 overflow-hidden">
                    {[1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1].map((width, idx) => (
                        <div
                            key={idx}
                            className="rounded-sm lg:rounded-md"
                            style={{
                                width: `${width * (isDesktop ? 3.5 : 1.5)}px`,
                                height: idx % 3 === 0 ? '90%' : idx % 2 === 0 ? '75%' : '60%',
                                backgroundColor: idx % 3 === 0 ? '#E9D5FF' : '#FFFFFF'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        // Pinned view duration of cards scroll track is set to 300vh.
        <div
            ref={containerRef}
            className={`relative w-full ${isDesktop ? 'h-[300vh]' : 'h-auto py-12'} select-none`}
        >
            {/* Sticky Viewport Container - active only on desktop */}
            <div className={`${isDesktop ? 'sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden' : 'relative flex flex-col items-center gap-12'}`}>
                
                {/* Scroll Helper Instructions */}
                {isDesktop && (
                    <motion.div
                        style={{ opacity: helperOpacity }}
                        className="absolute top-24 z-30 text-center flex flex-col items-center gap-1 pointer-events-none"
                    >
                        <h3 className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase">
                            ABOUT ME
                        </h3>
                        <div className="w-1 h-8 bg-gradient-to-b from-[#E9D5FF]/40 to-transparent rounded-full animate-bounce mt-2" />
                    </motion.div>
                )}

                {/* Perspective context for Cards */}
                <div
                    className="max-w-6xl w-full px-4 md:px-8 relative z-10"
                    style={{ perspective: 1200 }}
                >
                    {/* Grid Layout containing Card 1 and Card 3 in-flow */}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center relative w-full animate-perspective"
                        style={{ transformStyle: 'preserve-3d' }}
                    >

                        {/* ========================================================
                            CARD 1: SOFTWARE CRAFT & FOCUS (VELORA & ROOK)
                           ======================================================== */}
                        <motion.div
                            style={{
                                transformStyle: 'preserve-3d',
                                scale: isDesktop ? leftScale : 1,
                                opacity: isDesktop ? leftOpacity : 1,
                                rotateY: isDesktop ? leftRotateY : 0,
                                z: isDesktop ? leftZ : 0,
                                translateX: isDesktop ? leftX : 0,
                            }}
                            className="flex flex-col justify-between items-center group relative min-h-[500px]"
                        >
                            <motion.div
                                variants={cardEntranceVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0}
                                className="w-full h-full flex flex-col justify-between"
                            >
                                {/* Floating top badge */}
                                <div className="mb-6 mx-auto inline-flex items-center gap-2 bg-black text-white border border-white/20 rounded-full px-4 py-2 shadow-lg backdrop-blur-md">
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                    </span>
                                    <span className="font-mono text-xs font-semibold tracking-wider text-[#E9D5FF]">⭐ 208 Commits in 2026</span>
                                </div>

                                {/* Main Card with Glassmorphism */}
                                <div className="w-full flex-grow flex flex-col justify-between bg-white/[0.03] dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-8 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(139,92,246,0.02)] transition-all duration-300">
                                    <div>
                                        <h2 className="text-3xl font-bold font-serif text-white leading-tight tracking-tight mt-2 mb-6">
                                            We craft <span className="text-[#E9D5FF] italic font-normal">systems</span> the elegant way
                                        </h2>

                                        <p className="text-sm text-white/70 leading-relaxed font-sans font-light mb-6">
                                            Operating as a systems developer to design, build, and deploy full-cycle applications with high structural standards.
                                        </p>

                                        <div className="space-y-4 text-left">
                                            <div className="p-4 rounded-2xl bg-black/20 border border-white/10">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-xs font-bold text-white">Velora</span>
                                                    <span className="text-[9px] font-mono text-[#E9D5FF] border border-[#E9D5FF]/30 px-1.5 py-0.5 rounded">Django</span>
                                                </div>
                                                <p className="text-[11px] text-white/60 leading-normal">
                                                    Digital Art Marketplace. Secure Inverse Payments, Dispute Resolution & Role-Based Workflows.
                                                </p>
                                            </div>

                                            <div className="p-4 rounded-2xl bg-black/20 border border-white/10">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-xs font-bold text-white">Rook</span>
                                                    <span className="text-[9px] font-mono text-[#E9D5FF] border border-[#E9D5FF]/30 px-1.5 py-0.5 rounded">Java</span>
                                                </div>
                                                <p className="text-[11px] text-white/60 leading-normal">
                                                    Mobile-first API testing & management platform with a unique tactile design aesthetic.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Link Button */}
                                    <div className="mt-8">
                                        <a
                                            href="https://github.com/AmalSKumar0"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full font-bold border border-white/15"
                                        >
                                            <span className="text-xs font-mono tracking-widest uppercase text-[#E9D5FF]">github/AmalSKumar0</span>
                                            <span className="p-1.5 bg-black text-white rounded-full flex items-center justify-center">
                                                <ArrowRight size={14} className="text-[#E9D5FF]" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ========================================================
                            COLUMN 2 PLACEHOLDER (desktop only)
                            Keeps Right Card in column 3 while Middle Card is absolute-positioned
                           ======================================================== */}
                        {isDesktop && <div className="w-full min-h-[500px] pointer-events-none" />}

                        {/* ========================================================
                            CARD 2 (Mobile only): In-flow Middle Card
                           ======================================================== */}
                        {!isDesktop && (
                            <motion.div className="flex flex-col justify-between items-center group relative min-h-[500px] w-full">
                                <motion.div
                                    variants={cardEntranceVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.15}
                                    className="w-full h-full flex flex-col justify-between relative"
                                >
                                    <div className="w-3 h-3 mx-auto rounded-full border border-[#E9D5FF] bg-black z-10 -mb-1.5" />
                                    {renderMiddleCardContent()}
                                </motion.div>
                            </motion.div>
                        )}

                        {/* ========================================================
                            CARD 3: HANGING EVENT ID PASS (AMAL S KUMAR)
                           ======================================================== */}
                        <motion.div
                            style={{
                                transformStyle: 'preserve-3d',
                                scale: isDesktop ? rightScale : 1,
                                opacity: isDesktop ? rightOpacity : 1,
                                rotateY: isDesktop ? rightRotateY : 0,
                                z: isDesktop ? rightZ : 0,
                                translateX: isDesktop ? rightX : 0,
                            }}
                            className="flex flex-col justify-between items-center group relative min-h-[500px] md:col-span-2 lg:col-span-1"
                        >
                            <motion.div
                                variants={cardEntranceVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.3}
                                className="w-full h-full flex flex-col justify-between"
                            >
                                {/* Hanging Ribbon/Strap */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 flex flex-col items-center pointer-events-none z-20">
                                    <div className="w-4 h-16 bg-white/20 dark:bg-white/10 rounded-t shadow-md border-x border-white/5" />
                                    <div className="w-6 h-3 bg-white/40 dark:bg-white/20 rounded-b border border-white/10 shadow-sm" />
                                </div>

                                {/* Main Badge Card with Glassmorphism */}
                                <div className="w-full flex-grow flex flex-col justify-between bg-white/[0.03] dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-8 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(139,92,246,0.02)] mt-8 transition-all duration-300">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#E9D5FF]">DEV ID CARD</span>

                                        <div className="flex gap-1.5" title="Theme Color Palette">
                                            <span className="w-2.5 h-2.5 rounded-full bg-white border border-white/20" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#EDE9FE]" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#E9D5FF]" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-black border border-[#E9D5FF]" />
                                        </div>
                                    </div>

                                    {/* Portrait Frame */}
                                    <div className="relative w-full aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
                                        <img
                                            src="/profile.png"
                                            alt="Amal S Kumar Profile"
                                            className="w-full h-full object-cover select-none"
                                            style={{ filter: "grayscale(30%) contrast(1.1)" }}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                if (target.src.indexOf('profile.png') !== -1) {
                                                    target.src = '/avatar-badge.jpg';
                                                } else {
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        const icon = document.createElement('div');
                                                        icon.className = "flex flex-col items-center justify-center text-[#E9D5FF] gap-2";
                                                        icon.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span class="text-xs font-mono font-bold tracking-widest uppercase">Developer</span>`;
                                                        parent.appendChild(icon);
                                                    }
                                                }
                                            }}
                                        />

                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rotate-[-3deg] shadow-lg">
                                            <div className="bg-black text-white border border-white/20 px-4 py-2.5 rounded-xl text-center backdrop-blur-md">
                                                <span className="font-sans text-xs font-extrabold uppercase tracking-wider block text-[#E9D5FF]">
                                                    Amal S Kumar
                                                </span>
                                                <span className="text-[9px] font-mono font-semibold tracking-wider text-white/60 uppercase block mt-0.5">
                                                    Backend Engineer
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Brand Logo & Signature at the bottom */}
                                    <div className="mt-8 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 bg-white/10 text-[#E9D5FF] rounded-lg border border-white/5">
                                                <Sparkles size={14} className="text-[#E9D5FF]" />
                                            </span>
                                            <span className="font-brand text-sm font-bold text-white tracking-wide">
                                                AmalSKumar0
                                            </span>
                                        </div>
                                        <Award size={18} className="text-[#E9D5FF]" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>

                    {/* ========================================================
                        CARD 2 (Desktop only): Absolute Overlay Centered in Sibling Container
                       ======================================================= */}
                    {isDesktop && (
                        <motion.div
                            style={{
                                scale: middleScale,
                                rotateX: middleRotateX,
                                rotateY: middleRotateY,
                                transformStyle: 'preserve-3d',
                                z: middleZ,
                                x: "-50%",
                                y: "-50%",
                                left: "50%",
                                top: "50%",
                                position: "absolute",
                                width: "800px",
                                opacity: middleOpacity,
                            }}
                            className="flex flex-col justify-between items-center group min-h-[500px] z-20 pointer-events-none"
                        >
                            <motion.div
                                variants={cardEntranceVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.15}
                                className="w-full h-full flex flex-col justify-between relative pointer-events-auto"
                            >
                                <div className="w-3 h-3 mx-auto rounded-full border border-[#E9D5FF] bg-black z-10 -mb-1.5" />
                                {renderMiddleCardContent()}
                            </motion.div>
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default AboutIllustration;
