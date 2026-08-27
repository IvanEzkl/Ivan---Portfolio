import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

export default function ThreeBlueprint({ projectId, isHovered, archLabel }) {
  const mountRef = useRef(null);
  const { mode, accent } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = 150;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const isLight = mode === "light";
    const accentColor = new THREE.Color(accent);

    // Group for the 3D model
    const group = new THREE.Group();
    scene.add(group);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(10, 10, accentColor, isLight ? 0xcccccc : 0x222226);
    gridHelper.position.y = -2;
    gridHelper.material.opacity = isLight ? 0.35 : 0.25;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // ── Build Project-Specific 3D Objects ──
    const mainMaterial = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.6 : 0.85,
    });

    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: isLight ? 0x090d16 : 0xffffff,
      wireframe: false,
    });

    let mainMesh;
    const extraNodes = [];

    if (projectId === "skillmatch") {
      // 3D Neural / AI Network
      const geo = new THREE.IcosahedronGeometry(1.6, 1);
      mainMesh = new THREE.Mesh(geo, mainMaterial);
      group.add(mainMesh);

      // Orbiting neural nodes
      for (let i = 0; i < 8; i++) {
        const nodeGeo = new THREE.SphereGeometry(0.08, 8, 8);
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMaterial);
        const phi = Math.acos(-1 + (2 * i) / 8);
        const theta = Math.sqrt(8 * Math.PI) * phi;
        nodeMesh.position.setFromSphericalCoords(2.2, phi, theta);
        group.add(nodeMesh);
        extraNodes.push({ mesh: nodeMesh, radius: 2.2, speed: 0.02 + i * 0.005, angle: theta });
      }
    } else if (projectId === "rice-trader") {
      // 3D Isometric Inventory Box Matrix
      const boxGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
      mainMesh = new THREE.Mesh(boxGeo, mainMaterial);
      group.add(mainMesh);

      // Surrounding data block cubes
      for (let x = -1; x <= 1; x += 2) {
        for (let y = -1; y <= 1; y += 2) {
          const smallGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
          const smallMesh = new THREE.Mesh(smallGeo, mainMaterial);
          smallMesh.position.set(x * 1.5, y * 1.0, 0);
          group.add(smallMesh);
          extraNodes.push({ mesh: smallMesh, offset: x * y });
        }
      }
    } else if (projectId === "cookithow") {
      // 3D Torus Ring Structure & Orbital Particle Nodes
      const torusGeo = new THREE.TorusGeometry(1.4, 0.25, 12, 32);
      mainMesh = new THREE.Mesh(torusGeo, mainMaterial);
      group.add(mainMesh);

      const innerSphere = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.7, 0),
        mainMaterial
      );
      group.add(innerSphere);
      extraNodes.push({ mesh: innerSphere, isInner: true });
    } else {
      // Portfolio V3: Nested Brutalist Cubes
      const outerCube = new THREE.BoxGeometry(1.8, 1.8, 1.8);
      mainMesh = new THREE.Mesh(outerCube, mainMaterial);
      group.add(mainMesh);

      const innerCube = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.9, 0),
        new THREE.MeshBasicMaterial({ color: isLight ? 0x090d16 : 0xffffff, wireframe: true })
      );
      group.add(innerCube);
      extraNodes.push({ mesh: innerCube, isInner: true });
    }

    // ── Interaction & Resize ──
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
      renderer.setSize(w, height);
    };

    window.addEventListener("resize", handleResize);

    // ── Animation Loop ──
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const speedMultiplier = isHovered ? 2.8 : 1.0;

      group.rotation.y += 0.012 * speedMultiplier;
      group.rotation.x += 0.006 * speedMultiplier;

      // Animate extra nodes
      extraNodes.forEach((item, idx) => {
        if (item.radius) {
          item.angle += item.speed * speedMultiplier;
          item.mesh.position.x = Math.cos(item.angle) * item.radius;
          item.mesh.position.z = Math.sin(item.angle) * item.radius;
        } else if (item.isInner) {
          item.mesh.rotation.y -= 0.02 * speedMultiplier;
          item.mesh.rotation.z += 0.015 * speedMultiplier;
        } else {
          item.mesh.rotation.y += 0.02 * speedMultiplier;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [projectId, isHovered, mode, accent]);

  return (
    <div className="three-blueprint-wrap">
      <div ref={mountRef} className="three-blueprint-canvas" />
      <div className="three-blueprint-badge font-mono">
        <span>{archLabel}</span>
      </div>
    </div>
  );
}
