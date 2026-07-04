import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src="/logo.svg" 
            alt="A-Cube Logo" 
            width={200} 
            height={40} 
            style={{ height: "auto" }}
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
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2  border-primary-1 flex items-center justify-center text-primary-1">
          <Phone className="w-5 h-5" />
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="font-bold text-black leading-none text-sm">+91 9999 999 999</span>
          <span className="text-[10px] text-gray-500">Mon-Sat : 09 00AM - 04 00 PM</span>
        </div>
      </div>
    </nav>
  );
}
