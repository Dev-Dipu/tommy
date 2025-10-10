"use client";
import Link from "next/link";
import React from "react";
import Orb from "./Orb";

const HomeScreen = () => {
    return (
        <div className="min-h-screen flex flex-col items-center relative">
            <div className="bggradient absolute bg-[url('/images/overlay.png')] bg-cover bg-center top-1/2 left-1/2 -translate-1/2 w-4/5 h-4/5"></div>
            <header className="w-full flex justify-between text-lg p-7">
                <h1>Logo</h1>
                <nav className="flex gap-9">
                    <Link href={"#"}>Services</Link>
                    <Link href={"#"}>Impact</Link>
                    <Link href={"#"}>Contact</Link>
                </nav>
            </header>
            <h2 className="text-4xl text-center w-1/2 mt-14">
                Powering the future of Businesses with AI, Digital Innovation &
                Media
            </h2>
            <div
                style={{ width: "100%", height: "450px", position: "relative" }}
            >
                <Orb
                    hoverIntensity={0}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                />
            </div>

            <p className="w-[28%] text-center">
                Modern solutions for businesses and creators who want to grow,
                stand out, and save time.
            </p>

            <h3 className="w-3/5 text-3xl text-center my-36">We leverage AI to achieve more Efficiency with less Costs and empower creators to focus on what really matters.</h3>
        </div>
    );
};

export default HomeScreen;
