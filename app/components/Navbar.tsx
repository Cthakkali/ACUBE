"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 md:px-12 lg:px-24 sticky top-0 z-50 border-b border-white/40">
      {/* Glassmorphism Background with Noise */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl -z-10 shadow-xs"></div>
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay -z-10 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      ></div>

      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="A-Cube Logo"
            width={200}
            height={40}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
        <Link href="/" className="text-primary-1 border-b-2 border-primary-1 pb-1">Home</Link>
        <Link href="/about" className="hover:text-primary-1 transition-colors">About Us</Link>
        <Link href="#services" className="hover:text-primary-1 transition-colors">Services</Link>
        <Link href="#projects" className="hover:text-primary-1 transition-colors">Projects</Link>
        <Link href="/gallery" className="hover:text-primary-1 transition-colors">Gallery</Link>
        <Link href="/contact" className="hover:text-primary-1 transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-3">
        <a href="tel:+919999999999" className="w-10 h-10 rounded-full border-2 border-primary-1 flex items-center justify-center text-primary-1 shrink-0 hover:bg-primary-1 hover:text-white transition-colors">
          <Phone className="w-5 h-5" />
        </a>
        <div className="hidden sm:flex flex-col mr-2 md:mr-0">
          <span className="font-bold text-black leading-none text-sm">+91 9999 999 999</span>
          <span className="text-[10px] text-gray-500">Mon-Sat : 09 00AM - 04 00 PM</span>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-primary-1 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-6 gap-6 z-40 animate-in slide-in-from-top-2 duration-200">
          <Link href="/" className="text-primary-1 font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="font-semibold text-gray-700 hover:text-primary-1 text-lg" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="#services" className="font-semibold text-gray-700 hover:text-primary-1 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="#projects" className="font-semibold text-gray-700 hover:text-primary-1 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link href="/gallery" className="font-semibold text-gray-700 hover:text-primary-1 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
        </div>
      )}
    </nav>
  );
}
