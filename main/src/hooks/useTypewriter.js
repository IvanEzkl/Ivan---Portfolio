import { useState, useEffect } from "react";

export function useTypewriter(roles = [], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1800) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      if (roles.length > 0) {
        setText(roles[0]);
      }
      return;
    }

    if (roles.length === 0) return;

    const currentRoleIndex = loopNum % roles.length;
    const fullText = roles[currentRoleIndex];

    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => fullText.substring(0, prev.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prev) => fullText.substring(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
