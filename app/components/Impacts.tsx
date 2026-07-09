"use client";

import { UsersRound, FolderOpen, Landmark, Map, HeartHandshake } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../data.json";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Impacts() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Left content slides in from the left
    gsap.from(".impact-left > *", {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        
      }
    });

    // Cards stagger in from the bottom
    gsap.from(".impact-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        
      }
    });
  }, { scope: containerRef });

  const stats = [
    {
      icon: <UsersRound className="w-6 h-6" strokeWidth={1.5} />,
      number: data.impacts.stats[0].number,
      label: <>{data.impacts.stats[0].labelLine1}<br />{data.impacts.stats[0].labelLine2}</>,
    },
    {
      icon: <FolderOpen className="w-6 h-6" strokeWidth={1.5} />,
      number: data.impacts.stats[1].number,
      label: <>{data.impacts.stats[1].labelLine1}<br />{data.impacts.stats[1].labelLine2}</>,
    },
    {
      icon: <UsersRound className="w-6 h-6" strokeWidth={1.5} />,
      number: data.impacts.stats[2].number,
      label: <>{data.impacts.stats[2].labelLine1}<br />{data.impacts.stats[2].labelLine2}</>,
    },
    {
      icon: <Landmark className="w-6 h-6" strokeWidth={1.5} />,
      number: data.impacts.stats[3].number,
      label: <>{data.impacts.stats[3].labelLine1}<br />{data.impacts.stats[3].labelLine2}</>,
    },
    {
      icon: <Map className="w-6 h-6" strokeWidth={1.5} />,
      number: data.impacts.stats[4].number,
      label: <>{data.impacts.stats[4].labelLine1}<br />{data.impacts.stats[4].labelLine2}</>,
    },
    {
      icon: <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />,
      number: data.impacts.stats[5].number,
      label: <>{data.impacts.stats[5].labelLine1}<br />{data.impacts.stats[5].labelLine2}</>,
    },
  ];

  return (
    <section id="impacts" ref={containerRef} className="w-full px-4 py-8 md:px-12 lg:px-24">
      <div className="w-full bg-white rounded-4xl p-8 lg:px-12 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 shadow-sm">
        {/* Left Content */}
        <div className="w-full lg:w-1/3 pt-8 impact-left">
          <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase mb-2">{data.impacts.badge}</h3>
          <h2 className="text-4xl font-bold bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent mb-6">{data.impacts.title}</h2>
          <p className="text-gray-600 text-sm max-w-xs leading-relaxed mb-2">
            {data.impacts.description}
          </p> {/* Divider Line */}
          <div className="w-12 h-1 mt-4 mb-2 bg-primary-gradient"></div>
        </div>

        {/* Right Content / Grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 impact-grid">
          {stats.map((stat, index) => (
            <div key={index} className="impact-card">
              <div className="group flex flex-col items-center justify-center p-4 lg:p-8 rounded-4xl border transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-primary-1 text-black hover:text-white border-gray-100 hover:border-primary-1 shadow-xs hover:shadow-xl hover:shadow-primary-1/20 h-full w-full">
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 bg-background text-primary-1 group-hover:bg-white/10 group-hover:text-white">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="text-[28px] lg:text-[32px] font-bold text-primary-1 group-hover:text-white tracking-tight transition-colors duration-300">
                  {stat.number}
                </div>

                {/* Divider Line */}
                <div className="w-10 h-1 mb-3  relative overflow-hidden bg-primary-gradient shrink-0">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Label */}
                <div className="text-[11px] lg:text-xs text-center font-medium leading-[1.6] transition-colors duration-300 text-black group-hover:text-white/90">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
