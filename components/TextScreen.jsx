import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const efficiencyWords = ["Efficiency", "Results", "Revenue", "Possibilities"];
const costWords = ["Costs", "Time", "Effort"];

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
        const effTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.1 });
        effTimeline
            .to(effRef.current, {
                y: -24,
                opacity: 0,
                duration: 0.5,
                ease: "power1.in",
                onComplete: () => {
                    setEffIndex((prev) => (prev + 1) % efficiencyWords.length);
                },
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
                    setCostIndex((prev) => (prev + 1) % costWords.length);
                },
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
        <div className="relative h-screen text-white flex items-center justify-center">
            <Image
                className="absolute scale-200"
                width={1000}
                height={1}
                src={"/images/ellipseoverlay.svg"}
                alt="kuchbhi"
            />
            <h3 className="md:w-3/5 w-4/5 md:text-3xl text-center my-36">
                We leverage AI to achieve more{" "}
                <span
                    className="italic font-[ppeultraitalic] relative inline-block overflow-hidden align-baseline"
                    style={{
                        height: "1.2em",
                        verticalAlign: "middle",
                        minWidth: `${effMinWidth}ch`, // reduced width
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
                    className="italic font-[ppeultraitalic] relative inline-block overflow-hidden align-baseline"
                    style={{
                        height: "1.2em",
                        verticalAlign: "middle",
                        minWidth: `${costMinWidth}ch`, // reduced width
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
