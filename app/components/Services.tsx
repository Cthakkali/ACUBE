"use client";

import { UserCheck, Users, Briefcase, UserCog, GraduationCap, UserPlus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const dummyServices = [
    {
      id: "service-1",
      title: <>Human Resouce<br/>Supply</>,
      icon: <UserCog className="w-10 h-10 lg:w-12 lg:h-12 text-primary-1" strokeWidth={1.5} />,
      navIcon: <UserCog className="w-5 h-5" strokeWidth={1.5} />,
      desc: "We offer comprehensive workforce solutions, providing both skilled and unskilled manpower alongside flexible contract, temporary, and permanent staffing to ensure your business always has the exact talent it needs to succeed.",
      items: [
        { icon: <UserCheck className="w-5 h-5" />, title: "Skilled Manpower Supply" },
        { icon: <Users className="w-5 h-5" />, title: "Unskilled Manpower Supply" },
        { icon: <UserPlus className="w-5 h-5" />, title: "Temporary and Permanent Staffing" },
        { icon: <UserCog className="w-5 h-5" />, title: "Contract Staffing Solutions" },
      ]
    },
    {
      id: "service-2",
      title: <>Corporate<br/>Training</>,
      icon: <GraduationCap className="w-10 h-10 lg:w-12 lg:h-12 text-primary-1" strokeWidth={1.5} />,
      navIcon: <GraduationCap className="w-5 h-5" strokeWidth={1.5} />,
      desc: "Empower your workforce with our comprehensive training programs. We deliver industry-leading certifications, leadership coaching, and technical skills development tailored to your business goals.",
      items: [
        { icon: <UserCheck className="w-5 h-5" />, title: "Leadership Development" },
        { icon: <Users className="w-5 h-5" />, title: "Technical Skills Training" },
        { icon: <UserPlus className="w-5 h-5" />, title: "Soft Skills Workshops" },
        { icon: <UserCog className="w-5 h-5" />, title: "Industry Certifications" },
      ]
    },
    {
      id: "service-3",
      title: <>Payroll<br/>Management</>,
      icon: <Briefcase className="w-10 h-10 lg:w-12 lg:h-12 text-primary-1" strokeWidth={1.5} />,
      navIcon: <Briefcase className="w-5 h-5" strokeWidth={1.5} />,
      desc: "Streamline your HR operations with our comprehensive payroll management system. We handle everything from tax compliance and benefits administration to precise and timely salary disbursements.",
      items: [
        { icon: <UserCheck className="w-5 h-5" />, title: "Automated Payroll System" },
        { icon: <Users className="w-5 h-5" />, title: "Tax & Legal Compliance" },
        { icon: <UserPlus className="w-5 h-5" />, title: "Benefits Administration" },
        { icon: <UserCog className="w-5 h-5" />, title: "Leave & Attendance Management" },
      ]
    },
    {
      id: "service-4",
      title: <>Executive<br/>Search</>,
      icon: <UserPlus className="w-10 h-10 lg:w-12 lg:h-12 text-primary-1" strokeWidth={1.5} />,
      navIcon: <UserPlus className="w-5 h-5" strokeWidth={1.5} />,
      desc: "Find the perfect leaders for your organization. Our executive search service utilizes an extensive global network to identify, evaluate, and recruit top-tier management and C-level professionals.",
      items: [
        { icon: <UserCheck className="w-5 h-5" />, title: "C-Level Recruitment" },
        { icon: <Users className="w-5 h-5" />, title: "Board Member Search" },
        { icon: <UserPlus className="w-5 h-5" />, title: "Interim Executive Management" },
        { icon: <UserCog className="w-5 h-5" />, title: "Leadership Assessment" },
      ]
    }
  ];

  useGSAP(() => {
    gsap.from(".services-left", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 80%",
      }
    });
    
    gsap.from(".services-right", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 75%",
      }
    });
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToService = (index: number) => {
    observerRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="w-full relative px-4 py-12 md:px-12 lg:px-24 bg-white services-section">
      <div className="w-full flex flex-col lg:flex-row relative">
        
        {/* Sticky Left Panel */}
        <div className="w-full lg:w-3/12 shrink-0 relative mb-12 lg:mb-0 services-left">
          <div className="lg:sticky lg:top-24 bg-primary-1 text-white p-8 lg:p-14 rounded-[2.5rem] flex flex-col justify-center min-h-[350px] lg:min-h-[550px] z-10 shadow-2xl shadow-primary-1/40">
            <h3 className="text-sm font-semibold tracking-wide mb-8">Our Services</h3>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Comprehensive<br/>Solution for<br/>
                <span className="text-[#A0DAAD] font-semibold">Workforce</span><br/>Development
              </h2>
              <div className="w-12 h-0.5 bg-[#A0DAAD]"></div>
            </div>
          </div>
        </div>

        {/* Right Content - Scrollable */}
        <div className="w-full lg:w-9/12 pl-0 lg:pl-20 flex flex-col relative services-right">
          
          {/* Sticky Right Controls (hidden on mobile) */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-24 pointer-events-none z-20">
            <div className="sticky top-40 flex flex-col items-end pointer-events-auto">
              
              {/* Pagination Number */}
              <div className="text-primary-1 text-[4rem] font-medium leading-none mb-16 lg:translate-x-12 transition-all duration-300">
                {activeIndex + 1}<span className="text-gray-200 text-2xl">/4</span>
              </div>

              {/* Vertical Navigation Dots */}
              <div className="flex flex-col gap-6 lg:translate-x-12">
                {dummyServices.map((svc, i) => (
                  <div 
                    key={i}
                    onClick={() => scrollToService(i)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 shadow-sm ${
                      activeIndex === i ? 'bg-background text-primary-1' : 'bg-gray-50 text-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {svc.navIcon}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Scrolling Service Items */}
          <div className="flex flex-col gap-24 lg:gap-48 pb-10">
            {dummyServices.map((svc, i) => (
              <div 
                key={i}
                data-index={i}
                ref={(el) => { observerRefs.current[i] = el; }}
                className="flex flex-col justify-center relative min-h-[50vh]"
              >
                {/* Header Area */}
                <div className="flex justify-between items-start w-full mb-10 relative">
                  <div className="flex items-center gap-6 lg:gap-10">
                    <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-background flex items-center justify-center shrink-0">
                      {svc.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-[2.5rem] font-bold text-black leading-tight mb-5">
                        {svc.title}
                      </h2>
                      <div className="w-10 h-0.5 bg-gray-500"></div>
                    </div>
                  </div>
                  
                  {/* Mobile Pagination Number */}
                  <div className="text-primary-1 text-4xl font-medium leading-none lg:hidden">
                    {i + 1}<span className="text-gray-200 text-sm">/4</span>
                  </div>
                </div>

                {/* Paragraph */}
                <p className="text-gray-600 text-[13px] leading-[1.8] max-w-xl mb-12 ml-4">
                  {svc.desc}
                </p>

                {/* Horizontal Divider */}
                <div className="w-[80%] max-w-2xl h-px bg-gray-200 mb-12 ml-4"></div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-10 gap-x-8 max-w-3xl pr-0 lg:pr-24 ml-4">
                  {svc.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary-1 shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-[13px] font-medium text-gray-700">{item.title}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Pagination Dashes */}
                <div className="sticky bottom-8 z-20 flex gap-2 lg:gap-3 justify-center mt-20 max-w-3xl pr-0 lg:pr-24 py-4 bg-white/80 backdrop-blur-md rounded-xl">
                  {[0, 1, 2, 3].map((dashIdx) => (
                    <div 
                      key={dashIdx} 
                      className={`w-12 h-[3px] rounded-full transition-colors duration-300 ${
                        dashIdx === i ? 'bg-[#6CA89D]' : 'bg-gray-200'
                      }`}
                    ></div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
