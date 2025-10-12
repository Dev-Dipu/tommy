"use client";
import React, { useRef } from "react";
import { GoArrowDown } from "react-icons/go";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CardScreen = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card1TitleRef = useRef(null);
  const card2TitleRef = useRef(null);
  const card1ItemsRef = useRef([]);
  const card2ItemsRef = useRef([]);
  const card1BtnRef = useRef(null);
  const card2BtnRef = useRef(null);

  useGSAP(() => {
    // Card 1 animations
    gsap.from(card1Ref.current, {
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
      x: -100,
      opacity: 0,
      scale: 0.9,
      rotateY: -15,
      ease: "power2.out",
    });

    gsap.from(card1TitleRef.current, {
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top 75%",
        end: "top 45%",
        scrub: 1,
      },
      y: 40,
      opacity: 0,
      scale: 0.8,
      ease: "power2.out",
    });

    gsap.from(card1ItemsRef.current, {
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
    });

    gsap.from(card1BtnRef.current, {
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top 65%",
        end: "top 35%",
        scrub: 1,
      },
      y: 30,
      opacity: 0,
      scale: 0.9,
      ease: "power2.out",
    });

    // Card 2 animations
    gsap.from(card2Ref.current, {
      scrollTrigger: {
        trigger: card2Ref.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
      x: 100,
      opacity: 0,
      scale: 0.9,
      rotateY: 15,
      ease: "power2.out",
    });

    gsap.from(card2TitleRef.current, {
      scrollTrigger: {
        trigger: card2Ref.current,
        start: "top 75%",
        end: "top 45%",
        scrub: 1,
      },
      y: 40,
      opacity: 0,
      scale: 0.8,
      ease: "power2.out",
    });

    gsap.from(card2ItemsRef.current, {
      scrollTrigger: {
        trigger: card2Ref.current,
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
    });

    gsap.from(card2BtnRef.current, {
      scrollTrigger: {
        trigger: card2Ref.current,
        start: "top 65%",
        end: "top 35%",
        scrub: 1,
      },
      y: 30,
      opacity: 0,
      scale: 0.9,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center relative" style={{ perspective: "2000px" }}>
      <Image className="absolute" width={1000} height={1} src={'/images/ellipseoverlay.svg'} alt="kuchbhi" />
      <div className="flex gap-8">
        <div
          ref={card1Ref}
          className="card1 relative flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-[length:40%]"
          style={{ backgroundImage: "url('./images/cardbgDesign.svg')" }}
        >
          <img
            src="./images/servicescard.svg"
            alt="cards"
            className="w-full"
          />
          <div className="absolute h-full w-full flex flex-col text-center items-center py-26 gap-9">
            <h3 ref={card1TitleRef} className="text-4xl">Businesses</h3>
            <div className="flex flex-col items-center gap-2 text-xl">
              <p ref={(el) => (card1ItemsRef.current[0] = el)}>AI agents & automation</p>
              <p ref={(el) => (card1ItemsRef.current[1] = el)}>Branding & web solutions</p>
              <p ref={(el) => (card1ItemsRef.current[2] = el)}>Marketing strategies</p>
            </div>
            <div ref={card1BtnRef} className="absolute bottom-[8.5%] w-4/5 flex gap-[7px] ml-[3px]">
              <button className="relative px-4 py-2 text-white bg-gradient-to-tr from-[#B586E0]/25 to-[#661CA9]/25 border border-[#CF7CFF] cursor-pointer w-full overflow-hidden group h-[44px]">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                <div className="relative h-full overflow-hidden">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
                    Explore now
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                    Explore now
                  </span>
                </div>
              </button>
              <button className="relative px-2.5 py-2 text-white bg-gradient-to-tr from-[#B586E0]/25 to-[#661CA9]/25 border border-[#CF7CFF] cursor-pointer text-3xl overflow-hidden group h-[44px] w-[44px] flex items-center justify-center">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
                    <GoArrowDown className="-rotate-135 scale-130" />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <GoArrowDown className="-rotate-135 scale-130" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div
          ref={card2Ref}
          className="card2 relative flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-[length:40%]"
          style={{ backgroundImage: "url('./images/cardbgDesign.svg')" }}
        >
          <img
            src="./images/servicescard.svg"
            alt="cards"
            className="w-full"
          />
          <div className="absolute h-full w-full flex flex-col text-center items-center py-26 gap-9">
            <h3 ref={card2TitleRef} className="text-4xl">Creators</h3>
            <div className="flex flex-col items-center gap-2 text-xl">
              <p ref={(el) => (card2ItemsRef.current[0] = el)} className="w-4/5">Media production (video, design, audio)</p>
              <p ref={(el) => (card2ItemsRef.current[1] = el)} className="w-6/7">AI-Powered content & workflows</p>
            </div>
            <div ref={card2BtnRef} className="absolute bottom-[8.5%] w-4/5 flex gap-[7px] ml-[3px]">
              <button className="relative px-4 py-2 text-white bg-gradient-to-tr from-[#B586E0]/25 to-[#661CA9]/25 border border-[#CF7CFF] cursor-pointer w-full overflow-hidden group h-[44px]">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                <div className="relative h-full overflow-hidden">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
                    Explore now
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                    Explore now
                  </span>
                </div>
              </button>
              <button className="relative px-2.5 py-2 text-white bg-gradient-to-tr from-[#B586E0]/25 to-[#661CA9]/25 border border-[#CF7CFF] cursor-pointer text-3xl overflow-hidden group h-[44px] w-[44px] flex items-center justify-center">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
                    <GoArrowDown className="-rotate-135 scale-130" />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <GoArrowDown className="-rotate-135 scale-130" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardScreen;