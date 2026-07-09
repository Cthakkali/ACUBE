"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Send, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import data from "../data.json";

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
      clearProps: "all",
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
      clearProps: "all",
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
    formData.append("subject", "New Contact Form Submission from Website");

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
            <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase mb-2">{data.contact.header.badge}</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {data.contact.header.titlePart1}<span className="bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent">{data.contact.header.titleHighlight}</span>
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              {data.contact.header.description}
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="w-full px-4 md:px-12 lg:px-24 pb-24 relative z-10 contact-grid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">

            {/* Left Column - Contact Info */}
            <div className="flex flex-col gap-6 lg:col-span-5 items-stretch">
              {/* Head Office */}
              <div className="contact-info-card w-full bg-white p-8 rounded-4xl relative overflow-hidden group hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-full animate-pulse transition-colors duration-500 group-hover:bg-primary-1/5"></div>

                <div className="flex flex-col gap-5 relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-1 group-hover:scale-110 group-hover:bg-primary-1 group-hover:text-white transition-all duration-500 border border-gray-100 group-hover:border-primary-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-1 transition-colors duration-300">{data.company.offices.head.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {data.company.offices.head.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Registered Office */}
              <div className="contact-info-card w-full bg-white p-8 rounded-4xl relative overflow-hidden group hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-full animate-pulse transition-colors duration-500 group-hover:bg-[#A0DAAD]/10"></div>

                <div className="flex flex-col gap-5 relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#2D9F90] group-hover:scale-110 group-hover:bg-[#2D9F90] group-hover:text-white transition-all duration-500 border border-gray-100 group-hover:border-[#2D9F90]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2D9F90] transition-colors duration-300">{data.company.offices.registered.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {data.company.offices.registered.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="contact-info-card w-full bg-primary-1 p-8 rounded-3xl shadow-md relative overflow-hidden text-white mt-2">
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

                <h3 className="text-xl font-bold mb-6">{data.contact.info.directContact.title}</h3>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      {data.company.phones.map((phone: { display: string, link: string }, idx: number) => (
                        <a key={idx} href={`tel:${phone.link}`} className="text-sm font-semibold hover:text-[#A0DAAD] transition-colors">{phone.display}</a>
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-px bg-white/20"></div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <a href={`mailto:${data.company.email}`} className="text-sm font-semibold hover:text-[#A0DAAD] transition-colors">
                      {data.company.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-7 contact-form">
              <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-gray-50 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-1/5 rounded-bl-full pointer-events-none"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2">{data.contact.form.title}</h2>
                <p className="text-gray-500 text-sm mb-8">{data.contact.form.subtitle}</p>

                <form className="flex flex-col gap-6 relative z-10 flex-1" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wide">{data.contact.form.labels.name}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder={data.contact.form.placeholders.name}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-1/50 focus:border-primary-1 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wide">{data.contact.form.labels.email}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={data.contact.form.placeholders.email}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-1/50 focus:border-primary-1 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase tracking-wide">{data.contact.form.labels.phone}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder={data.contact.form.placeholders.phone}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-1/50 focus:border-primary-1 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-bold text-gray-700 uppercase tracking-wide">{data.contact.form.labels.subject}</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject_user"
                        required
                        placeholder={data.contact.form.placeholders.subject}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-1/50 focus:border-primary-1 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase tracking-wide">{data.contact.form.labels.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder={data.contact.form.placeholders.message}
                      className="w-full h-full min-h-[120px] bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-1/50 focus:border-primary-1 transition-all resize-none"
                    ></textarea>
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-[#A0DAAD]/20 border border-[#2D9F90] text-[#00403C] p-4 rounded-xl flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2D9F90]" />
                      <p className="text-sm font-semibold">{data.contact.form.successMessage}</p>
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
                    className="mt-4 relative overflow-hidden bg-primary-1 text-white font-bold text-sm px-8 py-4 rounded-xl flex items-center justify-center gap-2 group w-full md:w-auto self-start shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <span className="absolute inset-0 bg-linear-to-r from-primary-1 to-[#A0DAAD] opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>{data.contact.form.submitButton.loading} <Loader2 className="w-4 h-4 animate-spin" /></>
                      ) : (
                        <>{data.contact.form.submitButton.idle} <Send className="w-4 h-4" /></>
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
