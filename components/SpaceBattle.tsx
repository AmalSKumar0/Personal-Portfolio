import React, { useState, useEffect, useRef } from 'react';
import { BattleShuttle } from './BattleShuttle';
import { Asteroid } from './Asteroid';
import { CelestialBody } from './CelestialBody';

// --- Physics Helper Functions ---

const getDistance = (x1: number, y1: number, x2: number, y2: number) => 
    Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

const normalizeAngle = (angle: number) => {
    let a = angle;
    while (a > Math.PI) a -= 2 * Math.PI;
    while (a < -Math.PI) a += 2 * Math.PI;
    return a;
};

// Elastic 2D collision
const resolveCollision = (p1: Entity, p2: Entity) => {
    const xVelocityDiff = p1.vx - p2.vx;
    const yVelocityDiff = p1.vy - p2.vy;
    const xDist = p2.x - p1.x;
    const yDist = p2.y - p1.y;

    // Prevent objects stuck inside each other from jittering
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        const angle = -Math.atan2(p2.y - p1.y, p2.x - p1.x);
        const m1 = p1.mass || 10;
        const m2 = p2.mass || 10;
        const u1 = { x: p1.vx, y: p1.vy };
        const u2 = { x: p2.vx, y: p2.vy };

        const u1Rot = {
            x: u1.x * Math.cos(angle) - u1.y * Math.sin(angle),
            y: u1.x * Math.sin(angle) + u1.y * Math.cos(angle)
        };
        const u2Rot = {
            x: u2.x * Math.cos(angle) - u2.y * Math.sin(angle),
            y: u2.x * Math.sin(angle) + u2.y * Math.cos(angle)
        };

        const v1Rot = {
            x: ((m1 - m2) * u1Rot.x + 2 * m2 * u2Rot.x) / (m1 + m2),
            y: u1Rot.y 
        };
        const v2Rot = {
            x: ((m2 - m1) * u2Rot.x + 2 * m1 * u1Rot.x) / (m1 + m2),
            y: u2Rot.y
        };

        const v1Final = {
            x: v1Rot.x * Math.cos(-angle) - v1Rot.y * Math.sin(-angle),
            y: v1Rot.x * Math.sin(-angle) + v1Rot.y * Math.cos(-angle)
        };
        const v2Final = {
            x: v2Rot.x * Math.cos(-angle) - v2Rot.y * Math.sin(-angle),
            y: v2Rot.x * Math.sin(-angle) + v2Rot.y * Math.cos(-angle)
        };

        p1.vx = v1Final.x;
        p1.vy = v1Final.y;
        p2.vx = v2Final.x;
        p2.vy = v2Final.y;
    }
};

interface Entity {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    rotation?: number;
    angVel?: number; // Added Angular Velocity
    rotSpeed?: number;
    radius?: number; 
    mass?: number;   
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
    // Refs
    const shuttleRef = useRef({ 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2, 
        rotation: 0,
        angVel: 0,  // NEW: Angular Velocity for rotational inertia
        vx: 0, 
        vy: 0,
        mass: 40,    // Increased mass for stability
        radius: 28
    });
    
    const asteroidsRef = useRef<Entity[]>([]);
    const lasersRef = useRef<Laser[]>([]);
    const particlesRef = useRef<Particle[]>([]);
    const lastTimeRef = useRef<number>(0);
    const requestRef = useRef<number>();
    const lastFiredRef = useRef<number>(0);

    const [backgrounds, setBackgrounds] = useState<BackgroundBody[]>([]);
    const [renderState, setRenderState] = useState({
        shuttle: { x: 0, y: 0, rotation: 0 },
        asteroids: [] as Entity[],
        lasers: [] as Laser[],
        particles: [] as Particle[]
    });

