import Image from "next/image";
import { ArrowRight, Users, Clock, Building, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full px-6 py-12 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 min-h-[80vh] overflow-hidden">
      {/* Skewed Background for the right side */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[#EAF6F5]/50 -skew-x-6 origin-bottom-right rounded-bl-[100px] z-0 hidden lg:block"></div>

      {/* Left Content */}
      <div className="w-full lg:w-4/12 flex flex-col items-start z-10 mt-12 lg:mt-0">
        <div className=" text-primary-1 text-[10px] font-bold px-3 py-1.5 border rounded-md mb-6">
          Empowering People
        </div>

        <h1 className="text-3xl md:text-4xl  font-semibold text-black leading-[1.1] mb-6">
          Reliable Manpower <br />for Every <span className="bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent">Industry.</span>
        </h1>

        <p className="text-xs font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span>Skilled</span> <span className="w-1 h-1 bg-primary-1 rounded-full"></span>
          <span>Unskilled</span> <span className="w-1 h-1 bg-primary-1 rounded-full"></span>
          <span>Contract</span> <span className="w-1 h-1 bg-primary-1 rounded-full"></span>
          <span>Permanent</span>
        </p>

        <p className="text-gray-600 text-sm md:text-base mb-10 max-w-lg leading-relaxed">
          A-Cube Institute of Skills helps businesses build dependable teams through
          skilled, unskilled, contract, and permanent manpower solutions. We connect
          organizations with qualified professionals who are ready to contribute from
          day one, ensuring operational continuity and business growth.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-20">
          <button className="relative overflow-hidden bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] text-white font-bold text-sm px-5 rounded-md flex items-center gap-2 group h-[44px]">
            <span className="absolute inset-0 bg-linear-to-r from-[#A0DAAD] to-[#2D9F90] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">Explore Services <ArrowRight className="w-5 h-5" /></span>
          </button>
          <button className="relative p-px rounded-md  border-2 border-[#A0DAAD] group h-[44px] flex items-stretch">
            <span className="flex items-center justify-center bg-background text-primary-1 font-bold text-sm px-5 rounded-[5px] transition-colors duration-300 w-full">
              Contact Us
            </span>
          </button>
        </div>

      </div>

      {/* Right Content / Image Collage */}
      <div className="w-full lg:w-8/12 relative flex justify-center lg:justify-end z-10 pb-20 lg:pb-0">
        <div className="flex gap-4 sm:gap-6 items-center w-full max-w-2xl">
          {/* Left Large Image */}
          <div className="w-[58%] aspect-3/4 overflow-hidden relative skew-x-[-10deg]" style={{borderRadius: '2.5rem 0.5rem 2.5rem 0.5rem'}}>
            <div className="skew-x-10  h-full w-full relative">
              <Image 
                src="/hero.png" 
                alt="A-Cube Team" 
                fill 
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain scale-[2] " 
                priority 
              />
            </div>
          </div>

          {/* Right Stack of 3 Images */}
          <div className="w-[42%] flex flex-col gap-4 sm:gap-6">
            {/* Top Right */}
            <div className="aspect-[1.5] overflow-hidden shadow-lg relative border-2 border-white skew-x-[-10deg]" style={{borderRadius: '1.5rem 0.25rem 1.5rem 0.25rem'}}>
              <div className="skew-x-10 scale-[1.02] h-full w-full relative">
                <Image 
                  src="/hero-1.png" 
                  alt="Training" 
                  fill 
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover" 
                />
              </div>
            </div>
            {/* Middle Right */}
            <div className="aspect-[1.5] overflow-hidden shadow-lg relative border-2 border-white skew-x-[-10deg]" style={{borderRadius: '1.5rem 0.25rem 1.5rem 0.25rem'}}>
              <div className="skew-x-10 scale-[1.02] h-full w-full relative">
                <Image 
                  src="/hero-2.png" 
                  alt="Consulting" 
                  fill 
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover" 
                />
              </div>
            </div>
            {/* Bottom Right */}
            <div className="aspect-[1.5] overflow-hidden shadow-lg relative border-2 border-white skew-x-[-10deg]" style={{borderRadius: '1.5rem 0.25rem 1.5rem 0.25rem'}}>
              <div className="skew-x-10 scale-[1.02] h-full w-full relative">
                <Image 
                  src="/hero-4.png" 
                  alt="Workforce" 
                  fill 
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="absolute -bottom-10 lg:bottom-10 left-6 lg:left-24 right-6 lg:right-auto lg:w-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 border border-gray-50 grid grid-cols-2 md:grid-cols-4 gap-6 z-99">
        <div className="flex items-center gap-4 border-r border-gray-100 last:border-0 pr-4">
          <Users className="w-10 h-10 text-primary-1" />
          <div>
            <div className="font-bold text-black text-lg">2000+</div>
            <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">Candidates Trained</div>
          </div>
        </div>
        <div className="flex items-center gap-4 border-r border-gray-100 last:border-0 pr-4">
          <Clock className="w-10 h-10 text-primary-1" />
          <div>
            <div className="font-bold text-black text-lg">5 Years+</div>
            <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">Experience</div>
          </div>
        </div>
        <div className="flex items-center gap-4 border-r border-gray-100 last:border-0 pr-4">
          <Building className="w-10 h-10 text-primary-1" />
          <div>
            <div className="font-bold text-black text-sm">Government</div>
            <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">& CSR Projects</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Award className="w-10 h-10 text-primary-1" />
          <div>
            <div className="font-bold text-black text-lg">ISO</div>
            <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">9001:2015</div>
          </div>
        </div>
      </div>
    </section>
  );
}
