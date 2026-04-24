import React from "react";
import { Link } from "react-router-dom";

const SERVICE_CATEGORIES = [
  {
    title: "Application Assistance",
    desc: "End-to-end support for your government scheme applications.",
    services: [
      { id: "scholarship", title: "Scholarship Support", desc: "Profile matching and documentation for students.", path: "/help/scholarship" },
      { id: "msme", title: "MSME & Startup", desc: "Grant applications and business registration help.", path: "/help/msme" },
      { id: "agriculture", title: "Agriculture Subsidies", desc: "Farm registration and tool subsidy assistance.", path: "/help/agriculture" }
    ]
  },
  {
    title: "Document & Tracking",
    desc: "Tools to manage your identity and track your welfare journey.",
    services: [
      { id: "tracking", title: "Status Tracking", desc: "Real-time updates for all submitted applications.", path: "/help/status" },
      { id: "correction", title: "Correction Services", desc: "Fix errors in your official government records.", path: "/help/correction" },
      { id: "expert", title: "Expert Support", desc: "One-on-one consultation with portal experts.", path: "/help/expert" }
    ]
  },
  {
    title: "Specialized Portals",
    desc: "Dedicated environments for specific demographic needs.",
    services: [
      { id: "scholarship-portal", title: "Scholarship Portal", desc: "Explore thousands of educational grants.", path: "/scholarships" },
      { id: "msme-portal", title: "Business Portal", desc: "Resources for entrepreneurs and small businesses.", path: "/startup-msme" },
      { id: "citizen-portal", title: "Citizen Schemes", desc: "Comprehensive list of all public welfare schemes.", path: "/citizen-schemes" }
    ]
  }
];

const AllServices = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] font-['Inter',_sans-serif]">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 mb-6 tracking-tighter leading-tight">
                Our <span className="text-blue-600 italic">Ecosystem.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                A unified suite of digital services designed to simplify your interaction with government welfare and civic programs.
            </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-24">
        {SERVICE_CATEGORIES.map((cat, i) => (
          <div key={i} className="mb-24 last:mb-0">
            <div className="mb-12">
                <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{cat.title}</h2>
                <p className="text-slate-500 font-medium">{cat.desc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.services.map((s) => (
                    <Link 
                        key={s.id} 
                        to={s.path}
                        className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-500/5 transition-all hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:border-blue-200"
                    >
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                {s.id === 'scholarship' && <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />}
                                {s.id === 'msme' && <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                                {s.id === 'agriculture' && <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                                {s.id === 'tracking' && <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />}
                                {s.id === 'correction' && <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />}
                                {s.id === 'expert' && <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />}
                                {!['scholarship', 'msme', 'agriculture', 'tracking', 'correction', 'expert'].includes(s.id) && <path d="M13 10V3L4 14h7v7l9-11h-7z" />}
                            </svg>
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">{s.desc}</p>
                        <div className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest group-hover:gap-3 transition-all">
                            Explore Service 
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </div>
                    </Link>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Support Banner */}
      <div className="container mx-auto px-6 py-24">
        <div className="bg-slate-900 rounded-[4rem] p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
                <h2 className="text-4xl font-black text-white mb-6 tracking-tight italic">Can't find what you're looking for?</h2>
                <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 font-medium">Our application experts are available 24/7 to help you navigate specific departmental requirements.</p>
                <Link to="/help/expert" className="inline-block bg-blue-600 text-white font-black px-12 py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all hover:scale-105">
                    Consult an Expert
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
