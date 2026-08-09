import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Hero3DProps {
  darkMode: boolean;
}

function FluidMesh({ darkMode }: { darkMode: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);

  // Colors based on dark mode
  const primaryColor = darkMode ? '#f97316' : '#ea580c'; // Orange
  const accentColor = darkMode ? '#f59e0b' : '#d97706'; // Amber

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Slow continuous rotation
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -state.clock.getElapsedTime() * 0.1;
      wireframeRef.current.rotation.y = -state.clock.getElapsedTime() * 0.15;
    }

    // Smooth cursor tracking tilt
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, state.pointer.x * 0.8, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, state.pointer.y * 0.5, 0.05);
  });

  return (
    <group position={[1.8, 0.2, 0]}>
      {/* Outer Floating Organic Fluid Geometry */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef} scale={2.2}>
          <icosahedronGeometry args={[1, 32]} />
          <MeshDistortMaterial
            color={primaryColor}
            envMapIntensity={0.8}
            clearcoat={0.3}
            clearcoatRoughness={0.1}
            metalness={0.1}
            roughness={0.4}
            distort={0.45}
            speed={1.8}
            transparent
            opacity={darkMode ? 0.35 : 0.22}
          />
        </mesh>

        {/* Wireframe Shell Layer for Tech / Analytics aesthetic */}
        <mesh ref={wireframeRef} scale={2.5}>
          <icosahedronGeometry args={[1, 4]} />
          <meshBasicMaterial
            color={accentColor}
            wireframe
            transparent
            opacity={darkMode ? 0.2 : 0.12}
          />
        </mesh>
      </Float>
    </group>
  );
}

function FloatingDataParticles({ darkMode }: { darkMode: boolean }) {
  const count = 45;
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color(darkMode ? '#f97316' : '#ea580c');
    const color2 = new THREE.Color(darkMode ? '#38bdf8' : '#0284c7');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [darkMode]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;

    // React to pointer
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, state.pointer.x * 0.3, 0.02);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, state.pointer.y * 0.3, 0.02);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={darkMode ? 0.6 : 0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3DBackground({ darkMode }: Hero3DProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-80 transition-opacity duration-500">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={darkMode ? 0.8 : 1.2} />
        <directionalLight position={[10, 10, 5]} intensity={darkMode ? 1.5 : 1} color="#f97316" />
        <directionalLight position={[-10, -10, -5]} intensity={darkMode ? 1 : 0.8} color="#38bdf8" />
        
        <FluidMesh darkMode={darkMode} />
        <FloatingDataParticles darkMode={darkMode} />
      </Canvas>
    </div>
  );
}
