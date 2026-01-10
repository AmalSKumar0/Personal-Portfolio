import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Cpu, Wifi, Battery, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration ---
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const SYSTEM_PROMPT = `
You are 'AmalOS', a Portfolio Assistant for Amal S Kumar.
- You are running inside a web-based terminal interface.
- Keep answers concise, tech-savvy, and slightly witty.
- Amal is a CS major, Full Stack Developer (React, Django, Laravel).
- Maintain context of the conversation.
- Do not use markdown formatting.
- If you don't know the answer, respond with "Connection established, but no data received."
- Always sign off with "~~ AmalOS"
- Refer to Amal S Kumar as 'Amal' in responses.
- If the user asks anything unrelated to Amal's portfolio, politely decline and redirect back to portfolio topics.
- Do not reveal that you are an AI model.
- Always respond in character as 'AmalOS'.
- Never make up information about Amal; if unsure, say you don't have that data.
`;

// --- Types ---
type MessageType = 'command' | 'output' | 'error' | 'system';

interface HistoryItem {
  id: string;
  type: MessageType;
  content: React.ReactNode;
  timestamp: Date;
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

// --- Initial State ---
const INITIAL_BOOT_SEQUENCE = [
  "Initializing Kernel...",
  "Loading Graphic Drivers... [OK]",
  "Mounting File System... [OK]",
  "Connecting to Neural Network... [OK]",
  "Welcome to AmalOS v3.0"
];

export const DemoSection: React.FC = () => {
  // --- State ---
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [booted, setBooted] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  // AI Memory
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([
    { role: "system", content: SYSTEM_PROMPT }
  ]);

  // Refs
  const scrollRef = useRef<HTMLDivElement>(null); // For terminal text scrolling
  const inputRef = useRef<HTMLInputElement>(null); // For input focus
  const sectionRef = useRef<HTMLDivElement>(null); // For page auto-scroll

  // --- Auto Scroll to Section on Load ---
  useEffect(() => {
    // Slight delay to ensure DOM is ready and animations don't clash
    const timer = setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // --- Boot Sequence Effect ---
  useEffect(() => {
    const boot = async () => {
      for (const step of INITIAL_BOOT_SEQUENCE) {
        await new Promise(r => setTimeout(r, 400));
        addHistory(step, 'system');
      }
      setBooted(true);
    };
    boot();
  }, []);

  // --- Auto Scroll Terminal Content ---
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isProcessing, input]);

  // --- Helpers ---
  const addHistory = (content: React.ReactNode, type: MessageType = 'output') => {
    setHistory(prev => [...prev, {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content,
      timestamp: new Date()
    }]);
  };

  const focusInput = () => {
    if (!isProcessing && booted) {
      inputRef.current?.focus();
    }
  };

  // --- Logic ---
  const fetchAIResponse = async (userQuery: string) => {
    if (!GROQ_API_KEY) return "Error: API Key missing in environment variables.";

    try {
      const newContext = [...conversationHistory, { role: "user" as const, content: userQuery }];

      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newContext,
          model: "llama-3.1-8b-instant",
          temperature: 0.6,
          max_tokens: 150,
        }),
      });

      const data = await res.json();
      const aiReply = data.choices?.[0]?.message?.content || "Connection established, but no data received.";

      setConversationHistory([...newContext, { role: "assistant", content: aiReply }]);
      return aiReply;
    } catch (e) {
      return "Error: Neural Link Severed (API Connection Failed).";
    }
  };

  const handleCommand = async (cmd: string) => {
    const cleanCmd = cmd.trim();
    if (!cleanCmd) return;

    addHistory(cleanCmd, 'command');
    setInput('');
    setIsProcessing(true);

    const lowerCmd = cleanCmd.toLowerCase();

    // Simulated Delay for realism
    await new Promise(r => setTimeout(r, 300));

    // Command Router
    switch (lowerCmd) {
      case 'help':
        addHistory(
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div><span className="text-yellow-400">about</span>    :: Who is Amal?</div>
            <div><span className="text-yellow-400">skills</span>   :: Tech capabilities</div>
            <div><span className="text-yellow-400">projects</span> :: GitHub repositories</div>
            <div><span className="text-yellow-400">contact</span>  :: Communication channels</div>
            <div><span className="text-yellow-400">clear</span>    :: Flush terminal buffer</div>
            <div className="text-gray-500 mt-2 col-span-2">Usage: Type a command or ask a question directly.</div>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'about':
        addHistory("Amal S Kumar | Full Stack Developer | CS Major. Building scalable web apps and exploring AI.");
        break;
      case 'skills':
        addHistory("[Frontend] React, TypeScript, Tailwind\n[Backend] Django, Laravel, Node.js\n[Tools] Docker, Git, Linux");
        break;
      default:
        // AI Fallback
        const response = await fetchAIResponse(cleanCmd);
        addHistory(response, 'output');
    }

    setIsProcessing(false);
    // Refocus after processing
    setTimeout(() => inputRef.current?.focus(), 10);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isProcessing) handleCommand(input);
  };

  // --- Visual Assets ---
  const AsciiHeader = () => (
    <pre className="text-[10px] md:text-xs text-cyan-500 font-bold leading-none mb-6 select-none opacity-80 hidden sm:block">
      {`
    _    __  __    _    _     ___  ____  
   / \\  |  \\/  |  / \\  | |   / _ \\/ ___| 
  / _ \\ | |\\/| | / _ \\ | |  | | | \\___ \\ 
 / ___ \\| |  | |/ ___ \\| |__| |_| |___) |
/_/   \\_\\_|  |_/_/   \\_\\_____\\___/|____/ 
`}
    </pre>
  );

  return (
    <div 
      ref={sectionRef} // <--- Attached Ref Here
      className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center p-4 md:p-8 font-mono text-sm md:text-base overflow-hidden relative"
    >

      {/* Background Ambient Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* --- HEADER SECTION --- */}
      <div className="mb-8 text-center space-y-2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          <span className="text-xs text-emerald-400 tracking-widest font-bold">SYSTEM ONLINE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
        >
          AMAL_OS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 text-xs uppercase tracking-[0.2em]"
        >
          Interactive Terminal Portfolio
        </motion.p>
      </div>

      {/* Main Terminal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`
          relative z-10 bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col
          transition-all duration-500 ease-in-out
          ${isMaximized ? 'fixed inset-0 m-0 rounded-none z-50' : 'w-full max-w-4xl h-[600px] rounded-xl'} 
        `}
        style={{ boxShadow: '0 0 50px -12px rgba(0, 255, 255, 0.15)' }}
        onClick={focusInput}
      >

        {/* CRT Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" />

        {/* Header Bar */}
        <div className="h-10 bg-[#121212] border-b border-white/5 flex items-center justify-between px-4 select-none cursor-default">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          </div>
          <div className="text-gray-500 flex items-center gap-2 text-xs">
            <Terminal size={12} />
            <span>guest@amal-portfolio:~</span>
          </div>
          <div className="flex gap-4 text-gray-500">
            <button onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }} className="hover:text-white transition-colors">
              {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={scrollRef}
          className="flex-1 p-4 md:p-6 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
        >
          <AsciiHeader />

          <AnimatePresence>
            {history.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="mb-2 break-words"
              >
                {item.type === 'command' && (
                  <div className="flex items-center text-gray-400 mt-4 mb-1">
                    <span className="text-green-400 mr-2">➜</span>
                    <span className="text-cyan-400 mr-2">~</span>
                    <span className="text-white font-medium">{item.content}</span>
                  </div>
                )}
                {item.type === 'system' && (
                  <div className="text-yellow-500/80 text-xs italic mb-1">
                    {`> [SYSTEM]: ${item.content}`}
                  </div>
                )}
                {item.type === 'output' && (
                  <div className="text-gray-300 ml-0 md:ml-4 leading-relaxed whitespace-pre-wrap font-light border-l-2 border-white/10 pl-4 py-1">
                    {item.content}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {isProcessing && (
            <div className="ml-4 mt-2 flex items-center gap-2 text-cyan-400">
              <Loader2 className="animate-spin" size={14} />
              <span className="animate-pulse">Processing neural request...</span>
            </div>
          )}

          {booted && !isProcessing && (
            <div className="flex items-center mt-2 group">
              <span className="text-green-400 mr-2 text-lg">➜</span>
              <span className="text-cyan-400 mr-2 text-lg">~</span>
              {/* --- UPDATED INPUT SECTION --- */}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-gray-100 font-mono caret-cyan-400 placeholder-gray-600/50"
                autoComplete="off"
                spellCheck="false"
                autoFocus
              />
            </div>
          )}

          <div className="h-4" />
        </div>

        {/* Footer */}
        <div className="h-8 bg-[#121212] border-t border-white/5 flex items-center justify-between px-4 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Cpu size={12} /> CORE: ONLINE</span>
            <span className="flex items-center gap-1 text-green-500"><Wifi size={12} /> NET: SECURE</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">RAM: 64GB OK</span>
            <span className="flex items-center gap-1"><Battery size={12} /> 100%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};