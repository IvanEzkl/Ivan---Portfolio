import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

export default function ThreeBackground() {
  const mountRef = useRef(null);
  const { mode, accent } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // ── Scene, Camera, Renderer ──────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 50);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const isLight = mode === "light";
    const accentColor = new THREE.Color(accent);

    // ── 1. Deep Perspective Blueprint Grid (Isometric Floor) ──
    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    const gridSize = 120;
    const gridDivisions = 40;
    const gridColor1 = accentColor;
    const gridColor2 = isLight ? new THREE.Color(0xd1d5db) : new THREE.Color(0x1a1a20);

    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, gridColor1, gridColor2);
    gridHelper.position.set(0, -18, -15);
    gridHelper.rotation.x = 0.25;
    gridHelper.material.opacity = isLight ? 0.25 : 0.45;
    gridHelper.material.transparent = true;
    gridGroup.add(gridHelper);

    // ── 2. Interactive Constellation Plexus (Nano-Nodes & Lines) ──
    const particleCount = 110;
    const maxDistance = 14;

    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      // Spread across background plane
      particlePositions[i * 3] = (Math.random() - 0.5) * 85;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 55;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 10;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.025,
        y: (Math.random() - 0.5) * 0.025,
        z: (Math.random() - 0.5) * 0.015,
      });
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    // Particle Material (Crisp micro dots)
    const particleMaterial = new THREE.PointsMaterial({
      color: accentColor,
      size: isLight ? 0.7 : 0.9,
      transparent: true,
      opacity: isLight ? 0.4 : 0.7,
      sizeAttenuation: true,
    });

    const particleMesh = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particleMesh);

    // Line Connections Geometry & Material
    const maxLines = particleCount * particleCount;
    const linePositions = new Float32Array(maxLines * 3);
    const lineColors = new Float32Array(maxLines * 3);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    linesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: isLight ? 0.25 : 0.5,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // ── 3. Subtle Orbiting Blueprint Wireframes (Distant) ──
    const wireGroup = new THREE.Group();
    scene.add(wireGroup);

    const wireShapes = [
      new THREE.IcosahedronGeometry(2.5, 0),
      new THREE.OctahedronGeometry(2.0, 0),
      new THREE.TetrahedronGeometry(1.8, 0),
    ];

    const wireMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.08 : 0.15,
    });

    const wireMeshes = [];
    for (let w = 0; w < 4; w++) {
      const geo = wireShapes[w % wireShapes.length];
      const mesh = new THREE.Mesh(geo, wireMat);
      mesh.position.set(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20 - 15
      );
      wireGroup.add(mesh);
      wireMeshes.push({
        mesh,
        rx: (Math.random() - 0.5) * 0.004,
        ry: (Math.random() - 0.5) * 0.005,
      });
    }

    // ── Interaction & Events ─────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // ── Animation Loop ───────────────────────────────────
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.035;
      mouseY += (targetMouseY - mouseY) * 0.035;

      // Parallax camera rotation & subtle shift
      camera.position.x = mouseX * 4;
      camera.position.y = mouseY * 3 - (scrollY * 0.004);
      camera.lookAt(0, 0, 0);

      // Rotate Grid slightly
      gridHelper.rotation.z = Math.sin(elapsed * 0.1) * 0.02;

      // Update Constellation Nodes
      const positions = particlesGeometry.attributes.position.array;
      let lineIndex = 0;
      let colorIndex = 0;
      let numConnected = 0;

      for (let i = 0; i < particleCount; i++) {
        // Move particle
        positions[i * 3] += particleVelocities[i].x;
        positions[i * 3 + 1] += particleVelocities[i].y;
        positions[i * 3 + 2] += particleVelocities[i].z;

        // Boundary bounce
        if (positions[i * 3] < -45 || positions[i * 3] > 45) particleVelocities[i].x *= -1;
        if (positions[i * 3 + 1] < -30 || positions[i * 3 + 1] > 30) particleVelocities[i].y *= -1;
        if (positions[i * 3 + 2] < -30 || positions[i * 3 + 2] > 5) particleVelocities[i].z *= -1;

        // Interactive mouse push/pull (gentle deflection)
        const dx = positions[i * 3] - mouseX * 25;
        const dy = positions[i * 3 + 1] - mouseY * 18;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < 12) {
          const force = (12 - distToMouse) / 12 * 0.04;
          positions[i * 3] += dx * force;
          positions[i * 3 + 1] += dy * force;
        }

        // Check connections to other nodes
        for (let j = i + 1; j < particleCount; j++) {
          const p1x = positions[i * 3];
          const p1y = positions[i * 3 + 1];
          const p1z = positions[i * 3 + 2];

          const p2x = positions[j * 3];
          const p2y = positions[j * 3 + 1];
          const p2z = positions[j * 3 + 2];

          const distX = p1x - p2x;
          const distY = p1y - p2y;
          const distZ = p1z - p2z;
          const dist = Math.sqrt(distX * distX + distY * distY + distZ * distZ);

          if (dist < maxDistance) {
            const alpha = 1.0 - dist / maxDistance;

            linePositions[lineIndex++] = p1x;
            linePositions[lineIndex++] = p1y;
            linePositions[lineIndex++] = p1z;

            linePositions[lineIndex++] = p2x;
            linePositions[lineIndex++] = p2y;
            linePositions[lineIndex++] = p2z;

            const r = accentColor.r;
            const g = accentColor.g;
            const b = accentColor.b;

            lineColors[colorIndex++] = r * alpha;
            lineColors[colorIndex++] = g * alpha;
            lineColors[colorIndex++] = b * alpha;

            lineColors[colorIndex++] = r * alpha;
            lineColors[colorIndex++] = g * alpha;
            lineColors[colorIndex++] = b * alpha;

            numConnected++;
          }
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;

      linesGeometry.setDrawRange(0, numConnected * 2);
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.color.needsUpdate = true;

      // Rotate distant wireframes
      wireMeshes.forEach((w) => {
        w.mesh.rotation.x += w.rx;
        w.mesh.rotation.y += w.ry;
      });

      renderer.render(scene, camera);
    };

    animate();

    // ── Cleanup ──────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      gridHelper.geometry.dispose();
      gridHelper.material.dispose();
      particlesGeometry.dispose();
      particleMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      wireMat.dispose();
      wireShapes.forEach((s) => s.dispose());
      renderer.dispose();
    };
  }, [mode, accent]);

  return (
    <div
      ref={mountRef}
      className="three-bg-canvas"
      aria-hidden="true"
    />
  );
}
