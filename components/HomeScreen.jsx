"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import Orb from "./Orb";
import gsap from "gsap";

const efficiencyWords = ["Efficiency", "Results", "Revenue", "Possibilities"];
const costWords = ["Costs", "Time", "Effort"];

const HomeScreen = () => {
    const [effIndex, setEffIndex] = useState(0);
    const [costIndex, setCostIndex] = useState(0);
    const effRef = useRef(null);
    const costRef = useRef(null);

    // Calculate max width for both word arrays
    const effMaxWidth = Math.max(...efficiencyWords.map(w => w.length));
    const costMaxWidth = Math.max(...costWords.map(w => w.length));

    // Reduce the width multiplier for a less wide animation container
    const effMinWidth = Math.ceil(effMaxWidth * 0.68);
    const costMinWidth = Math.ceil(costMaxWidth * 0.68);

    useEffect(() => {
        const effTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.1 });
        effTimeline
            .to(effRef.current, {
                y: -24,
                opacity: 0,
                duration: 0.5,
                ease: "power1.in",
                onComplete: () => {
                    setEffIndex(prev => (prev + 1) % efficiencyWords.length);
                }
            })
            .fromTo(
                effRef.current,
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power1.out" }
            );

        const costTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.1 });
        costTimeline
            .to(costRef.current, {
                y: -24,
                opacity: 0,
                duration: 0.5,
                ease: "power1.in",
                onComplete: () => {
                    setCostIndex(prev => (prev + 1) % costWords.length);
                }
            })
            .fromTo(
                costRef.current,
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power1.out" }
            );

        return () => {
            effTimeline.kill();
            costTimeline.kill();
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center relative">
            <div className="bggradient absolute bg-[url('/images/overlay.png')] bg-center bg-[length:120%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] md:w-4/5 w-full h-4/5"></div>

            <header className="w-full flex justify-between text-lg p-7">
                <h1 className="select-none">Logo</h1>
                <nav className="md:flex gap-9 hidden">
                    {["Services", "Impact", "Contact"].map((item, i) => (
                        <Link
                            key={i}
                            href="#"
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

            <h2 className="md:text-4xl text-lg text-center md:w-1/2 w-[90%] mt-14">
                Powering the future of{" "}
                <span className="font-[ppedititalic]">Businesses </span>with AI,
                Digital Innovation & Media
            </h2>

            <div style={{ width: "100%", height: "450px", position: "relative" }}>
                <Orb
                    hoverIntensity={0}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                />
            </div>

            <p className="w-[28%] text-center">
                Modern solutions for and creators who want to grow, stand out, and
                save time.
            </p>
            <h3 className="w-3/5 text-3xl text-center my-36">
                We leverage AI to achieve more{" "}
                <span
                    className="italic font-[ppeultraitalic] relative inline-block overflow-hidden align-baseline"
                    style={{
                        height: "1em",
                        verticalAlign: "middle",
                        minWidth: `${effMinWidth}ch`, // reduced width
                        display: "inline-block"
                    }}
                >
                    <span
                        ref={effRef}
                        style={{
                            display: "inline-block",
                            width: "100%",
                            textAlign: "center"
                        }}
                        className="font-semibold"
                    >
                        {efficiencyWords[effIndex]}
                    </span>
                </span>{" "}
                with less{" "}
                <span
                    className="italic font-[ppeultraitalic] relative inline-block overflow-hidden align-baseline"
                    style={{
                        height: "1em",
                        verticalAlign: "middle",
                        minWidth: `${costMinWidth}ch`, // reduced width
                        display: "inline-block"
                    }}
                >
                    <span
                        ref={costRef}
                        style={{
                            display: "inline-block",
                            width: "100%",
                            textAlign: "center"
                        }}
                        className="font-semibold"
                    >
                        {costWords[costIndex]}
                    </span>
                </span>{" "}
                and empower creators to focus on what really matters.
            </h3>
        </div>
    );
};

export default HomeScreen;