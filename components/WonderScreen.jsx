"use client";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WonderScreen = () => {
  const containerRef = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "top 35%",
        scrub: 0.8,
      }
    });

    // Container background fade and scale
    tl.from(containerRef.current, {
      scale: 0.9,
      opacity: 0,
      ease: "power2.out"
    }, 0);

    // H2 word animation
    const h2Words = h2Ref.current.querySelectorAll('.word');
    tl.from(h2Words, {
      y: 50,
      opacity: 0,
      scale: 0.8,
      rotateX: -45,
      transformOrigin: "top center",
      stagger: 0.04,
      ease: "back.out(1.2)"
    }, 0.1);

    // H3 word animation
    const h3Words = h3Ref.current.querySelectorAll('.word');
    tl.from(h3Words, {
      y: 30,
      opacity: 0,
      stagger: 0.02,
      ease: "power2.out"
    }, 0.3);

    // Button animation
    tl.from(buttonRef.current, {
      y: 30,
      opacity: 0,
      scale: 0.9,
      ease: "back.out(1.5)"
    }, 0.5);
  }, []);

  // Split text into words
  const splitText = (text) => {
    return text.split(' ').map((word, i) => (
      <span 
        key={i} 
        className="word inline-block"
        style={{ marginRight: '0.30em' }}
      >
        {word}
      </span>
    ));
  };

  return (
    <div className='h-screen flex justify-center items-center' style={{ perspective: "2000px" }}>
      <div 
        ref={containerRef}
        className="w-2/5 h-full bg-[url('/images/wonder.svg')] bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center"
      >
        <h2 ref={h2Ref} className='text-4xl'>
          {splitText("Wodering how we can help?")}
        </h2>
        <h3 ref={h3Ref} className='text-3xl w-3/5 text-center mt-10'>
          {splitText("Book a meeting or get in touch for a tailored solution.")}
        </h3>
        <button 
          ref={buttonRef}
          className='relative px-6 py-3 text-white bg-gradient-to-tr from-[#B586E0]/25 to-[#661CA9]/25 border border-[#CF7CFF] cursor-pointer mt-8 overflow-hidden group'
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
          <span className="relative block overflow-hidden h-6">
            <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
              book a meeting
            </span>
            <span className="absolute left-0 top-0 w-full block translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
              book a meeting
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default WonderScreen;