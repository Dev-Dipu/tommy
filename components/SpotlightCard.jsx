"use client";
import { useRef } from "react";
import gsap from "gsap";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef(null);
  const spotlightRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current || !spotlightRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(spotlightRef.current, {
      background: `radial-gradient(circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = () => {
    gsap.to(spotlightRef.current, {
      opacity: 0.6,
      duration: 0.5,
      ease: "power2.in",
    });
  };

  const handleMouseLeave = () => {
    // Smooth fade + move spotlight toward corner (not jump)
    gsap.to(spotlightRef.current, {
      duration: 0.4,
      ease: "power3.out",
    });

    // Animate the gradient position smoothly to one side
    gsap.to(spotlightRef.current, {
      background: `radial-gradient(circle at -200px -200px, ${spotlightColor}, transparent 80%)`,
      duration: 0.4,
      ease: "power3.inOut",
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative shadow-[0_4px_20px_rgba(255,255,255,0.2)] border-2 border-white bg-black overflow-hidden p-4 ${className}`}
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at -140px -140px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
