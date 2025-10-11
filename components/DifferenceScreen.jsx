"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const DifferenceScreen = () => {
  const headingRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Heading word animation
    const words = headingRef.current.querySelectorAll('.word');
    gsap.from(words, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "top 45%",
        scrub: 1,
      },
      y: 50,
      opacity: 0,
      scale: 0.8,
      rotateX: -45,
      transformOrigin: "top center",
      stagger: 0.05,
      ease: "power2.out"
    });

    // Image animation with scale and fade
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 100%",
        end: "top 40%",
        scrub: 1,
      },
      scale: 0.7,
      opacity: 0,
      y: 80,
      rotateY: 15,
      ease: "power2.out"
    });
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
    <div className='h-screen flex flex-col items-center justify-center gap-20' style={{ perspective: "2000px" }}>
      <h3 ref={headingRef} className='text-3xl'>
        {splitText("This is how we are making a")}
      </h3>
      <div ref={imageRef}>
        <Image alt='nothingtoknow' width={700} height={1} src={'/images/difference.svg'} />
      </div>
    </div>
  );
};

export default DifferenceScreen;