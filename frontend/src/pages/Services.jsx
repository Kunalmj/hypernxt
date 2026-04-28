import React, { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("Empowerment & Growth");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[550px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.8)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center z-10 px-4 mt-16">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase mb-4 text-blue-300">Empowering Citizens</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tight">OPPORTUNITY HUB</h1>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0a192f] transition-all duration-300 px-10 py-3.5 rounded-full text-sm font-bold tracking-[0.2em] uppercase">
            Discover
          </button>
        </div>
      </section>

      {/* 2. Floating Service Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl flex flex-wrap md:flex-nowrap overflow-hidden border border-gray-100">
          {['Scheme Discovery', 'Document Locker', 'App Tracking', 'Scholarships', 'Career Growth'].map((service, idx) => (
            <div 
              key={service} 
              className={`flex-1 text-center py-8 px-4 border-r border-gray-100 last:border-0 cursor-pointer transition-colors duration-300 ${
                idx === 3 ? 'bg-blue-600 text-white' : 'hover:bg-blue-50 text-slate-600'
              }`}
            >
              <div className="flex justify-center mb-4">
                {idx === 0 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                {idx === 1 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                {idx === 2 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
                {idx === 3 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6M12 14l-6.16-3.422A12.083 12.083 0 0012 20.055a11.952 11.952 0 00-6.824-2.998" /></svg>}
                {idx === 4 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              </div>
              <h3 className={`text-[0.8rem] font-bold uppercase tracking-[0.15em] ${idx === 3 ? 'text-white' : 'text-slate-800'}`}>{service}</h3>
              <p className={`text-[0.65rem] mt-2 uppercase tracking-widest ${idx === 3 ? 'text-blue-200' : 'text-slate-400'}`}>
                {idx === 0 && 'Find Schemes'}
                {idx === 1 && 'Secure Storage'}
                {idx === 2 && 'Real-time Updates'}
                {idx === 3 && 'Financial Aid'}
                {idx === 4 && 'Skill Building'}
              </p>
              {idx === 3 && (
                <div className="mt-4 w-8 h-8 mx-auto rounded-full bg-white flex items-center justify-center text-blue-600 shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Why Choose Us */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-center text-[#0a192f] mb-12">Why Opportunity Hub?</h2>
        
        <div className="flex flex-wrap justify-center mb-16 border-b border-gray-200 relative">
          {['Inclusive Access', 'Empowerment & Growth', 'Verified Assistance'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 md:px-12 py-4 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 relative ${
                activeTab === tab ? 'text-blue-700' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-blue-700 flex justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-700 absolute -top-1 ring-4 ring-white"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Community Empowerment" 
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[350px]"
            />
            <div className="absolute -left-8 -bottom-8 z-20 w-48 h-48 rounded-xl overflow-hidden border-4 border-white shadow-xl hidden md:block">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" alt="Learning" className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="md:pl-8">
            <p className="text-slate-600 leading-loose mb-6 text-sm md:text-base">
              <strong className="text-slate-800">Opportunity Hub</strong> is positioned as a leading platform dedicated to bridging the gap between government welfare programs, educational institutions, and the citizens who need them most. We believe in building a future where opportunities are accessible to everyone.
            </p>
            <p className="text-slate-600 leading-loose text-sm md:text-base">
              Based in Bhubaneswar, Odisha, our reach extends across districts and states, working hand-in-hand with civic organizations and government departments to streamline the application process and ensure zero drop-offs in financial aid.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Platform With a Difference */}
      <section className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-black text-[#0a192f] mb-8 leading-[1.2]">
                Platform<br/>With a Difference.<br/><span className="text-blue-600">Impact.</span>
              </h2>
              <p className="text-slate-600 mb-10 leading-loose text-sm">
                Opportunity Hub stands out as an ecosystem designed for actual civic empowerment. By bringing together intelligent scheme matching, document management, and real-time support, we make finding and claiming your rightful benefits completely seamless.
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#0a192f] flex items-center justify-center text-white font-black text-xl shadow-lg">
                  SK
                </div>
                <div>
                  <h4 className="font-bold text-[#0a192f] uppercase text-sm tracking-widest mb-1">Sanjiv Kumar</h4>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-widest">Director of Civic Engagement</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                <div className="overflow-hidden h-[240px]">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Our Mission" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-[#0a192f] uppercase tracking-widest mb-4">Our Mission</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    To democratize access to welfare schemes and educational scholarships by simplifying complex application procedures through technology.
                  </p>
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:bg-[#0a192f] transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                <div className="overflow-hidden h-[240px]">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Ecosystem Redefined" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-[#0a192f] uppercase tracking-widest mb-4">Ecosystem Redefined</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    We eliminate the bureaucratic friction, offering a unified, transparent portal that tracks your progress every step of the way.
                  </p>
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:bg-[#0a192f] transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Unmatched Services (Dark Section from Mockup) */}
      <section className="bg-[#0b162c] py-32 text-white relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 w-1/2 h-[80%] opacity-5 pointer-events-none">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-current"><path d="M50 0L100 25V75L50 100L0 75V25L50 0Z" /></svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Left Column */}
            <div className="flex flex-col justify-between h-full">
              <div className="mb-16 lg:mb-0">
                <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-[1.1] mb-10 tracking-tight">
                  Unmatched<br/>Opportunities.<br/>Unmatched<br/>Excellence.
                </h2>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white transition-colors hover:text-[#0b162c] cursor-pointer">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>

              {/* Scheme Discovery Card in Left Column */}
              <div className="border border-[#233a66] p-10 hover:bg-[#112444] transition-all duration-300 group cursor-pointer mt-12 lg:mt-auto relative min-h-[280px] flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-8 opacity-70 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold tracking-widest uppercase mb-4 text-white">Scheme Discovery</h3>
                <p className="text-blue-100/50 text-sm leading-relaxed font-light">
                  Our intelligent matching engine helps you find government schemes tailored to your age, occupation, and financial profile instantly.
                </p>
              </div>
            </div>

            {/* Right Columns (2x2 Grid) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Document Locker", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", desc: "Securely store and manage your official documents required for various scheme applications in one encrypted, easily accessible location." },
                { title: "Application Tracking", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", desc: "Real-time updates on your application status across multiple government departments and welfare boards, ensuring complete transparency." },
                { title: "Student Scholarships", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0v6M12 14l-6.16-3.422A12.083 12.083 0 0012 20.055a11.952 11.952 0 00-6.824-2.998", desc: "Access specialized academic scholarships, grants, and financial aid opportunities tailored exclusively for school and university students." },
                { title: "Career Development", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", desc: "Find government-sponsored training programs, internships, and skill-building workshops to boost your career prospects and employability." },
              ].map((service) => (
                <div key={service.title} className="border border-[#233a66] p-10 hover:bg-[#112444] transition-all duration-300 group cursor-pointer relative min-h-[280px] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="mb-8 opacity-70 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={service.icon} /></svg>
                  </div>
                  <h3 className="text-lg font-bold tracking-widest uppercase mb-4 text-white">{service.title}</h3>
                  <p className="text-blue-100/50 text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. Stats & Map */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-y-16 gap-x-8">
            <div>
              <div className="text-4xl md:text-[3.5rem] font-light text-[#0a192f] mb-4 flex flex-col gap-2">
                1200+ <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">Schemes<br/>Indexed</span>
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-[3.5rem] font-light text-[#0a192f] mb-4 flex flex-col gap-2">
                45K+ <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">Benefited<br/>Citizens</span>
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-[3.5rem] font-light text-[#0a192f] mb-4 flex flex-col gap-2">
                30 <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">Districts<br/>Covered</span>
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-[3.5rem] font-light text-[#0a192f] mb-4 flex flex-col gap-2">
                99% <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">Success<br/>Rate</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Local Reach in Odisha" className="w-full opacity-60 rounded-xl mix-blend-luminosity" />
             {/* Map marker dot pointing generally to the east side of a map */}
             <div className="absolute top-[45%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10 border-2 border-white shadow-lg"></div>
                <div className="mt-3 bg-white text-[0.65rem] font-bold px-3 py-1.5 rounded shadow-lg text-blue-900 uppercase tracking-widest whitespace-nowrap">Bhubaneswar, Odisha</div>
                <div className="bg-slate-800 text-[0.55rem] text-white px-2 py-0.5 rounded-b opacity-80 uppercase tracking-wider">India</div>
             </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Services;
