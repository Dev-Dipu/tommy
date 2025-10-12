"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CgMenuRight } from "react-icons/cg";
import Orb from "./Orb";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomeScreen = () => {
    const headerRef = useRef(null);
    const navLinksRef = useRef([]);
    const h2Ref = useRef(null);
    const orbRef = useRef(null);
    const pRef = useRef(null);
    const h3Ref = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Header fade + slide
        tl.from(headerRef.current, { y: -40, opacity: 0, duration: 0.8 });

        // Nav links stagger
        tl.from(
            navLinksRef.current,
            { y: -20, opacity: 0, duration: 0.5, stagger: 0.1 },
            "-=0.4"
        );

        // Hero heading - word by word animation
        const h2Words = h2Ref.current.querySelectorAll('.word');
        tl.from(h2Words, { 
            y: 50, 
            opacity: 0,
            rotateX: -90,
            transformOrigin: "top center",
            duration: 0.6, 
            stagger: 0.03,
            ease: "back.out(1.2)"
        }, "-=0.3");

        // Orb fade-in + slight scale
        tl.from(
            orbRef.current,
            { opacity: 0, scale: 0.9, duration: 1.2, ease: "elastic.out(1, 0.5)" },
            "-=0.8"
        );

        // Paragraph - word by word fade up with slight blur
        const pWords = pRef.current.querySelectorAll('.word');
        tl.from(pWords, { 
            y: 30, 
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.5, 
            stagger: 0.04,
            ease: "power3.out",
            clearProps: "filter"
        }, "-=0.6");

        // H3 scroll trigger - word by word with scale
        const h3Words = h3Ref.current.querySelectorAll('.word');
        gsap.from(h3Words, {
            scrollTrigger: {
                trigger: h3Ref.current,
                start: "top 75%",
                end: "top 40%",
                scrub: 1,
            },
            y: 60,
            opacity: 0,
            scale: 0.8,
            rotateX: -45,
            transformOrigin: "top center",
            stagger: 0.02,
            ease: "power2.out"
        });
    }, []);

    // Split text into words
    const splitText = (text) => {
        return text.split(' ').map((word, i) => (
            <span 
                key={i} 
                className="word inline-block"
                style={{ marginRight: '0.25em' }}
            >
                {word}
            </span>
        ));
    };

    return (
        <div className="min-h-screen flex flex-col items-center relative">
            <div className="bggradient absolute bg-[url('/images/overlay.png')] bg-center bg-[length:120%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] md:w-4/5 w-full h-4/5"></div>

            <header
                ref={headerRef}
                className="w-full flex justify-between text-lg p-7"
            >
                <h1 className="select-none">Logo</h1>
                <nav className="md:flex gap-9 hidden">
                    {["Services", "Impact", "Contact"].map((item, i) => (
                        <Link
                            key={i}
                            href="#"
                            ref={(el) => (navLinksRef.current[i] = el)}
                            className="relative overflow-hidden inline-block h-6 group"
                        >
                            <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                                {item}
                            </span>
                            <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                                {item}
                            </span>
                        </Link>
                    ))}
                </nav> 
                <CgMenuRight className="text-2xl md:hidden" />
            </header>

            <h2
                ref={h2Ref}
                className="md:text-4xl text-lg text-center md:w-1/2 w-[90%] mt-14"
                style={{ perspective: "1000px" }}
            >
                {splitText("Powering the future of")}<span className='font-[ppedititalic]'>Businesses </span>{splitText("with AI, Digital Innovation & Media")}
            </h2>

            <div
                ref={orbRef}
                style={{ width: "100%", height: "450px", position: "relative" }}
            >
                <Orb
                    hoverIntensity={0}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                />
            </div>

            <p ref={pRef} className="w-[28%] text-center" style={{ perspective: "1000px" }}>
                {splitText("Modern solutions for  and creators who want to grow, stand out, and save time.")}
            </p>
            <h3 ref={h3Ref} className="w-3/5 text-3xl text-center my-36" style={{ perspective: "1000px" }}>
                {splitText("We leverage AI to achieve more")} <span className="font-[ppedititalic]">Efficiency</span> {splitText("with less Costs and empower creators to focus on what really matters.")}
            </h3>
        </div>
    );
};

export default HomeScreen;