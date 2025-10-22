"use client";
import React, { useEffect, useRef, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Orb from "./Orb";
import OverlayGlow from "./OverlayGlow";
import gsap from "gsap";

const businessWords = ["Businesses", "Creators", "Startups", "Enterprises", "Brands"];

const HomeScreen = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const wordRef = useRef(null);

  // Calculate max width for smooth container
  const maxWidth = Math.max(...businessWords.map((w) => w.length));
  const minWidth = Math.ceil(maxWidth * 0.7);

  useEffect(() => {
    const timeline = gsap.timeline({ 
      repeat: -1, 
      repeatDelay: 2,
      delay: 1
    });
    
    timeline
      .to(wordRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          setWordIndex((prev) => (prev + 1) % businessWords.length);
        },
      })
      .fromTo(
        wordRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power2.out" 
        }
      );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-x-hidden bg-black">
      {/* Reusable overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <OverlayGlow />
      </div>

      {/* Navbar */}
      <header
        className="z-10 md:w-[57%] w-[90%] flex justify-between items-center text-lg
          p-3 mt-4"
      >
        <h1 className="select-none text-lg text-white font-[ppedititalic] tracking-wide">
          Logo.
        </h1>

        {/* Book Meeting Button */}
        <button className="group md:block hidden relative px-4 py-2 text-black bg-white cursor-pointer w-36 overflow-hidden h-[40px] rounded-[6px] text-sm font-[poppinmed]">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
          <div className="relative h-full overflow-hidden">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
              Book Meeting
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
              Book Meeting
            </span>
          </div>
        </button>

        {/* Mobile Menu Icon */}
        <CgMenuRight className="text-2xl md:hidden text-white" />
      </header>

      {/* Hero Section */}
      <h2 className="md:text-4xl text-2xl text-center md:w-1/2 w-[90%] mt-14 font-[poppinmed] text-white z-10">
        Powering the future of{" "}
        <span 
          className="font-[ppedititalic] relative inline-block overflow-hidden align-baseline transition-all duration-500 ease-in-out"
          style={{
            height: "1.3em",
            verticalAlign: "middle",
            minWidth: `${minWidth}ch`,
            display: "inline-block",
          }}
        >
          <span
            ref={wordRef}
            style={{
              display: "inline-block",
              width: "100%",
              textAlign: "center",
            }}
          >
            {businessWords[wordIndex]}
          </span>
        </span>{" "}
        with AI, Digital Innovation & Media
      </h2>

      {/* Orb Section */}
      <div
        className="relative md:scale-100 scale-90 mt-10 z-0"
        style={{
          width: "100%",
          height: "440px",
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <Orb hoverIntensity={0} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>
      </div>

      <p className="md:w-[30%] font-[poppin] w-4/5 md:text-xl text-center text-white/80 mt-6 mb-16 z-10">
        Modern solutions for businesses and creators who want to grow, stand out,
        and save time.
      </p>
    </div>
  );
};

export default HomeScreen;