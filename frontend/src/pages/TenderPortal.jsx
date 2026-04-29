import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tenders } from "../data/tenderData";

const Icons = {
  Stage: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  Sector: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  Location: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Funding: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  Registration: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  Exit: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
};

const TenderPortal = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);

  const [data, setData] = useState({
    type: "",
    industry: "",
    budget: "",
    location: "",
    orgType: "",
  });

  const sectionRefs = useRef({});

  // 🔥 Scroll-based step highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number(entry.target.dataset.step));
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs.current).forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    { id: 1, title: "Type" },
    { id: 2, title: "Industry" },
    { id: 3, title: "Budget" },
    { id: 4, title: "Location" },
    { id: 5, title: "Organization" },
  ];

  // 🔥 Submit
  const handleSubmit = () => {
    const filtered = tenders.filter((t) => {
      if (data.type && t.type !== data.type) return false;
      if (data.industry && t.industry !== "General" && t.industry !== data.industry) return false;
      return true;
    });

    navigate("/tender-results", { state: { results: filtered } });
  };

  return (
    <div className="h-screen bg-gradient-to-b from-white to-blue-100 flex justify-center p-6 font-sans overflow-hidden">
      <div className="w-full max-w-7xl h-full flex overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">

        {/* SIDEBAR */}
        <aside className="w-[340px] bg-[#153e9c] p-10 hidden md:flex flex-col relative overflow-hidden shrink-0 rounded-l-2xl">
          <div 
            className="absolute bottom-0 left-0 right-0 h-[400px] opacity-20 pointer-events-none"
            style={{ 
              background: "radial-gradient(circle at bottom, rgba(255,255,255,0.8) 0%, transparent 70%)",
              clipPath: "polygon(50% 10%, 100% 100%, 0% 100%)" 
            }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0b2259]/80 to-transparent pointer-events-none"></div>

          <h2 className="text-3xl mb-12 text-white flex items-center relative z-10 tracking-tight">
            <span className="font-extrabold mr-1.5">Tender</span> <span className="font-light opacity-80">Portal</span>
          </h2>

          <div className="flex flex-col gap-2 relative z-10">
            {steps.map((s) => {
              const isActive = activeStep === s.id;
              const Icon = s.id === 1 ? Icons.Sector : s.id === 2 ? Icons.Stage : s.id === 3 ? Icons.Funding : s.id === 4 ? Icons.Location : Icons.Registration;
              
              return (
                <div 
                  key={s.id} 
                  className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-[#2954b8]' : 'hover:bg-white/5'}`} 
                  onClick={() => {
                    const el = sectionRefs.current[s.id];
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <div className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white text-[#153e9c] shadow-md' : 'bg-white/10 text-white/70'}`}>
                    <Icon />
                  </div>
                  <span className={`flex-1 text-[16px] transition-all duration-300 ${isActive ? 'text-white font-semibold' : 'text-white/70 font-medium'}`}>
                    {s.title}
                  </span>
                  {isActive && <div className="w-2 h-2 bg-white rounded-full mr-1"></div>}
                </div>
              );
            })}
          </div>

          <div className="mt-auto relative z-10 pt-10 pb-4">
            <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-semibold text-[15px]" onClick={() => navigate('/')}>
              <Icons.Exit />
              Exit Portal
            </button>
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="flex-1 px-16 py-12 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-24 pb-32">

            {/* ================= SECTION 1 ================= */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1">
              <h1 className="text-3xl font-bold text-center mb-12">
                Tell us about your business capabilities
              </h1>

              <div className="relative max-w-xl mx-auto mt-6">
                <select 
                  value={data.type}
                  onChange={(e) => setData({ ...data, type: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select capability type</option>
                  {["Supply", "Works", "Services"].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </section>

            {/* ================= SECTION 2 ================= */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2">
              <h2 className="text-2xl font-bold text-center mb-12">
                Industry & Sector
              </h2>

              <div className="relative mt-4">
                  <select 
                    value={data.industry}
                    onChange={(e) => setData({ ...data, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select industry/sector</option>
                    {[
                      "Information Technology",
                      "Construction",
                      "Healthcare",
                      "Consulting",
                      "Manufacturing",
                      "Software Development",
                      "Maintenance",
                      "Education",
                    ].map(i => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
            </section>

            {/* ================= SECTION 3 ================= */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="pt-8 border-t border-slate-100">
              <h2 className="text-3xl font-bold text-center mb-14">
                Budget & Preferences
              </h2>

              <div className="space-y-16">

                {/* 🔹 Budget */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-gray-700">
                    Budget Range
                  </h3>

                  <div className="relative mt-4">
                    <select 
                      value={data.budget}
                      onChange={(e) => setData({ ...data, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select budget range</option>
                      {[
                        "Under ₹50 Lakhs",
                        "₹50L - ₹2 Crores",
                        "₹2-10 Crores",
                        "Above ₹10 Crores",
                      ].map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ================= SECTION 4 ================= */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="pt-8 border-t border-slate-100">
              <div className="space-y-16">
                {/* 🔹 Location */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-gray-700">
                    Preferred Location
                  </h3>

                  <div className="relative mt-4">
                    <select 
                      value={data.location}
                      onChange={(e) => setData({ ...data, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select location</option>
                      {[
                        "Delhi NCR",
                        "Maharashtra",
                        "Karnataka",
                        "Tamil Nadu",
                        "Gujarat",
                        "West Bengal",
                        "Pan India",
                        "Multiple Locations",
                      ].map(l => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ================= SECTION 5 ================= */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="pt-8 border-t border-slate-100">
              <div className="space-y-16">
                {/* 🔹 Organization */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-gray-700">
                    Organization Type
                  </h3>

                  <div className="relative mt-4 max-w-xl">
                    <select 
                      value={data.orgType}
                      onChange={(e) => setData({ ...data, orgType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select organization type</option>
                      {[
                        "Central Government",
                        "State Government",
                        "PSU",
                        "Autonomous Bodies",
                        "Municipal Corporation",
                        "All",
                      ].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

              </div>

              {/* 🔻 Submit */}
              <div className="flex justify-end mt-16">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Find Tenders →
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default TenderPortal;