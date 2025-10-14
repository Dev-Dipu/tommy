import { Geist, Geist_Mono } from "next/font/google";
import HomeScreen from "@/components/HomeScreen";
import CardScreen from "@/components/CardScreen";
import DifferenceScreen from "@/components/DifferenceScreen";
import WonderScreen from "@/components/WonderScreen";
import FooterScreen from "@/components/FooterScreen";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    useEffect(() => {
        new LocomotiveScroll();
    }, []);
    return (
        <div className="main font-[inter] text-white bg-[url('/images/grids.svg')] overflow-hidden">
            <div className="fixed top-0 left-0 z-[999] h-screen w-full bg-[url('/images/noise.png')] bg-cover bg-center pointer-events-none"></div>
            <HomeScreen />
            <CardScreen />
            <DifferenceScreen />
            <WonderScreen />
            <FooterScreen />
        </div>
    );
}
