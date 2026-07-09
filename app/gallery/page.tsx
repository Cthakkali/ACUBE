"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ZoomIn, Camera } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "/hero.png", alt: "Team Meeting", span: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2" },
    { src: "/hero-1.png", alt: "Training Session", span: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1" },
    { src: "/hero-2.png", alt: "CSR Event", span: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1" },
    { src: "/hero-4.png", alt: "Skill Development", span: "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2" },
    { src: "/0hero.png", alt: "Corporate Office", span: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1" },
    { src: "/1hero.png", alt: "Manpower Deployment", span: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop", alt: "Business Collaboration", span: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1" },
    { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop", alt: "Team Discussion", span: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1" },
    { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop", alt: "Workshop", span: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1" },
  ];

  useGSAP(() => {
    // Header Animations
    gsap.from(".gallery-header > *", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Grid Animations
    gsap.fromTo(".gallery-item", {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".gallery-grid",
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

  }, { scope: containerRef });

  // Handle body scroll locking when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-(--color-background) font-sans text-gray-900 w-full" ref={containerRef}>
        <Navbar />
        
        <main className="flex flex-col w-full flex-1">
          {/* Header Section */}
          <section className="w-full px-4 md:px-12 lg:px-24 pt-16 lg:pt-24 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-linear-to-b from-primary-1/5 to-transparent pointer-events-none"></div>
            
            <div className="flex flex-col items-center text-center gallery-header">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-1 mb-6 shadow-sm">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase mb-2">Our Gallery</h3>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Moments of <span className="text-primary-1">Impact.</span>
              </h1>
              <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
                A visual journey through our training sessions, CSR initiatives, and the milestones we've achieved in empowering the workforce.
              </p>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="w-full px-4 md:px-12 lg:px-24 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] md:grid-flow-dense gallery-grid">
              {images.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedImage(img.src)}
                  className={`gallery-item relative rounded-2xl overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 ${img.span}`}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-1/0 group-hover:bg-[#00403C]/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 transition-opacity"
          style={{ zIndex: 99999 }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-12 md:right-12 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            style={{ zIndex: 100000 }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Fullscreen View" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}
