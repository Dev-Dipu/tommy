import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import OverlayGlow from "./OverlayGlow";

const efficiencyWords = ["Efficiency", "Results", "Revenue", "Possibilities"];
const costWords = ["Costs", "Time", "Effort", "Hassle"];

const TextScreen = () => {
    const [effIndex, setEffIndex] = useState(0);
    const [costIndex, setCostIndex] = useState(0);
    const effRef = useRef(null);
    const costRef = useRef(null);

    // Calculate max width for both word arrays
    const effMaxWidth = Math.max(...efficiencyWords.map((w) => w.length));
    const costMaxWidth = Math.max(...costWords.map((w) => w.length));

    // Reduce the width multiplier for a less wide animation container
    const effMinWidth = Math.ceil(effMaxWidth * 0.68);
    const costMinWidth = Math.ceil(costMaxWidth * 0.68);

    useEffect(() => {
        const effTimeline = gsap.timeline({ repeat: -1, repeatDelay: 4 });
        effTimeline
            .to(effRef.current, {
                y: -30,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
                onComplete: () => {
                    setEffIndex((prev) => (prev + 1) % efficiencyWords.length);
                },
            })
            .fromTo(
                effRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            );

        const costTimeline = gsap.timeline({ repeat: -1, repeatDelay: 4, delay: 0.8 });
        costTimeline
            .to(costRef.current, {
                y: -30,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
                onComplete: () => {
                    setCostIndex((prev) => (prev + 1) % costWords.length);
                },
            })
            .fromTo(
                costRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            );

        return () => {
            effTimeline.kill();
            costTimeline.kill();
        };
    }, []);

    return (
        <div className="relative h-screen overflow-hidden text-white flex items-center justify-center">
            <OverlayGlow />
            <h3 className="font-[poppinmed] md:w-2/5 w-4/5 md:text-3xl text-lg text-center my-36">
                We leverage AI to achieve more{" "}
                <span
                    className="italic font-[ppeultraitalic] relative inline-block overflow-hidden align-baseline transition-all duration-500 ease-in-out"
                    style={{
                        height: "1.2em",
                        verticalAlign: "middle",
                        minWidth: `${effMinWidth}ch`,
                        display: "inline-block",
                    }}
                >
                    <span
                        ref={effRef}
                        style={{
                            display: "inline-block",
                            width: "100%",
                            textAlign: "center",
                        }}
                        className="font-semibold"
                    >
                        {efficiencyWords[effIndex]}
                    </span>
                </span>{" "}
                with less{" "}
                <span
                    className="italic font-[ppeultraitalic] relative inline-block overflow-hidden align-baseline transition-all duration-500 ease-in-out"
                    style={{
                        height: "1.2em",
                        verticalAlign: "middle",
                        minWidth: `${costMinWidth}ch`,
                        display: "inline-block",
                    }}
                >
                    <span
                        ref={costRef}
                        style={{
                            display: "inline-block",
                            width: "100%",
                            textAlign: "center",
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

export default TextScreen;