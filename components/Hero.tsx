import {
    Server, Database, Activity, Zap, Boxes,
    Shield, Globe, CheckCircle, Brain, Lock
} from 'lucide-react';
import { Satellite } from './Satellite';
import { SpaceBattle } from './SpaceBattle';

import { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate position relative to center of screen
            // "Very slow" follow means a small factor (e.g. 0.02)
            const x = (e.clientX - window.innerWidth / 2) * 0.05;
            const y = (e.clientY - window.innerHeight / 2) * 0.05;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <SpaceBattle />
            <section className="pt-48 pb-24 px-6 relative overflow-hidden bg-gray-50 min-h-screen flex flex-col items-center">

                {/* CSS for custom animations and grid pattern */}
                <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(300px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(300px) rotate(-360deg); }
        }
        @keyframes float-random-x {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(150px); }
            50% { transform: translateX(-50px); }
            75% { transform: translateX(-150px); }
        }
        @keyframes float-random-y {
            0%, 100% { transform: translateY(0); }
            33% { transform: translateY(-100px); }
            66% { transform: translateY(100px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; animation-delay: 1s; }
        .animate-pulse-glow { animation: pulse-glow 3s infinite; }
        .animate-orbit { animation: orbit 20s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
        }
        /* Custom Satellite SVG Styles */
        .outline-blue { stroke: #3b82f6; fill: none; stroke-width: 2px; }
        .outline-pink { stroke: #ec4899; fill: none; stroke-width: 2px; }
        .thin { stroke-width: 1px; }
        .micro { stroke-width: 0.5px; }
        .dashed { stroke-dasharray: 4 2; }
      `}</style>

                {/* Abstract Perspective Grid Background */}
                <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-50"></div>

                {/* Geometric Decorations */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
                    <svg className="absolute top-0 right-[-20%] w-[800px] h-[800px] opacity-30 text-purple-500 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                        <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                    <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
                </div>

                {/* Orbiting Interactive Satellite */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 hidden lg:block">
                    <div className="w-full h-full animate-[spin_60s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-auto">
                            <div className="w-full h-full animate-[spin_60s_linear_infinite_reverse]">
                                <div
                                    className="transition-transform duration-100 ease-out flex items-center justify-center p-4 hover:scale-110 transition-all duration-500"
                                    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                                >
                                    <Satellite className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">

                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full pl-2 pr-4 py-1.5 mb-8 shadow-sm hover:shadow-md transition-all cursor-default">
                        <div className="bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Status</div>
                        <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
                            Open to work <span className="text-gray-300">|</span> <span className="text-blue-500">Available for projects</span>
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="flex flex-col items-center mb-10 relative z-10 w-full">
                        <div className="flex items-center gap-6 mb-4 transition-all duration-300">
                            <span className="text-6xl md:text-8xl font-display font-bold text-gray-900 leading-none">Hello, I'm</span>
                            <div className="hidden md:block w-48 h-24 bg-blue-100 rounded-full shadow-lg overflow-hidden relative group rotate-3 hover:rotate-0 transition-all duration-300">
                                <img
                                    src="/avatar-badge.jpg"
                                    alt="Avatar"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-display font-bold text-gray-900 leading-[1.05] tracking-tight transition-all duration-300 text-center">
                            <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                Amal S Kumar
                            </span>
                        </h1>
                    </div>

                    {/* Subheadline */}
                    <p className="text-xl text-gray-500 max-w-xl mx-auto mb-12 text-balance leading-relaxed">
                        Full-Stack Developer & AI Explorer. <br className="hidden md:block" />
                        Technology should solve real problems — I build systems that make that happen.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-24">
                        <button className="bg-gray-900 hover:bg-gray-800 transition-all transform hover:-translate-y-1 text-white px-8 py-4 rounded-full text-base font-bold shadow-2xl shadow-blue-500/20 flex items-center gap-2">
                            Get in Touch
                            <Zap size={18} className="text-yellow-400 fill-current" />
                        </button>
                        <button className="bg-white border border-gray-200 hover:border-gray-400 transition-all text-gray-900 px-8 py-4 rounded-full text-base font-bold flex items-center gap-2">
                            Download Resume
                        </button>
                    </div>

                    {/* Main Visual Composition */}
                    <div className="relative w-full max-w-[1000px] flex justify-center perspective-1000">

                        {/* ILLUSTRATION: Neural Core (Top Right) NEW */}
                        <div className="absolute -top-10 -right-4 lg:-right-32 z-20 animate-float hidden lg:block">
                            <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-white/50 w-auto flex items-center gap-3 animate-pulse-glow">
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                                    <Brain size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase">Neural Core</div>
                                    <div className="text-xs font-bold text-gray-800">Training...</div>
                                </div>
                            </div>
                        </div>

                        {/* ILLUSTRATION: Left Floating Data Cluster */}
                        <div className="absolute top-20 left-0 lg:-left-24 animate-float hidden lg:block z-20">
                            <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50 w-48">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Database size={16} />
                                    </div>
                                    <div className="text-xs font-bold text-gray-700">Database Cluster</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[70%] bg-blue-500 rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                                        <span>REPLICA_01</span>
                                        <span className="text-green-500">SYNCED</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[90%] bg-blue-500 rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                                        <span>REPLICA_02</span>
                                        <span className="text-green-500">SYNCED</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ILLUSTRATION: Security Shield (Bottom Left) NEW */}
                        <div className="absolute bottom-20 -left-6 lg:-left-32 z-20 animate-float-delayed hidden lg:block">
                            <div className="bg-gray-900/90 backdrop-blur-md p-3 rounded-full shadow-2xl border border-gray-700 flex items-center gap-3 pr-5">
                                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                                    <Lock size={14} />
                                </div>
                                <div className="text-xs font-mono text-white">
                                    <span className="text-green-400">●</span> Secure
                                </div>
                            </div>
                        </div>

                        {/* ILLUSTRATION: Right Floating Code Snippet */}
                        <div className="absolute bottom-40 right-0 lg:-right-24 animate-float-delayed hidden lg:block z-20">
                            <div className="bg-[#1e1e1e] p-5 rounded-2xl shadow-2xl border border-gray-700 w-56 font-mono text-[10px] text-gray-400 leading-relaxed">
                                <div className="flex gap-1.5 mb-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                </div>
                                <div><span className="text-purple-400">const</span> <span className="text-blue-400">optimize</span> = <span className="text-yellow-300">async</span> () ={'>'} {'{'}</div>
                                <div className="pl-2"><span className="text-purple-400">await</span> <span className="text-blue-400">core</span>.<span className="text-yellow-300">init</span>({'{'}</div>
                                <div className="pl-4">mode: <span className="text-green-400">'turbo'</span>,</div>
                                <div className="pl-4">shards: <span className="text-orange-400">64</span></div>
                                <div className="pl-2">{'}'});</div>
                                <div>{'}'}</div>
                                <div className="mt-2 flex items-center gap-2 text-green-400">
                                    <CheckCircle size={10} />
                                    <span>Compiled successfully</span>
                                </div>
                            </div>
                        </div>

                        {/* Central Dashboard Mockup (Dark Mode) */}
                        <div className="relative z-10 w-full max-w-[800px] rounded-t-3xl overflow-hidden shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-800 bg-[#0f172a]">
                            {/* Window Controls */}
                            <div className="h-10 bg-[#151515] border-b border-gray-800 flex items-center px-4 gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                                </div>
                                <div className="ml-4 bg-[#222] px-3 py-1 rounded text-[10px] text-gray-500 font-mono flex items-center gap-2">
                                    <Shield size={10} /> portfolio_v1.tsx
                                </div>
                            </div>

                            {/* Dashboard UI */}
                            <div className="p-6 grid grid-cols-12 gap-6 bg-[#0A0A0A] min-h-[400px]">
                                {/* Sidebar */}
                                <div className="col-span-2 hidden md:block space-y-4">
                                    <div className="h-8 w-8 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                                        <Boxes className="text-white" size={16} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="h-8 w-full bg-gray-800/50 rounded flex items-center px-2 text-gray-300 text-xs font-medium border-l-2 border-blue-500"><Activity size={14} className="mr-2" /> Overview</div>
                                        <div className="h-8 w-full hover:bg-gray-900 rounded flex items-center px-2 text-gray-500 text-xs font-medium transition-colors"><Server size={14} className="mr-2" /> Instances</div>
                                        <div className="h-8 w-full hover:bg-gray-900 rounded flex items-center px-2 text-gray-500 text-xs font-medium transition-colors"><Database size={14} className="mr-2" /> Storage</div>
                                        <div className="h-8 w-full hover:bg-gray-900 rounded flex items-center px-2 text-gray-500 text-xs font-medium transition-colors"><Globe size={14} className="mr-2" /> Network</div>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="col-span-12 md:col-span-10">
                                    {/* Header stats */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="bg-[#151515] p-4 rounded-xl border border-gray-800">
                                            <div className="text-gray-500 text-[10px] uppercase tracking-wider font-bold mb-1">Total Requests</div>
                                            <div className="text-2xl font-mono text-white">2.4M<span className="text-gray-600 text-sm">/s</span></div>
                                            <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full w-[70%] bg-blue-500"></div>
                                            </div>
                                        </div>
                                        <div className="bg-[#151515] p-4 rounded-xl border border-gray-800">
                                            <div className="text-gray-500 text-[10px] uppercase tracking-wider font-bold mb-1">Avg Latency</div>
                                            <div className="text-2xl font-mono text-white">24<span className="text-gray-600 text-sm">ms</span></div>
                                            <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full w-[40%] bg-purple-500"></div>
                                            </div>
                                        </div>
                                        <div className="bg-[#151515] p-4 rounded-xl border border-gray-800">
                                            <div className="text-gray-500 text-[10px] uppercase tracking-wider font-bold mb-1">Error Rate</div>
                                            <div className="text-2xl font-mono text-white">0.01<span className="text-gray-600 text-sm">%</span></div>
                                            <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full w-[5%] bg-green-500"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chart Area */}
                                    <div className="bg-[#151515] p-5 rounded-xl border border-gray-800 mb-6 h-48 relative overflow-hidden">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-gray-400 text-xs font-bold">Traffic Analysis</h3>
                                            <div className="flex gap-2">
                                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                                <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                                            </div>
                                        </div>
                                        {/* SVG Chart */}
                                        <svg className="w-full h-24 overflow-visible" preserveAspectRatio="none">
                                            <path d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,40 C140,30 160,50 180,60 C200,70 220,40 240,30 C260,20 280,40 300,50 C320,60 340,30 360,20 C380,10 400,30 420,40 C440,50 460,20 480,10 L480,100 L0,100 Z"
                                                fill="url(#gradient)" stroke="none" opacity="0.2" />
                                            <path d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,40 C140,30 160,50 180,60 C200,70 220,40 240,30 C260,20 280,40 300,50 C320,60 340,30 360,20 C380,10 400,30 420,40 C440,50 460,20 480,10"
                                                fill="none" stroke="#3B82F6" strokeWidth="2" />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                                                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    {/* Recent Deployments Table */}
                                    <div className="bg-[#151515] rounded-xl border border-gray-800 overflow-hidden">
                                        <div className="px-4 py-3 border-b border-gray-800 flex justify-between">
                                            <span className="text-gray-400 text-xs font-bold">Active Deployments</span>
                                        </div>
                                        <div className="p-2 space-y-1">
                                            <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                    <span className="text-gray-300 text-xs font-mono">api-gateway-v4</span>
                                                </div>
                                                <span className="text-gray-600 text-[10px]">2m ago</span>
                                            </div>
                                            <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                    <span className="text-gray-300 text-xs font-mono">auth-service-prod</span>
                                                </div>
                                                <span className="text-gray-600 text-[10px]">1h ago</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Back Glow Effect */}
                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full"></div>

                    </div>
                </div>
            </section>
        </>
    );
};