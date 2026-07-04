import { UserCheck, Users, Briefcase, UserCog, GraduationCap, UserPlus } from "lucide-react";

export default function Services() {
  const serviceItems = [
    { icon: <UserCheck className="w-5 h-5" />, title: "Skilled Manpower Supply" },
    { icon: <Users className="w-5 h-5" />, title: "Unskilled Manpower Supply" },
    { icon: <UserPlus className="w-5 h-5" />, title: "Temporary and Permanent Staffing" },
    { icon: <UserCog className="w-5 h-5" />, title: "Contract Staffing Solutions" },
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row relative px-6 py-20 md:px-12 lg:px-24 bg-white overflow-hidden">
      
      {/* Left Panel */}
      <div className="w-full lg:w-[32%] bg-primary-1 text-white p-10 lg:p-14 rounded-[2.5rem] flex flex-col justify-center min-h-[500px] lg:min-h-[640px] relative z-10 shrink-0">
        <h3 className="text-sm font-semibold tracking-wide mb-12">Our Services</h3>
        <div>
          <h2 className="text-[2rem] lg:text-[2.5rem] font-bold leading-[1.3] mb-6">
            Comprehensive<br/>Solution for<br/>
            <span className="text-[#A0DAAD] font-semibold">Workforce<br/>Developement</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#A0DAAD]"></div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-[68%] pl-0 lg:pl-20 pt-12 lg:pt-0 flex flex-col justify-center relative">
        
        {/* Header Area */}
        <div className="flex justify-between items-start w-full mb-10 relative">
          <div className="flex items-center gap-6 lg:gap-10">
            <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-[#F0F7F6] flex items-center justify-center shrink-0">
              <UserCog className="w-10 h-10 lg:w-12 lg:h-12 text-primary-1" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-2xl lg:text-[2.5rem] font-bold text-black leading-tight mb-5">
                Human Resouce<br/>Supply
              </h2>
              <div className="w-10 h-0.5 bg-gray-500"></div>
            </div>
          </div>
          
          <div className="text-primary-1 text-5xl lg:text-[4rem] font-medium leading-none hidden md:block absolute right-0 top-0 lg:translate-x-12">
            1<span className="text-gray-200 text-3xl lg:text-5xl">/4</span>
          </div>
        </div>

        {/* Paragraph */}
        <p className="text-gray-600 text-[13px] leading-[1.8] max-w-xl mb-12 ml-4">
          We offer comprehensive workforce solutions, providing both skilled 
          and unskilled manpower alongside flexible contract, temporary, and 
          permanent staffing to ensure your business always has the exact 
          talent it needs to succeed.
        </p>

        {/* Horizontal Divider */}
        <div className="w-[80%] max-w-2xl h-px bg-gray-200 mb-12 ml-4"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 max-w-3xl pr-0 lg:pr-24 ml-4">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-[#F0F7F6] flex items-center justify-center text-primary-1 shrink-0">
                {item.icon}
              </div>
              <span className="text-[13px] font-medium text-gray-700">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Vertical Navigation Dots */}
        <div className="hidden lg:flex flex-col gap-6 absolute right-0 top-[40%] translate-x-12">
          <div className="w-10 h-10 rounded-full bg-[#F0F7F6] flex items-center justify-center text-primary-1 cursor-pointer">
            <UserCog className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 cursor-pointer">
            <Briefcase className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 cursor-pointer">
            <GraduationCap className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 cursor-pointer">
            <UserPlus className="w-5 h-5" strokeWidth={1.5} />
          </div>
        </div>

        {/* Bottom Pagination Dashes */}
        <div className="flex gap-2 lg:gap-3 justify-center mt-20 max-w-3xl pr-0 lg:pr-24">
          <div className="w-12 h-[3px] bg-[#6CA89D] rounded-full"></div>
          <div className="w-12 h-[3px] bg-gray-200 rounded-full"></div>
          <div className="w-12 h-[3px] bg-gray-200 rounded-full"></div>
          <div className="w-12 h-[3px] bg-gray-200 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}
