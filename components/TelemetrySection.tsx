import React from 'react';
import { 
  Brain, Database, Activity, Server, Globe, Trophy, 
  GraduationCap, Briefcase, Terminal, Cpu, ArrowUpRight,
  GitCommit, Layers, Command, Zap
} from 'lucide-react';

export const TelemetrySection = () => {
  return (
    <div className="py-24 px-4 sm:px-6 relative overflow-hidden bg-slate-50 min-h-screen flex flex-col items-center justify-center font-sans">

      {/* --- BACKGROUND: Professional Dot Grid --- */}
      <div className="absolute inset-0 z-0 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
             backgroundSize: '24px 24px',
             opacity: 0.4
           }}>
      </div>
      
      {/* --- BACKGROUND: Ambient Glows --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

      <div className="relative w-full max-w-6xl mx-auto z-10">
        
        {/* --- MAIN DASHBOARD CONTAINER --- */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
          
          {/* --- TOP BAR --- */}
          <div className="h-16 border-b border-slate-100 flex items-center justify-between px-6 sm:px-8 bg-white/50">
             <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                </div>
                <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200">
                  <Terminal size={12} className="text-slate-400" />
                  <span className="text-xs font-semibold text-slate-600 font-mono">amal_portfolio_v2.1</span>
                </div>
             </div>
             
             <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-xs font-medium text-slate-500">System Status:</span>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Operational</span>
                </div>
             </div>
          </div>

          {/* --- DASHBOARD GRID LAYOUT --- */}
          <div className="flex flex-col md:flex-row h-full">
            
            {/* --- SIDEBAR RAIL --- */}
            <div className="w-full md:w-20 border-r border-slate-100 bg-slate-50/50 flex md:flex-col items-center py-4 md:py-8 gap-6 justify-center md:justify-start overflow-x-auto md:overflow-visible">
               <div className="p-2 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20 mb-0 md:mb-4 shrink-0">
                  <Command size={20} />
               </div>
               {[Activity, Server, Database, Layers, Globe].map((Icon, i) => (
                 <button key={i} className={`p-2 rounded-lg transition-all duration-200 shrink-0 ${i === 0 ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'}`}>
                   <Icon size={20} />
                 </button>
               ))}
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="flex-1 p-6 sm:p-8 bg-slate-50/30">
              
              {/* GRID: Bento Box Style */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* 1. HERO STATS (Spans full width) */}
                <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                   <StatCard 
                      icon={GitCommit} label="Total Contributions" value="3,482" sub="Top 1% this year" 
                      color="text-blue-600" bg="bg-blue-50" border="group-hover:border-blue-200"
                   />
                   <StatCard 
                      icon={Layers} label="Projects Shipped" value="24" sub="7 Enterprise Grade" 
                      color="text-purple-600" bg="bg-purple-50" border="group-hover:border-purple-200"
                   />
                   <StatCard 
                      icon={Zap} label="Current Streak" value="18 Days" sub="Active Development" 
                      color="text-amber-600" bg="bg-amber-50" border="group-hover:border-amber-200"
                   />
                </div>

                {/* 2. MAIN GRAPH (Spans 8 cols) */}
                <div className="md:col-span-8 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-slate-800 font-bold text-base">Activity Frequency</h3>
                        <p className="text-xs text-slate-400 mt-1">Commit history over last 6 months</p>
                      </div>
                      <select className="text-xs border border-slate-200 rounded-md px-2 py-1 text-slate-500 bg-slate-50 outline-none">
                        <option>This Year</option>
                        <option>Last Year</option>
                      </select>
                   </div>
                   
                   {/* Styled Graph */}
                   <div className="relative h-32 w-full">
                      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 30">
                         <defs>
                            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
                               <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                            </linearGradient>
                         </defs>
                         <path d="M0,30 L0,25 C10,25 10,15 20,18 C30,21 30,28 40,25 C50,22 50,5 60,10 C70,15 70,20 80,18 C90,16 90,8 100,12 L100,30 Z" fill="url(#blueGradient)" />
                         <path d="M0,25 C10,25 10,15 20,18 C30,21 30,28 40,25 C50,22 50,5 60,10 C70,15 70,20 80,18 C90,16 90,8 100,12" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                      </svg>
                      
                      {/* Interactive Tooltip Simulation */}
                      <div className="absolute top-1/3 left-[60%] w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform"></div>
                      <div className="absolute top-[10%] left-[60%] transform -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                         High Intensity
                      </div>
                   </div>
                </div>

                {/* 3. SKILL CLUSTER (Spans 4 cols) */}
                <div className="md:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                         <Brain size={18} />
                      </div>
                      <h3 className="text-slate-800 font-bold text-sm">Tech Composition</h3>
                   </div>
                   
                   <div className="space-y-4">
                      <SkillBar label="Backend (Go/Django)" percent="92%" color="bg-indigo-500" />
                      <SkillBar label="Frontend (React/TS)" percent="85%" color="bg-blue-500" />
                      <SkillBar label="DevOps (Docker/AWS)" percent="65%" color="bg-slate-400" />
                   </div>
                </div>

                {/* 4. CODE SNIPPET / CONFIG (Spans 5 cols) */}
                <div className="md:col-span-5 bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-sm relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Cpu size={64} className="text-white" />
                   </div>
                   <div className="flex gap-1.5 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                   </div>
                   <div className="font-mono text-[11px] text-slate-300 leading-relaxed">
                      <div><span className="text-purple-400">const</span> <span className="text-blue-400">devProfile</span> = {'{'}</div>
                      <div className="pl-4">role: <span className="text-emerald-400">'Full Stack Engineer'</span>,</div>
                      <div className="pl-4">openToWork: <span className="text-amber-400">true</span>,</div>
                      <div className="pl-4">location: <span className="text-emerald-400">'Remote / Hybrid'</span></div>
                      <div>{'};'}</div>
                   </div>
                   <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
                      <div className="text-[10px] text-slate-500 font-mono">config.json</div>
                      <div className="text-[10px] text-emerald-500 font-mono flex items-center gap-1">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                         Loaded
                      </div>
                   </div>
                </div>

                {/* 5. MILESTONES (Spans 7 cols) */}
                <div className="md:col-span-7 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-center mb-4">
                      <h3 className="text-slate-800 font-bold text-sm">Recent Milestones</h3>
                      <button className="text-[10px] font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1 rounded-full transition-colors">View All</button>
                   </div>
                   
                   <div className="space-y-3">
                      <MilestoneItem 
                         icon={Trophy} title="NASA Space Apps Nominee" role="Team Lead" year="2025" 
                         bg="bg-amber-50" color="text-amber-600"
                      />
                      <MilestoneItem 
                         icon={GraduationCap} title="Masters in Computer Applications" role="3.9 GPA" year="Present" 
                         bg="bg-blue-50" color="text-blue-600"
                      />
                      <MilestoneItem 
                         icon={Briefcase} title="Freelance Senior Developer" role="Full Stack" year="Active" 
                         bg="bg-purple-50" color="text-purple-600"
                      />
                   </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- SUB-COMPONENTS for Cleanliness --- */

const StatCard = ({ icon: Icon, label, value, sub, color, bg, border }) => (
  <div className={`bg-white p-5 rounded-2xl border border-slate-100 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${border}`}>
     <div className="flex items-start justify-between mb-2">
        <div className={`p-2.5 rounded-xl ${bg} ${color}`}>
           <Icon size={20} />
        </div>
        <ArrowUpRight size={16} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
     </div>
     <div className="mt-2">
        <div className="text-2xl font-bold text-slate-800 tracking-tight">{value}</div>
        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mt-1">{label}</div>
        <div className="text-[10px] font-medium text-slate-400 mt-2 pt-2 border-t border-slate-50">{sub}</div>
     </div>
  </div>
);

const SkillBar = ({ label, percent, color }) => (
  <div>
    <div className="flex justify-between text-[11px] font-semibold text-slate-500 mb-1.5">
       <span>{label}</span>
       <span className="text-slate-900">{percent}</span>
    </div>
    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
       <div className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`} style={{width: percent}}></div>
    </div>
  </div>
);

const MilestoneItem = ({ icon: Icon, title, role, year, bg, color }) => (
  <div className="group flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
     <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg ${bg} ${color} flex items-center justify-center shrink-0`}>
           <Icon size={18} />
        </div>
        <div>
           <div className="text-sm font-bold text-slate-800">{title}</div>
           <div className="text-xs text-slate-500 font-medium">{role}</div>
        </div>
     </div>
     <div className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-white group-hover:shadow-sm transition-all">
        {year}
     </div>
  </div>
);