import React from 'react';
import { Server, Database, Cloud, Code, Shield, Terminal, Activity, Zap, Layers, Globe, Cpu, CheckCircle, Boxes } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-gray-50 min-h-screen flex flex-col items-center">
      
      {/* Abstract Perspective Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
      
      {/* Geometric Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
          <svg className="absolute top-0 right-[-20%] w-[800px] h-[800px] opacity-30 text-neon-purple animate-spin-slow" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
              <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full pl-2 pr-4 py-1.5 mb-8 shadow-sm hover:shadow-md transition-all cursor-default">
           <div className="bg-tech-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">New</div>
           <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
              Enterprise Cloud Solutions <span className="text-gray-300">|</span> <span className="text-neon-blue">v2.0 Live</span>
           </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-sans font-bold text-tech-black leading-[1.05] tracking-tight mb-8">
          Build the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan">
             impossible.
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl text-gray-500 max-w-xl mx-auto mb-12 text-balance leading-relaxed">
          We engineer mission-critical software ecosystems. <br className="hidden md:block"/>
          From neural networks to distributed cloud architectures.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-24">
            <button className="bg-tech-black hover:bg-gray-800 transition-all transform hover:-translate-y-1 text-white px-8 py-4 rounded-full text-base font-bold shadow-2xl shadow-neon-blue/20 flex items-center gap-2">
            Start Building
            <Zap size={18} className="text-yellow-400 fill-current" />
            </button>
            <button className="bg-white border border-gray-200 hover:border-gray-400 transition-all text-gray-900 px-8 py-4 rounded-full text-base font-bold flex items-center gap-2">
            View Case Studies
            </button>
        </div>

        {/* Main Visual Composition */}
        <div className="relative w-full max-w-[1000px] flex justify-center perspective-1000">
            
            {/* ILLUSTRATION: Left Floating Data Cluster */}
            <div className="absolute top-20 left-0 lg:-left-24 animate-float hidden lg:block z-20">
                <div className="glass-panel p-4 rounded-2xl shadow-2xl border border-white/50 w-48">
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

            {/* ILLUSTRATION: Right Floating Code Snippet */}
            <div className="absolute bottom-40 right-0 lg:-right-24 animate-float-delayed hidden lg:block z-20">
                <div className="bg-[#1e1e1e] p-5 rounded-2xl shadow-2xl border border-gray-700 w-56 font-mono text-[10px] text-gray-400 leading-relaxed">
                    <div className="flex gap-1.5 mb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">optimize</span> = <span className="text-yellow-300">async</span> () =&gt; {'{'}</div>
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

            {/* Central Dashboard Mockup (Dark Mode for High Tech feel) */}
            <div className="relative z-10 w-full max-w-[800px] rounded-t-3xl overflow-hidden shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-200 bg-tech-dark">
                {/* Window Controls */}
                <div className="h-10 bg-[#151515] border-b border-gray-800 flex items-center px-4 gap-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                    </div>
                    <div className="ml-4 bg-[#222] px-3 py-1 rounded text-[10px] text-gray-500 font-mono flex items-center gap-2">
                        <Shield size={10} /> admin_panel.tsx
                    </div>
                </div>

                {/* Dashboard UI */}
                <div className="p-6 grid grid-cols-12 gap-6 bg-[#0A0A0A] min-h-[400px]">
                    {/* Sidebar */}
                    <div className="col-span-2 hidden md:block space-y-4">
                        <div className="h-8 w-8 bg-neon-blue rounded-lg mb-6 flex items-center justify-center">
                            <Boxes className="text-white" size={16}/>
                        </div>
                        <div className="space-y-1">
                            <div className="h-8 w-full bg-gray-800/50 rounded flex items-center px-2 text-gray-300 text-xs font-medium border-l-2 border-neon-blue"><Activity size={14} className="mr-2"/> Overview</div>
                            <div className="h-8 w-full hover:bg-gray-900 rounded flex items-center px-2 text-gray-500 text-xs font-medium transition-colors"><Server size={14} className="mr-2"/> Instances</div>
                            <div className="h-8 w-full hover:bg-gray-900 rounded flex items-center px-2 text-gray-500 text-xs font-medium transition-colors"><Database size={14} className="mr-2"/> Storage</div>
                            <div className="h-8 w-full hover:bg-gray-900 rounded flex items-center px-2 text-gray-500 text-xs font-medium transition-colors"><Globe size={14} className="mr-2"/> Network</div>
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
                                    <div className="h-full w-[70%] bg-neon-blue"></div>
                                </div>
                            </div>
                            <div className="bg-[#151515] p-4 rounded-xl border border-gray-800">
                                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-bold mb-1">Avg Latency</div>
                                <div className="text-2xl font-mono text-white">24<span className="text-gray-600 text-sm">ms</span></div>
                                <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[40%] bg-neon-purple"></div>
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
                                    <span className="w-2 h-2 rounded-full bg-neon-blue"></span>
                                    <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                                </div>
                            </div>
                            {/* SVG Chart */}
                            <svg className="w-full h-24 overflow-visible" preserveAspectRatio="none">
                                <path d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,40 C140,30 160,50 180,60 C200,70 220,40 240,30 C260,20 280,40 300,50 C320,60 340,30 360,20 C380,10 400,30 420,40 C440,50 460,20 480,10 L480,100 L0,100 Z" 
                                      fill="url(#gradient)" stroke="none" opacity="0.2"/>
                                <path d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,40 C140,30 160,50 180,60 C200,70 220,40 240,30 C260,20 280,40 300,50 C320,60 340,30 360,20 C380,10 400,30 420,40 C440,50 460,20 480,10" 
                                      fill="none" stroke="#3B82F6" strokeWidth="2"/>
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5"/>
                                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
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
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-b from-neon-blue/20 to-neon-purple/20 blur-3xl -z-10 rounded-full"></div>

        </div>
      </div>

       <style>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
};