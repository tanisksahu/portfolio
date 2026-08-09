import React, { useState, useRef } from 'react';

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'orange' | 'emerald' | 'violet';
  key?: React.Key;
}

export default function TiltCard3D({ children, className = '', glowColor = 'cyan' }: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [scale, setScale] = useState(1);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const glowMap = {
    cyan: 'hover:shadow-[0_0_35px_rgba(0,240,255,0.35)] hover:border-cyan-500/50',
    orange: 'hover:shadow-[0_0_35px_rgba(255,90,31,0.35)] hover:border-orange-500/50',
    emerald: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.35)] hover:border-emerald-500/50',
    violet: 'hover:shadow-[0_0_35px_rgba(139,92,246,0.35)] hover:border-violet-500/50'
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    // Max 15 degree rotation
    const rY = (xPct - 0.5) * 20;
    const rX = (yPct - 0.5) * -20;

    setRotX(rX);
    setRotY(rY);
    setScale(1.02);
    setGlarePos({ x: xPct * 100, y: yPct * 100, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
    setScale(1);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-200 ease-out preserve-3d cursor-pointer ${glowMap[glowColor]} ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Dynamic Specular Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}), transparent 70%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
