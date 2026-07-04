import { UsersRound, FolderOpen, Landmark, Map, HeartHandshake } from "lucide-react";

export default function Impacts() {
  const stats = [
    {
      icon: <UsersRound className="w-6 h-6" strokeWidth={1.5} />,
      number: "2000+",
      label: <>Workers<br />Deployed</>,
    },
    {
      icon: <FolderOpen className="w-6 h-6" strokeWidth={1.5} />,
      number: "10+",
      label: <>Industry<br />Served</>,
    },
    {
      icon: <UsersRound className="w-6 h-6" strokeWidth={1.5} />,
      number: "500+",
      label: <>Active<br />Workforce</>,
    },
    {
      icon: <Landmark className="w-6 h-6" strokeWidth={1.5} />,
      number: "100+",
      label: <>Company<br />Partnered</>,
    },
    {
      icon: <Map className="w-6 h-6" strokeWidth={1.5} />,
      number: "5+",
      label: <>States<br />Served</>,
    },
    {
      icon: <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />,
      number: "99%",
      label: <>Deployment<br />Success rate</>,
    },
  ];

  return (
    <section className="mx-8 rounded-4xl px-6 py-20 md:px-12 lg:px-24 bg-white flex flex-col lg:flex-row items-center lg:items-start gap-12">
      {/* Left Content */}
      <div className="w-full lg:w-1/3 pt-8">
        <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase mb-2">Impacts</h3>
        <h2 className="text-4xl font-bold bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent mb-6">Numbers.</h2>
        <p className="text-gray-600 text-sm max-w-xs leading-relaxed mb-2">
          our impact in creating meaningful opportunities and driving sustainable change
        </p> {/* Divider Line */}
        <div className="w-8 h-[2px] mb-2 transition-all duration-300 bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] group-hover:from-white/60 group-hover:to-white/60"></div>

      </div>

      {/* Right Content / Grid */}
      <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-4 lg:p-8 rounded-4xl border transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-primary-1 text-black hover:text-white border-gray-100 hover:border-primary-1 shadow-sm hover:shadow-xl hover:shadow-primary-1/20"
          >
            {/* Icon Circle */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 bg-background text-primary-1 group-hover:bg-white/10 group-hover:text-white">
              {stat.icon}
            </div>

            {/* Number */}
            <div className="text-[28px] lg:text-[32px] font-bold tracking-tight ">
              {stat.number}
            </div>

            {/* Divider Line */}
            <div className="w-8 h-[2px] mb-2 transition-all duration-300 bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] group-hover:from-white/60 group-hover:to-white/60"></div>

            {/* Label */}
            <div className="text-[11px] lg:text-xs text-center font-medium leading-[1.6] transition-colors duration-300 text-gray-500 group-hover:text-white/90">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
