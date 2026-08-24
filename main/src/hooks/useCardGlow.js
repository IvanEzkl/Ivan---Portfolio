import { useRef, useEffect } from "react";

export function useCardGlow() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return cardRef;
}
