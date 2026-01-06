import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
    const [text, setText] = useState('');
    const fullText = 'SYSTEM INITIALIZATION...';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-tech-black text-flow-cyan font-mono overflow-hidden">
            <div className="relative w-64 h-64 flex items-center justify-center mb-8">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-4 border-flow-purple/30 rounded-full animate-spin-slow border-t-flow-purple" />

                {/* Middle Ring */}
                <div className="absolute inset-4 border-4 border-flow-cyan/30 rounded-full animate-spin-reverse border-b-flow-cyan" />

                {/* Inner Ring */}
                <div className="absolute inset-8 border-2 border-white/10 rounded-full animate-pulse" />

                {/* Core */}
                <div className="w-32 h-32 bg-flow-purple/10 rounded-full flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-flow-cyan/20 to-transparent animate-spin-slow" />
                    <span className="text-4xl font-bold animate-pulse text-flow-cyan">AI</span>
                </div>
            </div>

            <div className="h-8 flex items-center">
                <span className="text-xl tracking-widest">{text}</span>
                <span className="w-3 h-5 bg-flow-cyan ml-1 animate-blink" />
            </div>

            <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
        </div>
    );
};
