"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OverlayGlow from "./OverlayGlow";

gsap.registerPlugin(ScrollTrigger);

const DifferenceScreen = () => {
  const sectionRef = useRef(null);
  const boxesRef = useRef([]);
  const numbersRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const targetNumbers = [81, 24, 37]; // Target numbers for each card

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < window.innerHeight);
    };

    checkDevice(); // Run once on mount
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    // Pin the section — increased end value for longer pin
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${isMobile ? "40%" : "80%"}`, // was 60%, now stays a bit longer so last card completes
      scrub: true,
      pin: true,
    });

    // Animate cards and trigger number animation
    boxesRef.current.forEach((box, i) => {
      gsap.fromTo(
        box,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
          rotate: i === 0 ? -3 : i === 1 ? -2 : 5.45,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: i === 0 ? -3 : i === 1 ? -2 : 5.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            // shifted scroll starts earlier for even spacing
            start: `${10 + i * 20}% center`, // was 15 + i * 25%
            end: `${30 + i * 20}% center`,   // was 35 + i * 25%
            scrub: 0.8,
            onEnter: () => animateNumber(i),
          },
        }
      );
    });
  }, []);

  // Animate numbers from 0 → target using gsap.to
  const animateNumber = (index) => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: targetNumbers[index],
      duration: 2,
      ease: "power1.out",
      onUpdate: () => {
        if (numbersRef.current[index]) {
          numbersRef.current[index].innerText = `+${Math.floor(obj.val)}`;
        }
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className="h-screen overflow-hidden flex flex-col items-center justify-center gap-20 text-white pointer-events-none"
      style={{ perspective: "2000px" }}
    >
       <OverlayGlow />
      {/* Heading */}
      <h3 className="md:text-3xl text-xl text-center font-semibold">
        This is how we are making a difference
      </h3>

      {/* Cards Container */}
      <div className="w-3/5 h-[70%] flex items-center justify-center relative md:scale-90 scale-50">
        {/* Large background word */}

        {/* Box 1 */}
        <div
          ref={(el) => (boxesRef.current[0] = el)}
          className="box absolute flex items-center justify-center -translate-y-1/2 -translate-x-2/3 -rotate-3 w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10"
        >
          <div className="w-[65%] font-[ppedit] text-3xl text-center">
            <div className="flex justify-center gap-2 items-center">
              <span
                ref={(el) => (numbersRef.current[0] = el)}
                className="text-purple-600 bg-white text-3xl font-bold min-w-[3.5rem] text-center"
              ></span>
              <h3>Hours</h3>
            </div>
            <h3>Saved weekly</h3>
          </div>
        </div>

        {/* Box 2 */}
        <div
          ref={(el) => (boxesRef.current[1] = el)}
          className="box absolute flex items-center justify-center md:-bottom-14 bottom-0 -rotate-2 w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10"
        >
          <div className="w-[65%] font-[ppedit] text-3xl text-center">
            <div className="flex justify-center gap-2 items-center">
              <span
                ref={(el) => (numbersRef.current[1] = el)}
                className="text-purple-600 bg-white text-3xl font-bold min-w-[3.5rem] text-center"
              ></span>
              <h3>Brands</h3>
            </div>
            <h3>Launched</h3>
          </div>
        </div>

        {/* Box 3 */}
        <div
          ref={(el) => (boxesRef.current[2] = el)}
          className="box absolute flex items-center justify-center -translate-y-1/2 translate-x-[70%] rotate-[5.45deg] w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10"
        >
          <div className="w-[65%] font-[ppedit] text-3xl text-center">
            <div className="flex justify-center gap-2 items-center">
              <span
                ref={(el) => (numbersRef.current[2] = el)}
                className="text-purple-600 bg-white text-3xl font-bold min-w-[3.5rem] text-center"
              ></span>
              <h3>Clients</h3>
            </div>
            <h3>Collaborated</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceScreen;
