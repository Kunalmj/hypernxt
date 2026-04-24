import React from "react";

const SERVICES = [
  {
    title: "Scheme Discovery",
    desc: "Our intelligent matching engine helps you find government schemes tailored to your age, occupation, and financial profile.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    color: "blue"
  },
  {
    title: "Document Locker",
    desc: "Securely store and manage your official documents required for various scheme applications in one encrypted location.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    color: "indigo"
  },
  {
    title: "Application Tracking",
    desc: "Real-time updates on your application status across multiple government departments and welfare boards.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    color: "cyan"
  },
  {
    title: "Official Assistance",
    desc: "Connect with verified social workers and departmental officials to help you navigate complex registration processes.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "purple"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] font-['Inter',_sans-serif] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our <span className="text-blue-600">Services.</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            We provide a comprehensive suite of digital tools designed to simplify your interaction with government welfare programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, i) => (
            <div key={i} className="group bg-white p-10 rounded-[3rem] shadow-xl shadow-blue-500/5 border border-slate-100 hover:border-blue-200 transition-all hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors bg-${s.color}-50 text-${s.color}-600 group-hover:bg-blue-600 group-hover:text-white`}>
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={s.icon} /></svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Focus */}
        <div className="mt-32 p-12 bg-blue-600 rounded-[4rem] relative overflow-hidden shadow-2xl shadow-blue-600/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white max-w-xl">
              <h2 className="text-4xl font-black mb-6 leading-tight text-white italic">Verify your eligibility in seconds with AI.</h2>
              <p className="text-blue-100 text-lg font-medium">
                Our proprietary algorithm analyzes over 1,200 central and state schemes to find exactly what you qualify for. No more manual searching through government PDF files.
              </p>
            </div>
            <button className="bg-white text-blue-600 font-black px-10 py-6 rounded-[2rem] shadow-xl hover:scale-105 transition-all text-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
