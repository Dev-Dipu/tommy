"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSwiper() {
  const testimonials = [
    {
      name: "Sophia Mitchell",
      role: "Music Artist & Podcaster",
      img: "/avatar1.png",
      text: "<< Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising! >>",
      date: "2021.03.02",
      flag: "🇺🇸",
    },
    {
      name: "Martin Goutry",
      role: "Back-end Developer at MyDodow",
      img: "/avatar2.png",
      text: "<< Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising! >>",
      date: "2021.03.02",
      flag: "🇫🇷",
    },
    {
      name: "Michael Reed",
      role: "YouTube Creator (85k subscribers)",
      img: "/avatar3.png",
      text: "<< Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising! >>",
      date: "2021.03.02",
      flag: "🇬🇧",
    },
    {
      name: "Sophia Mitchell",
      role: "Music Artist & Podcaster",
      img: "/avatar1.png",
      text: "<< Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising! >>",
      date: "2021.03.02",
      flag: "🇺🇸",
    },
    {
      name: "Martin Goutry",
      role: "Back-end Developer at MyDodow",
      img: "/avatar2.png",
      text: "<< Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising! >>",
      date: "2021.03.02",
      flag: "🇫🇷",
    },
    {
      name: "Michael Reed",
      role: "YouTube Creator (85k subscribers)",
      img: "/avatar3.png",
      text: "<< Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising! >>",
      date: "2021.03.02",
      flag: "🇬🇧",
    },
  ];

  return (
    <section className="min-h-[60vh] w-full flex flex-col items-center justify-center text-white relative py-12">
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #ffffff !important;
          opacity: 1;
        }
        .swiper:hover .swiper-slide {
          animation-play-state: paused;
        }
      `}</style>

      {/* Title + Nav buttons */}
      <div className="flex items-center justify-center gap-6 mb-10 z-10">
        <button className="swiper-button-prev !relative !w-10 !h-10 !mt-0 rounded-full flex items-center justify-center transition-all">
          <ChevronLeft className="w-6 h-6 text-[#E6E6E6]" />
        </button>
        
        <h2 className="text-md md:text-lg whitespace-nowrap text-[#E6E6E6]">
          " What Creators Say About Us "
        </h2>
        
        <button className="swiper-button-next !relative !w-10 !h-10 !mt-0 rounded-full flex items-center justify-center transition-all">
          <ChevronRight className="w-6 h-6 text-[#E6E6E6]" />
        </button>
      </div>

      {/* Swiper */}
      <div className="w-[92%] md:w-[80%] z-10 relative">
        {/* Left + right soft fade background */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0d011a] to-transparent z-[5]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0d011a] to-transparent z-[5]" />
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white h-49 text-black border border-black/10 rounded-2xl p-6 shadow-lg relative overflow-hidden">

                <div className="flex gap-3 mb-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold text-base">{t.name}</h3>
                    <p className="text-xs text-gray-600 opacity-80">{t.role}</p>
                    <p className="text-sm text-[#1A1B1D] leading-tight mt-2 mb-6">{t.text}</p>

                <p className="text-xs text-gray-500 flex items-center gap-1">
                  {t.flag} Dico user, {t.date}
                </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}