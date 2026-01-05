import React from 'react';

export const Asteroid = React.memo<{ className?: string, style?: React.CSSProperties }>(({ className, style }) => {
    // Generate a jagged asteroid shape
    return (
        <div className={className} style={style}>
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_3px_rgba(255,0,255,0.5)]">
                <path
                    d="M 50 10 L 70 20 L 90 40 L 80 70 L 50 90 L 20 80 L 10 50 L 30 20 Z"
                    fill="none"
                    stroke="#ff00ff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80"
                />
                <circle cx="40" cy="40" r="5" fill="none" stroke="#00f3ff" strokeWidth="1" className="opacity-60" />
                <path d="M 60 60 L 70 65" stroke="#00f3ff" strokeWidth="1" className="opacity-60" />
            </svg>
        </div>
    );
});
