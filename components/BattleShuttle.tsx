import React from 'react';

export const BattleShuttle: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => {
    return (
        <div className={className} style={style}>
            <style>{`
                .neon-line {
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }
                .blue { stroke: #00f3ff; }
                .pink { stroke: #ff00ff; }
                .thick { stroke-width: 2.5; }
                .medium { stroke-width: 1.5; }
                .thin { stroke-width: 0.8; opacity: 0.8; }
                .dashed { stroke-dasharray: 4, 3; }
                
                .engine-trail-line {
                    stroke-dasharray: 10, 5;
                    animation: trailScroll 1s linear infinite;
                }
                @keyframes trailScroll {
                    to { stroke-dashoffset: -15; }
                }

                .engine-fire {
                    fill: #00f3ff;
                    filter: blur(2px);
                    animation: thrustFlicker 0.1s ease-in-out infinite alternate;
                    opacity: 0.8;
                }
                @keyframes thrustFlicker {
                    0% { transform: scaleX(1); opacity: 0.6; }
                    100% { transform: scaleX(1.5); opacity: 1; }
                }
            `}</style>

            {/* Using a viewBox that fits the ship geometry approximately. 
                Original transform was translate(150, 250). 
                The ship spans roughly x: -120 to +180 (width ~300), y: -120 to +120 (height ~240).
            */}
            <svg viewBox="-180 -130 380 260" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] overflow-visible">

                {/* Rotated group to match standard orientation (pointing right is 0deg for our logic, 
                    but raw SVG points right already, so no extra rotation needed inside component if we rotate outer div) 
                */}
                <g>
                    {/* Engine Fire Effects */}
                    <g transform="translate(-100, -25)">
                        <path d="M 0 -10 L -40 0 L 0 10 Z" className="engine-fire" />
                    </g>
                    <g transform="translate(-100, 25)">
                        <path d="M 0 -10 L -40 0 L 0 10 Z" className="engine-fire" />
                    </g>

                    <g className="neon-line blue medium engine-trail-line" transform="translate(-120, 0)">
                        <line x1="0" y1="-20" x2="-100" y2="-30" />
                        <line x1="0" y1="20" x2="-100" y2="30" />
                    </g>

                    <path d="M 180 0 L 80 -30 L -80 -40 L -100 -25 L -100 25 L -80 40 L 80 30 Z" className="neon-line blue thick" />
                    <path d="M 100 -15 L 170 0 L 100 15 L 80 0 Z" className="neon-line pink medium" />
                    <line x1="-20" y1="-33" x2="20" y2="-30" className="neon-line pink thin dashed" />
                    <line x1="-20" y1="33" x2="20" y2="30" className="neon-line pink thin dashed" />
                    <rect x="-60" y="-15" width="40" height="30" className="neon-line blue thin" />

                    <g className="neon-line blue medium">
                        <path d="M -40 -38 L 0 -120 L 80 -110 L 60 -34" />
                        <path d="M 0 -120 L 30 -80 L -20 -60" className="thin" />
                        <rect x="60" y="-115" width="25" height="10" className="pink medium" />

                        <path d="M -40 38 L 0 120 L 80 110 L 60 34" />
                        <path d="M 0 120 L 30 80 L -20 60" className="thin" />
                        <rect x="60" y="105" width="25" height="10" className="pink medium" />
                    </g>

                    <g className="neon-line pink thick">
                        <circle cx="-100" cy="-25" r="15" />
                        <circle cx="-100" cy="-25" r="8" className="thin blue" />
                        <circle cx="-100" cy="25" r="15" />
                        <circle cx="-100" cy="25" r="8" className="thin blue" />
                    </g>
                </g>
            </svg>
        </div>
    );
};
