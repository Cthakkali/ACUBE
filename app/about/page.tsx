"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data.json";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-(--color-background) font-sans text-gray-900 w-full">
      <Navbar />

      <main className="flex flex-col w-full flex-1">
        <section className="w-full px-4 md:px-12 lg:px-24 pt-16 lg:pt-24 pb-12 relative overflow-hidden">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase mb-2">{data.about.hero.badge}</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {data.about.hero.titlePart1}<span className="text-primary-1">{data.about.hero.titleHighlight}</span>
            </h1>
            <div className="text-gray-500 text-base max-w-3xl leading-relaxed flex flex-col gap-4">
              {data.about.hero.description.map((desc: string, idx: number) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
