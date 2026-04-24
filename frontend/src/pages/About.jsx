import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] font-['Inter',_sans-serif] selection:bg-blue-100 selection:text-blue-700">
      {/* Hero Section with Glassmorphism */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-blue-100 text-xs font-black uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
              Empowering 50k+ Citizens
            </div>
            <h1 className="text-5xl md:text-8xl font-[1000] text-white mb-8 tracking-tighter leading-[0.9] italic">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">Inclusion.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
              Redefining how citizens discover, understand, and apply for government welfare in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
              A bridge between <span className="text-blue-600">Policy</span> and <span className="text-blue-600">People.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                OpportunityHub was born out of a simple observation: billions in welfare funds go unutilized every year simply because the people who need them most don't know they exist.
              </p>
              <p>
                Our platform uses advanced data aggregation and AI matching to cut through the bureaucratic noise, delivering verified, actionable scheme information directly to your fingertips.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                    <div className="text-4xl font-black text-blue-600 mb-1 tracking-tighter">98%</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Accuracy Rate</div>
                </div>
                <div>
                    <div className="text-4xl font-black text-blue-600 mb-1 tracking-tighter">1.2k+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Schemes</div>
                </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-5 group-hover:rotate-1 transition-transform duration-500"></div>
            <div className="relative bg-white p-12 rounded-[3rem] shadow-2xl shadow-blue-500/10 border border-slate-100">
                <div className="space-y-12">
                    {[
                        { title: "Curated Verification", desc: "Every scheme is cross-referenced with official gazettes and departmental portals before listing.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                        { title: "Universal Access", desc: "Available in multiple languages and designed for low-bandwidth environments to reach rural citizens.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" },
                        { title: "Privacy First", desc: "We utilize banking-grade encryption to ensure your personal documentation stays private and secure.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
                    ].map((val, i) => (
                        <div key={i} className="flex gap-8">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 text-blue-600 shadow-inner">
                                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d={val.icon} /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-slate-900 mb-2">{val.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline or Values Section */}
      <div className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Built for <span className="text-blue-500 italic">Impact.</span></h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">Our journey is defined by the lives we touch and the communities we empower through digital innovation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { year: "2024", event: "Platform Launch", detail: "Started with 100 central schemes and a team of 5 social workers." },
                    { year: "2025", event: "National Scaling", detail: "Expanded to 22 states and integrated AI eligibility engine." },
                    { year: "Future", event: "Unified Welfare", detail: "Aiming to build a single-window portal for every Indian citizen." }
                ].map((item, i) => (
                    <div key={i} className="relative p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-lg">
                        <div className="text-5xl font-black text-white/10 absolute top-4 right-8">{item.year}</div>
                        <h4 className="text-xl font-black text-blue-400 mb-4 tracking-tight">{item.event}</h4>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed">{item.detail}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
