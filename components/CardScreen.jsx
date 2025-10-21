"use client";
import React, { useRef } from "react";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import OverlayGlow from "./OverlayGlow";

const CardScreen = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card1TitleRef = useRef(null);
  const card2TitleRef = useRef(null);
  const card1BtnRef = useRef(null);
  const card2BtnRef = useRef(null);

  return (
    <div
      className="h-screen font-[poppinmed] flex flex-col gap-16 items-center justify-center relative px-4"
      style={{ perspective: "2000px" }}
    >
      <OverlayGlow />

      <h3 className="md:text-3xl text-lg text-center md:w-[70%] w-full leading-snug">
        Whether you need AI in your{" "}
        <span className="font-[ppedititalic] font-medium">
          business, branding or content
        </span>{" "}
        that makes an impact, we deliver results that move you forward.
      </h3>

      <div className="flex md:flex-row flex-col items-center justify-center gap-8 md:h-1/2 h-2/3 w-full md:w-2/5">
        {/* Card 1 */}
        <SpotlightCard
          className="custom-spotlight-card h-full md:w-1/2 w-[85%] md:scale-100 scale-95"
          spotlightColor="#7726c1"
        >
          <div
            ref={card1Ref}
            className="relative flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-[length:40%]"
          >
            <div className="absolute h-full w-full flex flex-col text-center items-center justify-center py-26 gap-9">
              <h3 ref={card1TitleRef} className="text-3xl md:text-4xl">
                Businesses
              </h3>
              <div
                ref={card1BtnRef}
                className="absolute w-full flex gap-[7px] bottom-0"
              >
                <button className="group relative px-4 py-2 text-black bg-white cursor-pointer w-full overflow-hidden group h-[44px] rounded-[6px]">
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
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 2 */}
        <SpotlightCard
          className="custom-spotlight-card h-full md:w-1/2 w-[85%] md:scale-100 scale-95"
          spotlightColor="#7726c1"
        >
          <div
            ref={card2Ref}
            className="relative flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-[length:40%]"
          >
            <div className="absolute h-full w-full flex flex-col text-center items-center justify-center py-26 gap-9">
              <h3 ref={card2TitleRef} className="text-3xl md:text-4xl">
                Creators
              </h3>
              <div
                ref={card2BtnRef}
                className="absolute w-full flex gap-[7px] bottom-0"
              >
                <button className="group relative px-4 py-2 text-black bg-white cursor-pointer w-full overflow-hidden group h-[44px] rounded-[6px]">
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
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default CardScreen;
