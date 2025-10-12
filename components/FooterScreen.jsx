"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FooterScreen = () => {
    const titleRef = useRef(null);
    const buttonRef = useRef(null);
    const quickLinksRef = useRef(null);
    const linksRef = useRef([]);
    const socialsRef = useRef(null);
    const bottomLinksRef = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-container",
                start: "top 85%",
                end: "top 45%",
                scrub: 0.8,
            }
        });

        // Title word animation
        const titleWords = titleRef.current.querySelectorAll('.word');
        tl.from(titleWords, {
            y: 40,
            opacity: 0,
            scale: 0.8,
            stagger: 0.03,
            ease: "power2.out"
        }, 0);

        // Button animation
        tl.from(buttonRef.current, {
            y: 30,
            opacity: 0,
            scale: 0.9,
            ease: "back.out(1.5)"
        }, 0.2);

        // Quick Links heading
        tl.from(quickLinksRef.current, {
            y: 30,
            opacity: 0,
            ease: "power2.out"
        }, 0.1);

        // Links stagger
        tl.from(linksRef.current, {
            x: 30,
            opacity: 0,
            stagger: 0.08,
            ease: "power2.out"
        }, 0.25);

        // Socials heading
        tl.from(socialsRef.current, {
            y: 30,
            opacity: 0,
            ease: "power2.out"
        }, 0.3);


        // Bottom links
        tl.from(bottomLinksRef.current, {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out"
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
        <div className="footer-container h-[50vh] flex flex-col relative bg-[url('/images/roundarc.png')] bg-center bg-no-repeat">
            <Image
                            className="absolute -translate-y-1/2 -translate-x-1/3"
                            width={1000}
                            height={1}
                            src={"/images/ellipseoverlay.svg"}
                            alt="kuchbhi"
                        />
            <div className="p-7 h-full border-t-[0.6]">
                <div className="flex justify-between h-full">
                    <div>
                        <h4 ref={titleRef} className="text-2xl">
                            {splitText("New Gen Services,")}<span className="font-[ppedititalic]">Modern Solutions</span>
                        </h4>
                        <button 
                            ref={buttonRef}
                            className="relative px-6 py-3 text-white bg-gradient-to-tr from-[#B586E0]/25 to-[#661CA9]/25 border border-[#CF7CFF] cursor-pointer mt-4 overflow-hidden group"
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
                    <div className="flex flex-col justify-between">
                        <div>
                            <h5 ref={quickLinksRef} className="text-xl text-end">Quick Links</h5>
                            <div className="flex flex-col gap-0.5 mt-3">
                                {[
                                    {
                                        text: "Services",
                                        link: "#",
                                    },
                                    {
                                        text: "About us",
                                        link: "#",
                                    },
                                    {
                                        text: "Impact",
                                        link: "#",
                                    },
                                ].map((e, i) => (
                                    <Link
                                        key={i}
                                        href={e.link}
                                        ref={(el) => (linksRef.current[i] = el)}
                                        className="relative overflow-hidden inline-block text-end underline group h-6"
                                    >
                                        <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                                            {e.text}
                                        </span>
                                        <span className="absolute left-0 top-0 w-full inline-block translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                                            {e.text}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col justify-end items-end">
                            <h5 ref={socialsRef} className="text-xl">Socials</h5>
                            <div className="flex gap-2.5 text-2xl mt-3">
                                <div className="cursor-pointer scale-90 hover:scale-100 transition-transform duration-300">
                                    <AiFillInstagram />
                                </div>
                                <div className="cursor-pointer scale-90 hover:scale-100 transition-transform duration-300">
                                    <AiFillFacebook />
                                </div>
                                <div className="cursor-pointer scale-90 hover:scale-100 transition-transform duration-300">
                                    <FaTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-7 py-5 flex justify-between items-center border-t-[0.6] bg-[#040404]">
                <Link 
                    ref={(el) => (bottomLinksRef.current[0] = el)}
                    className="relative overflow-hidden inline-block group" 
                    href={'#'}
                >
                    <span className="block leading-none transition-transform duration-500 ease-out group-hover:-translate-y-full">
                        hello@newgenservices.ai
                    </span>
                    <span className="absolute left-0 top-0 w-full block leading-none translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                        hello@newgenservices.ai
                    </span>
                </Link>
                <Link 
                    ref={(el) => (bottomLinksRef.current[1] = el)}
                    className="relative overflow-hidden inline-block group" 
                    href={'#'}
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
                    className="relative overflow-hidden inline-block group" 
                    href={'#'}
                >
                    <span className="block leading-none transition-transform duration-500 ease-out group-hover:-translate-y-full">
                        Terms & Conditions
                    </span>
                    <span className="absolute left-0 top-0 w-full block leading-none translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                        Terms & Conditions
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default FooterScreen;