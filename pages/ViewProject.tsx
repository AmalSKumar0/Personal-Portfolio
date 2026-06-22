import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Github, Layers, Calendar, User, ArrowUpRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { projects } from '@/data/projects';

// ─── Feature Card colours (borrowed from AboutAccomplishments) ────────────────
const CARD_THEMES = [
    {
        bg: 'bg-purple-100/70 dark:bg-[#201c38] text-purple-950 dark:text-purple-200 border border-purple-200/80 dark:border-purple-900/50 shadow-sm',
        num: 'bg-white/50 dark:bg-white/10 text-purple-900 dark:text-purple-200',
        arrow: 'text-purple-600 dark:text-purple-400',
    },
    {
        bg: 'bg-[#f3f0ea]/80 dark:bg-[#1a1917] text-zinc-900 dark:text-zinc-300 border border-[#e5e1d7] dark:border-zinc-800 shadow-sm',
        num: 'bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-300',
        arrow: 'text-zinc-500 dark:text-zinc-400',
    },
    {
        bg: 'bg-zinc-900 dark:bg-[#0c0c0e] text-zinc-100 dark:text-zinc-300 border border-zinc-800 dark:border-zinc-900 shadow-sm',
        num: 'bg-white/10 dark:bg-white/5 text-zinc-200 dark:text-zinc-300',
        arrow: 'text-zinc-400 dark:text-zinc-500',
    },
    {
        bg: 'bg-[#f3f0ea]/80 dark:bg-[#1a1917] text-zinc-900 dark:text-zinc-300 border border-[#e5e1d7] dark:border-zinc-800 shadow-sm',
        num: 'bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-300',
        arrow: 'text-zinc-500 dark:text-zinc-400',
    },
];

const TILT = ['lg:rotate-[-1.5deg]', 'lg:rotate-[1.5deg]', 'lg:rotate-[-2deg]', 'lg:rotate-[2deg]'];

