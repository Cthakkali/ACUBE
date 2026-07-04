import { UserCheck, Users, Briefcase, UserCog } from "lucide-react";

export default function Services() {
  const serviceItems = [
    { icon: <UserCheck className="w-5 h-5" />, title: "Skilled Manpower Supply" },
    { icon: <Users className="w-5 h-5" />, title: "Unskilled Manpower Supply" },
    { icon: <Briefcase className="w-5 h-5" />, title: "Temporary and Permanent Staffing" },
    { icon: <UserCog className="w-5 h-5" />, title: "Contract Staffing Solutions" },
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row relative py-20 overflow-hidden">
      {/* Background very light gray curve for contrast if needed */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8F9FA] rounded-bl-[100px] z-0 hidden lg:block"></div>
      
      {/* Left Panel - Floating Box */}
      <div className="w-full lg:w-5/12 bg-primary-1 text-white p-12 lg:p-16 rounded-[2.5rem] lg:ml-24 flex flex-col justify-center relative shadow-2xl shadow-primary-1/40 z-10">
        <h3 className="text-sm font-semibold tracking-wider uppercase mb-8">Our Services</h3>
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
          Comprehensive<br/>Solution for<br/><span className="text-primary-2">Workforce<br/>Developement</span>
        </h2>
        <div className="w-16 h-1.5 bg-primary-2 rounded-full mt-4"></div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-2/3 p-12 lg:p-24 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#EAF6F5] flex items-center justify-center text-primary-1">
              <UserCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-black max-w-[200px] leading-tight">
              Human Resouce Supply
            </h2>
          </div>
          <div className="text-primary-1 font-light text-5xl">
            1<span className="text-gray-300 text-3xl">/4</span>
          </div>
        </div>

        <div className="w-16 h-0.5 bg-gray-200 mb-8"></div>

        <p className="text-gray-600 text-sm leading-relaxed max-w-xl mb-12">
          We offer comprehensive workforce solutions, providing both skilled 
          and unskilled manpower alongside flexible contract, temporary, and 
          permanent staffing to ensure your business always has the exact 
          talent it needs to succeed.
        </p>

        {/* Service List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 max-w-2xl relative">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F0F8F8] flex items-center justify-center text-primary-1 shrink-0">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-black">{item.title}</span>
            </div>
          ))}
          {/* Vertical Navigation Dots (right side mockup) */}
          <div className="hidden lg:flex flex-col gap-4 absolute -right-16 top-0 bottom-0 justify-center">
             <div className="w-8 h-8 rounded-full bg-[#EAF6F5] flex items-center justify-center text-primary-1 cursor-pointer shadow-sm hover:scale-110 transition-transform"><UserCheck className="w-4 h-4" /></div>
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:scale-110 transition-transform"><Users className="w-4 h-4" /></div>
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:scale-110 transition-transform"><Briefcase className="w-4 h-4" /></div>
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:scale-110 transition-transform"><UserCog className="w-4 h-4" /></div>
          </div>
        </div>

        {/* Bottom Pagination indicators */}
        <div className="flex gap-2 mt-16 max-w-2xl justify-center">
          <div className="w-8 h-1 bg-primary-1 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
