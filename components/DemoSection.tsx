import React from 'react';
import { Layout, Terminal, Code2, Cpu, X, Maximize2, GitBranch, PlayCircle, Command, CheckCircle } from 'lucide-react';

export const DemoSection: React.FC = () => {
  return (
    <section className="bg-tech-black text-white rounded-t-[3rem] pt-24 pb-32 relative overflow-hidden -mt-10 z-20 border-t border-white/5">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-mono text-gray-300">System Operational</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-sans font-bold mb-8 tracking-tight">
          Code that <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">speaks for itself.</span>
        </h2>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          We maintain a library of proprietary modules and dev-tools to accelerate delivery without compromising quality.
        </p>

        {/* Code Editor Container */}
        <div className="relative max-w-5xl mx-auto perspective-1000">
            
            {/* Main Window */}
            <div className="bg-[#151515] rounded-xl border border-gray-800 shadow-2xl overflow-hidden relative group">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Header */}
                <div className="bg-[#0A0A0A] px-4 py-3 flex items-center justify-between border-b border-gray-800 relative z-10">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-mono bg-[#111] px-3 py-1 rounded border border-gray-800">
                        <Command size={10} />
                        deployment_pipeline.yml
                    </div>
                    <div className="w-10"></div> 
                </div>

                {/* Editor Content */}
                <div className="grid md:grid-cols-12 min-h-[500px] text-left relative z-10">
                    {/* Line Numbers */}
                    <div className="col-span-1 hidden md:block bg-[#0A0A0A] border-r border-gray-800 p-4 text-right font-mono text-xs text-gray-600 select-none">
                        {[...Array(20)].map((_, i) => <div key={i}>{i + 1}</div>)}
                    </div>

                    {/* Code Area */}
                    <div className="col-span-12 md:col-span-11 bg-[#0E0E0E] p-6 font-mono text-sm overflow-hidden">
                        
                        <div className="space-y-2 leading-relaxed">
                            <div className="text-gray-500"># Production Deployment Workflow</div>
                            <div><span className="text-purple-400">name:</span> <span className="text-green-400">Deploy to Production</span></div>
                            <br/>
                            <div><span className="text-purple-400">on:</span></div>
                            <div className="pl-4"><span className="text-purple-400">push:</span></div>
                            <div className="pl-8"><span className="text-purple-400">branches:</span> [<span className="text-green-400">"main"</span>]</div>
                            <br/>
                            <div><span className="text-purple-400">jobs:</span></div>
                            <div className="pl-4"><span className="text-blue-400">build-and-deploy:</span></div>
                            <div className="pl-8"><span className="text-purple-400">runs-on:</span> <span className="text-green-400">ubuntu-latest</span></div>
                            <div className="pl-8"><span className="text-purple-400">steps:</span></div>
                            
                            {/* Animated Typing Effect Mock */}
                            <div className="pl-12 flex items-center gap-2">
                                <span className="text-gray-400">- name:</span> 
                                <span className="text-green-400">Checkout Code</span>
                            </div>
                            <div className="pl-12 flex items-center gap-2">
                                <span className="text-gray-400">- name:</span> 
                                <span className="text-green-400">Install Dependencies</span>
                            </div>
                             <div className="pl-12 flex items-center gap-2">
                                <span className="text-gray-400">- name:</span> 
                                <span className="text-green-400">Run Test Suite</span>
                            </div>
                            <div className="pl-12 flex items-center gap-2 relative">
                                <span className="text-gray-400">- name:</span> 
                                <span className="text-neon-blue font-bold">Deploy to Edge Network</span>
                                <span className="w-2 h-4 bg-neon-blue animate-pulse ml-1"></span>
                            </div>
                        </div>

                        {/* Floating Success Toast */}
                        <div className="absolute bottom-8 right-8 bg-[#1A1A1A] p-4 rounded-lg shadow-2xl border-l-4 border-green-500 flex items-center gap-4 animate-float">
                            <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                                <CheckCircle size={16} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-white">Deployment Successful</div>
                                <div className="text-[10px] text-gray-500">v2.4.0 live in 12 regions</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* Decorative Elements around editor */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-neon-cyan/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-neon-purple/20 rounded-full blur-xl animate-pulse delay-75"></div>

        </div>
      </div>
    </section>
  );
};