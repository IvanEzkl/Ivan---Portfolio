import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

// ── Wave Field Shaders ─────────────────────────────────
const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uSize;
  uniform float uPixelRatio;

  varying float vDepth;
  varying float vHeight;

  void main() {
    vec3 pos = position;

    // Layered sine swells rolling across the field
    float wave = sin(pos.x * 0.07 + uTime * 0.55) * 1.4
               + sin(pos.z * 0.11 + uTime * 0.4) * 1.1
               + sin((pos.x + pos.z) * 0.045 + uTime * 0.25) * 1.8;

    // Soft ripple radiating from the cursor
    float d = distance(pos.xz, uMouse);
    wave += sin(d * 0.55 - uTime * 2.6) * 1.3 * exp(-d * 0.07);

    pos.y += wave;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * uPixelRatio * (40.0 / -mvPosition.z);

    vDepth = -mvPosition.z;
    vHeight = wave;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;

  varying float vDepth;
  varying float vHeight;

  void main() {
    // Round, soft-edged points
    float r = length(gl_PointCoord - 0.5);
    if (r > 0.5) discard;
    float edge = smoothstep(0.5, 0.15, r);

    // Fade into the distance and brighten on the crests
    float depthFade = smoothstep(110.0, 20.0, vDepth);
    float crest = clamp(0.35 + (vHeight + 4.0) / 8.0 * 0.65, 0.0, 1.0);

    gl_FragColor = vec4(uColor * (0.55 + crest * 0.45), uOpacity * edge * depthFade * crest);
  }
`;

export default function ThreeBackground() {
  const mountRef = useRef(null);
  const { mode, accent } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isLight = mode === "light";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Scene, Camera, Renderer ──────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 14, 42);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    const pixelRatio = Math.min(window.devicePixelRatio, 1.75);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(pixelRatio);
    container.appendChild(renderer.domElement);

    // ── Wave Field (points on a floor plane) ─────────────
    const geometry = new THREE.PlaneGeometry(180, 110, 150, 90);
    geometry.rotateX(-Math.PI / 2);
    geometry.translate(0, -6, -25);

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 999) },
      uColor: { value: new THREE.Color(accent) },
      uOpacity: { value: isLight ? 0.55 : 0.8 },
      uSize: { value: isLight ? 2.4 : 2.1 },
      uPixelRatio: { value: pixelRatio },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
    });

    const field = new THREE.Points(geometry, material);
    scene.add(field);

    // ── Interaction & Events ─────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = window.scrollY;
    const ripple = new THREE.Vector2(0, 999);
    const targetRipple = new THREE.Vector2(0, 999);

    const handleMouseMove = (e) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      targetMouseX = (nx - 0.5) * 2;
      targetMouseY = -(ny - 0.5) * 2;
      // Map screen position onto the floor: top of screen = far, bottom = near
      targetRipple.set((nx - 0.5) * 90, THREE.MathUtils.lerp(-70, 20, ny));
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // ── Animation Loop ───────────────────────────────────
    let animationFrameId = null;
    let time = 0;
    const clock = new THREE.Clock();

    const renderFrame = () => {
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;
      ripple.lerp(targetRipple, 0.05);

      // Gentle parallax plus a slow drift down the field as the page scrolls
      camera.position.x = mouseX * 3;
      camera.position.y = 14 + mouseY * 1.5 - Math.min(scrollY * 0.002, 6);
      camera.lookAt(0, -4, -20);

      uniforms.uTime.value = time;
      uniforms.uMouse.value.copy(ripple);
      renderer.render(scene, camera);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += Math.min(clock.getDelta(), 0.1);
      renderFrame();
    };

    const start = () => {
      if (animationFrameId !== null || reduceMotion) return;
      clock.getDelta();
      animate();
    };

    const stop = () => {
      if (animationFrameId === null) return;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    };

    const handleVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", handleVisibility);

    if (reduceMotion) {
      time = 4;
      renderFrame();
    } else {
      start();
    }

    // ── Cleanup ──────────────────────────────────────────
    return () => {
      stop();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
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
