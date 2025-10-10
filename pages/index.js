import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HomeScreen from "@/components/HomeScreen";
import CardScreen from "@/components/CardScreen";
import DifferenceScreen from "@/components/DifferenceScreen";
import WonderScreen from "@/components/WonderScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="main text-white bg-[url('/images/grids.svg')] overflow-hidden">
      <HomeScreen />
      <CardScreen />
      <DifferenceScreen />
      <WonderScreen />
    </div>
  );
}
