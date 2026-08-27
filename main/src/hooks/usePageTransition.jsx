import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const { speed } = useTheme();
  
  const [transitionState, setTransitionState] = useState({
    active: false,
    x: 0,
    y: 0,
    expanding: false,
  });

  // Initial site visit intro pixel reveal transition
  useEffect(() => {
    const w = typeof window !== "undefined" ? window.innerWidth / 2 : 500;
    const h = typeof window !== "undefined" ? window.innerHeight / 2 : 400;
    const speedMs = parseFloat(speed) * 1000 || 650;

    // Start active & expanding immediately
    setTransitionState({
      active: true,
      x: w,
      y: h,
      expanding: true,
    });

    // Hold the pixel curtain, then dissolve pixels outward to unveil the bento design
    const timer = setTimeout(() => {
      setTransitionState((prev) => ({ ...prev, expanding: false }));
      setTimeout(() => {
        setTransitionState({ active: false, x: 0, y: 0, expanding: false });
      }, speedMs * 1.4);
    }, 450);

    return () => clearTimeout(timer);
  }, [speed]);

  const transitionTo = useCallback(
    (to, e) => {
      // Default to center if event not provided
      let clientX = window.innerWidth / 2;
      let clientY = window.innerHeight / 2;

      if (e && typeof e.clientX === "number") {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const speedMs = parseFloat(speed) * 1000 || 650;

      // 1. Position pixels at click point
      setTransitionState({
        active: true,
        x: clientX,
        y: clientY,
        expanding: false,
      });

      // 2. Trigger pixel cascade inward
      requestAnimationFrame(() => {
        setTransitionState((prev) => ({ ...prev, expanding: true }));
      });

      // 3. Navigate route at peak of expansion with brief hold
      const halfTime = speedMs * 0.95;
      setTimeout(() => {
        navigate(to);
        window.scrollTo({ top: 0, behavior: "instant" });

        // 4. Retract/dissolve pixel overlay
        setTimeout(() => {
          setTransitionState((prev) => ({ ...prev, expanding: false }));
          setTimeout(() => {
            setTransitionState({ active: false, x: 0, y: 0, expanding: false });
          }, speedMs * 1.4);
        }, 160);
      }, halfTime);
    },
    [navigate, speed]
  );

  return (
    <TransitionContext.Provider value={{ transitionTo, transitionState }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(TransitionContext);
  const navigate = useNavigate();
  if (!context) {
    return {
      transitionTo: (to) => {
        navigate(to);
      },
      transitionState: { active: false, expanding: false, x: 0, y: 0 },
    };
  }
  return context;
}
