"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const OverlayGlow = ({
  size = 720,
  color1 = "rgba(155,0,255,0.6)",
  color2 = "rgba(75,0,130,0.4)",
  blur = 180,
  className = "",
  gooey = true,
}) => {
  const overlayRef = useRef(null);
  const blobRefs = useRef([]);

  useEffect(() => {
    const target = overlayRef.current;
    if (!target) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (gooey) {
      // Global drift + subtle pulse for the whole gooey group
      gsap.to(target, {
        x: "+=28",
        y: "+=18",
        scale: 1.05,
        rotate: 2.5,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Animate multiple blobs for a gooey motion
      blobRefs.current.forEach((el, i) => {
        if (!el) return;
        const configs = [
          { dx: 90, dy: 42, sc: 1.18, rot: 8, dur: 5.5 },
          { dx: -70, dy: 34, sc: 1.12, rot: -7, dur: 6.2 },
          { dx: 60, dy: -28, sc: 1.1, rot: 6, dur: 5.8 },
        ];
        const { dx, dy, sc, rot, dur } = configs[i % configs.length];
        gsap.to(el, {
          x: `+=${dx}`,
          y: `+=${dy}`,
          scale: sc,
          rotate: rot,
          duration: dur,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
        // gentle opacity breathing
        gsap.to(el, {
          opacity: 0.92,
          duration: dur * 0.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    } else if (!isMobile) {
      // Fallback single blob floating animation
      gsap.to(target, {
        x: "+=60",
        y: "+=30",
        scale: 1.6,
        rotation: 5,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(target, {
        boxShadow: `0 0 120px ${color1}, 0 0 200px ${color2}`,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [color1, color2, gooey]);

  if (gooey) {
    return (
      <div
        className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
        style={{
          width: size,
          height: size,
          filter: `url(#gooey-filter) blur(${Math.max(blur - 120, 40)}px)`,
          mixBlendMode: "screen",
        }}
      >
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
          <defs>
            <filter id="gooey-filter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div
          ref={overlayRef}
          className="relative mx-auto my-auto"
          style={{ width: "100%", height: "100%" }}
        >
          <span
            ref={(el) => (blobRefs.current[0] = el)}
            className="absolute rounded-full"
            style={{
              width: size * 0.55,
              height: size * 0.55,
              left: "15%",
              top: "18%",
              background: `radial-gradient(circle at 30% 30%, ${color1}, ${color2})`,
            }}
          />
          <span
            ref={(el) => (blobRefs.current[1] = el)}
            className="absolute rounded-full"
            style={{
              width: size * 0.45,
              height: size * 0.45,
              left: "40%",
              top: "40%",
              background: `radial-gradient(circle at 70% 40%, ${color1}, ${color2})`,
            }}
          />
          <span
            ref={(el) => (blobRefs.current[2] = el)}
            className="absolute rounded-full"
            style={{
              width: size * 0.35,
              height: size * 0.35,
              left: "22%",
              top: "52%",
              background: `radial-gradient(circle at 50% 70%, ${color1}, ${color2})`,
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={overlayRef}
      className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at center, ${color1}, ${color2})`,
        filter: `blur(${blur}px)`,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default OverlayGlow;
