import React from 'react';

export const BattleShuttle: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => {
    return (
        <div className={className} style={style}>
            <style>{`
                /* --- Core Colors & Strokes --- */
                .neon-line {
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    vector-effect: non-scaling-stroke; /* Keeps lines crisp if scaled */
                }
                .blue { stroke: #00f3ff; }
                .pink { stroke: #ff00ff; }
                .white-glow { stroke: #ffffff; stroke-opacity: 0.8; filter: drop-shadow(0 0 2px #fff); }
                
                .thick { stroke-width: 2.5; }
                .medium { stroke-width: 1.5; }
                .thin { stroke-width: 0.8; opacity: 0.7; }
                .dashed { stroke-dasharray: 4, 3; }

                /* --- Fills --- */
                .glass-fill {
                    fill: #00f3ff;
                    fill-opacity: 0.05;
                }
                .engine-core-fill {
                    fill: #ff00ff;
                    fill-opacity: 0.1;
                }

                /* --- Visual Physics: Trail Animation --- */
                .engine-trail-line {
                    stroke-dasharray: 20, 10;
                    animation: trailScroll 0.4s linear infinite; /* Faster for speed sensation */
                    opacity: 0.6;
                }
                @keyframes trailScroll {
                    to { stroke-dashoffset: -30; }
                }

                /* --- Visual Physics: Thrust Animation --- */
                .engine-fire {
                    fill: #00f3ff;
                    filter: drop-shadow(0 0 5px #00f3ff);
                    transform-origin: center left; /* Scale from the engine nozzle */
                    animation: thrustPhysics 0.08s ease-in-out infinite alternate;
                    opacity: 0.9;
                }
                /* randomized-feeling flicker for realistic combustion */
                @keyframes thrustPhysics {
                    0% { transform: scaleX(0.9) scaleY(0.9); opacity: 0.7; }
                    50% { transform: scaleX(1.1) scaleY(1.05); opacity: 1; }
                    100% { transform: scaleX(0.95) scaleY(0.95); opacity: 0.8; }
                }

                /* --- Visual Physics: Idle Hover (The "Alive" feel) --- */
                /* Simulates zero-g floating and engine rumble */
                .ship-body-physics {
                    animation: hoverFloat 4s ease-in-out infinite, engineRumble 0.1s linear infinite;
                    transform-origin: center;
                }
                
                @keyframes hoverFloat {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-3px) rotate(0.5deg); }
                }
                
                @keyframes engineRumble {
                    0% { transform: translateX(0px); }
                    25% { transform: translateX(0.5px); }
                    50% { transform: translateX(0px); }
                    75% { transform: translateX(-0.5px); }
                    100% { transform: translateX(0px); }
                }
            `}</style>

            <svg viewBox="-200 -150 420 300" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,243,255,0.6)] overflow-visible">
                
                {/* The 'ship-body-physics' group wraps the whole ship.
                    This separates the ship movement from the world coordinates.
                */}
                <g className="ship-body-physics">
                    
                    {/* --- ENGINE EFFECTS (Behind the ship) --- */}
                    {/* Top Engine Fire */}
                    <g transform="translate(-110, -35)">
                        <path d="M 0 -8 L -60 0 L 0 8 Z" className="engine-fire" />
                        <path d="M -10 -4 L -40 0 L -10 4 Z" fill="white" fillOpacity="0.5" className="engine-fire" style={{animationDuration: '0.05s'}} />
                    </g>
                    {/* Bottom Engine Fire */}
                    <g transform="translate(-110, 35)">
                        <path d="M 0 -8 L -60 0 L 0 8 Z" className="engine-fire" />
                        <path d="M -10 -4 L -40 0 L -10 4 Z" fill="white" fillOpacity="0.5" className="engine-fire" style={{animationDuration: '0.05s'}} />
                    </g>

                    {/* Speed Trails (To suggest velocity) */}
                    <g className="neon-line blue thin engine-trail-line">
                        <line x1="-120" y1="-35" x2="-200" y2="-35" />
                        <line x1="-120" y1="35" x2="-200" y2="35" />
                        <line x1="-80" y1="-90" x2="-160" y2="-100" className="dashed" />
                        <line x1="-80" y1="90" x2="-160" y2="100" className="dashed" />
                    </g>


                    {/* --- MAIN HULL ARCHITECTURE --- */}
                    
                    {/* Wings (Lower Layer) */}
                    <g className="neon-line blue medium">
                        {/* Top Wing */}
                        <path d="M -60 -20 L -90 -110 L 40 -90 L 80 -20" fill="none" />
                        <path d="M -90 -110 L -40 -60" className="thin" /> {/* Panel line */}
                        <rect x="30" y="-90" width="10" height="20" className="pink thin" transform="skewX(-20)" /> {/* Wing Detail */}

                        {/* Bottom Wing */}
                        <path d="M -60 20 L -90 110 L 40 90 L 80 20" fill="none" />
                        <path d="M -90 110 L -40 60" className="thin" />
                        <rect x="30" y="70" width="10" height="20" className="pink thin" transform="skewX(20)" />
                    </g>

                    {/* Main Fuselage (Top Layer) */}
                    <path d="M 190 0 L 80 -25 L -80 -45 L -110 -35 L -110 35 L -80 45 L 80 25 Z" 
                          className="neon-line blue thick glass-fill" />
                    
                    {/* Cockpit / Bridge Area */}
                    <path d="M 60 -15 L 140 0 L 60 15 L 20 0 Z" className="neon-line pink medium" fill="#ff00ff" fillOpacity="0.05" />
                    
                    {/* Internal Structure / Tech Lines (Greebling) */}
                    <g className="neon-line blue thin">
                        <line x1="-80" y1="-45" x2="20" y2="-10" />
                        <line x1="-80" y1="45" x2="20" y2="10" />
                        <path d="M -40 -30 L -40 30" className="dashed" />
                        <rect x="-100" y="-15" width="20" height="30" className="pink thin" />
                    </g>


                    {/* --- ENGINES (Mechanical Detail) --- */}
                    <g className="neon-line pink thick">
                        {/* Top Engine Housing */}
                        <path d="M -80 -25 L -110 -45 L -110 -25 L -80 -15" className="blue medium" fill="none"/>
                        <circle cx="-110" cy="-35" r="12" className="engine-core-fill" />
                        <circle cx="-110" cy="-35" r="6" className="white-glow thin" />

                        {/* Bottom Engine Housing */}
                        <path d="M -80 25 L -110 45 L -110 25 L -80 15" className="blue medium" fill="none"/>
                        <circle cx="-110" cy="35" r="12" className="engine-core-fill" />
                        <circle cx="-110" cy="35" r="6" className="white-glow thin" />
                    </g>

                </g>
            </svg>
        </div>
    );
};