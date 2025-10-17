"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import Orb from "./Orb";
import Image from "next/image";

const HomeScreen = () => {
    
    return (
        <div className="min-h-screen flex flex-col items-center relative">
            <Image
                            className="absolute scale-200"
                            width={1000}
                            height={1}
                            src={"/images/ellipseoverlay.svg"}
                            alt="kuchbhi"
                        />

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

            <h2 className="md:text-4xl text-xl text-center md:w-1/2 w-[90%] mt-14 font-medium">
                Powering the future of{" "}
                <span className="font-[ppedititalic]">Businesses </span>with AI,
                Digital Innovation & Media
            </h2>
            {/* <div className="h-[460px]">
                <div className="absolute w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/5 mix-blend-screen hue-rotate-[270deg] md:scale-100 scale-250">
                <video className="" src="/0vid.mp4" muted loop autoPlay />
            </div>
            </div> */}
            <div className="md:scale-100 scale-90" style={{ width: "100%", height: "450px", position: "relative" }}>
                <Orb
                    hoverIntensity={0}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                />
            </div>

            <p className="md:w-[28%] w-3/5 text-center">
                Modern solutions for and creators who want to grow, stand out, and
                save time.
            </p>
            
        </div>
    );
};

export default HomeScreen;