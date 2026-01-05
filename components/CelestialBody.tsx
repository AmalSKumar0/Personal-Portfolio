import React from 'react';

interface CelestialBodyProps {
    type: 'sun' | 'planet';
    size: number;
    color: string;
    style?: React.CSSProperties;
    className?: string;
}

export const CelestialBody = React.memo<CelestialBodyProps>(({ type, size, color, style, className }) => {
    return (
        <div className={className} style={{ ...style, width: size, height: size }}>
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                {type === 'sun' && (
                    <g>
                        {/* Core */}
                        <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="1" />
                        <circle cx="50" cy="50" r="25" fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="2 2" />

                        {/* Rays */}
                        <g stroke={color} strokeWidth="0.5" strokeLinecap="round">
                            <line x1="50" y1="10" x2="50" y2="5" />
                            <line x1="50" y1="90" x2="50" y2="95" />
                            <line x1="10" y1="50" x2="5" y2="50" />
                            <line x1="90" y1="50" x2="95" y2="50" />

                            <line x1="22" y1="22" x2="18" y2="18" />
                            <line x1="78" y1="78" x2="82" y2="82" />
                            <line x1="22" y1="78" x2="18" y2="82" />
                            <line x1="78" y1="22" x2="82" y2="18" />
                        </g>

                        {/* Glow Halo */}
                        <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="0.2" opacity="0.5" strokeDasharray="5 5" />
                    </g>
                )}

                {type === 'planet' && (
                    <g>
                        {/* Body */}
                        <circle cx="50" cy="50" r="25" fill="none" stroke={color} strokeWidth="1.5" />

                        {/* Surface Pattern (stripes/craters) */}
                        <path d="M 30 40 Q 50 45 70 40" fill="none" stroke={color} strokeWidth="0.5" className="opacity-70" />
                        <path d="M 28 55 Q 50 60 72 55" fill="none" stroke={color} strokeWidth="0.5" className="opacity-70" />

                        {/* Ring */}
                        <ellipse cx="50" cy="50" rx="40" ry="10" fill="none" stroke={color} strokeWidth="1" transform="rotate(-20 50 50)" className="opacity-80" />
                        <ellipse cx="50" cy="50" rx="38" ry="8" fill="none" stroke={color} strokeWidth="0.3" transform="rotate(-20 50 50)" strokeDasharray="2 2" />
                    </g>
                )}
            </svg>
        </div>
    );
});
