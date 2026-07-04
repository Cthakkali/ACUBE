import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* CTA & Contact Section */}
      <section className="relative w-full bg-primary-1 text-white px-6 py-20 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-24 overflow-hidden">
        {/* Background Skewed Split */}
        <div className="absolute inset-0 z-0 flex pointer-events-none">
           <div className="w-[60%] h-full bg-primary-1"></div>
           <div className="w-[60%] h-[150%] bg-[#1c706a] skew-x-[-20deg] origin-bottom-left -translate-y-1/4 shadow-2xl"></div>
        </div>
        
        {/* Background Image overlay if available */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay bg-cover bg-center pointer-events-none" style={{ backgroundImage: 'url("/cta image.png")' }}></div>
        
        {/* Left CTA */}
        <div className="w-full lg:w-1/2 z-10 flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Need Reliable Manpower for your Business ?
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Partner with A-Cube Institute of Skills for reliable manpower, recruitment, 
            HR consulting, and industry-focused skill development programs.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2">
              Get in touch <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2">
              Download Profile <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Contact Info */}
        <div className="w-full lg:w-1/2 z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Phone className="w-6 h-6 shrink-0 text-primary-2" />
              <div>
                <h4 className="font-bold mb-1 text-sm">Contact Us</h4>
                <p className="text-sm text-white/80">91 9894 751 538<br/>0421 661 4336</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 shrink-0 text-primary-2" />
              <div>
                <h4 className="font-bold mb-1 text-sm">Enquiry</h4>
                <a href="mailto:acubeskills@gmail.com" className="text-sm text-white/80 hover:underline">acubeskills@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <MapPin className="w-6 h-6 shrink-0 text-primary-2" />
            <div className="flex flex-col gap-6">
              <h4 className="font-bold mb-1 text-sm">Office Location</h4>
              
              <div>
                <h5 className="font-bold text-xs text-white/90 mb-1">Registered Office</h5>
                <p className="text-xs text-white/80 leading-relaxed">
                  IInd Floor, Sibi's Nest, 042/14, Near Kannaki<br/>
                  Departmental Stores, Perundurai Main Road,<br/>
                  Thindal, Erode - 638012
                </p>
              </div>
              
              <div>
                <h5 className="font-bold text-xs text-white/90 mb-1">Head office</h5>
                <p className="text-xs text-white/80 leading-relaxed">
                  No:84, Sai Best Complex, Second Floor, Kuppana<br/>
                  Chetty Street, Palladam road, Tiruppur- 641604
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Links */}
      <section className="w-full bg-[#072421] text-white px-6 py-16 md:px-12 lg:px-24 flex flex-col md:flex-row flex-wrap gap-12 lg:gap-8 justify-between border-b border-white/10">
        {/* Brand */}
        <div className="w-full lg:w-1/4 flex flex-col max-w-sm">
          <Image src="/logo-footer.svg" alt="A-Cube Logo White" width={180} height={50} className="mb-6 w-auto h-12" />
          <p className="text-xs text-white/60 leading-relaxed">
            A-Cube Institute of Skills is a leading human resource supply and skill 
            development solutions provider committed to empowering individuals 
            and supporting organization.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-6">Our Services</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li><Link href="#" className="hover:text-white transition-colors">Human Resource Supply</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Recruitment Service</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Skill development & Training</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">HR Consulting</Link></li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-6">Certifications</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li>ISO 9001:2015 certified</li>
            <li>Certificate of Incorporation</li>
            <li>GST Registeration</li>
            <li>MSME Registeration</li>
            <li>EPF & ESIC Registeration</li>
            <li>Labour Registeration</li>
          </ul>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="w-full bg-[#072421] text-center py-6 text-sm text-white/60">
        Footer Dev <span className="text-[#FFB800] font-medium">Credit</span>
      </div>
    </footer>
  );
}
