import { useEffect } from "react";

// ============================================================
//  useKeySound.js  –  Creamy & Clicky Mechanical Switch Synthesizer
// ============================================================

let audioCtx = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

let lastPlayTime = 0;

/**
 * Synthesizes a crisp, creamy, tactile mechanical key clack (lubed custom switch feel).
 */
export function playKeyClickSound(volume = 0.09) {
  const nowMs = performance.now();
  if (nowMs - lastPlayTime < 38) return; // Smooth throttle
  lastPlayTime = nowMs;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // ── 1. High-Frequency Crisp Mechanical "Tick" (18ms) ────────
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    const clickFilter = ctx.createBiquadFilter();

    const clickFreq = 2600 + Math.random() * 500;
    clickOsc.type = "sine";
    clickOsc.frequency.setValueAtTime(clickFreq, now);
    clickOsc.frequency.exponentialRampToValueAtTime(1100, now + 0.016);

    clickFilter.type = "bandpass";
    clickFilter.frequency.setValueAtTime(clickFreq, now);
    clickFilter.Q.setValueAtTime(4.2, now);

    clickGain.gain.setValueAtTime(volume * 0.9, now);
    clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

    clickOsc.connect(clickFilter);
    clickFilter.connect(clickGain);
    clickGain.connect(ctx.destination);

    clickOsc.start(now);
    clickOsc.stop(now + 0.02);

    // ── 2. Creamy Marbly Clack (Mid-range resonance, 24ms) ─────
    const clackOsc = ctx.createOscillator();
    const clackGain = ctx.createGain();
    const clackFilter = ctx.createBiquadFilter();

    const clackFreq = 840 + Math.random() * 160;
    clackOsc.type = "triangle";
    clackOsc.frequency.setValueAtTime(clackFreq, now);
    clackOsc.frequency.exponentialRampToValueAtTime(380, now + 0.024);

    clackFilter.type = "lowpass";
    clackFilter.frequency.setValueAtTime(1800, now);
    clackFilter.Q.setValueAtTime(2.0, now);

    clackGain.gain.setValueAtTime(volume * 0.75, now);
    clackGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

    clackOsc.connect(clackFilter);
    clackFilter.connect(clackGain);
    clackGain.connect(ctx.destination);

    clackOsc.start(now);
    clackOsc.stop(now + 0.027);

    // ── 3. Soft Polycarbonate Stem Bottom-Out (Tight 22ms) ──────
    const stemOsc = ctx.createOscillator();
    const stemGain = ctx.createGain();

    const stemFreq = 480 + Math.random() * 60;
    stemOsc.type = "sine";
    stemOsc.frequency.setValueAtTime(stemFreq, now);
    stemOsc.frequency.exponentialRampToValueAtTime(220, now + 0.022);

    stemGain.gain.setValueAtTime(volume * 0.45, now);
    stemGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

    stemOsc.connect(stemGain);
    stemGain.connect(ctx.destination);

    stemOsc.start(now);
    stemOsc.stop(now + 0.025);
  } catch (e) {
    // Ignore audio restriction before first user gesture
  }
}

/**
 * Global hook to attach creamy click sound to all boxes, cards, pills, buttons, and links.
 */
export function useGlobalHoverSound() {
  useEffect(() => {
    // Unlock AudioContext on first user interaction
    const unlockAudio = () => {
      getAudioContext();
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio, { passive: true });

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      // Match cards, boxes, pills, buttons, links, inputs, and interactive containers
      const interactiveEl = target.closest(
        ".card, .pill, .about-photo-card, button, a, input, textarea, .philosophy-btn, .accent-dot, .floating-nav__pill, .floating-nav__connect, .floating-nav__logo, .project-card, .clock-time"
      );

      if (interactiveEl && !interactiveEl.dataset.soundHovered) {
        interactiveEl.dataset.soundHovered = "true";
        playKeyClickSound();

        const handleMouseLeave = () => {
          delete interactiveEl.dataset.soundHovered;
          interactiveEl.removeEventListener("mouseleave", handleMouseLeave);
        };
        interactiveEl.addEventListener("mouseleave", handleMouseLeave, { once: true });
      }
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);
}
