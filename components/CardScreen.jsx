"use client";
import React, { useRef, useEffect } from "react";
import { GoArrowDown } from "react-icons/go";
import Image from "next/image";
import gsap from "gsap";

const CardScreen = () => {
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card1TitleRef = useRef(null);
    const card2TitleRef = useRef(null);
    const card1ItemsRef = useRef([]);
    const card2ItemsRef = useRef([]);
    const card1BtnRef = useRef(null);
    const card2BtnRef = useRef(null);

    useEffect(() => {
        // Set initial grayscale
        gsap.set([card1Ref.current, card2Ref.current], { filter: "grayscale(1)" });

        // Card 1 hover
        const card1 = card1Ref.current;
        const handleCard1Enter = () => gsap.to(card1, { filter: "grayscale(0)", duration: 0.4, ease: "power2.out" });
        const handleCard1Leave = () => gsap.to(card1, { filter: "grayscale(1)", duration: 0.4, ease: "power2.out" });
        card1.addEventListener("mouseenter", handleCard1Enter);
        card1.addEventListener("mouseleave", handleCard1Leave);

        // Card 2 hover
        const card2 = card2Ref.current;
        const handleCard2Enter = () => gsap.to(card2, { filter: "grayscale(0)", duration: 0.4, ease: "power2.out" });
        const handleCard2Leave = () => gsap.to(card2, { filter: "grayscale(1)", duration: 0.4, ease: "power2.out" });
        card2.addEventListener("mouseenter", handleCard2Enter);
        card2.addEventListener("mouseleave", handleCard2Leave);

        // Cleanup
        return () => {
            card1.removeEventListener("mouseenter", handleCard1Enter);
            card1.removeEventListener("mouseleave", handleCard1Leave);
            card2.removeEventListener("mouseenter", handleCard2Enter);
            card2.removeEventListener("mouseleave", handleCard2Leave);
        };
    }, []);

    return (
        <div
            className="h-screen flex items-center justify-center relative"
            style={{ perspective: "2000px" }}
        >
            <Image
                className="absolute scale-200 pointer-events-none"
                width={1000}
                height={1}
                src={"/images/ellipseoverlay.svg"}
                alt="kuchbhi"
            />
            <div className="md:flex gap-8">
                <div
                    ref={card1Ref}
                    className="card1 group relative flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-[length:40%] md:scale-100 scale-90"
                    style={{
                        backgroundImage: "url('./images/cardbgDesign.svg')",
                    }}
                >
                    <img
                        src="./images/servicescard.svg"
                        alt="cards"
                        className="w-full"
                    />
                    <div className="absolute h-full w-full flex flex-col text-center items-center py-26 gap-9">
                        <div className="relative inline-block">
                            <h3 ref={card1TitleRef} className="text-4xl">
                                Businesses
                            </h3>
                            <div className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-lg">
                            <p ref={(el) => (card1ItemsRef.current[0] = el)}>
                                AI agents & automation
                            </p>
                            <p ref={(el) => (card1ItemsRef.current[1] = el)}>
                                Branding & web solutions
                            </p>
                            <p ref={(el) => (card1ItemsRef.current[2] = el)}>
                                Marketing strategies
                            </p>
                        </div>
                        <div
                            ref={card1BtnRef}
                            className="absolute bottom-[8.5%] w-4/5 flex gap-[7px] ml-[3px]"
                        >
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
                    className="card2 group relative flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-[length:40%] md:scale-100 scale-90"
                    style={{
                        backgroundImage: "url('./images/cardbgDesign.svg')",
                    }}
                >
                    <img
                        src="./images/servicescard.svg"
                        alt="cards"
                        className="w-full"
                    />
                    <div className="absolute h-full w-full flex flex-col text-center items-center py-26 gap-9">
                        <div className="relative inline-block">
                            <h3 ref={card2TitleRef} className="text-4xl">
                                Creators
                            </h3>
                            <div className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-lg">
                            <p
                                ref={(el) => (card2ItemsRef.current[0] = el)}
                                className="w-4/5"
                            >
                                Media production (video, design, audio)
                            </p>
                            <p
                                ref={(el) => (card2ItemsRef.current[1] = el)}
                                className="w-6/7"
                            >
                                AI-Powered content & workflows
                            </p>
                        </div>
                        <div
                            ref={card2BtnRef}
                            className="absolute bottom-[8.5%] w-4/5 flex gap-[7px] ml-[3px]"
                        >
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
