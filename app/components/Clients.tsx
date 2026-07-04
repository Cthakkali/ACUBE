import { Quote } from "lucide-react";

export default function Clients() {
  // Creating an array of 8 dummy clients to represent the 4x2 grid of "ANTRIX" logos in mockup
  const clients = Array(8).fill("ANTRIX");

  return (
    <section className="w-full px-6 py-20 md:px-12 lg:px-24 flex flex-col gap-12">
      {/* Top Section - Logos and Title */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full">
        {/* Logos Grid */}
        <div className="w-full md:w-2/3 bg-white rounded-3xl p-8 lg:p-12 shadow-custom grid grid-cols-2 sm:grid-cols-4 gap-8">
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <div className="text-primary-1 font-bold text-2xl tracking-tighter italic border-b-4 border-blue-800 flex items-center relative">
                {/* This represents the Antrix logo placeholder */}
                <span className="text-blue-900 italic font-black text-3xl">ANTRIX</span>
                <span className="absolute top-0 right-0 text-red-500 text-[10px] uppercase font-sans">एन्ट्रिक्स</span>
              </div>
            </div>
          ))}
        </div>

        {/* Title Box */}
        <div className="w-full md:w-1/3 bg-white rounded-3xl p-8 lg:p-12 shadow-custom flex flex-col justify-center">
          <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase mb-4">Our Proud</h3>
          <h2 className="text-4xl font-bold bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent mb-6">Clients.</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Partnering with visionaries to shape the future of business.
          </p>
        </div>
      </div>

      {/* Bottom Section - Testimonial */}
      <div className="w-full bg-[#EAF6F5] rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center relative overflow-hidden shadow-custom">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="bg-[#D1EBE9] text-primary-1 text-xs font-bold px-3 py-1 rounded mb-4 inline-block tracking-wider">
            TRUSTED BY PARTNERS
          </div>
          <h2 className="text-3xl font-bold text-black leading-tight">
            What Our <br /><span className="bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent">Partners Say</span>
          </h2>
        </div>

        <div className="w-full md:w-2/3 md:pl-12 flex flex-col justify-center">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-primary-1"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>

          <p className="text-black font-medium text-lg leading-relaxed max-w-2xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 bg-primary-1"></div>
            <span className="text-primary-1 font-bold text-sm">Partner Leadership Team</span>
          </div>
        </div>

        {/* Large Quote Icon Background */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-primary-2/20 rounded-full flex items-center justify-center pointer-events-none">
          <Quote className="w-16 h-16 text-primary-1 rotate-180 opacity-50" />
        </div>
      </div>
    </section>
  );
}
