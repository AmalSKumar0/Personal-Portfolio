import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Calendar, CheckCircle2, Github, Globe2, User } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { projects } from '@/data/projects';
import { ScrollFade } from '../components/ScrollFade';
import { MoreProjects } from '../components/MoreProjects';

export const ViewProject: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);
    const overviewRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: overviewRef,
        offset: ['start end', 'end start'],
    });
    const overviewOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0.12, 1]);
    const overviewY = useTransform(scrollYProgress, [0.05, 0.35], [24, 0]);

    if (!project) return <Navigate to="/404" replace />;

    return (
        <div className="relative min-h-screen overflow-x-clip bg-cream pb-24 transition-colors duration-300 dark:bg-tech-black">
            <SEO
                title={`${project.title} | Case Study`}
                description={project.shortDescription}
                project={project}
            />

            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.16] pointer-events-none dark:opacity-[0.03]" />
            <div className="absolute right-[-14%] top-[10%] z-0 h-[520px] w-[520px] rounded-full bg-lavender-300/20 blur-[150px] pointer-events-none dark:bg-lavender-500/[0.05]" />
            <div className="absolute bottom-[20%] left-[-14%] z-0 h-[480px] w-[480px] rounded-full bg-pink-200/25 blur-[140px] pointer-events-none dark:bg-neon-purple/[0.04]" />

            <section className="relative z-10 w-full px-4 pt-28 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-5xl">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-10"
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 transition-colors duration-300 hover:text-neon-purple dark:text-gray-400 dark:hover:text-lavender-300"
                        >
                            <ArrowLeft size={16} />
                            Back to Projects
                        </Link>
                    </motion.div>

                    {/* Minimalist Grid Header */}
                    <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 mb-16">
                        <div>
                            <span className="mb-3 block text-[10px] font-mono font-bold uppercase tracking-[0.32em] text-lavender-700 dark:text-lavender-300">
                                Case Study
                            </span>
                            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
                                {project.title}
                            </h1>
                            <p className="mt-6 text-lg leading-relaxed text-lavender-900/80 dark:text-lavender-100/70">
                                {project.shortDescription}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-lavender-300/60 bg-white/80 px-5 py-3 text-sm font-bold text-lavender-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-lavender-400 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/[0.15]"
                                    >
                                        <Github size={16} />
                                        Source Code
                                        <ArrowUpRight size={14} />
                                    </a>
                                )}

                                {project.demoUrl ? (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan px-5 py-3 text-sm font-bold text-white shadow-lg shadow-neon-purple/20 transition-all hover:-translate-y-0.5 hover:opacity-95"
                                    >
                                        <Globe2 size={16} />
                                        Live Website
                                        <ArrowUpRight size={14} />
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center gap-2 rounded-full border border-lavender-200/70 bg-white/50 px-5 py-3 text-sm font-bold text-lavender-900/40 dark:border-white/10 dark:bg-white/[0.04] dark:text-lavender-100/40">
                                        <Globe2 size={16} />
                                        Website pending
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Sidebar Project Information */}
                        <div className="flex flex-col gap-6 lg:border-l lg:border-lavender-200/50 lg:pl-12 dark:lg:border-white/10">
                            <div>
                                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-lavender-600 dark:text-lavender-400 mb-1">Role</h4>
                                <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{project.role}</p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-lavender-600 dark:text-lavender-400 mb-1">Timeline</h4>
                                <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{project.date}</p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-lavender-600 dark:text-lavender-400 mb-2">Technologies</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-lavender-200/40 bg-white/40 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-lavender-900/70 dark:border-white/5 dark:bg-white/[0.03] dark:text-lavender-100/60"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Centered Showcase Screenshot */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <motion.div 
                            className="relative w-full overflow-hidden rounded-[1.5rem] border border-lavender-200/60 bg-[#151815] shadow-2xl dark:border-white/10"
                            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
                            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img
                                src={project.imageUrl}
                                alt={`${project.title} website preview`}
                                width={1480}
                                height={1060}
                                className="w-full h-auto block select-none pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section
                ref={overviewRef}
                className="relative z-10 w-full px-4 py-16 sm:px-6 lg:px-8"
            >
                <div className="mx-auto w-full max-w-5xl border-t border-lavender-200/30 pt-16 dark:border-white/5">
                    <div className="grid gap-8 md:grid-cols-[0.3fr_0.7fr] md:items-start">
                        <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-neon-purple dark:text-lavender-300">
                                Overview
                            </span>
                            <h2 className="mt-2 text-2xl font-serif font-bold italic tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                                What it does
                            </h2>
                        </div>
                        <motion.p
                            style={{ opacity: overviewOpacity, y: overviewY }}
                            className="text-xl font-serif font-light leading-relaxed tracking-wide text-gray-800 dark:text-lavender-100 sm:text-2xl"
                        >
                            {project.fullDescription}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="relative z-10 w-full px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-5xl border-t border-lavender-200/30 pt-16 dark:border-white/5">
                    <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-neon-purple dark:text-lavender-300">
                                Details
                            </span>
                            <h2 className="mt-2 text-2xl font-serif font-bold italic tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                                Key features
                            </h2>
                        </div>
                        <p className="max-w-md text-sm text-lavender-900/60 dark:text-lavender-100/50">
                            Core capabilities and architectural highlights built into {project.title}.
                        </p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.08 } }
                        }}
                        className="grid grid-cols-1 gap-6 md:grid-cols-2"
                    >
                        {project.features.map((feature, index) => (
                            <motion.div
                                key={feature}
                                variants={{
                                    hidden: { opacity: 0, y: 12 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                                className="flex items-start gap-4 rounded-2xl border border-lavender-200/30 bg-white/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-lavender-300/40 dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-lavender-500/20"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lavender-200/40 bg-lavender-50/50 text-neon-purple dark:border-white/5 dark:bg-white/[0.04] dark:text-lavender-300">
                                    <CheckCircle2 size={18} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-lavender-500 dark:text-lavender-400">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="mt-1 text-lg font-bold leading-tight tracking-tight text-gray-950 dark:text-white">
                                        {feature}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


             <ScrollFade amount={0.1}>
                            <MoreProjects />
                        </ScrollFade>
        </div>
    );
};

export default ViewProject;
