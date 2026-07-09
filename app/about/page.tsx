"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Compass, Award, ShieldCheck, Building2, Briefcase, Stamp, TrendingUp, CheckCircle2 } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animations
    gsap.from(".hero-content > *", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    gsap.from(".hero-image", {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    // Vision/Mission Animations
    gsap.from(".vm-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".vm-section",
        start: "top 80%",
      }
    });

    // Leadership Animations
    gsap.from(".leadership-content > *", {
      x: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leadership-section",
        start: "top 75%",
      }
    });

    // Certifications Animations
    gsap.fromTo(".cert-item", {
      y: 30,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cert-section",
        start: "top bottom-=50", // Trigger slightly earlier
        toggleActions: "play none none none"
      }
    });

  }, { scope: containerRef });

  const certifications = [
    { title: "ISO 9001:2015 Certified" },
    { title: "Certificate of Incorporation" },
    { title: "GST Registration" },
    { title: "MSME Registration" },
    { title: "EPF Registration" },
    { title: "ESIC Registration" },
    { title: "Labour Registration" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-(--color-background) font-sans text-gray-900 w-full" ref={containerRef}>
      <Navbar />
      
      <main className="flex flex-col w-full flex-1">
        {/* Hero / Company Overview */}
        <section className="relative w-full px-4 md:px-12 lg:px-24 pt-16 lg:pt-24 pb-16 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30">
             <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-1/10 blur-3xl"></div>
             <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#A0DAAD]/20 blur-3xl"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 flex flex-col items-start z-10 hero-content">
              <div className="text-primary-1 text-[10px] font-bold px-3 py-1.5 border rounded-md mb-6 inline-flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Established 2021
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-black leading-[1.1] mb-6">
                Empowering People Through <br />
                <span className="bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent">Skills & Employment.</span>
              </h1>
              
              <div className="w-12 h-1 bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] mb-8"></div>

              <div className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed flex flex-col gap-4">
                <p>
                  A-Cube Institute of Skills is a leading human resources supply and skill development solutions provider committed to empowering individuals and supporting organizations through quality manpower and workforce development services.
                </p>
                <p>
                  With over 5 years of combined industry experience, we have established ourselves as a trusted partner for government departments, corporate organizations, CSR initiatives, and development projects across Tamil Nadu. We specialize in manpower supply, recruitment services, skill development, training implementation, and human resource consulting.
                </p>
                <p>
                  Our commitment to quality, reliability, and client satisfaction has enabled us to build long-term relationships while contributing to employment generation and workforce development.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative z-10 hero-image flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/hero-2.png)' }}
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-tr from-[#2D9F90]/30 to-transparent mix-blend-multiply"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 -left-4 md:-left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce z-20" style={{ animationDuration: '3s' }}>
                  <div className="w-12 h-12 bg-primary-1/10 rounded-full flex items-center justify-center text-primary-1 shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">5+ Years</div>
                    <div className="text-xs text-gray-500 font-medium">Industry Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="w-full px-4 md:px-12 lg:px-24 py-16 bg-white vm-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="vm-card bg-gray-50 rounded-4xl p-8 lg:p-12 relative overflow-hidden group hover:bg-primary-1 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-1/10 rounded-bl-full transition-colors duration-500 group-hover:bg-white/10"></div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-white/20 transition-colors duration-500">
                <Target className="w-8 h-8 text-primary-1 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                To be the preferred partner for human resources supply and skill development solutions, delivering exceptional value to our clients and creating sustainable livelihood opportunities for individuals.
              </p>
            </div>

            {/* Mission Card */}
            <div className="vm-card bg-gray-50 rounded-4xl p-8 lg:p-12 relative overflow-hidden group hover:bg-primary-1 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-1/10 rounded-bl-full transition-colors duration-500 group-hover:bg-white/10"></div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-white/20 transition-colors duration-500">
                <Compass className="w-8 h-8 text-primary-1 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                To provide high-quality human resources supply and skill development solutions that enhance our clients' productivity, competitiveness, and operational excellence while empowering youth and women through employability and livelihood initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="w-full px-4 md:px-12 lg:px-24 py-16 lg:py-24 bg-[#24837D]/5 relative leadership-section overflow-hidden">
           {/* Background shape */}
           <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-primary-1/5 blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Leadership Image / Abstract visual */}
            <div className="w-full lg:w-5/12 flex justify-center leadership-content">
               <div className="relative w-full max-w-[400px] aspect-4/5 rounded-[2.5rem] bg-linear-to-br from-primary-1/20 to-primary-1/5 overflow-hidden border border-white/50 shadow-xl flex items-center justify-center group">
                 <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800" 
                   alt="Managing Director" 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 
                 <div className="absolute inset-0 bg-linear-to-t from-primary-1/90 via-primary-1/20 to-transparent mix-blend-multiply"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-sm">
                      <p className="text-xs font-bold text-primary-1 uppercase tracking-wider mb-1">Managing Director</p>
                      <h4 className="text-xl font-bold text-gray-900">ARUNVIGNESH P R</h4>
                    </div>
                 </div>
               </div>
            </div>

            {/* Leadership Text */}
            <div className="w-full lg:w-7/12 leadership-content">
              <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase mb-2">Leadership</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Guiding Vision & <br />
                <span className="bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent">Strategic Growth.</span>
              </h2>
              <div className="w-12 h-1 bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] mb-8"></div>
              
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 relative">
                <div className="absolute -top-6 -left-6 text-primary-1/10">
                   <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
                   </svg>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed relative z-10 font-medium italic">
                  "At A-Cube Institute of Skills, our core philosophy is rooted in the belief that the right talent coupled with the right opportunities can transform businesses and communities alike. We are dedicated to providing strategic leadership, driving organizational growth, and ensuring successful project implementations through active stakeholder engagement."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Compliance */}
        <section className="w-full px-4 md:px-12 lg:px-24 py-16 bg-white cert-section border-t border-gray-50">
          <div className="flex flex-col items-center text-center mb-12">
            <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase mb-2">Trust & Compliance</h3>
            <h2 className="text-3xl font-bold text-gray-900">
              Certifications & <span className="text-primary-1">Registrations</span>
            </h2>
            <p className="text-gray-500 text-sm mt-4 max-w-xl">
              We maintain all statutory and operational compliances required for effective, reliable service delivery.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="cert-item bg-gray-50 border border-gray-100 hover:border-primary-1/30 px-6 py-4 rounded-full flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-1 transition-colors">{cert.title}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