    const animate = (time: number) => {
        if (!lastTimeRef.current) lastTimeRef.current = time;
        const deltaTime = (time - lastTimeRef.current) / 16; // Normalizing to ~60fps
        lastTimeRef.current = time;

        const shuttle = shuttleRef.current;
        
        // --- 1. AI Logic & Physics (Target Acquisition) ---
        // --- 1. AI Logic & Physics (Target Acquisition) ---
        let target: Entity | null = null;
        let minDistance = Infinity;

        // Find nearest threat
        asteroidsRef.current.forEach(ast => {
            const r = ast.radius || 20;

            // LOGIC CHECK: Only target if the WHOLE asteroid is inside the viewport
            // This prevents the ship from shooting at walls or tracking off-screen objects
            const isInside = 
                ast.x - r > 0 && 
                ast.x + r < window.innerWidth && 
                ast.y - r > 0 && 
                ast.y + r < window.innerHeight;

            if (isInside) {
                const d = getDistance(shuttle.x, shuttle.y, ast.x, ast.y);
                if (d < minDistance) {
                    minDistance = d;
                    target = ast;
                }
            }
        });

        // --- 2. Advanced Targeting Math (Ballistics) ---
        let aimX = window.innerWidth / 2;
        let aimY = window.innerHeight / 2;
        const LASER_SPEED = 18;

        if (target) {
            // Predict where the target will be when the laser hits it
            const dist = getDistance(shuttle.x, shuttle.y, target.x, target.y);
            const timeToImpact = dist / LASER_SPEED;
            
            // Lead the target: Aim at future position
            aimX = target.x + (target.vx * timeToImpact);
            aimY = target.y + (target.vy * timeToImpact);
        }

        const dx = aimX - shuttle.x;
        const dy = aimY - shuttle.y;
        
        // Calculate desired angle
        const targetRotation = Math.atan2(dy, dx);
        
        // --- 3. Newtonian Steering (PID Controller) ---
        // Instead of setting rotation, we apply Torque to Angular Velocity
        
        const angleDiff = normalizeAngle(targetRotation - shuttle.rotation);
        
        // PD Controller coefficients
        const Kp = 0.015; // Proportional gain (turn power)
        const Kd = 0.12;  // Derivative gain (dampening/stabilization)

        // Torque = (Distance to angle) - (Current spin speed)
        const torque = (angleDiff * Kp) - (shuttle.angVel * Kd);
        
        shuttle.angVel += torque * deltaTime;
        shuttle.rotation += shuttle.angVel * deltaTime;

        // --- 4. Thrust Physics ---
        
        const isAligned = Math.abs(angleDiff) < 0.3; // Only thrust if roughly facing target
        const isSafeDistance = !target || minDistance > 200; // Don't crash into target
        
        // Only thrust if aligned AND safe, OR if we are about to go out of bounds
        const outOfBounds = shuttle.x < 100 || shuttle.x > window.innerWidth - 100 || shuttle.y < 100 || shuttle.y > window.innerHeight - 100;
        
        if ((isAligned && isSafeDistance) || outOfBounds) {
            // If out of bounds, override aim to center
            if(outOfBounds) {
                // Logic handled by steering to center naturally if no target, 
                // but here we force thrust to get back in
            }

            const THRUST_POWER = 0.08;
            shuttle.vx += Math.cos(shuttle.rotation) * THRUST_POWER * deltaTime;
            shuttle.vy += Math.sin(shuttle.rotation) * THRUST_POWER * deltaTime;

            // Thruster particles
            if (Math.random() > 0.5) {
                particlesRef.current.push({
                    id: Date.now() + Math.random(),
                    x: shuttle.x - Math.cos(shuttle.rotation) * 20,
                    y: shuttle.y - Math.sin(shuttle.rotation) * 20,
                    vx: shuttle.vx - Math.cos(shuttle.rotation) * (Math.random() * 2 + 1),
                    vy: shuttle.vy - Math.sin(shuttle.rotation) * (Math.random() * 2 + 1),
                    life: 0.6,
                    color: '#FFA500'
                });
            }
        }

        // Space Drag (Linear & Angular)
        shuttle.vx *= 0.99;
        shuttle.vy *= 0.99;
        shuttle.angVel *= 0.96; // Rotational drag stops the ship spinning eventually

        // Position Update
        shuttle.x += shuttle.vx * deltaTime * 0.6;
        shuttle.y += shuttle.vy * deltaTime * 0.6;

        // Boundaries (Bounce with energy loss)
        if (shuttle.x < 0) { shuttle.x = 0; shuttle.vx *= -0.5; }
        if (shuttle.x > window.innerWidth) { shuttle.x = window.innerWidth; shuttle.vx *= -0.5; }
        if (shuttle.y < 0) { shuttle.y = 0; shuttle.vy *= -0.5; }
        if (shuttle.y > window.innerHeight) { shuttle.y = window.innerHeight; shuttle.vy *= -0.5; }

        // --- 5. Optimized Spawning (Time-based & Targeted) ---
        // Spawn every 1500ms (adjust for difficulty) instead of random chance
        const spawnRate = 1500; 
        if (!shuttle.lastSpawn) shuttle.lastSpawn = 0; // Initialize if undefined

        if (time - shuttle.lastSpawn > spawnRate && asteroidsRef.current.length < 8) {
            shuttle.lastSpawn = time;

            const edge = Math.floor(Math.random() * 4);
            let startX = 0, startY = 0;
            
            // Spawn far enough outside to not "pop" in visible
            const OFFSET = 80;
            if (edge === 0) { startX = Math.random() * window.innerWidth; startY = -OFFSET; } // Top
            if (edge === 1) { startX = window.innerWidth + OFFSET; startY = Math.random() * window.innerHeight; } // Right
            if (edge === 2) { startX = Math.random() * window.innerWidth; startY = window.innerHeight + OFFSET; } // Bottom
            if (edge === 3) { startX = -OFFSET; startY = Math.random() * window.innerHeight; } // Left

            // TARGETING LOGIC:
            // Instead of random velocity, aim at a random point in the CENTER 60% of screen.
            // This ensures asteroids actually cross the play area.
            const targetX = window.innerWidth * 0.2 + Math.random() * window.innerWidth * 0.6;
            const targetY = window.innerHeight * 0.2 + Math.random() * window.innerHeight * 0.6;
            
            const angle = Math.atan2(targetY - startY, targetX - startX);
            const speed = 1.5 + Math.random() * 2.5; // Random speed variation

            const size = 30 + Math.random() * 30;

            asteroidsRef.current.push({
                id: Date.now() + Math.random(),
                x: startX,
                y: startY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 1.5,
                radius: size / 2,
                mass: size * 1.5,
                // New Property for organic movement
                wobblePhase: Math.random() * Math.PI * 2 
            } as any);
        }

        // --- 6. Organic Movement & Physics ---
        asteroidsRef.current.forEach(ast => {
            // Apply Velocity
            ast.x += ast.vx * deltaTime;
            ast.y += ast.vy * deltaTime;
            
            // Add "Space Turbulence" (Sine wave drift)
            // This makes them float organically rather than slide linearly
            const drift = Math.sin((time * 0.002) + (ast.wobblePhase || 0));
            ast.x += drift * 0.3 * deltaTime;
            ast.y -= drift * 0.3 * deltaTime;

            // Rotation
            ast.rotation = (ast.rotation || 0) + (ast.rotSpeed || 0.1) * deltaTime;
            
            // CLEANUP: Despawn if too far off-screen (Efficiency)
            // Instead of wrapping endlessly, we delete them if they drift 300px away.
            // This clears memory for fresh aimed spawns.
            if (ast.x < -300 || ast.x > window.innerWidth + 300 || 
                ast.y < -300 || ast.y > window.innerHeight + 300) {
                ast.dead = true; 
            }
        });

        // Remove dead asteroids
        asteroidsRef.current = asteroidsRef.current.filter((ast: any) => !ast.dead);

        // --- 7. Auto-Fire with Recoil ---
        // Fire if we are aligned with the PREDICTED spot (within 0.15 radians)
        const isAimed = Math.abs(angleDiff) < 0.15; 
        
        // Check: Have target? Aimed? Asteroids exist? Cooldown passed?
        if (target && isAimed && asteroidsRef.current.length > 0 && time - lastFiredRef.current > 250) {
            const angle = shuttle.rotation;
            
            // PHYSICS: Recoil (Newtons 3rd Law)
            // Push ship backwards when firing
            const RECOIL_FORCE = 2.5; 
            shuttle.vx -= Math.cos(angle) * RECOIL_FORCE * 0.1;
            shuttle.vy -= Math.sin(angle) * RECOIL_FORCE * 0.1;
            
            // Add slight rotational instability (kick)
            shuttle.angVel += (Math.random() - 0.5) * 0.05;

            // GUN POSITIONING: "Nose" of the ship
            const gunOffsetX = 35; // Distance forward from center
            const gunOffsetY = 0;  // 0 = Center (No side offset)
            
            // Calculate exact world coordinates for the laser nozzle
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const spawnX = shuttle.x + (gunOffsetX * cos - gunOffsetY * sin);
            const spawnY = shuttle.y + (gunOffsetX * sin + gunOffsetY * cos);

            lasersRef.current.push({
                id: Date.now() + Math.random(),
                x: spawnX,
                y: spawnY,
                // PHYSICS: Laser inherits ship velocity (Relative Velocity)
                // This makes the laser behave realistically like a projectile fired from a moving vehicle
                vx: Math.cos(angle) * LASER_SPEED + shuttle.vx * 0.5,
                vy: Math.sin(angle) * LASER_SPEED + shuttle.vy * 0.5,
                rotation: angle
            });
            
            lastFiredRef.current = time;
        }

        // --- 8. Move Lasers ---
        lasersRef.current = lasersRef.current.map(l => ({
            ...l, x: l.x + l.vx * deltaTime, y: l.y + l.vy * deltaTime
        })).filter(l => l.x > 0 && l.x < window.innerWidth && l.y > 0 && l.y < window.innerHeight);

        // --- 9. Particles ---
        particlesRef.current = particlesRef.current.map(p => ({
            ...p,
            x: p.x + p.vx * deltaTime,
            y: p.y + p.vy * deltaTime,
            vx: p.vx * 0.9, 
            vy: p.vy * 0.9,
            life: p.life - 0.02 * deltaTime
        })).filter(p => p.life > 0);

        // --- 10. Laser Collision ---
        for (let i = lasersRef.current.length - 1; i >= 0; i--) {
            const l = lasersRef.current[i];
            let hit = false;
            for (let j = asteroidsRef.current.length - 1; j >= 0; j--) {
                const ast = asteroidsRef.current[j];
                const dist = getDistance(l.x, l.y, ast.x, ast.y);
                if (dist < (ast.radius || 25) + 5) {
                    // Impact physics: Transfer momentum to asteroid
                    ast.vx += l.vx * 0.05;
                    ast.vy += l.vy * 0.05;
                    ast.rotSpeed += (Math.random() - 0.5) * 0.5;

                    for (let k = 0; k < 8; k++) {
                        const pAngle = Math.random() * Math.PI * 2;
                        const pSpeed = Math.random() * 3 + 2;
                        particlesRef.current.push({
                            id: Date.now() + Math.random(),
                            x: ast.x,
                            y: ast.y,
                            vx: Math.cos(pAngle) * pSpeed + ast.vx * 0.5,
                            vy: Math.sin(pAngle) * pSpeed + ast.vy * 0.5,
                            life: 1.0,
                            color: Math.random() > 0.5 ? '#ff00ff' : '#00f3ff'
                        });
                    }
                    asteroidsRef.current.splice(j, 1);
                    hit = true;
                    break;
                }
            }
            if (hit) lasersRef.current.splice(i, 1);
        }

        setRenderState({
            shuttle: { x: shuttle.x, y: shuttle.y, rotation: shuttle.rotation },
            asteroids: [...asteroidsRef.current],
            lasers: [...lasersRef.current],
            particles: [...particlesRef.current]
        });

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        // Init Background
        const bg: BackgroundBody[] = [];
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

        requestRef.current = requestAnimationFrame(animate);
        return () => {
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

            {/* Lasers */}
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