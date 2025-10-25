"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import OverlayGlow from "./OverlayGlow";

const DifferenceScreen = () => {
  const sectionRef = useRef(null);
  const boxesRef = useRef([]);
  const numbersRef = useRef([]);
  const observerRef = useRef(null);
  const animationTimelineRef = useRef(null);
  const isVisibleRef = useRef(false);

  const targetNumbers = [81, 24, 37];

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisibleRef.current = true;
          animateAll();
        } else {
          isVisibleRef.current = false;
          smoothExit();
        }
      },
      { 
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationTimelineRef.current) {
        animationTimelineRef.current.kill();
      }
    };
  }, []);

  const smoothExit = () => {
    if (animationTimelineRef.current) {
      animationTimelineRef.current.kill();
    }

    const exitTimeline = gsap.timeline();
    
    boxesRef.current.forEach((box, i) => {
      if (!box) return;
      
      exitTimeline.to(box, {
        opacity: 0,
        y: 200,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.in",
      }, (boxesRef.current.length - 1 - i) * 0.1);
    });
  };

  const resetToInitial = () => {
    boxesRef.current.forEach((box, i) => {
      if (!box) return;
      gsap.set(box, {
        opacity: 0,
        y: 100,
        scale: 0.9,
      });
    });

    numbersRef.current.forEach((number, i) => {
      if (number) {
        number.innerText = "+0";
      }
    });
  };

  const animateAll = () => {
    if (animationTimelineRef.current) {
      animationTimelineRef.current.kill();
    }

    animationTimelineRef.current = gsap.timeline();

    boxesRef.current.forEach((box, i) => {
      if (!box) return;
      
      animationTimelineRef.current.to(box, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      }, i * 0.2);

      animateNumber(i, i * 0.2 + 0.3);
    });
  };

  const animateNumber = (index, delay) => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: targetNumbers[index],
      duration: 1.5,
      delay: delay,
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
      className="h-screen flex flex-col items-center justify-center gap-20 text-white pointer-events-none relative"
    >
      <OverlayGlow />
      
      <h3 className="md:text-3xl text-xl text-center font-semibold">
        This is how we are making a difference
      </h3>

      <div className="w-3/5 h-[70%] flex items-center justify-center relative md:scale-90 scale-50">
        <div
          ref={(el) => (boxesRef.current[0] = el)}
          className="box absolute flex items-center justify-center -translate-y-1/2 -translate-x-2/3 -rotate-3 w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10 opacity-0"
        >
          <div className="w-[65%] font-[ppedit] text-3xl text-center">
            <div className="flex justify-center gap-2 items-center">
              <span
                ref={(el) => (numbersRef.current[0] = el)}
                className="text-purple-600 bg-white text-3xl font-bold min-w-[3.5rem] text-center"
              >
                +0
              </span>
              <h3>Hours</h3>
            </div>
            <h3>Saved weekly</h3>
          </div>
        </div>

        <div
          ref={(el) => (boxesRef.current[1] = el)}
          className="box absolute flex items-center justify-center md:-bottom-14 bottom-0 -rotate-2 w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10 opacity-0"
        >
          <div className="w-[65%] font-[ppedit] text-3xl text-center">
            <div className="flex justify-center gap-2 items-center">
              <span
                ref={(el) => (numbersRef.current[1] = el)}
                className="text-purple-600 bg-white text-3xl font-bold min-w-[3.5rem] text-center"
              >
                +0
              </span>
              <h3>Brands</h3>
            </div>
            <h3>Launched</h3>
          </div>
        </div>

        <div
          ref={(el) => (boxesRef.current[2] = el)}
          className="box absolute flex items-center justify-center -translate-y-1/2 translate-x-[70%] rotate-[5.45deg] w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center bg-no-repeat z-10 opacity-0"
        >
          <div className="w-[65%] font-[ppedit] text-3xl text-center">
            <div className="flex justify-center gap-2 items-center">
              <span
                ref={(el) => (numbersRef.current[2] = el)}
                className="text-purple-600 bg-white text-3xl font-bold min-w-[3.5rem] text-center"
              >
                +0
              </span>
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