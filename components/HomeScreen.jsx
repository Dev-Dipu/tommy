"use client";
import React, { useEffect, useRef } from "react";
import { CgMenuRight } from "react-icons/cg";
import Orb from "./Orb";
import OverlayGlow from "./OverlayGlow";
import gsap from "gsap";

const businessWords = ["Businesses", "Creators", "Artists", "Entrepreneurs"];

const HomeScreen = () => {
  const wordRef = useRef(null);
  const containerRef = useRef(null);
  const currentIndex = useRef(0);
  const tl = useRef(null);

  useEffect(() => {
    const animateWord = () => {
      const nextIndex = (currentIndex.current + 1) % businessWords.length;
      const nextWord = businessWords[nextIndex];

      gsap.to(wordRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          const temp = document.createElement("span");
          temp.style.position = "absolute";
          temp.style.visibility = "hidden";
          temp.style.whiteSpace = "nowrap";
          temp.style.font = getComputedStyle(wordRef.current).font;
          temp.innerText = nextWord;
          document.body.appendChild(temp);
          const newWidth = temp.offsetWidth + 4;
          document.body.removeChild(temp);

          gsap.to(containerRef.current, {
            width: newWidth,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
              wordRef.current.innerText = nextWord;
              currentIndex.current = nextIndex;

              gsap.fromTo(
                wordRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.05 }
              );
            },
          });
        },
      });
    };

    tl.current = gsap.timeline({ repeat: -1, repeatDelay: 1.6, delay: 1 });
    tl.current.call(animateWord);
    tl.current.to({}, { duration: 2 });
    tl.current.call(animateWord);
    tl.current.to({}, { duration: 2 });
    tl.current.call(animateWord);
    tl.current.to({}, { duration: 2 });
    tl.current.call(animateWord);
    tl.current.to({}, { duration: 2 });

    return () => tl.current && tl.current.kill();
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center relative bg-black">
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <OverlayGlow />
      </div>

      {/* Navbar */}
      <header className="z-10 md:w-[57%] w-[90%] flex justify-between items-center text-lg p-3 mt-4">
        <h1 className="select-none text-lg text-white font-[poppin] tracking-wide">
          Logo.
        </h1>

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

        <CgMenuRight className="text-2xl md:hidden text-white" />
      </header>

      {/* Hero Section */}
      <h2 className="md:text-4xl text-[4.5vw] text-center md:w-1/2 w-[95%] mt-14 font-[poppinmed] text-white z-10 leading-snug">
        Powering the future of{" "}
        <span
          ref={containerRef}
          className="font-[poppinmed] relative inline-block overflow-hidden align-baseline"
          style={{
            display: "inline-block",
            verticalAlign: "middle",
          }}
        >
          <span
            ref={wordRef}
            style={{
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {businessWords[0]}
          </span>
        </span>
        <br />
        <span className="block">
          with AI, Digital Innovation & Media
        </span>
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

      {/* Bottom fade for smooth transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black" />
    </div>
  );
};

export default HomeScreen;
