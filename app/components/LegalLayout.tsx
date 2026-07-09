import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-(--color-background) font-sans text-gray-900 w-full">
      <Navbar />
      
      <main className="flex flex-col w-full flex-1 items-center px-4 md:px-12 lg:px-24 py-16 lg:py-24">
        <div className="w-full max-w-4xl bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-xl border border-gray-100">
          <div className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-sm font-semibold text-primary-1 uppercase tracking-wider">
              Last Updated: {lastUpdated}
            </p>
          </div>
          
          <div className="prose prose-gray prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 max-w-none">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
