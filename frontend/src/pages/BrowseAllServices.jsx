import React from "react";
import { Link } from "react-router-dom";

const ALL_CATEGORIES = [
  { 
    title: "Scholarships",   
    desc: "National and international educational grants for students and researchers.", 
    path: "/scholarships",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
  },
  { 
    title: "Startup & MSME",   
    desc: "Funding, subsidies, and credit-linked guarantee schemes for small businesses.", 
    path: "/startup-grant",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  { 
    title: "Agriculture",   
    desc: "Financial assistance for farm equipment, crop insurance, and irrigation.", 
    path: "/agriculture",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  },
  { 
    title: "Women Empowerment", 
    desc: "Schemes for skill development, financial independence, and education for women.", 
    path: "/women-programs",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  },
  { 
    title: "Research Grants", 
    desc: "Funding for scientific discovery, academic publications, and R&D projects.", 
    path: "/research-grants",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.27a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 000 2.828l1.16 1.16a2 2 0 002.828 0l1.16-1.16a2 2 0 00.547-1.022l.477-2.387a6 6 0 01-.517-3.86l-.27-.675a6 6 0 01-.517-3.86l.477-2.388a2 2 0 00-.547-1.022l-1.16-1.16a2 2 0 00-2.828 0l-1.16 1.16a2 2 0 000 2.828l1.16 1.16a2 2 0 001.022.547"
  },
  { 
    title: "Tenders & RFPs", 
    desc: "Open government procurement contracts and business service opportunities.", 
    path: "/tenders",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  { 
    title: "Citizen Schemes", 
    desc: "General welfare programs including health, housing, and social security.", 
    path: "/citizen-schemes",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  }
];

const BrowseAllServices = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] font-['Inter',_sans-serif]">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 mb-6 tracking-tighter leading-[0.9]">
                Browse <span className="text-blue-600 italic">Categories.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                Explore our full library of government initiatives and specialized portals designed for every citizen.
            </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_CATEGORIES.map((cat, i) => (
                <Link 
                    key={i} 
                    to={cat.path}
                    className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-blue-500/5 transition-all hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:border-blue-200"
                >
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d={cat.icon} />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">{cat.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
                        Enter Portal 
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseAllServices;
