import React, { useState, useRef, useEffect } from 'react';
import { TerminalSquare, CheckCircle, X, Loader2 } from 'lucide-react';

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
`;

// Types
type HistoryItem = {
    type: 'command' | 'output';
    content: React.ReactNode;
};

// Type for the AI memory
type ChatMessage = {
    role: "user" | "assistant" | "system";
    content: string;
};

const INITIAL_HISTORY: HistoryItem[] = [
    { type: 'output', content: 'Welcome to AmalOS v2.5.0 (Ubuntu 22.04.1 LTS)' },
    { type: 'output', content: 'Type "help" to see available commands.' },
];

export const DemoSection: React.FC = () => {
    // UI State
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<HistoryItem[]>(INITIAL_HISTORY);
    const [showToast, setShowToast] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    
    // AI Memory State (Hidden from UI, used for Logic)
    const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([
        { role: "system", content: SYSTEM_PROMPT }
    ]);
    
    // Refs
    const terminalBodyRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll
    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [history, isProcessing]);

    const handleTerminalClick = () => {
        if (!isProcessing) inputRef.current?.focus();
    };

    // --- AI Integration (Now supports History) ---
    const fetchGroqResponse = async (currentContext: ChatMessage[]) => {
        try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${GROQ_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: currentContext, // Send full history
                    model: "llama-3.1-8b-instant",
                    temperature: 0.7,
                    max_tokens: 200,
                }),
            });

            const data = await response.json();
            return data.choices?.[0]?.message?.content || "Connection established, but no data received.";
        } catch (error) {
            console.error(error);
            return "Error: Could not connect to remote neural link.";
        }
    };

    // --- Command Handler ---
    const handleCommand = async (cmd: string) => {
        const cleanCmd = cmd.trim();
        if (!cleanCmd) return;

        // 1. Update UI History immediately
        const newHistory = [...history, { type: 'command' as const, content: cleanCmd }];
        setHistory(newHistory);
        setInput('');
        setIsProcessing(true);

        const lowerCmd = cleanCmd.toLowerCase();

        // 2. CHECK HARDCODED COMMANDS (Fast Path)
        if (['help', 'about', 'skills', 'projects', 'deploy', 'clear'].includes(lowerCmd)) {
            let outputContent: React.ReactNode = null;
            let shouldClear = false;

            // (Your existing switch case logic here...)
            switch (lowerCmd) {
                case 'help':
                    outputContent = (
                        <div className="grid grid-cols-1 gap-1 text-gray-300">
                            <div><span className="text-yellow-400">about</span> - Who am I?</div>
                            <div><span className="text-yellow-400">skills</span> - Tech stack info</div>
                            <div><span className="text-yellow-400">clear</span> - Clear terminal</div>
                            <div className="text-gray-500 mt-2 text-xs">...or chat with AI.</div>
                        </div>
                    );
                    break;
                case 'about':
                    outputContent = 'Full Stack Developer based in India.';
                    break;
                case 'skills':
                    outputContent = '[ Frontend ] React, TypeScript\n[ Backend ] Node.js, Python';
                    break;
                case 'clear':
                    shouldClear = true;
                    break;
                // ... Add other cases back
            }

            setTimeout(() => {
                if (shouldClear) {
                    setHistory([]);
                } else if (outputContent) {
                    setHistory(prev => [...prev, { type: 'output', content: outputContent }]);
                }
                setIsProcessing(false);
                setTimeout(() => inputRef.current?.focus(), 10);
            }, 300);

        } else {
            // 3. AI CHAT PATH (With Memory)
            
            // Create a temporary context that includes the new user message
            const newContext: ChatMessage[] = [
                ...conversationHistory, 
                { role: "user", content: cleanCmd }
            ];

            // Fetch response using the FULL context
            const aiResponse = await fetchGroqResponse(newContext);
            
            // Update UI
            setHistory(prev => [...prev, { 
                type: 'output', 
                content: <span className="text-neon-cyan">{aiResponse}</span> 
            }]);

            // Update AI Memory (Save User Input + AI Response)
            setConversationHistory([
                ...newContext,
                { role: "assistant", content: aiResponse }
            ]);
            
            setIsProcessing(false);
            setTimeout(() => inputRef.current?.focus(), 10);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isProcessing) {
            handleCommand(input);
        }
    };

    return (
        <section className="bg-tech-black text-white rounded-t-[3rem] pt-24 pb-32 relative overflow-hidden -mt-10 z-20 border-t border-white/5">
             {/* ... (Keep your existing JSX layout exactly the same) ... */}
             
             {/* --- Terminal Container --- */}
             <div className="relative max-w-5xl mx-auto perspective-1000">
                <div className="bg-[#151515] rounded-xl border border-gray-800 shadow-2xl overflow-hidden relative group text-left cursor-text" onClick={handleTerminalClick}>
                    
                    {/* Header */}
                    <div className="bg-[#0A0A0A] px-4 py-3 flex items-center justify-between border-b border-gray-800 relative z-10">
                         <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 font-mono select-none">
                            <TerminalSquare size={12} className="text-gray-500" />
                            visitor@portfolio: ~
                        </div>
                        <div className="w-10"></div>
                    </div>

                    {/* Body */}
                    <div ref={terminalBodyRef} className="bg-[#0E0E0E] p-6 font-mono text-sm min-h-[500px] max-h-[500px] overflow-y-auto text-gray-300 relative z-10 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                        
                        {/* History Map */}
                        {history.map((item, index) => (
                            <div key={index} className="mb-2 break-words">
                                {item.type === 'command' ? (
                                    <div className="flex items-center text-gray-100">
                                        <span className="text-green-400 mr-2">visitor@portfolio</span>
                                        <span className="text-gray-500 mr-2">:</span>
                                        <span className="text-blue-400 mr-2">~</span>
                                        <span className="text-gray-500 mr-2">$</span>
                                        {item.content}
                                    </div>
                                ) : (
                                    <div className="text-gray-400 ml-4 whitespace-pre-wrap leading-relaxed">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Loader */}
                        {isProcessing && (
                            <div className="ml-4 text-neon-cyan animate-pulse flex items-center gap-2 mb-2">
                                <Loader2 size={14} className="animate-spin" />
                                <span>Thinking...</span>
                            </div>
                        )}

                        {/* Input */}
                        {!isProcessing && (
                            <div className="flex items-center text-gray-100">
                                <span className="text-green-400 mr-2">visitor@portfolio</span>
                                <span className="text-gray-500 mr-2">:</span>
                                <span className="text-blue-400 mr-2">~</span>
                                <span className="text-gray-500 mr-2">$</span>
                                <div className="relative flex-1">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="absolute inset-0 w-full opacity-0 cursor-text bg-transparent border-none outline-none -ml-10 h-full"
                                        autoComplete="off"
                                        autoFocus
                                    />
                                    <span>{input}<span className="inline-block w-2.5 h-5 bg-gray-400 ml-0.5 align-middle animate-pulse"></span></span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
             </div>
        </section>
    );
};