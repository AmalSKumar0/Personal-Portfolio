
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, FolderGit2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpaceBattle } from '@/components/SpaceBattle';
import { SEO } from '@/components/SEO';
import { projects } from '@/data/projects';

export const Projects: React.FC = () => {
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

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col items-center">
            <SEO
                title="My Projects | Amal S Kumar"
                description="Explore my portfolio of projects featuring React, Laravel, and Full Stack applications."
            />

            <SpaceBattle />

            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.05] opacity-[0.4] z-0 pointer-events-none transition-opacity duration-300"></div>

            <motion.div
                className="max-w-7xl w-full mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <motion.div className="text-center mb-20" variants={cardVariants}>
                    <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight text-gray-900 dark:text-white">
                        My <span className="text-blue-500 dark:text-blue-400 drop-shadow-sm">Work</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A collection of projects that demonstrate my skills in solving problems and building scalable products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="bg-white/80 dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-gray-100 dark:bg-white/5 relative overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                                    <div className="flex gap-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Layers size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="text-xs font-semibold px-3 py-1 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 rounded-full border border-gray-100 dark:border-white/10">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-3">
                                    {project.shortDescription}
                                </p>

                                <Link
                                    to={`/projects/${project.id}`}
                                    className="inline-flex items-center gap-2 font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors mt-auto"
                                >
                                    View Details <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Want to see more?</p>
                    <a
                        href="https://github.com/AmalSKumar0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-bold hover:gap-3 transition-all"
                    >
                        <FolderGit2 size={20} /> Visit Github Profile
                    </a>
                </div>

            </motion.div>
        </div>
    );
};
