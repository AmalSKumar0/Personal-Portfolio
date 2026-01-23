
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Globe, Building2 } from 'lucide-react';
import { SpaceBattle } from '@/components/SpaceBattle';
import { SEO } from '@/components/SEO';
import { experience } from '@/data/experience';

export const Experience: React.FC = () => {
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

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden min-h-screen flex flex-col items-center">
            <SEO
                title="Professional Experience | Amal S Kumar"
                description="My professional journey and work history with companies and clients."
            />

            <SpaceBattle />

            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.05] opacity-[0.4] z-0 pointer-events-none transition-opacity duration-300"></div>

            <motion.div
                className="max-w-5xl w-full mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <motion.div className="text-center mb-20" variants={itemVariants}>
                    <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight text-gray-900 dark:text-white">
                        My <span className="text-blue-500 dark:text-blue-400 drop-shadow-sm">Experience</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A timeline of my professional work, collaborations, and the value I've delivered to real-world projects.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className="bg-white/80 dark:bg-white/5 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
                        >
                            {/* Decorative gradient blob */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors"></div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">

                                {/* Left: Company Info */}
                                <div className="md:w-1/3 space-y-4">
                                    <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-white shadow-sm border border-gray-100 dark:border-white/5">
                                        {exp.logoUrl ? (
                                            <img src={exp.logoUrl} alt={exp.company} className="w-10 h-10 object-contain" />
                                        ) : (
                                            <Building2 size={32} />
                                        )}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h2>
                                        <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">{exp.role}</h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                                        <Calendar size={16} />
                                        <span>{exp.duration}</span>
                                    </div>
                                    {exp.websiteUrl && (
                                        <a
                                            href={exp.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <Globe size={16} /> Visit Website
                                        </a>
                                    )}
                                </div>

                                {/* Right: Details */}
                                <div className="md:w-2/3 space-y-6">
                                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                                        <ul className="space-y-3">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                                    <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-white/5">
                                        {exp.techStack.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium border border-gray-200 dark:border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};
