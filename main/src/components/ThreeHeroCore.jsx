import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

export default function ThreeHeroCore() {
  const mountRef = useRef(null);
  const { mode, accent } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const size = 110;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const isLight = mode === "light";
    const accentColor = new THREE.Color(accent);

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Core Octahedron
    const coreGeo = new THREE.OctahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.7 : 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // 2. Outer Gimbal Ring 1
    const ring1Geo = new THREE.TorusGeometry(1.8, 0.02, 8, 36);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: isLight ? 0x64748b : 0x71717a,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    coreGroup.add(ring1);

    // 3. Outer Gimbal Ring 2
    const ring2 = ring1.clone();
    ring2.rotation.x = Math.PI / 2;
    coreGroup.add(ring2);

    let animationId;
    let isHovered = false;
    let clock = new THREE.Clock();

    const onEnter = () => { isHovered = true; };
    const onLeave = () => { isHovered = false; };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const speed = isHovered ? 2.5 : 1.0;

      coreGroup.rotation.y = elapsed * 0.5 * speed;
      coreGroup.rotation.x = elapsed * 0.3 * speed;
      ring1.rotation.z = elapsed * 0.4 * speed;
      ring2.rotation.y = -elapsed * 0.4 * speed;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [mode, accent]);

  return (
    <div className="three-hero-core-wrap" title="Interactive 3D System Core">
      <div ref={mountRef} className="three-hero-core-canvas" />
    </div>
  );
}
