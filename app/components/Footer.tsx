import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Download } from "lucide-react";
import data from "../data.json";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* CTA & Contact Section */}
      <section className="relative w-full bg-cta-gradient text-white px-4 py-12 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-8 lg:gap-24 overflow-hidden rounded-t-2xl">

        {/* Background Image overlay */}
        <div className="absolute right-0 bottom-0 w-full h-48 lg:w-1/2  z-0 opacity-15 lg:opacity-20 mix-blend-overlay bg-no-repeat bg-right bg-cover lg:bg-contain  pointer-events-none" style={{ backgroundImage: 'url("/cta image.png")' }}></div>

        {/* Left CTA */}
        <div className="w-full lg:w-1/2 z-10 flex flex-col items-start">
          <h2 className="text-2xl  font-bold mb-2 leading-tight">
            {data.footer.cta.title}
          </h2>
          <p className="text-white text-sm mb-8 leading-relaxed max-w-lg font-medium">
            {data.footer.cta.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={data.footer.cta.button1.href} className="bg-tertiary hover:bg-[#F57C00] transition-colors text-white font-bold px-4 py-3 rounded-2xl flex items-center gap-2">
              {data.footer.cta.button1.label} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={data.footer.cta.button2.href} className="bg-transparent border border-white hover:bg-white hover:text-tertiary transition-colors text-white font-bold px-4 py-3 rounded-2xl flex items-center gap-2">
              {data.footer.cta.button2.label} <Download className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Contact Info */}
        <div className="w-full lg:w-1/2 z-10 flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="w-full md:w-[200px] shrink-0 flex flex-col gap-8">
            <div className="flex gap-4">
              <Phone className="w-6 h-6 shrink-0 text-white" />
              <div>
                <h4 className="font-bold mb-1 text-sm">{data.footer.contact.title}</h4>
                <div className="text-xs text-white leading-relaxed font-medium flex flex-col gap-1">
                  {data.company.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.link}`} className="hover:text-primary-1 transition-colors">{phone.display}</a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 shrink-0 text-white" />
              <div>
                <h4 className="font-bold mb-1 text-sm">{data.footer.contact.emailTitle}</h4>
                <a href={`mailto:${data.company.email}`} className="text-xs text-white hover:underline font-medium">{data.company.email}</a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/20 self-stretch shrink-0"></div>

          <div className="flex-1 w-full flex gap-4">
            <MapPin className="w-6 h-6 shrink-0 text-white" />
            <div className="flex flex-col gap-6">
              <h4 className="font-bold mb-1 text-sm">{data.footer.office.title}</h4>

              <div>
                <h5 className="font-bold text-[11px] text-white mb-1">{data.company.offices.head.title}</h5>
                <p className="text-[11px] text-white leading-relaxed whitespace-pre-line">
                  {data.company.offices.head.addressLines.join('\n')}
                </p>
              </div>

              <div>
                <h5 className="font-bold text-[11px] text-white mb-1">{data.company.offices.registered.title}</h5>
                <p className="text-[11px] text-white leading-relaxed whitespace-pre-line">
                  {data.company.offices.registered.addressLines.join('\n')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Links */}
      <section className="w-full bg-[#00403C] text-white px-4 py-10 md:px-12 lg:px-24 flex flex-col md:flex-row flex-wrap gap-8 lg:gap-0 justify-between border-b border-white/10">
        {/* Brand */}
        <div className="w-full lg:w-2/5 flex flex-col items-start justify-center max-w-sm">
          <Image src="/logo-footer.svg" alt="A-Cube Logo White" width={220} height={60} className="mb-4 w-auto h-14" />
          <p className="text-[11px] text-white leading-relaxed pr-8">
            {data.footer.companyInfo}
          </p>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/5 self-stretch"></div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-5">{data.footer.quickLinks.title}</h4>
          <ul className="flex flex-col gap-3 text-xs text-white/80 font-medium">
            {data.footer.quickLinks.links.map((link, idx) => (
              <li key={idx}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/5 self-stretch"></div>

        {/* Our Services */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-5">{data.footer.servicesLinks.title}</h4>
          <ul className="flex flex-col gap-3 text-xs text-white/80 font-medium">
            {data.footer.servicesLinks.links.map((link, idx) => (
              <li key={idx}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/5 self-stretch"></div>

        {/* Certifications */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-5">{data.footer.certifications.title}</h4>
          <ul className="flex flex-col gap-3 text-xs text-white/80 font-medium">
            {data.company.certifications.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="w-full bg-[#003431] flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-24 py-4 text-xs text-white/60 gap-4 text-center md:text-left">
        <div>
          {data.footer.bottomBar.copyright} <span className="font-medium"><a href={data.footer.bottomBar.developerLink} className="text-white hover:underline">{data.footer.bottomBar.developer}</a></span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium">
          {data.footer.bottomBar.links.map((link, idx) => (
            <Link key={idx} href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
