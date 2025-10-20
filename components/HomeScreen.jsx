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
                            className="absolute -z-10 top-1/2 -translate-y-1/2 md:scale-150 scale-200"
                            width={1000}
                            height={1}
                            src={"/images/purpleoverlay.svg"}
                            alt="kuchbhi"
                        />

            <header className="md:w-[57%] w-[90%] flex justify-between items-center text-lg bg-[linear-gradient(to_bottom_right,rgba(134,130,130,0.4),rgba(18,18,18,0.4))] p-3 rounded-[10px] border border-[#9F9F9F] mt-8">
                <h1 className="select-none text-lg">Logo</h1>
                <nav className="md:flex gap-9 hidden ml-[10%]">
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
                <button className="group relative px-4 py-2 text-black bg-white cursor-pointer w-36 overflow-hidden group h-[40px] rounded-[6px] text-sm font-[poppinmed]">
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
                <CgMenuRight className="text-2xl md:hidden" />
            </header>

            <h2 className="md:text-4xl text-xl text-center md:w-1/2 w-[90%] mt-14 font-[poppinmed]">
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

            <p className="md:w-[28%] font-[poppin] w-4/5 text-center">
                Modern solutions for and creators who want to grow, stand out, and
                save time.
            </p>
            
        </div>
    );
};

export default HomeScreen;