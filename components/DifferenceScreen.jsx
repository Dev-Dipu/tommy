"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const DifferenceScreen = () => {
    const headingRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        // Heading word animation
        const words = headingRef.current.querySelectorAll(".word");
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
            ease: "power2.out",
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
            ease: "power2.out",
        });
    }, []);

    // Split text into words
    const splitText = (text) => {
        return text.split(" ").map((word, i) => (
            <span
                key={i}
                className="word inline-block"
                style={{ marginRight: "0.30em" }}
            >
                {word}
            </span>
        ));
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center gap-20"
            style={{ perspective: "2000px" }}
        >
            <h3 ref={headingRef} className="text-3xl">
                {splitText("This is how we are")}<span className="font-[ppedititalic]">making a</span>
            </h3>
            <div className="w-3/5 h-[70%] flex items-center justify-center relative">
                <h1 className="text-[110px] font-[ppedititalic]">difference</h1>
                <div className="box absolute flex items-center justify-center -translate-y-1/2 -translate-x-2/3 -rotate-3 w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center">
                    <div className="w-[65%] font-[ppedit] text-3xl">
                      <div className="flex justify-center gap-2"><span className="h-8 w-16 bg-amber-50 block"></span><h3>Hours</h3></div>
                    <h3 className="text-center">Saved weekly</h3>
                    </div>
                </div>
                <div className="box absolute flex items-center justify-center translate-y-1/2 -rotate-2 w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center">
                    <div className="w-[65%] font-[ppedit] text-3xl">
                      <div className="flex justify-center gap-2"><span className="h-8 w-16 bg-amber-50 block"></span><h3>Brands</h3></div>
                    <h3 className="text-center">Launched</h3>
                    </div>
                </div>
                <div className="box absolute flex items-center justify-center -translate-y-1/2 translate-x-[70%] rotate-[5.45deg] w-80 aspect-square bg-[url('/images/glowbox.svg')] bg-center">
                    <div className="w-[65%] font-[ppedit] text-3xl">
                      <div className="flex justify-center gap-2"><span className="h-8 w-16 bg-amber-50 block"></span><h3>Hours</h3></div>
                    <h3 className="text-center">Saved weekly</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DifferenceScreen;
