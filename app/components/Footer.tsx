import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* CTA & Contact Section */}
      <section className="relative w-full bg-cta-gradient text-white px-4 py-12 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-8 lg:gap-24 overflow-hidden">

        {/* Background Image overlay */}
        <div className="absolute right-0 bottom-0 w-full h-48 lg:w-1/2  z-0 opacity-25 mix-blend-overlay bg-no-repeat bg-right bg-cover lg:bg-contain  pointer-events-none" style={{ backgroundImage: 'url("/cta image.png")' }}></div>

        {/* Left CTA */}
        <div className="w-full lg:w-1/2 z-10 flex flex-col items-start">
          <h2 className="text-2xl  font-bold mb-2 leading-tight">
            Need Reliable Manpower for your Business ?
          </h2>
          <p className="text-white text-sm mb-8 leading-relaxed max-w-lg font-medium">
            Partner with A-Cube Institute of Skills for reliable manpower, recruitment,
            HR consulting, and industry-focused skill development programs.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-tertiary hover:bg-[#F57C00] transition-colors text-white font-bold px-4 py-3 rounded-2xl flex items-center gap-2">
              Get in touch <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-tertiary transition-colors text-white font-bold px-4 py-3 rounded-2xl flex items-center gap-2">
              Download Profile <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Contact Info */}
        <div className="w-full lg:w-1/2 z-10 flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="w-full md:w-[200px] shrink-0 flex flex-col gap-8">
            <div className="flex gap-4">
              <Phone className="w-6 h-6 shrink-0 text-white" />
              <div>
                <h4 className="font-bold mb-1 text-sm">Contact Us</h4>
                <p className="text-xs text-white leading-relaxed font-medium">91 9894 751 538<br />0421 661 4336</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 shrink-0 text-white" />
              <div>
                <h4 className="font-bold mb-1 text-sm">Enquiry</h4>
                <a href="mailto:acubeskills@gmail.com" className="text-xs text-white hover:underline font-medium">acubeskills@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/20 self-stretch shrink-0"></div>

          <div className="flex-1 w-full flex gap-4">
            <MapPin className="w-6 h-6 shrink-0 text-white" />
            <div className="flex flex-col gap-6">
              <h4 className="font-bold mb-1 text-sm">Office Location</h4>

              <div>
                <h5 className="font-bold text-[11px] text-white mb-1">Registered Office</h5>
                <p className="text-[11px] text-white leading-relaxed">
                  IInd Floor, Sibi's Nest, 042/14, Near Kannaki<br />
                  Departmental Stores, Perundurai Main Road,<br />
                  Thindal, Erode - 638012
                </p>
              </div>

              <div>
                <h5 className="font-bold text-[11px] text-white mb-1">Head office</h5>
                <p className="text-[11px] text-white leading-relaxed">
                  No:84, Sai Best Complex, Second Floor, Kuppana<br />
                  Chetty Street, Palladam road, Tiruppur- 641604
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Links */}
      <section className="w-full bg-[#00403C] text-white px-4 py-10 md:px-12 lg:px-24 flex flex-col md:flex-row flex-wrap gap-8 lg:gap-0 justify-between border-b border-white/10">
        {/* Brand */}
        <div className="w-full lg:w-2/5 flex flex-col max-w-sm">
          <Image src="/logo-footer.svg" alt="A-Cube Logo White" width={220} height={60} className="mb-4 w-auto h-14" />
          <p className="text-[11px] text-white leading-relaxed pr-8">
            A-Cube Institute of Skills is a leading human resource supply and skill
            development solutions provider committed to empowering individuals
            and supporting organization.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/5 self-stretch"></div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-xs text-white/80 font-medium">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/5 self-stretch"></div>

        {/* Our Services */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-5">Our Services</h4>
          <ul className="flex flex-col gap-3 text-xs text-white/80 font-medium">
            <li><Link href="#" className="hover:text-white transition-colors">Human Resource Supply</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Recruitment Service</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Skill development & Training</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">HR Consulting</Link></li>
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/5 self-stretch"></div>

        {/* Certifications */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-5">Certifications</h4>
          <ul className="flex flex-col gap-3 text-xs text-white/80 font-medium">
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
      <div className="w-full bg-[#003431] flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-24 py-4 text-xs text-white/60 gap-4 text-center md:text-left">
        <div>
          &copy; 2026 A-Cube Institute of Skills | Developed by <span className="font-medium"><a href="https://jadbery.com" className="text-white hover:underline">Jadbery Digital</a></span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
