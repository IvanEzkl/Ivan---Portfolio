import React from "react";
import { usePageTransition } from "../hooks/usePageTransition";

export default function BackButton({ to = "/" }) {
  const { transitionTo } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    transitionTo(to, e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn-back"
      aria-label="Back to Overview"
    >
      Back
    </button>
  );
}
