import React from 'react';

export const Satellite: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={className}>
            <style>{`
                @keyframes slowFloat {
                    0% { transform: translateY(5px) rotate(1deg); }
                    100% { transform: translateY(-5px) rotate(-1deg); }
                }
                .satellite-svg {
                    max-width: 90%;
                    height: auto;
                    filter: drop-shadow(0 0 3px rgba(0, 243, 255, 0.5)) drop-shadow(0 0 3px rgba(255, 0, 255, 0.5));
                    animation: slowFloat 10s ease-in-out infinite alternate;
                }
                .outline-blue {
                    fill: none;
                    stroke: #00f3ff;
                    stroke-width: 1.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }
                .outline-pink {
                    fill: none;
                    stroke: #ff00ff;
                    stroke-width: 1.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }
                .thin { stroke-width: 1; opacity: 0.8; }
                .micro { stroke-width: 0.7; opacity: 0.6; }
                .dashed { stroke-dasharray: 3, 3; }
            `}</style>

            <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" className="satellite-svg">
                <g transform="translate(300, 200) rotate(-8) translate(-250, -200)">
                    <g id="left-panel">
                        <rect x="30" y="170" width="160" height="80" rx="10" ry="10" className="outline-blue" />
                        <rect x="40" y="180" width="45" height="60" rx="4" ry="4" className="outline-blue thin" />
                        <rect x="90" y="180" width="45" height="60" rx="4" ry="4" className="outline-blue thin" />
                        <rect x="140" y="180" width="40" height="60" rx="4" ry="4" className="outline-blue thin" />

                        <g className="outline-blue micro">
                            <line x1="40" y1="200" x2="85" y2="200" />
                            <line x1="40" y1="220" x2="85" y2="220" />
                            <line x1="90" y1="200" x2="135" y2="200" />
                            <line x1="90" y1="220" x2="135" y2="220" />
                            <line x1="140" y1="200" x2="180" y2="200" />
                            <line x1="140" y1="220" x2="180" y2="220" />
                            <line x1="62.5" y1="180" x2="62.5" y2="240" />
                            <line x1="112.5" y1="180" x2="112.5" y2="240" />
                        </g>

                        <circle cx="35" cy="175" r="2" className="outline-blue" />
                        <circle cx="35" cy="245" r="2" className="outline-blue" />
                        <circle cx="185" cy="175" r="2" className="outline-blue" />
                        <circle cx="185" cy="245" r="2" className="outline-blue" />

                        <path d="M 190 205 L 220 205 Q 225 205 225 210 L 225 220 Q 225 225 220 225 L 190 225" className="outline-blue thin" />
                        <circle cx="225" cy="215" r="4" className="outline-blue" />
                    </g>

                    <g id="right-panel">
                        <rect x="310" y="170" width="160" height="80" rx="10" ry="10" className="outline-blue" />
                        <rect x="320" y="180" width="40" height="60" rx="4" ry="4" className="outline-blue thin" />
                        <rect x="365" y="180" width="45" height="60" rx="4" ry="4" className="outline-blue thin" />
                        <rect x="415" y="180" width="45" height="60" rx="4" ry="4" className="outline-blue thin" />

                        <g className="outline-blue micro">
                            <line x1="320" y1="200" x2="360" y2="200" />
                            <line x1="320" y1="220" x2="360" y2="220" />
                            <line x1="365" y1="200" x2="410" y2="200" />
                            <line x1="365" y1="220" x2="410" y2="220" />
                            <line x1="415" y1="200" x2="460" y2="200" />
                            <line x1="415" y1="220" x2="460" y2="220" />
                            <line x1="387.5" y1="180" x2="387.5" y2="240" />
                            <line x1="437.5" y1="180" x2="437.5" y2="240" />
                        </g>

                        <circle cx="315" cy="175" r="2" className="outline-blue" />
                        <circle cx="315" cy="245" r="2" className="outline-blue" />
                        <circle cx="465" cy="175" r="2" className="outline-blue" />
                        <circle cx="465" cy="245" r="2" className="outline-blue" />

                        <path d="M 310 205 L 280 205 Q 275 205 275 210 L 275 220 Q 275 225 280 225 L 310 225" className="outline-blue thin" />
                        <circle cx="275" cy="215" r="4" className="outline-blue" />
                    </g>

                    <g id="body">
                        <rect x="225" y="140" width="50" height="140" rx="15" ry="15" className="outline-pink" />

                        <rect x="235" y="150" width="30" height="25" rx="5" ry="5" className="outline-pink thin" />
                        <circle cx="250" cy="162.5" r="8" className="outline-pink thin dashed" />
                        <circle cx="235" cy="150" r="1.5" className="outline-pink" /> <circle cx="265" cy="150" r="1.5" className="outline-pink" />
                        <circle cx="235" cy="175" r="1.5" className="outline-pink" /> <circle cx="265" cy="175" r="1.5" className="outline-pink" />

                        <g className="outline-pink thin">
                            <path d="M 225 190 L 275 190 M 235 185 L 235 195 M 265 185 L 265 195" />
                            <path d="M 225 230 L 275 230 M 245 225 L 245 235" />
                            <rect x="238" y="200" width="24" height="20" rx="3" ry="3" />
                            <line x1="238" y1="210" x2="262" y2="210" className="micro" />
                        </g>

                        <rect x="230" y="255" width="40" height="20" rx="8" ry="8" className="outline-pink thin" />
                        <g className="outline-pink micro">
                            <line x1="235" y1="260" x2="265" y2="260" />
                            <line x1="235" y1="265" x2="265" y2="265" />
                            <line x1="235" y1="270" x2="265" y2="270" />
                        </g>
                        <path d="M 240 280 Q 250 290 260 280 L 255 275 L 245 275 Z" className="outline-pink thin" />
                    </g>

                    <g id="antenna-array">
                        <line x1="250" y1="140" x2="250" y2="100" className="outline-pink" strokeWidth="3" />
                        <circle cx="250" cy="120" r="3" className="outline-pink thin" fill="#121212" />

                        <g transform="translate(250, 85)">
                            <path d="M -30 20 Q 0 50 30 20" className="outline-blue" fill="none" />
                            <path d="M -25 18 Q 0 45 25 18" className="outline-blue thin" fill="none" />

                            <line x1="-20" y1="25" x2="0" y2="10" className="outline-blue micro" />
                            <line x1="20" y1="25" x2="0" y2="10" className="outline-blue micro" />

                            <line x1="0" y1="10" x2="0" y2="-15" className="outline-blue thin" />
                            <rect x="-3" y="-15" width="6" height="8" rx="2" ry="2" className="outline-blue" />
                            <circle cx="0" cy="-20" r="2" className="outline-blue" />

                            <path d="M -10 -25 Q 0 -35 10 -25" className="outline-blue thin dashed" opacity="0.7" />
                            <path d="M -20 -35 Q 0 -55 20 -35" className="outline-blue thin dashed" opacity="0.4" />
                        </g>
                    </g>

                </g>
            </svg>
        </div>
    );
};
