import { Users, Briefcase, UserCheck, Building2, Map, Heart } from "lucide-react";

export default function Impacts() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "2000+",
      label: "Workers Deployed",
      highlight: true,
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      number: "10+",
      label: "Industry Served",
      highlight: false,
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      number: "500+",
      label: "Active Workforce",
      highlight: false,
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      number: "100+",
      label: "Company Partnered",
      highlight: false,
    },
    {
      icon: <Map className="w-8 h-8" />,
      number: "5+",
      label: "States Served",
      highlight: false,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "99%",
      label: "Deployment Success rate",
      highlight: false,
    },
  ];

  return (
    <section className="w-full px-6 py-20 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start gap-12">
      {/* Left Content */}
      <div className="w-full lg:w-1/3 pt-8">
        <h3 className="text-primary-1 font-bold text-sm tracking-widest uppercase mb-2">Impacts</h3>
        <h2 className="text-4xl font-bold bg-linear-to-r from-[#2D9F90] to-[#A0DAAD] bg-clip-text text-transparent mb-6">Numbers.</h2>
        <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
          our impact in creating meaningful opportunities and driving sustainable change
        </p>
      </div>

      {/* Right Content / Grid */}
      <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-8 rounded-3xl shadow-custom transition-transform hover:-translate-y-1 ${stat.highlight
                ? 'bg-primary-1 text-white'
                : 'bg-white text-black'
              }`}
          >
            <div className={`mb-4 ${stat.highlight ? 'text-primary-2' : 'text-primary-1'}`}>
              {stat.icon}
            </div>
            <div className="text-3xl font-bold mb-2">{stat.number}</div>
            <div className={`text-xs text-center ${stat.highlight ? 'text-white/80' : 'text-gray-500'}`}>
              {stat.label.split(' ').map((word, i) => (
                <span key={i}>{word}<br /></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
