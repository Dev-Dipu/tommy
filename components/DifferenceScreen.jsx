"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const DifferenceScreen = () => {
  const sectionRef = useRef(null);
  const boxesRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Pin the section for controlled scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
      });

      // Animate each card
      boxesRef.current.forEach((box, i) => {
        gsap.fromTo(
          box,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotateY: i === 0 ? -25 : i === 1 ? 25 : -20,
            rotateX: 10,
            transformOrigin: "center center",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${15 + i * 20}% center`,
              end: `${30 + i * 20}% center`,
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center text-white"
    >
      <div className="h-screen flex flex-col items-center justify-center gap-16 sticky top-0">
        {/* Headline */}
        <h3 className="text-3xl font-semibold text-center mb-8">
          This is how we are making a
        </h3>

        {/* Static big text */}
        <h1 className="text-[120px] font-[ppedititalic] text-center absolute z-0 text-white select-none tracking-tight">
          difference
        </h1>

        {/* Cards */}
        <div
          className="w-3/5 h-[70%] flex items-center justify-center relative"
          style={{ perspective: "2000px" }}
        >
          {/* Box 1 */}
          <div
            ref={(el) => (boxesRef.current[0] = el)}
            className="absolute flex items-center justify-center -translate-y-1/2 -translate-x-2/3 w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10"
          >
            <div className="w-[65%] font-[ppedit] text-3xl text-center">
              <div className="flex justify-center gap-2 mb-1">
                <span className="h-8 w-16 bg-amber-50 block"></span>
                <h3>Hours</h3>
              </div>
              <h3>Saved Weekly</h3>
            </div>
          </div>

          {/* Box 2 */}
          <div
            ref={(el) => (boxesRef.current[1] = el)}
            className="absolute flex items-center justify-center translate-y-1/2 w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10"
          >
            <div className="w-[65%] font-[ppedit] text-3xl text-center">
              <div className="flex justify-center gap-2 mb-1">
                <span className="h-8 w-16 bg-amber-50 block"></span>
                <h3>Brands</h3>
              </div>
              <h3>Launched</h3>
            </div>
          </div>

          {/* Box 3 */}
          <div
            ref={(el) => (boxesRef.current[2] = el)}
            className="absolute flex items-center justify-center -translate-y-1/2 translate-x-[70%] w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10"
          >
            <div className="w-[65%] font-[ppedit] text-3xl text-center">
              <div className="flex justify-center gap-2 mb-1">
                <span className="h-8 w-16 bg-amber-50 block"></span>
                <h3>Clients</h3>
              </div>
              <h3>Collaborated</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceScreen;
