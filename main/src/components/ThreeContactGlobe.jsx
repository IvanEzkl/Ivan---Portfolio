import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

export default function ThreeContactGlobe() {
  const mountRef = useRef(null);
  const { mode, accent } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const size = 180;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5.2);

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

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Wireframe Globe
    const globeGeo = new THREE.SphereGeometry(1.6, 24, 18);
    const globeMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.45 : 0.65,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globe);

    // 2. Orbital Satellite Ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.02, 8, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      transparent: true,
      opacity: isLight ? 0.35 : 0.5,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    globeGroup.add(ring);

    // 3. Orbiting Pinpoint / Manila Node
    const pinGeo = new THREE.SphereGeometry(0.1, 12, 12);
    const pinMat = new THREE.MeshBasicMaterial({
      color: isLight ? 0x090d16 : 0xffffff,
    });
    const pin = new THREE.Mesh(pinGeo, pinMat);
    globeGroup.add(pin);

    // Tilt globe
    globeGroup.rotation.x = 0.35;

    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      globeGroup.rotation.y = elapsed * 0.35;
      ring.rotation.z = elapsed * 0.2;

      // Orbiting pulse node on the ring
      pin.position.x = Math.cos(elapsed * 1.2) * 2.1;
      pin.position.y = Math.sin(elapsed * 1.2) * 2.1 * Math.cos(Math.PI / 3);
      pin.position.z = Math.sin(elapsed * 1.2) * 2.1 * Math.sin(Math.PI / 3);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [mode, accent]);

  return (
    <div className="three-contact-globe-wrap" title="Global Connectivity / Manila, PH (UTC+8)">
      <div ref={mountRef} className="three-contact-globe-canvas" />
      <div className="globe-status-pill font-mono">
        <span className="globe-status-dot" />
        <span>MANILA • ONLINE</span>
      </div>
    </div>
  );
}
