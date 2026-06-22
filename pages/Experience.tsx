import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, CheckCircle2, Globe, Building2, ArrowUpRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { experience } from '@/data/experience';
import { ScrollFade } from '@/components/ScrollFade';

const getCompanyLogo = (companyName: string) => {
    const name = companyName.toLowerCase();
    if (name.includes('hoc')) return '/companies/hoc.webp';
    if (name.includes('zinda')) return '/companies/zinda.png';
    if (name.includes('georgia') || name.includes('tours')) return '/companies/toursofgeorgia.png';
    if (name.includes('navigans')) return '/companies/navigans.png';
    if (name.includes('hope')) return '/companies/hopendheal.png';
    return null;
};

export const Experience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    // Scroll progress for the central path tracking line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useSpring(scrollYProgress, { stiffness: 65, damping: 22 });

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

    return (
        <div 
            ref={containerRef}
            className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden min-h-screen flex flex-col items-center bg-cream dark:bg-tech-black transition-colors duration-300"
        >
            <SEO
                title="Professional Experience | Amal S Kumar"
                description="My professional journey and work history with companies and clients."
            />

            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.05] opacity-[0.4] z-0 pointer-events-none transition-opacity duration-300"></div>

            {/* Ambient Background Glows */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-neon-cyan/5 dark:bg-neon-cyan/2 rounded-full blur-[140px] pointer-events-none z-0" />

            <motion.div
                className="max-w-5xl w-full mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <ScrollFade direction="none" delay={0.1}>
                    <div className="text-center mb-36">
                        <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-neon-purple dark:text-lavender-300 uppercase font-brand">
                            CAREER PATH
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 dark:text-white font-bold italic mt-3 tracking-tight">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan dark:from-neon-purple dark:to-lavender-300 not-italic font-sans font-extrabold">Experience</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4 font-light">
                            A timeline of my professional work, collaborations, and backend development contributions.
                        </p>
                    </div>
                </ScrollFade>

                {/* Timeline Path & Grid */}
                <div className="relative w-full">
                    
                    {/* Central spine track line (Desktop only) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200/50 dark:bg-white/5 hidden lg:block">
                        <motion.div
                            style={{ scaleY: pathLength, originY: 0 }}
                            className="w-full h-full bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan rounded-full"
                        />
                    </div>

                    <div className="flex flex-col gap-24 lg:gap-32 relative w-full">
                        {experience.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            const logoUrl = getCompanyLogo(exp.company);

                            return (
                                <div
                                    key={exp.id}
                                    className={`flex flex-col lg:flex-row items-center w-full relative ${
                                        isEven ? 'lg:justify-start' : 'lg:justify-end'
                                    }`}
                                >
                                    
                                    {/* Central Spine Node Indicator (Desktop only) */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cream dark:bg-tech-black border border-gray-200 dark:border-white/10 z-30 hidden lg:flex items-center justify-center">
                                        <motion.div
                                            animate={{
                                                scale: hoveredCard === exp.id ? [1, 1.2, 1] : 1,
                                                boxShadow: hoveredCard === exp.id ? `0 0 16px #8B5CF6` : 'none'
                                            }}
                                            transition={{ duration: 1.5, repeat: hoveredCard === exp.id ? Infinity : 0 }}
                                            className="w-3.5 h-3.5 rounded-full bg-neon-purple"
                                        />
                                    </div>

                                    {/* Horizontal Connector Arm (Desktop only) */}
                                    {isEven ? (
                                        <svg className="absolute top-1/2 -translate-y-1/2 left-[45%] w-[5%] h-4 pointer-events-none hidden lg:block overflow-visible" fill="none">
                                            <motion.line
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true, margin: '-50px' }}
                                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                                x1="100%" y1="50%" x2="0%" y2="50%"
                                                stroke={hoveredCard === exp.id ? '#8B5CF6' : 'rgba(139, 92, 246, 0.2)'}
                                                strokeWidth="2"
                                                strokeDasharray={hoveredCard === exp.id ? "0" : "4 4"}
                                            />
                                            <motion.circle
                                                cx="0%" cy="50%" r="3"
                                                fill="#8B5CF6"
                                                className="opacity-75"
                                            />
                                        </svg>
                                    ) : (
                                        <svg className="absolute top-1/2 -translate-y-1/2 left-[50%] w-[5%] h-4 pointer-events-none hidden lg:block overflow-visible" fill="none">
                                            <motion.line
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true, margin: '-50px' }}
                                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                                x1="0%" y1="50%" x2="100%" y2="50%"
                                                stroke={hoveredCard === exp.id ? '#8B5CF6' : 'rgba(139, 92, 246, 0.2)'}
                                                strokeWidth="2"
                                                strokeDasharray={hoveredCard === exp.id ? "0" : "4 4"}
                                            />
                                            <motion.circle
                                                cx="100%" cy="50%" r="3"
                                                fill="#8B5CF6"
                                                className="opacity-75"
                                            />
                                        </svg>
                                    )}

                                    {/* Glass Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        transition={{
                                            opacity: { duration: 0.5 },
                                            x: { type: "spring", stiffness: 180, damping: 20 }
                                        }}
                                        onMouseEnter={() => setHoveredCard(exp.id)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                        style={{
                                            boxShadow: hoveredCard === exp.id 
                                                ? `0 20px 40px -15px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.3)`
                                                : '0 10px 30px -15px rgba(0,0,0,0.05)'
                                        }}
                                        className="w-full lg:w-[45%] rounded-[2.5rem] border border-lavender-300/40 dark:border-white/10 bg-white/95 dark:bg-[#121214]/80 backdrop-blur-3xl p-6 sm:p-8 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
                                    >
                                        {/* Decorative gradient blob inside card */}
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 dark:from-neon-purple/2 dark:to-neon-blue/2 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-purple/10 dark:group-hover:bg-neon-purple/5 transition-colors"></div>

                                        <div className="relative z-10 space-y-4">
                                            {/* Top info and logo */}
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex gap-4 items-center">
                                                    <div className="w-14 h-14 bg-lavender-100/50 dark:bg-white/5 border border-lavender-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-neon-purple dark:text-lavender-300 shadow-sm transition-all duration-300 group-hover:scale-105 shrink-0">
                                                        {logoUrl ? (
                                                            <img src={logoUrl} alt={exp.company} className="w-8 h-8 object-contain" />
                                                        ) : (
                                                            <Building2 size={24} className="text-neon-purple dark:text-lavender-300" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">{exp.company}</h2>
                                                        <h3 className="text-sm font-bold text-neon-purple dark:text-lavender-300 mt-0.5">{exp.role}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Duration & Website Link inside card */}
                                            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-100 dark:border-white/5">
                                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider font-mono">
                                                    <Calendar size={14} className="text-neon-purple/70 dark:text-lavender-400" />
                                                    <span>{exp.duration}</span>
                                                </div>

                                                {exp.websiteUrl && (
                                                    <a
                                                        href={exp.websiteUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-lavender-100/60 dark:bg-white/5 border border-lavender-300/40 dark:border-white/10 text-neon-purple dark:text-lavender-200 rounded-xl text-xs font-bold hover:bg-lavender-200/80 dark:hover:bg-white/10 transition-all shadow-sm active:scale-95 cursor-pointer"
                                                    >
                                                        <Globe size={12} className="text-neon-purple dark:text-lavender-300" />
                                                        <span>Visit Website</span>
                                                        <ArrowUpRight size={10} className="opacity-70" />
                                                    </a>
                                                )}
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-light font-sans">
                                                {exp.description}
                                            </p>

                                            {/* Achievements */}
                                            <div className="space-y-2 pt-2">
                                                <h4 className="font-bold text-xs text-gray-900 dark:text-white uppercase tracking-wider">Key Achievements</h4>
                                                <ul className="space-y-2.5">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start gap-2.5 text-gray-600 dark:text-gray-400 text-xs leading-relaxed font-sans font-light">
                                                            <CheckCircle2 size={15} className="text-neon-purple dark:text-lavender-400 mt-0.5 shrink-0" />
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-white/5">
                                                {exp.techStack.map(tech => (
                                                    <span key={tech} className="px-2.5 py-1 bg-lavender-50/50 dark:bg-white/5 text-lavender-900/80 dark:text-lavender-200/80 rounded-lg text-[10px] font-bold border border-lavender-200/50 dark:border-white/5 uppercase tracking-wide">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default Experience;
