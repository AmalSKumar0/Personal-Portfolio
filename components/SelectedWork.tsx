import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Layers, Zap, Star, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

export const SelectedWork: React.FC = () => {
    // Filter for specific "Best Work" projects
    const selectedProjectIds = ['copper', 'voice-bot', 'momentum'];
    const selectedProjects = projects.filter(p => selectedProjectIds.includes(p.id));

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                        Selected <span className="text-blue-500 dark:text-blue-400">Work</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of my most technically challenging and innovative projects.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {selectedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}
                        >
                            {/* Project Visual */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 aspect-video bg-gray-100 dark:bg-white/5">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay Actions */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2"
                                        >
                                            View Case Study <ArrowUpRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-blue-500 dark:text-blue-400 font-mono text-sm tracking-wider uppercase">
                                        <Zap size={14} className="fill-current" />
                                        <span>Featured Project</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.fullDescription}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                                        >
                                            <Github size={20} />
                                            <span className="font-medium">Source Code</span>
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                                        >
                                            <Layers size={20} />
                                            <span className="font-medium">Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                        View All Projects <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};
