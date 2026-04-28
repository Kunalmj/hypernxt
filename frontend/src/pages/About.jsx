import React from "react";

const About = () => {
  return (
    <div 
      style={{ 
        background: "linear-gradient(160deg, #f0f7ff 0%, #f5f8ff 40%, #fdf4fb 75%, #fff8f5 100%)", 
        fontFamily: "'Inter', 'Segoe UI', sans-serif" 
      }}
      className="selection:bg-blue-100 selection:text-blue-700 min-h-screen overflow-hidden -mt-[88px] pt-[88px]"
    >
      {/* Hero Section */}
      <div className="relative pt-28 pb-16 md:pt-36 md:pb-20 lg:min-h-[750px] flex items-center">
        {/* Glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle at 40% 40%, #a5b4fc 0%, transparent 65%)", opacity: 0.4 }} />
        <div className="absolute bottom-[0%] right-[5%] w-[500px] h-[500px] rounded-full animate-pulse" style={{ background: "radial-gradient(circle at 60% 60%, #c4b5fd 0%, transparent 65%)", opacity: 0.3 }} />
        
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 xl:col-span-5 text-center lg:text-left flex flex-col justify-center">
              <span className="self-center lg:self-start inline-flex items-center gap-2 bg-white/90 border border-[#bfdbfe] text-[#1d4ed8] text-[0.75rem] md:text-[0.8rem] font-bold px-4 md:px-5 py-2.5 rounded-full backdrop-blur-md shadow-sm mb-6 tracking-wide uppercase animate-[slideIn_1s_ease-out]">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                The Future of Civic Tech
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-extrabold text-[#0f172a] leading-[1.05] mb-6 tracking-tight animate-[fadeIn_1.2s_ease-out]">
                Digital <br className="hidden lg:block"/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] to-[#6366f1] pb-2">Inclusion.</span>
              </h1>
              
              <p className="text-[#475569] text-[1.05rem] md:text-[1.2rem] leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium mb-8 animate-[fadeIn_1.4s_ease-out]">
                OpportunityHub is redefining how citizens discover, understand, and apply for government welfare. We provide a highly secure, unified digital infrastructure for all your civic needs.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-[fadeIn_1.6s_ease-out]">
                <button className="bg-[#0f172a] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  Explore Platform
                </button>
                <button className="bg-white/80 backdrop-blur-md text-[#0f172a] border border-[#cbd5e1] px-8 py-4 rounded-full font-bold shadow-sm hover:border-[#94a3b8] hover:bg-white transition-all duration-300">
                  Read Our Story
                </button>
              </div>

              {/* Trust indicators right in the hero to fill space */}
              <div className="mt-12 pt-8 border-t border-[#cbd5e1]/50 animate-[fadeIn_1.8s_ease-out]">
                <p className="text-[0.8rem] font-bold text-[#64748b] uppercase tracking-widest mb-4">Trusted by Institutions & Citizens</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="text-xl font-black text-[#0f172a]">DigitalIndia</div>
                  <div className="text-xl font-black text-[#0f172a]">GovTech</div>
                  <div className="text-xl font-black text-[#0f172a]">CivicFoundation</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Abstract Professional Image grid */}
            <div className="lg:col-span-6 xl:col-span-7 relative hidden lg:block animate-[float_8s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
              
              {/* Complex Image Layout */}
              <div className="relative z-10 w-full rounded-[2.5rem] p-3 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
                <img 
                  src="/professional-hero-bg.png" 
                  alt="Corporate Technology Abstract" 
                  className="w-full h-auto object-cover rounded-[2rem] shadow-inner"
                  style={{ maxHeight: '600px' }}
                />
                
                {/* Floating stat card overlapping the image to make it look rich */}
                <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md border border-[#e2e8f0] p-6 rounded-3xl shadow-xl animate-[float_6s_ease-in-out_infinite_reverse]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ecfdf5] rounded-full flex items-center justify-center text-[#10b981]">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#0f172a]">100%</div>
                      <div className="text-[0.7rem] font-bold text-[#64748b] uppercase tracking-widest">Verified Data</div>
                    </div>
                  </div>
                </div>

                {/* Floating connection card */}
                <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md border border-[#e2e8f0] p-5 rounded-3xl shadow-xl animate-[float_7s_ease-in-out_infinite]">
                   <div className="flex items-center gap-3">
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600 font-bold text-xs">AI</div>
                        <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-indigo-600 font-bold text-xs">ML</div>
                        <div className="w-10 h-10 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-purple-600 font-bold text-xs">Sec</div>
                      </div>
                      <div className="text-xs font-bold text-[#0f172a] leading-tight">Advanced<br/>Architecture</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mission Section */}
      <div className="relative py-24 bg-[#0f172a] overflow-hidden border-y border-[#1e293b]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1d4ed8] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8b5cf6] rounded-full blur-[120px] opacity-20"></div>
        
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* Mission Image - Professional Network Abstract */}
             <div className="relative order-2 lg:order-1 animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20"></div>
              <div className="relative p-2 bg-[#1e293b]/50 backdrop-blur-sm border border-[#334155] rounded-[2.5rem]">
                <img 
                  src="/professional-network.png" 
                  alt="Secure Digital Network" 
                  className="relative z-10 w-full max-w-[600px] h-auto object-cover rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#60a5fa] font-bold tracking-widest uppercase text-sm mb-4 block">Our Architecture</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                A bridge between <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#c084fc]">Policy</span> and <span className="text-white">People.</span>
              </h2>
              <div className="space-y-6 text-[1rem] md:text-[1.1rem] text-[#94a3b8] leading-relaxed font-medium">
                <p>
                  OpportunityHub was born out of a simple observation: billions in welfare funds go unutilized every year simply because the people who need them most don't know they exist.
                </p>
                <p>
                  Our platform uses advanced data aggregation and AI matching to cut through the bureaucratic noise, delivering verified, actionable scheme information directly to your fingertips via a highly secure infrastructure.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="bg-[#1e293b]/50 border border-[#334155] rounded-2xl p-6 backdrop-blur-md shadow-lg hover:border-[#475569] transition-all group">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1 tracking-tighter group-hover:text-[#60a5fa] transition-colors">98%</div>
                      <div className="text-[0.7rem] font-bold text-[#64748b] uppercase tracking-widest">Accuracy Rate</div>
                  </div>
                  <div className="bg-[#1e293b]/50 border border-[#334155] rounded-2xl p-6 backdrop-blur-md shadow-lg hover:border-[#475569] transition-all group">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1 tracking-tighter group-hover:text-[#c084fc] transition-colors">1.2k+</div>
                      <div className="text-[0.7rem] font-bold text-[#64748b] uppercase tracking-widest">Live Schemes</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section (Light Glassmorphism) */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-32 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-5 tracking-tight">Enterprise <span className="text-[#1d4ed8]">Standards</span></h2>
            <p className="text-[#64748b] text-[1rem] max-w-2xl mx-auto font-medium">Built from the ground up to serve the citizens with integrity and technological excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Curated Verification", desc: "Every scheme is cross-referenced with official gazettes and departmental portals before listing.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { title: "Universal Access", desc: "Available in multiple languages and designed for low-bandwidth environments to reach rural citizens.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" },
                { title: "Privacy First", desc: "We utilize banking-grade encryption to ensure your personal documentation stays private and secure.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
            ].map((val, i) => (
                <div key={i} className="relative group hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 bg-[#3b82f6] rounded-[2rem] rotate-2 opacity-5 group-hover:rotate-3 transition-transform duration-300"></div>
                    <div className="relative bg-white/90 p-8 rounded-[2rem] shadow-xl shadow-[#bfdbfe]/30 border border-[#e2e8f0] backdrop-blur-md h-full flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#f0f7ff] border border-[#dbeafe] rounded-2xl flex items-center justify-center text-[#2563eb] shadow-sm mb-6 group-hover:scale-110 group-hover:rotate-[-5deg] transition-transform duration-300">
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={val.icon} /></svg>
                        </div>
                        <h3 className="text-xl font-extrabold text-[#0f172a] mb-3 tracking-tight">{val.title}</h3>
                        <p className="text-[#64748b] font-medium leading-relaxed text-[0.95rem]">{val.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Timeline or Values Section */}
      <div className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-[#e2e8f0]/30">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-5 tracking-tight">Built for <span className="text-[#1d4ed8] inline border-b-[3px] border-[#3b82f6] pb-1">Impact.</span></h2>
                <p className="text-[#64748b] text-[0.95rem] md:text-[1.05rem] max-w-2xl mx-auto font-medium">Our journey is defined by the lives we touch and the communities we empower through digital innovation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { year: "2024", event: "Platform Launch", detail: "Started with 100 central schemes and a team of 5 social workers." },
                    { year: "2025", event: "National Scaling", detail: "Expanded to 22 states and integrated AI eligibility engine." },
                    { year: "Future", event: "Unified Welfare", detail: "Aiming to build a single-window portal for every Indian citizen." }
                ].map((item, i) => (
                    <div key={i} className="relative p-8 bg-[#0f172a] rounded-[2rem] shadow-2xl hover:shadow-blue-500/20 transition-all hover:-translate-y-2 group overflow-hidden border border-[#1e293b]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6] opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="text-5xl font-black text-[#1e293b] absolute top-6 right-6 z-0 select-none group-hover:text-[#334155] transition-colors">{item.year}</div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-extrabold text-white mb-3 tracking-tight">{item.event}</h4>
                            <p className="text-[#94a3b8] font-medium text-[0.9rem] leading-relaxed">{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default About;
