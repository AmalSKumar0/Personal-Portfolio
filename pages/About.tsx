
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Cpu, Calendar, Award, Briefcase } from 'lucide-react';
import { SpaceBattle } from '@/components/SpaceBattle';
import { SEO } from '@/components/SEO';

export const About: React.FC = () => {
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

    const skills = [
        { name: 'React & TypeScript', icon: Code2, level: 90 },
        { name: 'Node.js & Express', icon: Globe, level: 85 },
        { name: 'Database Design', icon: Database, level: 80 },
        { name: 'System Architecture', icon: Cpu, level: 75 },
    ];

    const timeline = [
        {
            year: 'Present',
            title: 'Freelance Full Stack Developer',
            description: 'Building custom web solutions for diverse clients using React, Laravel, and modern tech stacks.',
            icon: Briefcase,
            color: 'text-blue-500'
        },
        {
            year: '2024',
            title: 'Bachelor of Computer Applications',
            description: 'Graduated from MG University with a focus on comprehensive software development and computer science fundamentals.',
            icon: Award,
            color: 'text-purple-500'
        },
        {
            year: '2023',
            title: 'Frontend Development Intern',
            description: 'Honed skills in React ecosystem and responsive design principles through practical application.',
            icon: Code2,
            color: 'text-green-500'
        }
    ];

    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col items-center">
            <SEO
                title="About Me | Amal S Kumar"
                description="Learn about Amal S Kumar's journey, technical skills, and professional experience as a Full Stack Developer."
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
                <motion.div className="text-center mb-20" variants={itemVariants}>
                    <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight text-gray-900 dark:text-white">
                        About <span className="text-blue-500 dark:text-blue-400 drop-shadow-sm">Me</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        I'm a passionate developer who bridges the gap between creative design and robust engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Bio & Skills */}
                    <div className="space-y-12">
                        <motion.section variants={itemVariants} className="bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400"><Code2 size={20} /></span>
                                who_am_i?
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Hello! I'm <span className="font-semibold text-gray-900 dark:text-white">Amal S Kumar</span>, a Full Stack Developer based in India.
                                    I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                                </p>
                                <p>
                                    My goal is to always build products that provide pixel-perfect, performant experiences.
                                    I graduated with a BCA degree and have since been diving deep into the world of web technologies.
                                </p>
                            </div>
                        </motion.section>

                        <motion.section variants={itemVariants} className="bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                                <span className="p-2 bg-purple-100 dark:bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-400"><Cpu size={20} /></span>
                                Technical Arsenal
                            </h2>
                            <div className="space-y-6">
                                {skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                                <skill.icon size={16} className="text-blue-500" />
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Column: Timeline */}
                    <div className="space-y-12">
                        <motion.section variants={itemVariants} className="bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                                <span className="p-2 bg-green-100 dark:bg-green-500/20 rounded-lg text-green-600 dark:text-green-400"><Calendar size={20} /></span>
                                My Journey
                            </h2>

                            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                {timeline.map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                        {/* Icon */}
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 dark:bg-slate-800 dark:border-slate-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                            <item.icon size={18} className={item.color} />
                                        </div>

                                        {/* Content */}
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm transition-all hover:shadow-md">
                                            <div className="flex items-center justify-between space-x-2 mb-1">
                                                <div className="font-bold text-gray-900 dark:text-white">{item.title}</div>
                                                <time className="font-caveat font-medium text-blue-500">{item.year}</time>
                                            </div>
                                            <div className="text-slate-500 dark:text-slate-400 text-sm">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section variants={itemVariants} className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-md text-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to collaborate?</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                I'm always open to discussing product design work or partnership opportunities.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-tech-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                            >
                                Let's Talk <Briefcase size={18} />
                            </a>
                        </motion.section>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};
