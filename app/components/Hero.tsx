"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Clock, Building, Award, UserRound, UsersRound, Calendar, CalendarDays, ChartNoAxesColumn, ChartNoAxesCombined, BadgeCheck } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import data from "../data.json";

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

    // Right collage images scale/fade in individually with stagger
    tl.from(".hero-image", {
      scale: 0.9,
      x: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
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
    <section ref={containerRef} className="relative w-full px-4 md:px-12 lg:px-24 pt-8 lg:pt-12 pb-12 lg:pb-32 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">

      {/* Left Content */}
      <div className="w-full lg:w-5/12 flex flex-col items-start z-10 hero-left">
        <div className="text-primary-1 text-[10px] font-bold px-3 py-1.5 border rounded-md mb-6">
          {data.hero.badge}
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-black leading-[1.1] mb-6">
          {data.hero.titlePart1} <br />{data.hero.titlePart2} <span className="bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent">{data.hero.titleHighlight}</span>
        </h1>

        <p className="text-xs font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span>{data.hero.tags[0]}</span> <span className="w-1 h-1 bg-primary-1 rounded-full"></span>
          <span>{data.hero.tags[1]}</span> <span className="w-1 h-1 bg-primary-1 rounded-full"></span>
          <span>{data.hero.tags[2]}</span> <span className="w-1 h-1 bg-primary-1 rounded-full"></span>
          <span>{data.hero.tags[3]}</span>
        </p>

        <p className="text-gray-600 text-xs md:text-base mb-10 max-w-lg leading-relaxed">
          {data.hero.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10 lg:mb-20">
          <Link href={data.hero.button1.href} className="relative overflow-hidden bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] text-white font-bold text-sm px-5 rounded-md flex items-center gap-2 group h-[44px]">
            <span className="absolute inset-0 bg-linear-to-r from-[#A0DAAD] to-[#2D9F90] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">{data.hero.button1.label} <ArrowRight className="w-5 h-5" /></span>
          </Link>
          <Link href={data.hero.button2.href} className="relative p-px rounded-md border-2 border-[#A0DAAD] group h-[44px] flex items-stretch">
            <span className="flex items-center justify-center bg-background text-primary-1 font-bold text-sm px-5 rounded-[5px] transition-colors duration-300 w-full hover:bg-primary-1 hover:text-white">
              {data.hero.button2.label}
            </span>
          </Link>
        </div>

      </div>

      {/* Right Content / Image Collage */}
      <div className="w-full lg:w-8/12 relative flex justify-center z-10 hero-right">
        <div className="flex gap-3 sm:gap-6 items-stretch w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[774px]">
          {/* Left Large Image */}
          <div
            className="hero-image overflow-hidden relative shadow-xl -skew-x-10"
            style={{ flex: 44, borderRadius: '1.5rem', aspectRatio: '2/3' }}
          >
            <div
              className="absolute top-0 left-[-15%] w-[130%] h-full skew-x-10"
              style={{
                backgroundImage: `url(${data.hero.images.main})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Right Stack of 3 Images */}
          <div className="flex flex-col gap-4 sm:gap-6 -skew-x-10" style={{ flex: 31 }}>
            {/* Top Right */}
            <div
              className="hero-image flex-1 overflow-hidden shadow-lg relative rounded-lg sm:rounded-xl lg:rounded-3xl"
            >
              <div
                className="absolute top-0 left-[-15%] w-[130%] h-full skew-x-10"
                style={{
                  backgroundImage: `url(${data.hero.images.stack1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            {/* Middle Right */}
            <div
              className="hero-image flex-1 overflow-hidden shadow-lg relative rounded-lg sm:rounded-xl lg:rounded-3xl"
            >
              <div
                className="absolute top-0 left-[-15%] w-[130%] h-full skew-x-10"
                style={{
                  backgroundImage: `url(${data.hero.images.stack2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            {/* Bottom Right */}
            <div
              className="hero-image flex-1 overflow-hidden shadow-lg relative rounded-lg sm:rounded-xl lg:rounded-3xl"
            >
              <div
                className="absolute top-0 left-[-15%] w-[130%] h-full skew-x-10"
                style={{
                  backgroundImage: `url(${data.hero.images.stack3})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="relative lg:absolute mt-8 lg:mt-0 lg:bottom-40 w-full lg:w-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 border border-gray-50 grid grid-cols-2 md:grid-cols-4 gap-6 z-99 hero-stats">
        <div className="flex items-center gap-2 border-r border-gray-100 last:border-0 pr-2">
          <UsersRound className="w-8 h-8 text-primary-1" strokeWidth={1.5} />
          <div>
            <div className="font-bold text-primary-1 text-sm">{data.hero.stats[0].number}</div>
            <div className="text-[10px] text-gray-500 font-medium tracking-wide">{data.hero.stats[0].label1}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 border-r border-gray-100 last:border-0 pr-2">
          <CalendarDays className="w-8 h-8 text-primary-1" strokeWidth={1.5} />
          <div>
            <div className="font-bold text-primary-1 text-sm">{data.hero.stats[1].number}</div>
            <div className="text-[10px] text-gray-500 font-medium tracking-wide">{data.hero.stats[1].label1}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 border-r border-gray-100 last:border-0 pr-2">
          <ChartNoAxesCombined className="w-8 h-8 text-primary-1" strokeWidth={1.5} />
          <div>
            <div className="font-bold text-primary-1 text-sm">{data.hero.stats[2].number}</div>
            <div className="text-[10px] text-gray-500 font-medium tracking-wide">{data.hero.stats[2].label1}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BadgeCheck className="w-8 h-8 text-primary-1" strokeWidth={1.5} />
          <div>
            <div className="font-bold text-primary-1 text-sm ">{data.hero.stats[3].number}</div>
            <div className="text-[10px] text-gray-500 font-medium tracking-wide">{data.hero.stats[3].label1}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
