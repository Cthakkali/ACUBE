"use client";

import Image from "next/image";
import { ArrowRight, Users, Clock, Building, Award, UserRound, UsersRound, Calendar, CalendarDays, ChartNoAxesColumn, ChartNoAxesCombined, BadgeCheck } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Left content slides in from left
    tl.from(".hero-left > *", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Right collage scales/fades in
    tl.from(".hero-right", {
      scale: 0.95,
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.6");

    // Bottom stats strip slides up
    tl.from(".hero-stats", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full px-6 md:px-12 lg:px-24 pt-8 lg:pt-12 pb-32 lg:pb-32 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">

      {/* Left Content */}
      <div className="w-full lg:w-5/12 flex flex-col items-start z-10 hero-left">
        <div className="text-primary-1 text-[10px] font-bold px-3 py-1.5 border rounded-md mb-6">
          Empowering People
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-black leading-[1.1] mb-6">
          Reliable Manpower <br />for Every <span className="bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent">Industry.</span>
        </h1>

        <p className="text-xs font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span>Skilled</span> <span className="w-1 h-1 bg-primary-1 rounded-full"></span>
          <span>Unskilled</span> <span className="w-1 h-1 bg-primary-1 rounded-full"></span>
          <span>Contract</span> <span className="w-1 h-1 bg-primary-1 rounded-full"></span>
          <span>Permanent</span>
        </p>

        <p className="text-gray-600 text-xs md:text-base mb-10 max-w-lg leading-relaxed">
          A-Cube Institute of Skills helps businesses build dependable teams through skilled, unskilled, contract, and permanent manpower solutions. We connect organizations with qualified professionals who are ready to contribute from day one, ensuring operational continuity and business growth.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-20">
          <button className="relative overflow-hidden bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] text-white font-bold text-sm px-5 rounded-md flex items-center gap-2 group h-[44px]">
            <span className="absolute inset-0 bg-linear-to-r from-[#A0DAAD] to-[#2D9F90] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">Explore Services <ArrowRight className="w-5 h-5" /></span>
          </button>
          <button className="relative p-px rounded-md border-2 border-[#A0DAAD] group h-[44px] flex items-stretch">
            <span className="flex items-center justify-center bg-background text-primary-1 font-bold text-sm px-5 rounded-[5px] transition-colors duration-300 w-full">
              Contact Us
            </span>
          </button>
        </div>

      </div>

      {/* Right Content / Image Collage */}
      <div className="w-full lg:w-8/12 relative flex justify-center z-10 pb-20 lg:pb-0 hero-right">
        <div className="flex gap-4 sm:gap-6 items-stretch w-full max-w-[774px]">
          {/* Left Large Image */}
          <div
            className="overflow-hidden relative shadow-xl -skew-x-10"
            style={{ flex: 44, borderRadius: '1.5rem', aspectRatio: '2/3' }}
          >
            <div
              className="absolute top-0 -left-[15%] w-[130%] h-full skew-x-10"
              style={{
                backgroundImage: 'url(/hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Right Stack of 3 Images */}
          <div className="flex flex-col gap-4 sm:gap-6 -skew-x-10" style={{ flex: 31 }}>
            {/* Top Right */}
            <div
              className="flex-1 overflow-hidden shadow-lg relative"
              style={{ borderRadius: '1.5rem' }}
            >
              <div
                className="absolute top-0 -left-[15%] w-[130%] h-full skew-x-10"
                style={{
                  backgroundImage: 'url(/hero-2.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            {/* Middle Right */}
            <div
              className="flex-1 overflow-hidden shadow-lg relative"
              style={{ borderRadius: '1.5rem' }}
            >
              <div
                className="absolute top-0 -left-[15%] w-[130%] h-full skew-x-10"
                style={{
                  backgroundImage: 'url(/hero-1.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            {/* Bottom Right */}
            <div
              className="flex-1 overflow-hidden shadow-lg relative"
              style={{ borderRadius: '1.5rem' }}
            >
              <div
                className="absolute top-0 -left-[15%] w-[130%] h-full skew-x-10"
                style={{
                  backgroundImage: 'url(/hero-4.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="absolute bottom-40 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 border border-gray-50 grid grid-cols-2 md:grid-cols-4 gap-6 z-99 hero-stats">
        <div className="flex items-center gap-2 border-r border-gray-100 last:border-0 pr-2">
          <UsersRound className="w-8 h-8 text-primary-1" strokeWidth={1.5} />
          <div>
            <div className="font-bold text-primary-1 text-sm">2000+</div>
            <div className="text-[10px] text-gray-500 font-medium tracking-wide">Candidates Trained</div>
          </div>
        </div>
        <div className="flex items-center gap-2 border-r border-gray-100 last:border-0 pr-2">
          <CalendarDays className="w-8 h-8 text-primary-1" strokeWidth={1.5} />
          <div>
            <div className="font-bold text-primary-1 text-sm">5 Years+</div>
            <div className="text-[10px] text-gray-500 font-medium tracking-wide">Experience</div>
          </div>
        </div>
        <div className="flex items-center gap-2 border-r border-gray-100 last:border-0 pr-2">
          <ChartNoAxesCombined className="w-8 h-8 text-primary-1" strokeWidth={1.5} />
          <div>
            <div className="font-bold text-primary-1 text-sm">Government</div>
            <div className="text-[10px] text-gray-500 font-medium tracking-wide">& CSR Projects</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BadgeCheck className="w-8 h-8 text-primary-1" strokeWidth={1.5} />
          <div>
            <div className="font-bold text-primary-1 text-sm ">ISO</div>
            <div className="text-[10px] text-gray-500 font-medium tracking-wide">9001:2015</div>
          </div>
        </div>
      </div>
    </section>
  );
}
