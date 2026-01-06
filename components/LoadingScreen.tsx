import React, { useEffect, useState } from 'react';
import { Satellite } from './Satellite';
import { CelestialBody } from './CelestialBody';

interface BackgroundBody {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  type: 'planet' | 'sun';
}

export const LoadingScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = 'www.amalskumar.co.in';
  const [backgrounds, setBackgrounds] = useState<BackgroundBody[]>([]);

  useEffect(() => {
    // Generate random celestial bodies
    const bg: BackgroundBody[] = [];
    const planetColors = ['#4B0082', '#00CED1', '#FF00FF', '#1E90FF', '#9370DB', '#00FA9A', '#FF6347', '#FFD700'];

    for (let i = 0; i < 8; i++) {
      bg.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 20 + Math.random() * 80,
        color: planetColors[Math.floor(Math.random() * planetColors.length)],
        type: Math.random() > 0.8 ? 'sun' : 'planet'
      });
    }
    setBackgrounds(bg);

    // Text typing effect
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-tech-black overflow-hidden selection:bg-neon-blue selection:text-white">

      {/* Background Orbs (Atmosphere) */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Random Celestial Bodies */}
      {backgrounds.map(bg => (
        <CelestialBody
          key={bg.id}
          type={bg.type}
          size={bg.size}
          color={bg.color}
          className="absolute opacity-40 animate-pulse"
          style={{ left: bg.x, top: bg.y, animationDuration: `${3 + Math.random() * 4}s` }}
        />
      ))}

      {/* Orbiting Satellite Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] animate-orbit-custom-loader">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 md:w-24 h-auto transform rotate-90">
            <Satellite className="w-full h-full drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]" />
          </div>
        </div>
      </div>

      {/* Typewriter Text */}
      <div className="flex items-center relative z-10 p-4">
        <span className="text-2xl md:text-3xl tracking-wider font-light text-[#00f3ff] drop-shadow-[0_0_8px_rgba(0,243,255,0.3)] font-mono">
          {text}
        </span>
        <span className="w-2 h-6 md:h-8 bg-[#00f3ff] ml-2 animate-blink shadow-[0_0_8px_rgba(0,243,255,0.5)]" />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes orbit-custom-loader {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .animate-orbit-custom-loader {
          animation: orbit-custom-loader 8s linear infinite;
        }
      `}</style>
    </div>
  );
};
