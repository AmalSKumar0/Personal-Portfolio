import React, { useEffect, useRef } from 'react';

interface Petal {
  t: number;            // Progress along the river path (0 to 1)
  speed: number;        // Progress increment per frame
  laneOffset: number;   // Lateral offset from the river centerline
  size: number;
  rotation: number;
  rotationSpeed: number;
  scaleX: number;
  opacity: number;
  angle: number;        // Swaying angle
  angleSpeed: number;   // Swaying speed
  color1: string;
  color2: string;
}

interface CursorPetal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetOffsetAngle: number;
  targetOffsetRadius: number;
  springStrength: number;
  damping: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  scaleX: number;
  opacity: number;
  color1: string;
  color2: string;
  swaySpeed: number;
  swayTime: number;
}

interface LavenderPetalsProps {
  maxPetals?: number;
  speedMultiplier?: number;
  opacityMultiplier?: number;
}

export const LavenderPetals: React.FC<LavenderPetalsProps> = ({
  maxPetals = 70,
  speedMultiplier = 1,
  opacityMultiplier = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let petals: Petal[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let activeMouse = false;

    // Soft elegant lavender and rose-petal gradients
    const colors = [
      { c1: 'rgba(233, 213, 255, 0.75)', c2: 'rgba(192, 132, 252, 0.55)' }, // Light Lavender to Violet
      { c1: 'rgba(243, 232, 255, 0.85)', c2: 'rgba(216, 180, 254, 0.65)' }, // Soft Lavender to Pale Purple
      { c1: 'rgba(253, 244, 255, 0.90)', c2: 'rgba(245, 208, 254, 0.60)' }, // Pinkish Lavender to Light Violet
      { c1: 'rgba(255, 255, 255, 0.95)', c2: 'rgba(233, 213, 255, 0.75)' }, // White to Lavender
    ];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = parent ? parent.clientHeight : window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const createPetal = (isInitial = false): Petal => {
      const size = Math.random() * 8 + 6; // 6px to 14px
      const colorPair = colors[Math.floor(Math.random() * colors.length)];
      return {
        t: isInitial ? Math.random() : 0,
        speed: (Math.random() * 0.0008 + 0.0007) * speedMultiplier,
        laneOffset: Math.random() * 320 - 160,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        scaleX: Math.random() * 0.6 + 0.4,
        opacity: Math.random() * 0.4 + 0.5,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: Math.random() * 0.01 + 0.005,
        color1: colorPair.c1,
        color2: colorPair.c2,
      };
    };

    const createCursorPetal = (index: number): CursorPetal => {
      const size = Math.random() * 5 + 5; // 5px to 10px
      const colorPair = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: -200,
        y: -200,
        vx: 0,
        vy: 0,
        targetOffsetAngle: (index * (Math.PI * 2)) / 3 + Math.random() * 0.5,
        targetOffsetRadius: Math.random() * 25 + 15,
        springStrength: 0.0005 + index * 0.0003, // extremely low spring force for real slow, lazy trailing
        damping: 0.96, // high damping ratio makes the trail extremely fluid and eliminates jitter
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1), // very slow rotation
        scaleX: 1,
        opacity: 0,
        color1: colorPair.c1,
        color2: colorPair.c2,
        swaySpeed: Math.random() * 0.008 + 0.004, // slower swaying
        swayTime: Math.random() * 100,
      };
    };

    const initPetals = () => {
      petals = [];
      for (let i = 0; i < maxPetals; i++) {
        petals.push(createPetal(true));
      }
    };

    const cursorPetals: CursorPetal[] = [
      createCursorPetal(0),
      createCursorPetal(1),
      createCursorPetal(2)
    ];

    const drawPetalPath = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      c.moveTo(0, -size);
      c.quadraticCurveTo(-size * 0.8, -size * 0.6, -size * 0.5, size * 0.3);
      c.quadraticCurveTo(-size * 0.1, size * 0.8, 0, size);
      c.quadraticCurveTo(size * 0.1, size * 0.8, size * 0.5, size * 0.3);
      c.quadraticCurveTo(size * 0.8, -size * 0.6, 0, -size);
      c.closePath();
    };

    const updateAndDraw = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      const theta = Math.atan2(h, w);

      // Perpendicular vectors to flow direction (theta)
      const perpX = -Math.sin(theta);
      const perpY = Math.cos(theta);

      // 1. Update and draw background flowing petals
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        p.t += p.speed;
        p.angle += p.angleSpeed;
        p.rotation += p.rotationSpeed;
        p.scaleX = Math.abs(Math.sin(p.angle * 0.5)) * 0.6 + 0.4;

        if (p.t > 1.0) {
          petals[i] = createPetal(false);
          continue;
        }

        const startX = -200;
        const startY = -200;
        const endX = w + 200;
        const endY = h + 200;

        const baseX = startX + (endX - startX) * p.t;
        const baseY = startY + (endY - startY) * p.t;

        const windingAmp = 100;
        const winding = Math.sin(p.t * Math.PI * 2.5) * windingAmp;

        const totalOffset = winding + p.laneOffset + Math.sin(p.angle) * 20;
        const x = baseX + totalOffset * perpX;
        const y = baseY + totalOffset * perpY;

        if (x < -100 || x > w + 100 || y < -100 || y > h + 100) {
          continue;
        }

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(p.rotation);
        ctx.scale(p.scaleX, 1);

        const gradient = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
        gradient.addColorStop(0, p.color1);
        gradient.addColorStop(1, p.color2);

        ctx.fillStyle = gradient;
        ctx.globalAlpha = p.opacity * opacityMultiplier;
        drawPetalPath(ctx, p.size);
        ctx.fill();

        ctx.restore();
      }

      // 2. Update and draw cursor trailing petals
      if (activeMouse) {
        cursorPetals.forEach((p) => {
          p.swayTime += p.swaySpeed;
          p.rotation += p.rotationSpeed;
          p.scaleX = Math.abs(Math.sin(p.swayTime * 0.5)) * 0.6 + 0.4;

          // Target offset sways/orbits gently around mouse position
          const offsetX = Math.cos(p.targetOffsetAngle + p.swayTime) * p.targetOffsetRadius;
          const offsetY = Math.sin(p.targetOffsetAngle + p.swayTime) * p.targetOffsetRadius;
          
          const targetX = mouseX + offsetX;
          const targetY = mouseY + offsetY;

          if (p.x === -200) {
            p.x = targetX;
            p.y = targetY;
          } else {
            // Apply spring-mass physics with gravity/wind drift forces
            const ax = (targetX - p.x) * p.springStrength;
            const ay = (targetY - p.y) * p.springStrength;

            // Micro sway breeze (horizontal drift) and lazy gravity (downward drift)
            const driftX = Math.sin(p.swayTime) * 0.015;
            const driftY = 0.02;

            p.vx += ax + driftX;
            p.vy += ay + driftY;

            // Damping (air resistance)
            p.vx *= p.damping;
            p.vy *= p.damping;

            // Update coords
            p.x += p.vx;
            p.y += p.vy;
          }

          // Fade in the petals when mouse is first tracked
          p.opacity += (0.85 - p.opacity) * 0.1;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.scale(p.scaleX, 1);

          const gradient = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
          gradient.addColorStop(0, p.color1);
          gradient.addColorStop(1, p.color2);

          ctx.fillStyle = gradient;
          ctx.globalAlpha = p.opacity * opacityMultiplier;
          drawPetalPath(ctx, p.size);
          ctx.fill();

          ctx.restore();
        });
      }

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      activeMouse = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
        activeMouse = true;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    resizeCanvas();
    initPetals();
    updateAndDraw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [maxPetals, speedMultiplier, opacityMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};
