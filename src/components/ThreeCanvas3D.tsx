import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvas3DProps {
  darkMode?: boolean;
}

export default function ThreeCanvas3D({ darkMode = true }: ThreeCanvas3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Objects Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Color definitions based on mode
    const primaryColor = darkMode ? 0x00f0ff : 0xff5a1f; // Cyber Cyan vs Neon Orange
    const secondaryColor = darkMode ? 0x00ff9d : 0x7c3aed; // Electric Emerald vs Purple
    const particleColor = darkMode ? 0x38bdf8 : 0xf97316;

    // 1. Central 3D Icosahedron (wireframe crystal)
    const icoGeo = new THREE.IcosahedronGeometry(3.5, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: darkMode ? 0.35 : 0.25
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    mainGroup.add(icoMesh);

    // 2. Outer Torus Ring
    const torusGeo = new THREE.TorusGeometry(6, 0.08, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: darkMode ? 0.4 : 0.3
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 3;
    mainGroup.add(torusMesh);

    // 3. Floating Dodecahedrons
    const floaters: THREE.Mesh[] = [];
    const floaterGeo = new THREE.DodecahedronGeometry(0.8, 0);
    for (let i = 0; i < 12; i++) {
      const floaterMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? primaryColor : secondaryColor,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });
      const floater = new THREE.Mesh(floaterGeo, floaterMat);
      floater.position.set(
        (Math.random() - 0.5) * 24,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12
      );
      floater.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatSpeed: Math.random() * 0.005 + 0.002,
        initialY: floater.position.y
      };
      mainGroup.add(floater);
      floaters.push(floater);
    }

    // 4. Particle Starfield Matrix
    const particlesCount = 350;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 40;
      posArray[i + 1] = (Math.random() - 0.5) * 30;
      posArray[i + 2] = (Math.random() - 0.5) * 30;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.12,
      color: particleColor,
      transparent: true,
      opacity: 0.6
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Mouse interactivity
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse movement interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate central geometries
      icoMesh.rotation.x = elapsedTime * 0.15;
      icoMesh.rotation.y = elapsedTime * 0.2;

      torusMesh.rotation.z = elapsedTime * 0.1;
      torusMesh.rotation.y = elapsedTime * 0.15;

      // Group tilt based on mouse
      mainGroup.rotation.y = targetX * 0.3;
      mainGroup.rotation.x = -targetY * 0.3;

      // Animate floating polyhedrons
      floaters.forEach((f) => {
        f.rotation.x += f.userData.rotSpeedX;
        f.rotation.y += f.userData.rotSpeedY;
        f.position.y = f.userData.initialY + Math.sin(elapsedTime * 2 + f.position.x) * 0.5;
      });

      // Slowly rotate particle field
      particlesMesh.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      floaterGeo.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, [darkMode]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
}
