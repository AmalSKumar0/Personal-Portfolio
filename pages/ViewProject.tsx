import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Calendar, CheckCircle2, Github, Globe2, User } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { projects } from '@/data/projects';

const HEADER_LAPTOP_SCENE = '/pexels-introspectivedsgn-7484736.jpg';

export const ViewProject: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);
    const overviewRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const [isAlignMode, setIsAlignMode] = useState(false);
    const [pts, setPts] = useState([
        { x: 10.08, y: 17.08 }, // TL
        { x: 78.51, y: 10.25 }, // TR
        { x: 80.45, y: 71.64 }, // BR
        { x: 14.78, y: 77.20 }  // BL
    ]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.search.includes('align=true')) {
            setIsAlignMode(true);
        }
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const activePtRef = useRef<number | null>(null);

    const handlePointerDown = (index: number) => (e: React.PointerEvent) => {
        e.preventDefault();
        activePtRef.current = index;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (activePtRef.current === null || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPts(prev => {
            const next = [...prev];
            next[activePtRef.current!] = {
                x: Math.max(0, Math.min(100, x)),
                y: Math.max(0, Math.min(100, y))
            };
            return next;
        });
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (activePtRef.current !== null) {
            (e.target as HTMLElement).releasePointerCapture(e.pointerId);
            activePtRef.current = null;
        }
    };

    const minX = Math.min(pts[0].x, pts[3].x);
    const maxX = Math.max(pts[1].x, pts[2].x);
    const minY = Math.min(pts[0].y, pts[1].y);
    const maxY = Math.max(pts[2].y, pts[3].y);
    const width = maxX - minX;
    const height = maxY - minY;
    const left = minX;
    const top = minY;

    const TL_rel = width > 0 ? [(pts[0].x - left) / width * 100, (pts[0].y - top) / height * 100] : [0, 0];
    const TR_rel = width > 0 ? [(pts[1].x - left) / width * 100, (pts[1].y - top) / height * 100] : [100, 0];
    const BR_rel = width > 0 ? [(pts[2].x - left) / width * 100, (pts[2].y - top) / height * 100] : [100, 100];
    const BL_rel = width > 0 ? [(pts[3].x - left) / width * 100, (pts[3].y - top) / height * 100] : [0, 100];

    const customStyle = isAlignMode ? {
        left: `${left}%`,
        top: `${top}%`,
        width: `${width}%`,
        height: `${height}%`,
        clipPath: `polygon(${TL_rel[0]}% ${TL_rel[1]}%, ${TR_rel[0]}% ${TR_rel[1]}%, ${BR_rel[0]}% ${BR_rel[1]}%, ${BL_rel[0]}% ${BL_rel[1]}%)`
    } : undefined;

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

                    {/* Centered Showcase Mockup */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <motion.div 
                            ref={containerRef}
                            onPointerMove={isAlignMode ? handlePointerMove : undefined}
                            className="project-device-viewer relative aspect-[2926/2081] w-full overflow-hidden rounded-[1.5rem] border border-lavender-200/60 bg-[#151815] shadow-2xl dark:border-white/10"
                            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
                            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img
                                src={HEADER_LAPTOP_SCENE}
                                alt=""
                                aria-hidden="true"
                                className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
                            />

                            <div
                                className="project-pexels-screen absolute overflow-hidden bg-black"
                                style={customStyle}
                            >
                                <img
                                    src={project.imageUrl}
                                    alt={`${project.title} website preview inside laptop`}
                                    className="h-full w-full object-cover select-none pointer-events-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#0c0a12]/[0.55] via-transparent to-white/[0.18] mix-blend-screen pointer-events-none" />
                                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-br from-lavender-100/20 via-transparent to-tech-black/30 pointer-events-none" />

                            {isAlignMode && (
                                <>
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-[80]" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <polygon 
                                            points={pts.map(p => `${p.x},${p.y}`).join(' ')} 
                                            fill="rgba(139, 92, 246, 0.2)"
                                            stroke="#8b5cf6"
                                            strokeWidth="0.5"
                                        />
                                    </svg>
                                    {pts.map((pt, idx) => (
                                        <div
                                            key={idx}
                                            className="absolute w-8 h-8 -ml-4 -mt-4 bg-neon-purple rounded-full border-2 border-white shadow-lg cursor-move z-[90] flex items-center justify-center text-[10px] text-white font-bold select-none touch-none"
                                            style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                                            onPointerDown={handlePointerDown(idx)}
                                            onPointerUp={handlePointerUp}
                                        >
                                            {idx}
                                        </div>
                                    ))}
                                </>
                            )}
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

            {isAlignMode && (
                <div className="fixed bottom-4 left-4 z-[9999] bg-black/95 text-green-400 p-5 rounded-2xl font-mono text-xs max-w-md border border-green-500/40 shadow-2xl backdrop-blur-md">
                    <div className="font-bold text-sm text-white mb-2">💻 Screen Aligner Tool</div>
                    <div>p0 (TL): {pts[0].x.toFixed(2)}%, {pts[0].y.toFixed(2)}%</div>
                    <div>p1 (TR): {pts[1].x.toFixed(2)}%, {pts[1].y.toFixed(2)}%</div>
                    <div>p2 (BR): {pts[2].x.toFixed(2)}%, {pts[2].y.toFixed(2)}%</div>
                    <div>p3 (BL): {pts[3].x.toFixed(2)}%, {pts[3].y.toFixed(2)}%</div>
                    <div className="mt-4 font-bold text-white">Copy the CSS below:</div>
                    <pre className="mt-2 select-all bg-gray-900/90 p-3 rounded-lg overflow-x-auto text-[10px] text-pink-400 border border-gray-800">
{`.project-pexels-screen {
  left: ${left.toFixed(2)}%;
  top: ${top.toFixed(2)}%;
  width: ${width.toFixed(2)}%;
  height: ${height.toFixed(2)}%;
  clip-path: polygon(${TL_rel[0].toFixed(2)}% ${TL_rel[1].toFixed(2)}%, ${TR_rel[0].toFixed(2)}% ${TR_rel[1].toFixed(2)}%, ${BR_rel[0].toFixed(2)}% ${BR_rel[1].toFixed(2)}%, ${BL_rel[0].toFixed(2)}% ${BL_rel[1].toFixed(2)}%);
}`}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default ViewProject;
