"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import Orb from "./Orb";
import gsap from "gsap";

const HomeScreen = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    // Create a subtle floating + pulsating animation
    gsap.to(overlayRef.current, {
      x: "+=60",
      y: "+=30",
      scale: 1.6,
      rotation: 5,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Add a slow random glow/pulse effect
    gsap.to(overlayRef.current, {
      boxShadow: "0 0 120px rgba(155,0,255,0.6), 0 0 200px rgba(128,0,255,0.4)",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Purple Blob */}
      <div
        ref={overlayRef}
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(155,0,255,0.6), rgba(75,0,130,0.4))",
          filter: "blur(180px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Navbar */}
      <header
        className="md:w-[57%] w-[90%] flex justify-between items-center text-lg 
        bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_100%)] 
        backdrop-blur-[14px] 
        p-3 rounded-[14px] border border-white/20 
        shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
        mt-8 transition-all duration-500 
        hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_100%)]"
      >
        <h1 className="select-none text-lg text-white font-[ppedititalic] tracking-wide">Logo.</h1>

        <nav className="md:flex gap-9 hidden ml-[10%] text-white/90">
          {["Services", "Impact", "Contact"].map((item, i) => (
            <Link
              key={i}
              href="#"
              className="relative overflow-hidden inline-block h-6 group text-[15px] transition-all duration-300 hover:text-white"
            >
              <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">{item}</span>
              <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">{item}</span>
            </Link>
          ))}
        </nav>

        {/* Book Meeting Button */}
        <button className="group relative px-4 py-2 text-black bg-white cursor-pointer w-36 overflow-hidden group h-[40px] rounded-[6px] text-sm font-[poppinmed]">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
          <div className="relative h-full overflow-hidden">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">Book Meeting</span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">Book Meeting</span>
          </div>
        </button>

        <CgMenuRight className="text-2xl md:hidden text-white" />
      </header>

      {/* Hero */}
      <h2 className="md:text-4xl text-xl text-center md:w-1/2 w-[90%] mt-14 font-[poppinmed] text-white">
        Powering the future of <span className="font-[ppedititalic]">Businesses </span>
        with AI, Digital Innovation & Media
      </h2>

      <div className="md:scale-100 scale-90" style={{ width: "100%", height: "450px", position: "relative" }}>
        <Orb hoverIntensity={0} rotateOnHover={true} hue={0} forceHoverState={false} />
      </div>

      <p className="md:w-[28%] font-[poppin] w-4/5 text-center text-white/80 mt-6">
        Modern solutions for and creators who want to grow, stand out, and save time.
      </p>
    </div>
  );
};

export default HomeScreen;
