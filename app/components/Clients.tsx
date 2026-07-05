"use client";

import { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const testimonials = [
  {
    text: "Acube has transformed the way we handle our digital presence. Their expertise and dedication are unmatched. Truly a game-changer for our business.",
    author: "Partner Leadership Team"
  },
  {
    text: "The level of professionalism and the quality of work delivered by the team exceeded all our expectations. We highly recommend their services.",
    author: "Marketing Director, TechCorp"
  },
  {
    text: "Working with them was a seamless experience. They understood our vision perfectly and executed it with flawless precision.",
    author: "CEO, Innovate Solutions"
  },
  {
    text: "An absolute pleasure to collaborate with. They brought fresh ideas to the table and delivered outstanding results within the timeline.",
    author: "Head of Product, GlobalTech"
  }
];

export default function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // Creating an array of 8 sample clients to represent the 4x2 grid of "ANTRIX" logos in mockup
  const clients = Array(8).fill("ANTRIX");

  // GSAP Animations
  useGSAP(() => {
    // Animate logos staggering in
    gsap.from(".client-logo", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".logos-grid",
        start: "top 85%",
      }
    });

    // Animate text box
    gsap.from(".title-box", {
      x: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".title-box",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonial" ref={containerRef} className="w-full px-4 py-12 md:px-12 lg:px-24 flex flex-col gap-12">
      {/* Top Section - Logos and Title */}
      <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 w-full">
        {/* Logos Grid */}
        <div className="logos-grid w-full md:w-2/3 bg-white rounded-3xl p-6 md:p-8 lg:p-12 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, idx) => (
            <div key={idx} className="client-logo flex items-center justify-center">
              <div className="w-28 h-12 relative flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {/* User can replace these placeholder src paths with actual logo files */}
                <img 
                  src={`clients/client-${idx + 1}.png`} 
                  alt={`Client Logo ${idx + 1}`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Fallback visual if image doesn't exist yet
                    (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40"><rect width="100" height="40" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" fill="%239ca3af">LOGO ${idx + 1}</text></svg>`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Title Box */}
        <div className="title-box w-full md:w-1/3 bg-white rounded-3xl p-10 lg:p-24 flex flex-col justify-center">
          <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase">Our Proud</h3>
          <h2 className="text-4xl font-bold bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent mb-6">Clients.</h2>
          <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
            Partnering with visionaries to shape the future of business.
          </p> <div className="w-12 h-1 bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] mt-4"></div>
        </div>
      </div>

      {/* Bottom Section - Testimonial */}
      <div className="w-full bg-[#24837D]/5 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row relative overflow-hidden">

        {/* Background Shapes */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 pointer-events-none overflow-hidden rounded-r-3xl hidden lg:block">
          <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-primary-1/5 "></div>
          <div className="absolute -right-32 -top-32 w-[400px] h-[400px] rounded-full bg-primary-1/8 "></div>
        </div>

        {/* Left Column */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 relative z-10 flex flex-col justify-center md:border-r border-[#CDE3DE] md:pr-8">
          <div className="bg-[#E0F0EE] text-[#2D9F90] text-[10px] font-bold px-3 py-1.5 rounded-md inline-block tracking-wider w-max">
            TRUSTED BY PARTNERS
          </div>
          <h2 className="text-3xl font-bold text-[#333333] leading-tight mb-4">
            What Our <br />
            <span className="bg-linear-to-r from-[#5BB79F] to-[#92D1AA] bg-clip-text text-transparent">Partners Say</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#92D1AA]"></div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-3/4 md:pl-12 flex flex-col justify-center relative z-10 min-h-[160px]">
          <div className="flex gap-2.5 mb-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === activeIndex ? "bg-[#2D9F90]" : "bg-[#D9D9D9] hover:bg-[#B0B0B0]"
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <div className="transition-opacity duration-500">
            <p className="text-black font-normal text-sm leading-relaxed max-w-2xl mb-2">
              "{testimonials[activeIndex].text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-6 h-px bg-[#B0B0B0]"></div>
              <span className="text-[#2D9F90] font-bold text-sm">
                {testimonials[activeIndex].author}
              </span>
            </div>
          </div>
        </div>

        {/* Large Quote Icon Background */}
        <div className="absolute right-4 top-1/5 md:right-16 md:top-1/2 -translate-y-1/2 w-16 h-16 md:w-32 md:h-32 bg-[#BCE1D8] rounded-full flex items-center justify-center pointer-events-none z-10">
          <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="#2D9F90" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
