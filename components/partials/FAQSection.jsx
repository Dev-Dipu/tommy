"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import OverlayGlow from "../OverlayGlow";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      q: "Do I need to understand content ideas?",
      a: "Nope, zero need to figure out content ideas or plans. Instead, our crew takes care of it all - starting with planning, then digging into research, plus shaping a unique spin for your brand. Just tell us what you’re aiming for, what you like, along with where you’d like to head. From there, we shape those thoughts into neat, usable material. That way, things stay smooth and light on your end.",
    },
    {
      q: "How long does production take?",
      a: `Production time depends on the type of content you need, but we always focus on delivering fast without compromising quality. Most video edits are completed within 24–72 hours. AI-based content like voiceovers, visuals, or thumbnails is usually delivered within the same day to 48 hours, and automation setups typically take 3–7 days. Larger full-content packages may take 10–30 days depending on the volume, with faster turnaround options available for urgent requirements.`,
    },
    {
      q: "Can I make changes to automated content?",
      a: "For sure. You’re free to tweak things whenever needed. While the system creates the first version automatically, you can still rework it - change how it sounds or ask us to fix parts if it doesn’t match your voice. Any time you want adjustments, just say so. It’s your call at every step, keeping everything in line with how you communicate.",
    },
    {
      q: "Is the process fully AI-powered?",
      a: "The system runs on AI to boost how fast things are made, keep a steady flow, yet still brings fresh thoughts rapidly. Still, there's no full automation here. Each bit gets checked by people, tweaked carefully, while going through layers that test precision, spark originality, plus fit the brand tone. What you end up with mixes smart speed from tech together with sharp human touch.",
    },
  ];

  return (
    <section
      className="md:min-h-screen flex flex-col items-center gap-12 text-white relative"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <OverlayGlow />
      </div>
      {/* Heading */}
      <h2 className="z-10 md:text-4xl text-[4.5vw] text-center md:w-1/2 w-[95%] mt-14 font-[poppinmed] text-white leading-snug">
        Frequently Asked Questions
      </h2>

      {/* Card Container */}
      <div className="z-10 w-[92%] md:w-[70%] bg-white/10 backdrop-blur-xl rounded-xl border border-white/15 shadow-2xl py-4 px-4 md:px-8 relative">

        {faqs.map((item, i) => (
          <div key={i} className={`w-full rounded-md ${openIndex === i && "bg-white shadow-lg"}`}>
            {/* Row */}
            <div
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`flex items-center justify-between w-full cursor-pointer relative md:py-6 py-4 md:pl-3 pl-1.5 ${openIndex === i && "text-purple-600 "}`}
            >
              {/* Index */}
              <span className="text-sm opacity-80 w-10">{`0${i + 1}`}</span>

              {/* Question */}
              <p className={`flex-1 text-sm md:text-base font-medium absolute md:left-1/3 left-7`}>
                {item.q}
              </p>

              {/* Icon */}
              <div className="md:w-10 w-6 flex justify-center">
                {openIndex === i ? (
                  <X className="w-5 h-5 opacity-80" />
                ) : (
                  <Plus className="w-5 h-5 opacity-80" />
                )}
              </div>
            </div>

            {/* Animated Answer */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className=" text-black rounded-xl px-6 mb-6 flex">
                <div className="w-[32.5%] md:block hidden"></div>
                <p className="text-sm text-gray-700 whitespace-pre-line md:w-1/2">
                  {item.a}
                </p>
              </div>
            </div>

            {/* Divider Line */}
            {i !== faqs.length - 1 && (
              <div className="w-full border-b border-white/20"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
