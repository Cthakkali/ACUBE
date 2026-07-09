"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Send, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useGSAP(() => {
    // Header Animations
    gsap.from(".contact-header > *", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Content Animations
    gsap.from(".contact-info-card", {
      x: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%",
      }
    });

    gsap.from(".contact-form", {
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    
    // Web3Forms access key (using env variable)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE");
    // Add subject line for the email notification
    formData.append("subject", "New Contact Form Submission from A-Cube Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-(--color-background) font-sans text-gray-900 w-full" ref={containerRef}>
      <Navbar />
      
      <main className="flex flex-col w-full flex-1">
        {/* Header Section */}
        <section className="w-full px-4 md:px-12 lg:px-24 pt-16 lg:pt-24 pb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-linear-to-b from-primary-1/5 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center contact-header">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-1 mb-6 shadow-sm">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase mb-2">Get In Touch</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's <span className="text-primary-1">Connect.</span>
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Whether you need skilled manpower, corporate training, or HR consulting, our team is ready to help your business grow.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="w-full px-4 md:px-12 lg:px-24 pb-24 relative z-10 contact-grid">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Left Column - Contact Info */}
            <div className="w-full lg:w-5/12 flex flex-col gap-6">
              {/* Head Office */}
              <div className="contact-info-card bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-1"></div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary-1/10 rounded-full flex items-center justify-center text-primary-1 shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Head Office</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No:84, Sai Best Complex, Second Floor, Kuppana Chetty Street, Palladam road, Tiruppur - 641604
                    </p>
                  </div>
                </div>
              </div>

              {/* Registered Office */}
              <div className="contact-info-card bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#A0DAAD]"></div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#A0DAAD]/20 rounded-full flex items-center justify-center text-[#2D9F90] shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Registered Office</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      IInd Floor, Sibi's Nest, 042/14, Near Kannaki Departmental Stores, Perundurai Main Road, Thindal, Erode – 638012
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="contact-info-card bg-primary-1 p-8 rounded-3xl shadow-lg relative overflow-hidden text-white mt-2">
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                
                <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919894751538" className="text-sm font-semibold hover:text-[#A0DAAD] transition-colors">+91 98947 51538</a>
                      <a href="tel:04216614336" className="text-sm font-semibold hover:text-[#A0DAAD] transition-colors">0421 6614336</a>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-white/20"></div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <a href="mailto:acubeskills@gmail.com" className="text-sm font-semibold hover:text-[#A0DAAD] transition-colors">
                      acubeskills@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full lg:w-7/12 contact-form">
              <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-1/5 rounded-bl-full pointer-events-none"></div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-500 text-sm mb-8">We'll get back to you within 24 hours.</p>

                <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-1/50 focus:border-primary-1 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-1/50 focus:border-primary-1 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        placeholder="+91 98765 43210"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-1/50 focus:border-primary-1 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-bold text-gray-700 uppercase tracking-wide">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject_user"
                        required
                        placeholder="How can we help?"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-1/50 focus:border-primary-1 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase tracking-wide">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-1/50 focus:border-primary-1 transition-all resize-none"
                    ></textarea>
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-[#A0DAAD]/20 border border-[#2D9F90] text-[#00403C] p-4 rounded-xl flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2D9F90]" />
                      <p className="text-sm font-semibold">Message sent successfully! We'll be in touch soon.</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3">
                      <p className="text-sm font-semibold">{errorMessage}</p>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 relative overflow-hidden bg-primary-1 text-white font-bold text-sm px-8 py-4 rounded-xl flex items-center justify-center gap-2 group w-full md:w-auto self-start shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <span className="absolute inset-0 bg-linear-to-r from-primary-1 to-[#A0DAAD] opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                      ) : (
                        <>Send Message <Send className="w-4 h-4" /></>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
