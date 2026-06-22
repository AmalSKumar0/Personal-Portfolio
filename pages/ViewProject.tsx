import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Layers, Calendar, User, Tag, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { projects } from '@/data/projects';
import { ScrollFade } from '@/components/ScrollFade';

export const ViewProject: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/404" replace />;
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-cream dark:bg-tech-black transition-colors duration-300">
            <SEO
                title={`${project.title} | Case Study`}
                description={project.shortDescription}
            />

            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.05] opacity-[0.4] z-0 pointer-events-none transition-opacity duration-300"></div>

            {/* Ambient Background Glows */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-neon-cyan/5 dark:bg-neon-cyan/2 rounded-full blur-[140px] pointer-events-none z-0" />

            <motion.div
                className="max-w-5xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Back Button */}
                <ScrollFade direction="none" delay={0.05}>
                    <div className="mb-10">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 group text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-neon-purple dark:hover:text-lavender-300 transition-colors duration-300"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
                        </Link>
                    </div>
                </ScrollFade>

                {/* Header Section */}
                <ScrollFade direction="up" delay={0.1}>
                    <div className="mb-14">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
                            <div>
                                <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-neon-purple dark:text-lavender-300 uppercase font-brand">
                                    CASE STUDY
                                </span>
                                <h1 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-white font-bold italic mt-2 tracking-tight">
                                    {project.title}
                                </h1>
                            </div>
                            <div className="flex flex-wrap gap-3 shrink-0">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 bg-lavender-100/50 dark:bg-white/5 border border-lavender-250 dark:border-white/10 text-gray-900 dark:text-white hover:bg-lavender-200 dark:hover:bg-white/10 transition-all font-bold rounded-2xl text-sm shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
                                    >
                                        <Github size={18} className="text-neon-purple dark:text-lavender-300" /> Source Code
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-2xl hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all font-bold text-sm shadow-lg shadow-neon-purple/20 cursor-pointer"
                                    >
                                        <Layers size={18} /> Live Sandbox
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200/50 dark:border-white/5 pt-6">
                            <div className="flex items-center gap-2.5 bg-lavender-50/30 dark:bg-white/5 px-4 py-2 rounded-full border border-lavender-200/50 dark:border-lavender-500/15">
                                <User size={15} className="text-neon-purple dark:text-lavender-300" />
                                <span className="font-semibold text-xs tracking-wide uppercase text-gray-800 dark:text-gray-300">{project.role}</span>
                            </div>
                            <div className="flex items-center gap-2.5 bg-lavender-50/30 dark:bg-white/5 px-4 py-2 rounded-full border border-lavender-200/50 dark:border-lavender-500/15">
                                <Calendar size={15} className="text-neon-purple dark:text-lavender-300" />
                                <span className="font-semibold text-xs tracking-wide uppercase text-gray-800 dark:text-gray-300">{project.date}</span>
                            </div>
                        </div>
                    </div>
                </ScrollFade>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Left: Image & Description */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Featured Image */}
                        <ScrollFade direction="up" delay={0.15}>
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-lavender-300/40 dark:border-lavender-500/15 relative group">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                        </ScrollFade>

                        {/* Overview Content */}
                        <ScrollFade direction="up" delay={0.2}>
                            <div className="bg-lavender-50/20 dark:bg-tech-dark/50 p-8 md:p-10 rounded-[2.5rem] border border-lavender-300/40 dark:border-lavender-500/10 backdrop-blur-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 dark:from-neon-purple/2 dark:to-neon-blue/2 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-purple/10 dark:group-hover:bg-neon-purple/5 transition-colors duration-500" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">Overview</h2>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-lg font-light relative z-10 font-sans">
                                    {project.fullDescription}
                                </p>
                            </div>
                        </ScrollFade>
                    </div>

                    {/* Right: Tech Stack & Features */}
                    <div className="space-y-10">

                        {/* Tech Stack Card */}
                        <ScrollFade direction="up" delay={0.22}>
                            <div className="bg-lavender-50/20 dark:bg-tech-dark/50 p-8 rounded-[2.5rem] border border-lavender-300/40 dark:border-lavender-500/10 backdrop-blur-xl shadow-lg relative overflow-hidden">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    <Tag size={20} className="text-neon-purple dark:text-lavender-300" /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3.5 py-1.5 bg-lavender-100/30 dark:bg-white/5 text-lavender-900/80 dark:text-lavender-200/80 rounded-xl text-xs font-bold border border-lavender-200/50 dark:border-white/10 transition-all hover:bg-lavender-200/50 dark:hover:bg-white/10 hover:scale-105 active:scale-95 shadow-sm uppercase tracking-wider font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollFade>

                        {/* Key Features Card */}
                        <ScrollFade direction="up" delay={0.26}>
                            <div className="bg-lavender-50/20 dark:bg-tech-dark/50 p-8 rounded-[2.5rem] border border-lavender-300/40 dark:border-lavender-500/10 backdrop-blur-xl shadow-lg relative overflow-hidden">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    <CheckCircle2 size={20} className="text-neon-purple dark:text-lavender-300" /> Key Features
                                </h3>
                                <ul className="space-y-4">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3.5 text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-sans font-light">
                                            <div className="w-5 h-5 rounded-full bg-lavender-100/50 dark:bg-white/5 flex items-center justify-center border border-lavender-200/50 dark:border-white/10 shrink-0 text-neon-purple dark:text-lavender-300 mt-0.5 shadow-sm">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollFade>

                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default ViewProject;
