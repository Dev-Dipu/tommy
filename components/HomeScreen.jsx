"use client"
import Link from "next/link";
import React from "react";

const HomeScreen = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-[url('/images/grids.svg')]">
            <header className="w-full flex justify-between text-lg py-8 px-7">
                <h1>Logo</h1>
                <nav className="flex gap-9">
                  <Link href={'#'}>Services</Link>
                  <Link href={'#'}>Impact</Link>
                  <Link href={'#'}>Contact</Link>
                </nav>
            </header>
            <h3 className="text-4xl text-center w-1/2 mt-20">Powering the future of Businesses with AI, Digital Innovation & Media</h3>


        </div>
    );
};

export default HomeScreen;
