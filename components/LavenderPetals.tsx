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

export const LavenderPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let petals: Petal[] = [];
    const maxPetals = 70; // Lush flow of petals in the river

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
        // Spread petals along the river line initially, otherwise spawn at start (t = 0)
        t: isInitial ? Math.random() : 0,
        speed: Math.random() * 0.0008 + 0.0007, // Flow speed
        laneOffset: Math.random() * 320 - 160, // Width of river channel (320px)
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        scaleX: Math.random() * 0.6 + 0.4,
        opacity: Math.random() * 0.4 + 0.5, // 0.5 to 0.9
        angle: Math.random() * Math.PI * 2,
        angleSpeed: Math.random() * 0.01 + 0.005,
        color1: colorPair.c1,
        color2: colorPair.c2,
      };
    };

    const initPetals = () => {
      petals = [];
      for (let i = 0; i < maxPetals; i++) {
        petals.push(createPetal(true));
      }
    };

    const drawPetalPath = (c: CanvasRenderingContext2D, size: number) => {
      // Elegant cherry blossom petal path
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

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Increment progress along the diagonal river path
        p.t += p.speed;
        p.angle += p.angleSpeed;
        p.rotation += p.rotationSpeed;

        // 3D rotation effect by oscillating scaleX
        p.scaleX = Math.abs(Math.sin(p.angle * 0.5)) * 0.6 + 0.4;

        // Reset once a petal reaches the end of the river
        if (p.t > 1.0) {
          petals[i] = createPetal(false);
          continue;
        }

        // River centerline: diagonal path from NW (-200, -200) to SE (w + 200, h + 200)
        const startX = -200;
        const startY = -200;
        const endX = w + 200;
        const endY = h + 200;

        const baseX = startX + (endX - startX) * p.t;
        const baseY = startY + (endY - startY) * p.t;

        // Add winding current (S-curves) to the river centerline
        const windingAmp = 100; // amplitude of S-curves
        const winding = Math.sin(p.t * Math.PI * 2.5) * windingAmp;

        // Final coordinates = Base path + Winding + Lane Offset + Small sway offset
        const totalOffset = winding + p.laneOffset + Math.sin(p.angle) * 20;
        const x = baseX + totalOffset * perpX;
        const y = baseY + totalOffset * perpY;

        // Draw if within active viewport boundaries (with padding)
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
        ctx.globalAlpha = p.opacity;
        drawPetalPath(ctx, p.size);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initPetals();
    updateAndDraw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};
