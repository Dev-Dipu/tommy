"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FooterScreen = () => {
    const titleRef = useRef(null);
    const buttonRef = useRef(null);
    const quickLinksRef = useRef(null);
    const linksRef = useRef([]);
    const socialsRef = useRef(null);
    const socialIconsRef = useRef([]);
    const emailRef = useRef(null);
    const bigTitleRef = useRef(null);
    const bottomLinksRef = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-container",
                start: "top 85%",
                end: "top 45%",
                scrub: 0.8,
            },
        });

        // Title word animation
        const titleWords = titleRef.current.querySelectorAll(".word");
        tl.from(
            titleWords,
            {
                y: 40,
                opacity: 0,
                scale: 0.8,
                stagger: 0.03,
                ease: "power2.out",
            },
            0
        );

        // Button animation
        tl.from(
            buttonRef.current,
            {
                y: 30,
                opacity: 0,
                scale: 0.9,
                ease: "back.out(1.5)",
            },
            0.2
        );

        // Email animation
        tl.from(
            emailRef.current,
            {
                x: -30,
                opacity: 0,
                ease: "power2.out",
            },
            0.3
        );

        // Quick Links heading
        tl.from(
            quickLinksRef.current,
            {
                y: 30,
                opacity: 0,
                ease: "power2.out",
            },
            0.1
        );

        // Links stagger
        tl.from(
            linksRef.current,
            {
                x: -30,
                opacity: 0,
                stagger: 0.08,
                ease: "power2.out",
            },
            0.25
        );

        // Socials heading and icons
        tl.from(
            socialsRef.current,
            {
                y: 30,
                opacity: 0,
                ease: "power2.out",
            },
            0.3
        );

        tl.from(
            socialIconsRef.current,
            {
                scale: 0,
                opacity: 0,
                stagger: 0.1,
                ease: "back.out(1.7)",
            },
            0.4
        );

        // Big title animation
        tl.from(
            bigTitleRef.current,
            {
                y: 60,
                opacity: 0,
                scale: 0.95,
                ease: "power2.out",
            },
            0.5
        );

        // Bottom links
        tl.from(
            bottomLinksRef.current,
            {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                ease: "power2.out",
            },
            0.6
        );
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
        <div className="footer-container min-h-screen flex flex-col relative bg-gradient-to-b from-[#1a0a2e] via-[#2d1b4e] to-[#4a2d6e]">
            {/* Top Section */}
            <div className="md:p-8 p-5 flex-1">
                {/* Top Row */}
                <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-6 mb-12">
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <h4
                            ref={titleRef}
                            className="md:text-2xl text-xl text-white w-2/3"
                        >
                            {splitText("New Gen Services, Modern Solutions")}
                        </h4>
                        <button
                    ref={buttonRef}
                    className="group mt-5 relative px-4 py-2 text-black bg-white cursor-pointer w-36 overflow-hidden h-[40px] rounded-[6px] text-sm font-[poppinmed]"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                    <div className="relative h-full overflow-hidden">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">
                            Book Meeting
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                            Book Meeting
                        </span>
                    </div>
                </button>
                    </div>

                    <div className="flex flex-col md:items-end gap-4">
                        <h5
                            ref={quickLinksRef}
                            className="md:text-xl text-lg text-white font-medium"
                        >
                            Quick Links
                        </h5>
                        <div className="flex md:flex-col flex-row gap-3 md:gap-1">
                            {[
                                { text: "Services", link: "#" },
                                { text: "About us", link: "#" },
                                { text: "Impact", link: "#" },
                            ].map((e, i) => (
                                <Link
                                    key={i}
                                    href={e.link}
                                    ref={(el) => (linksRef.current[i] = el)}
                                    className="relative overflow-hidden inline-block md:text-end text-white group h-6"
                                >
                                    <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                                        {e.text}
                                    </span>
                                    <span className="absolute left-0 md:right-0 md:left-auto top-0 w-full inline-block translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                                        {e.text}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Middle Row */}
                <div className="flex md:flex-row flex-col justify-between items-start md:items-end gap-6 mb-8">
                    <Link
                        ref={emailRef}
                        className="relative overflow-hidden inline-block group text-lg md:text-xl text-white"
                        href="mailto:hello@newgenservices.ai"
                    >
                        <span className="block leading-none transition-transform duration-500 ease-out group-hover:-translate-y-full">
                            hello@newgenservices.ai
                        </span>
                        <span className="absolute left-0 top-0 w-full block leading-none translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                            hello@newgenservices.ai
                        </span>
                    </Link>

                    <div className="flex flex-col md:items-end gap-3">
                        <h5 ref={socialsRef} className="text-lg text-white font-medium">
                            Socials
                        </h5>
                        <div className="flex gap-3 text-2xl">
                            <div
                                ref={(el) => (socialIconsRef.current[0] = el)}
                                className="cursor-pointer text-white scale-90 hover:scale-110 transition-transform duration-300"
                            >
                                <AiFillInstagram />
                            </div>
                            <div
                                ref={(el) => (socialIconsRef.current[1] = el)}
                                className="cursor-pointer text-white scale-90 hover:scale-110 transition-transform duration-300"
                            >
                                <AiFillFacebook />
                            </div>
                            <div
                                ref={(el) => (socialIconsRef.current[2] = el)}
                                className="cursor-pointer text-white scale-90 hover:scale-110 transition-transform duration-300"
                            >
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Big Title */}
                <div className="flex justify-center absolute bottom-12 w-full left-0 text-center items-center py-8 md:py-12">
                    <h1
                        ref={bigTitleRef}
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white text-center leading-none"
                    >
                        New Gen Services
                    </h1>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-5 md:px-8 py-4 md:py-5 flex  md:flex-row justify-between items-center gap-3 md:gap-0 border-t border-purple-500/30 bg-[#7726C1]/50 backdrop-blur-sm">
                <Link
                    ref={(el) => (bottomLinksRef.current[1] = el)}
                    className="relative overflow-hidden inline-block group text-xs md:text-sm text-white/80 hover:text-white"
                    href="#"
                >
                    <span className="block leading-none transition-transform duration-500 ease-out group-hover:-translate-y-full">
                        lorem
                    </span>
                    <span className="absolute left-0 top-0 w-full block leading-none translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                        lorem
                    </span>
                </Link>
                <Link
                    ref={(el) => (bottomLinksRef.current[0] = el)}
                    className="relative overflow-hidden inline-block group text-xs md:text-sm text-white/80 hover:text-white"
                    href="#"
                >
                    <span className="block leading-none transition-transform duration-500 ease-out group-hover:-translate-y-full">
                        ©2025 New Gen Services
                    </span>
                    <span className="absolute left-0 top-0 w-full block leading-none translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                        ©2025 New Gen Services
                    </span>
                </Link>
                <Link
                    ref={(el) => (bottomLinksRef.current[2] = el)}
                    className="relative overflow-hidden inline-block group text-xs md:text-sm text-white/80 hover:text-white"
                    href="#"
                >
                    <span className="block leading-none transition-transform duration-500 ease-out group-hover:-translate-y-full">
                        T&C
                    </span>
                    <span className="absolute left-0 top-0 w-full block leading-none translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                        T&C
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default FooterScreen;