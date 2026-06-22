import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, FolderGit2, Terminal } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { projects } from '@/data/projects';
import { ScrollFade } from '@/components/ScrollFade';

export const Projects: React.FC = () => {
    const navigate = useNavigate();

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
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col items-center bg-cream dark:bg-tech-black transition-colors duration-300">
            <SEO
                title="My Projects | Amal S Kumar"
                description="Explore my portfolio of projects demonstrating my expertise in systems engineering, backend API development, and distributed architectures."
            />

            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.05] opacity-[0.4] z-0 pointer-events-none transition-opacity duration-300"></div>
            
            {/* Ambient Background Glows */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-neon-cyan/5 dark:bg-neon-cyan/2 rounded-full blur-[140px] pointer-events-none z-0" />

            <motion.div
                className="max-w-7xl w-full mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <ScrollFade direction="none" delay={0.1}>
                    <div className="text-center mb-20">
                        <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-neon-purple dark:text-lavender-300 uppercase font-brand">
                            PORTFOLIO
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 dark:text-white font-bold italic mt-3 tracking-tight">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan dark:from-neon-purple dark:to-lavender-300 not-italic font-sans font-extrabold">Work</span> & Systems
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4 font-light">
                            A collection of projects demonstrating my expertise in systems engineering, backend API development, and distributed architectures.
                        </p>
                    </div>
                </ScrollFade>

                {/* Grid layout for Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => {
                        const yearShort = project.date ? project.date.slice(-2) : '25';

                        return (
                            <ScrollFade key={project.id} direction="up" delay={(idx % 3) * 0.1} amount={0.1}>
                                <div 
                                    onClick={(e) => {
                                        if ((e.target as HTMLElement).closest('a')) {
                                            return;
                                        }
                                        navigate(`/projects/${project.id}`);
                                    }}
                                    className="rounded-[2.5rem] border border-lavender-300/40 dark:border-lavender-500/10 bg-lavender-50/20 dark:bg-tech-dark/50 backdrop-blur-xl p-5 md:p-6 flex flex-col justify-between h-[450px] shadow-lg hover:shadow-xl hover:border-lavender-400/60 dark:hover:border-lavender-400/25 transition-all duration-300 relative group overflow-hidden cursor-pointer"
                                >
                                    {/* Subtle Lavender Glow on Card Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-lavender-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                                    
                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div>
                                            {/* Card Header Row */}
                                            <div className="flex justify-between items-center mb-4">
                                                {/* Left Badge: Role/Category with Lavender Theme */}
                                                <span className="bg-lavender-900 dark:bg-lavender-400/20 text-white dark:text-lavender-200 border border-lavender-700/30 dark:border-lavender-400/30 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase shadow-sm">
                                                    {project.role.split(' ')[0] || 'DEV'}
                                                </span>

                                                {/* Right Badge: Split Pill Layout */}
                                                <div className="flex items-center border border-lavender-200/50 dark:border-lavender-500/15 rounded-full overflow-hidden text-[10px] font-bold tracking-wider font-mono shadow-sm bg-lavender-50/30 dark:bg-white/5">
                                                    <span className="bg-lavender-900 dark:bg-white/10 text-white dark:text-gray-200 px-2.5 py-1 uppercase text-[9px]">
                                                        YEAR
                                                    </span>
                                                    <span className="bg-lavender-50/50 dark:bg-tech-gray text-lavender-900 dark:text-white px-2.5 py-1 text-[9px] border-l border-lavender-200/50 dark:border-white/10">
                                                        {yearShort}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Title & Description */}
                                            <h3 className="text-2xl font-bold font-sans text-gray-900 dark:text-white tracking-tight leading-tight group-hover:text-neon-purple dark:group-hover:text-lavender-300 transition-colors duration-300 mb-1.5">
                                                {project.title}
                                            </h3>
                                            <p className="text-[13px] sm:text-sm text-lavender-900/60 dark:text-lavender-200/60 font-sans leading-relaxed line-clamp-2 h-[42px] overflow-hidden mb-3">
                                                {project.shortDescription}
                                            </p>
                                        </div>

                                        {/* Image with rounded corners and bottom stack overlay */}
                                        <div className="relative w-full aspect-[16/11.5] rounded-[2rem] overflow-hidden mt-auto border border-lavender-200/45 dark:border-lavender-500/15 shadow-md">
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                loading="lazy"
                                            />
                                            {/* Gradient shadow inside the image to ensure text legibility */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                                            {/* Location-like overlay showing tech stack */}
                                            <div className="absolute bottom-4 left-4 bg-lavender-50/70 dark:bg-tech-dark/70 backdrop-blur-md border border-lavender-200/40 dark:border-lavender-500/15 rounded-2xl py-1.5 px-3 flex items-center gap-2 shadow-md">
                                                <Terminal size={12} className="text-lavender-600 dark:text-lavender-300" />
                                                <span className="text-[10px] font-bold text-gray-800 dark:text-white tracking-wide uppercase font-mono">
                                                    {project.tags.slice(0, 2).join(' • ')}
                                                </span>
                                            </div>

                                            {/* Action Links Overlay Top Right */}
                                            <div className="absolute top-4 right-4 flex gap-1.5">
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-lavender-50/90 hover:bg-white text-lavender-900 hover:text-neon-purple rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
                                                        title="View Code"
                                                    >
                                                        <Github size={14} />
                                                    </a>
                                                )}
                                                <Link
                                                    to={`/projects/${project.id}`}
                                                    className="p-2 bg-lavender-50/90 hover:bg-white text-lavender-900 hover:text-neon-purple rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
                                                    title="Project Details"
                                                >
                                                    <ArrowUpRight size={14} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollFade>
                        );
                    })}
                </div>

                <ScrollFade direction="up" delay={0.2}>
                    <div className="mt-20 text-center">
                        <p className="text-gray-500 dark:text-gray-400 mb-4">Want to see more?</p>
                        <a
                            href="https://github.com/AmalSKumar0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-lavender-100/40 dark:bg-white/5 border border-lavender-300/50 dark:border-white/10 text-lavender-900 dark:text-white rounded-full font-bold hover:bg-lavender-200/50 dark:hover:bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg hover:scale-[1.03] transition-all cursor-pointer group"
                        >
                            <FolderGit2 size={20} className="text-neon-purple dark:text-lavender-300 group-hover:rotate-12 transition-transform" /> Visit GitHub Profile
                        </a>
                    </div>
                </ScrollFade>

            </motion.div>
        </div>
    );
};

export default Projects;
