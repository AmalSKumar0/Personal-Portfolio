import React, { useState, useEffect, useRef } from 'react';
import { BattleShuttle } from './BattleShuttle';
import { Asteroid } from './Asteroid';
import { CelestialBody } from './CelestialBody';

interface Entity {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    rotation?: number;
    rotSpeed?: number;
}

interface Laser {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    rotation: number;
}

interface BackgroundBody {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    type: 'planet' | 'sun';
    glow?: string;
}

interface Particle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    color: string;
}

export const SpaceBattle = React.memo(() => {
    // Refs for mutable game state (avoids closure staleness in RAF)
    const shuttleRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2, rotation: 0 });
    const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const asteroidsRef = useRef<Entity[]>([]);
    const lasersRef = useRef<Laser[]>([]);
    const particlesRef = useRef<Particle[]>([]);
    const lastTimeRef = useRef<number>(0);
    const requestRef = useRef<number>();
    const lastFiredRef = useRef<number>(0);
    const fireSideRef = useRef<number>(1); // 1 = right, -1 = left

    // Static Backgrounds
    const [backgrounds, setBackgrounds] = useState<BackgroundBody[]>([]);

    // Rendering positions (synced from refs for React render)
    // Actually, forcing React render on every frame is bad (60fps re-render of component).
    // Better: Update DOM styles directly via Refs to Elements, OR use a Canvas.
    // Given the prompt asks for "components", DOM elements are likely expected.
    // Optimization: Use `transform` on refs to DOM elements.
    // But managing a dynamic list of *Asteroid Components* via direct DOM is hard in React without Keys/State.
    // Compromise: Update React State at 60fps? 
    // It might lag on low-end. usage of `react - spring` or `canvas` is better.
    // But for simplicity with provided constraints, I will use `useState` but maybe throttle or accept the overhead for "portfolio" scale (usually fine for <50 elements).
    // Actually, "fload around... shooting... whole website" -> Canvas is best for performance.
    // BUT user asked for "Components". "create 2 component battleship and astroid".
    // I will use State.

    // To fix closure in `animate`: use Refs for *logic* state, and `setRenderState` to trigger view update.
    const [renderState, setRenderState] = useState({
        shuttle: { x: 0, y: 0, rotation: 0 },
        asteroids: [] as Entity[],
        lasers: [] as Laser[],
        particles: [] as Particle[]
    });

    const animate = (time: number) => {
        if (!lastTimeRef.current) lastTimeRef.current = time;
        // const deltaTime = time - lastTimeRef.current;
        lastTimeRef.current = time;

        // 1. Update Shuttle (Ease towards mouse SLOWLY)
        const dx = mouseRef.current.x - shuttleRef.current.x;
        const dy = mouseRef.current.y - shuttleRef.current.y;

        // Slower movement factor 0.008 for "natural flow" (Heavy momentum)
        shuttleRef.current.x += dx * 0.008;
        shuttleRef.current.y += dy * 0.008;

        // Smooth Rotation Logic
        const targetRotation = Math.atan2(dy, dx);
        let diff = targetRotation - shuttleRef.current.rotation;
        // Normalize angle difference to -PI to PI for shortest turn
        while (diff > Math.PI) diff -= 2 * Math.PI;
        while (diff < -Math.PI) diff += 2 * Math.PI;

        // Slower turn factor: 0.012
        shuttleRef.current.rotation += diff * 0.012;

        // 2. Spawn Asteroids (Random Drift)
        if (Math.random() < 0.01 && asteroidsRef.current.length < 8) { // Increased max asteroids
            const edge = Math.floor(Math.random() * 4);
            let startX = 0, startY = 0;
            if (edge === 0) { startX = Math.random() * window.innerWidth; startY = -50; }
            if (edge === 1) { startX = window.innerWidth + 50; startY = Math.random() * window.innerHeight; }
            if (edge === 2) { startX = Math.random() * window.innerWidth; startY = window.innerHeight + 50; }
            if (edge === 3) { startX = -50; startY = Math.random() * window.innerHeight; }

            asteroidsRef.current.push({
                id: Date.now() + Math.random(),
                x: startX,
                y: startY,
                vx: (Math.random() - 0.5) * 1.5, // Random drift velocity (increased from 0.5)
                vy: (Math.random() - 0.5) * 1.5,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 2 // Independent rotation speed
            });
        }

        // 3. Move Asteroids (Linear Drift - No Chase)
        asteroidsRef.current = asteroidsRef.current.map(ast => {
            // Wrap around screen? Or just let them fly off and be filtered later.
            // Let's filter later (step 5) or now.
            return {
                ...ast,
                x: ast.x + ast.vx,
                y: ast.y + ast.vy,
                rotation: (ast.rotation || 0) + (ast.rotSpeed || 0.5)
            };
        }).filter(ast =>
            ast.x > -100 && ast.x < window.innerWidth + 100 &&
            ast.y > -100 && ast.y < window.innerHeight + 100
        );

        // 4. Fire Lasers (Straight Front Only, Slower)
        if (asteroidsRef.current.length > 0 && time - lastFiredRef.current > 600) { // 600ms cooldown (reduced from 800)
            // Fire angle is purely based on ship rotation
            const angle = shuttleRef.current.rotation;

            // Shoot from "Top" (Nose-ish)
            // Ship Points Right (0deg). Top is Y = -25.
            // Forward Offset = 20.
            const gunOffsetX = 20;
            const gunOffsetY = -25; // Top Only

            // Rotate offset by ACTUAL ship rotation
            const cos = Math.cos(shuttleRef.current.rotation);
            const sin = Math.sin(shuttleRef.current.rotation);

            const spawnX = shuttleRef.current.x + (gunOffsetX * cos - gunOffsetY * sin);
            const spawnY = shuttleRef.current.y + (gunOffsetX * sin + gunOffsetY * cos);

            lasersRef.current.push({
                id: Date.now() + Math.random(),
                x: spawnX,
                y: spawnY,
                vx: Math.cos(angle) * 15,
                vy: Math.sin(angle) * 15,
                rotation: angle
            });

            lastFiredRef.current = time;
            // fireSideRef.current *= -1; // Switch side - REMOVED
        }

        // 5. Move Lasers & Collision
        lasersRef.current = lasersRef.current.map(l => ({
            ...l, x: l.x + l.vx, y: l.y + l.vy
        })).filter(l => l.x > 0 && l.x < window.innerWidth && l.y > 0 && l.y < window.innerHeight);

        // 6. Particles update
        particlesRef.current = particlesRef.current.map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.05
        })).filter(p => p.life > 0);

        // Check Collisions
        // Remove asteroids hit by lasers
        // Simple O(N*M) check
        for (let i = lasersRef.current.length - 1; i >= 0; i--) {
            const l = lasersRef.current[i];
            let hit = false;
            for (let j = asteroidsRef.current.length - 1; j >= 0; j--) {
                const ast = asteroidsRef.current[j];
                const dist = Math.sqrt(Math.pow(l.x - ast.x, 2) + Math.pow(l.y - ast.y, 2));
                if (dist < 30) {
                    // Boom: Spawn particles
                    for (let k = 0; k < 8; k++) {
                        const pAngle = Math.random() * Math.PI * 2;
                        const pSpeed = Math.random() * 3;
                        particlesRef.current.push({
                            id: Date.now() + Math.random(),
                            x: ast.x,
                            y: ast.y,
                            vx: Math.cos(pAngle) * pSpeed,
                            vy: Math.sin(pAngle) * pSpeed,
                            life: 1.0,
                            color: Math.random() > 0.5 ? '#ff00ff' : '#00f3ff'
                        });
                    }

                    asteroidsRef.current.splice(j, 1);
                    hit = true;
                    // Could trigger explosion effect here
                    break;
                }
            }
            if (hit) {
                lasersRef.current.splice(i, 1);
            }
        }

        // 7. Update Render State
        setRenderState({
            shuttle: { ...shuttleRef.current, id: 0, vx: 0, vy: 0 },
            asteroids: [...asteroidsRef.current],
            lasers: [...lasersRef.current],
            particles: [...particlesRef.current]
        });

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        // Generate Backgrounds
        const bg: BackgroundBody[] = [];
        // Add Suns
        for (let i = 0; i < 2; i++) {
            bg.push({
                id: i + 1,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: 120 + Math.random() * 60,
                color: i === 0 ? '#FFD700' : '#FF4500',
                type: 'sun',
                glow: i === 0 ? '#FFA500' : '#FF0000'
            });
        }

        // Add random Planets
        const planetColors = ['#4B0082', '#00CED1', '#FF00FF', '#1E90FF', '#9370DB', '#00FA9A', '#FF6347', '#FFD700'];
        for (let i = 0; i < 16; i++) {
            bg.push({
                id: i + 3,
                x: Math.random() * (window.innerWidth + 200) - 100,
                y: Math.random() * (window.innerHeight + 200) - 100,
                size: 20 + Math.random() * 70,
                color: planetColors[i % planetColors.length],
                type: 'planet'
            });
        }
        setBackgrounds(bg);

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">

            {/* Background Bodies */}
            {backgrounds.map(bg => (
                <CelestialBody
                    key={bg.id}
                    type={bg.type}
                    size={bg.size}
                    color={bg.color}
                    className="absolute z-0"
                    style={{ left: bg.x, top: bg.y }}
                />
            ))}

            {/* Particles */}
            {renderState.particles.map(p => (
                <div key={p.id}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        left: p.x, top: p.y,
                        backgroundColor: p.color,
                        opacity: p.life,
                        transform: `scale(${p.life})`
                    }}
                />
            ))}

            {/* Lasers (Smaller buffer) */}
            {renderState.lasers.map(laser => (
                <div key={laser.id}
                    className="absolute w-4 h-0.5 bg-gradient-to-r from-pink-500 to-transparent rounded-full"
                    style={{
                        left: laser.x, top: laser.y,
                        transform: `rotate(${laser.rotation}rad)`,
                        boxShadow: '0 0 4px #ff00ff'
                    }}
                />
            ))}

            {/* Shuttle */}
            <BattleShuttle
                className="absolute w-14 h-14"
                style={{
                    left: renderState.shuttle.x - 28,
                    top: renderState.shuttle.y - 28,
                    transform: `rotate(${renderState.shuttle.rotation}rad)`
                }}
            />

            {/* Asteroids */}
            {renderState.asteroids.map(ast => (
                <Asteroid
                    key={ast.id}
                    className="absolute w-10 h-10"
                    style={{
                        left: ast.x - 20, top: ast.y - 20,
                        transform: `rotate(${ast.rotation}deg)`
                    }}
                />
            ))}

        </div>
    );
});