export const ViewProject: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);
    const overviewRef = useRef<HTMLDivElement>(null);

    if (!project) return <Navigate to="/404" replace />;

    // Scroll-linked reveal for the overview paragraph (borrowed from AboutSnapshot)
    const { scrollYProgress } = useScroll({
        target: overviewRef,
        offset: ['start end', 'end start'],
    });
    const overviewOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0.08, 1]);
    const overviewY = useTransform(scrollYProgress, [0.05, 0.35], [30, 0]);

    return (
        <div className="pb-32 px-0 relative overflow-x-clip min-h-screen bg-cream dark:bg-tech-black transition-colors duration-300">
            <SEO
                title={`${project.title} | Case Study`}
                description={project.shortDescription}
            />

            {/* Grid + ambient glows — same as About page */}
            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.03] opacity-[0.2] z-0 pointer-events-none transition-opacity duration-300" />
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-pink-500/5 dark:bg-pink-500/2 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[140px] pointer-events-none z-0" />

            {/* ──────────────────────────────────────────────────────────────────
                HERO — ticket-cut glassmorphic card (AboutIllustration style)
            ────────────────────────────────────────────────────────────────── */}
            <section className="relative w-full pt-28 pb-0 px-4 md:px-8 flex flex-col items-center">
                <div className="max-w-5xl w-full mx-auto relative z-10">

                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-8"
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 group text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-neon-purple dark:hover:text-lavender-300 transition-colors duration-300"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Link>
                    </motion.div>

                    {/* Ticket card (AboutIllustration middle-card style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full bg-white/90 dark:bg-black/40 backdrop-blur-2xl border border-lavender-200/50 dark:border-white/10 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(139,92,246,0.04)] overflow-hidden"
                    >
                        {/* Ticket notch cuts on the left/right divider line */}
                        <div className="absolute left-0 top-[62%] -translate-x-1/2 w-8 h-8 rounded-full bg-cream dark:bg-tech-black border border-lavender-200/50 dark:border-white/10 z-30 pointer-events-none" />
                        <div className="absolute right-0 top-[62%] translate-x-1/2 w-8 h-8 rounded-full bg-cream dark:bg-tech-black border border-lavender-200/50 dark:border-white/10 z-30 pointer-events-none" />

                        {/* Upper stub: metadata */}
                        <div className="px-8 md:px-12 pt-10 pb-8">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                <div>
                                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-lavender-700 dark:text-[#E9D5FF] uppercase block mb-3">
                                        CASE STUDY
                                    </span>
                                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-none">
                                        {project.title}
                                    </h1>
                                </div>

                                {/* CTA buttons */}
                                <div className="flex flex-wrap gap-3 shrink-0 pt-1">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between gap-2 bg-lavender-50 hover:bg-lavender-100/50 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white px-5 py-3 rounded-full font-bold border border-lavender-200/40 dark:border-white/15 text-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                                        >
                                            <span className="font-mono text-xs tracking-widest uppercase text-lavender-700 dark:text-[#E9D5FF]">
                                                Source Code
                                            </span>
                                            <span className="p-1.5 bg-gray-900 dark:bg-black text-white rounded-full flex items-center justify-center">
                                                <Github size={12} className="text-[#E9D5FF]" />
                                            </span>
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all font-bold text-sm shadow-lg shadow-neon-purple/20 cursor-pointer"
                                        >
                                            <Layers size={16} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Meta pills */}
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 bg-lavender-50/60 dark:bg-white/5 px-4 py-2 rounded-full border border-lavender-200/50 dark:border-white/10">
                                    <User size={14} className="text-neon-purple dark:text-lavender-300" />
                                    <span className="text-xs font-bold tracking-wide uppercase text-gray-800 dark:text-gray-200">{project.role}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-lavender-50/60 dark:bg-white/5 px-4 py-2 rounded-full border border-lavender-200/50 dark:border-white/10">
                                    <Calendar size={14} className="text-neon-purple dark:text-lavender-300" />
                                    <span className="text-xs font-bold tracking-wide uppercase text-gray-800 dark:text-gray-200">{project.date}</span>
                                </div>
                                {/* Tech tags inline */}
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-2 bg-lavender-100/30 dark:bg-white/5 text-lavender-900/80 dark:text-lavender-200/80 rounded-full text-[10px] font-mono font-bold border border-lavender-200/50 dark:border-white/10 uppercase tracking-wider"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Dashed divider (ticket tear) */}
                        <div className="border-t border-dashed border-lavender-200/40 dark:border-white/10 mx-8 md:mx-12" />

                        {/* Lower stub: featured image */}
                        <div className="px-8 md:px-12 py-8">
                            <div className="w-full rounded-[1.8rem] overflow-hidden border border-lavender-200/40 dark:border-white/10 shadow-xl">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-64 md:h-96 object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────────
                OVERVIEW — scroll-linked serif reveal (AboutSnapshot style)
            ────────────────────────────────────────────────────────────────── */}
            <section
                ref={overviewRef}
                className="relative bg-cream dark:bg-tech-black transition-colors duration-500 py-24 md:py-32 px-4 sm:px-8 md:px-12 flex flex-col justify-center overflow-hidden border-t border-gray-200/50 dark:border-white/10 mt-8"
            >
                <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-[0.03] z-0 pointer-events-none" />
                <div className="max-w-4xl w-full mx-auto relative z-10">
                    <motion.p
                        style={{ opacity: overviewOpacity, y: overviewY }}
                        className="text-4xl sm:text-5xl md:text-6xl font-serif font-light leading-tight tracking-tight text-gray-900 dark:text-white text-center"
                    >
                        {project.fullDescription}
                    </motion.p>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────────
                KEY FEATURES — numbered tilted cards (AboutAccomplishments style)
            ────────────────────────────────────────────────────────────────── */}
            <section className="relative w-full py-24 px-6 md:px-12 bg-cream dark:bg-tech-black transition-colors duration-500 border-t border-gray-200/50 dark:border-white/10 overflow-hidden">
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[140px] pointer-events-none z-0" />

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
                        <div className="max-w-3xl">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 dark:text-white font-bold italic tracking-tight mb-4">
                                Key Features
                            </h2>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
                                Core capabilities and architectural highlights built into {project.title}.
                            </p>
                        </div>

                        {/* GitHub CTA (matching AboutAccomplishments scroll-down btn style) */}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-gray-100 transition-all shadow-md group cursor-pointer self-start md:self-end shrink-0"
                                aria-label="View source on GitHub"
                            >
                                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                            </a>
                        )}
                    </div>

                    {/* Cards grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.08 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {project.features.map((feature, index) => {
                            const theme = CARD_THEMES[index % CARD_THEMES.length];
                            const tilt = TILT[index % TILT.length];
                            const num = String(index + 1).padStart(2, '0');

                            return (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    whileHover={{
                                        scale: 1.03,
                                        rotate: 0,
                                        y: -8,
                                        boxShadow: '0 20px 30px -10px rgba(0,0,0,0.15)',
                                    }}
                                    className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[260px] transition-all duration-500 ease-out z-10 ${tilt} ${theme.bg}`}
                                >
                                    {/* Card header */}
                                    <div className="flex justify-between items-center mb-8">
                                        <div className={`w-10 h-10 flex items-center justify-center rounded-full text-xs font-mono font-bold ${theme.num}`}>
                                            {num}
                                        </div>
                                        <ArrowUpRight size={18} className={theme.arrow} />
                                    </div>

                                    {/* Feature text */}
                                    <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight leading-tight text-inherit">
                                        {feature}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ViewProject;
