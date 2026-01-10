
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Layers, Calendar, User, Tag, CheckCircle2 } from 'lucide-react';
import { SpaceBattle } from '@/components/SpaceBattle';
import { SEO } from '@/components/SEO';
import { projects } from '@/data/projects';

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

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
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
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
            <SEO
                title={`${project.title} | Amal S Kumar`}
                description={project.shortDescription}
            />

            <SpaceBattle />

            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.05] opacity-[0.4] z-0 pointer-events-none transition-opacity duration-300"></div>

            <motion.div
                className="max-w-5xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Back Button */}
                <motion.div variants={itemVariants} className="mb-8">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors font-medium"
                    >
                        <ArrowLeft size={20} /> Back to Projects
                    </Link>
                </motion.div>

                {/* Header Section */}
                <motion.div variants={itemVariants} className="mb-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
                            {project.title}
                        </h1>
                        <div className="flex gap-3">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-lg text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors font-semibold"
                                >
                                    <Github size={18} /> Code
                                </a>
                            )}
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg shadow-blue-500/20"
                                >
                                    <Layers size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2 bg-white dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-100 dark:border-white/10">
                            <User size={16} className="text-blue-500" />
                            <span>{project.role}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-100 dark:border-white/10">
                            <Calendar size={16} className="text-purple-500" />
                            <span>{project.date}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Left: Image & Description */}
                    <motion.div className="lg:col-span-2 space-y-8" variants={itemVariants}>
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 relative group">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 backdrop-blur-md">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                                {project.fullDescription}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Tech Stack & Features */}
                    <motion.div className="space-y-8" variants={itemVariants}>

                        {/* Tech Stack */}
                        <div className="bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <Tag size={20} className="text-blue-500" /> Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-black/20 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <CheckCircle2 size={20} className="text-green-500" /> Key Features
                            </h3>
                            <ul className="space-y-4">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </motion.div>
                </div>

            </motion.div>
        </div>
    );
};
