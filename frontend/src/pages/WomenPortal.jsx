import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { womenPrograms } from "../data/womenData";

const Icons = {
  Stage: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  Sector: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  Location: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Funding: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  Registration: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  Exit: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
};

const WomenPortal = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);

  const [data, setData] = useState({
    type: "",
    age: "",
    education: "",
    location: "",
    need: "",
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
      { threshold: 0.6, rootMargin: "-100px 0px -100px 0px" }
    );

    Object.values(sectionRefs.current).forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    { id: 1, title: "Category" },
    { id: 2, title: "Age Bracket" },
    { id: 3, title: "Education" },
    { id: 4, title: "Location" },
    { id: 5, title: "Primary Need" },
  ];

  // 🔥 Submit → navigate
  const handleSubmit = () => {
    const filtered = womenPrograms.filter((p) => {
      if (p.type !== data.type) return false;
      if (p.need !== data.need && p.need !== "Financial Support") return false;
      return true;
    });

    navigate("/women-results", { state: { results: filtered } });
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
            <span className="font-extrabold mr-1.5">Women</span> <span className="font-light opacity-80">Portal</span>
          </h2>

          <div className="flex flex-col gap-2 relative z-10">
            {steps.map((s) => {
              const isActive = activeStep === s.id;
              const Icon = s.id === 1 ? Icons.Sector : s.id === 2 ? Icons.Stage : s.id === 3 ? Icons.Registration : s.id === 4 ? Icons.Location : Icons.Funding;
              
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

        {/* MAIN CONTENT */}
        <main className="flex-1 px-16 py-12 overflow-y-auto scroll-smooth">
          <div className="max-w-4xl mx-auto space-y-24 pb-32">

            {/* 1️⃣ CATEGORY */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1">
              <h1 className="text-3xl font-bold text-center text-slate-900 mb-2">
                What are you looking for?
              </h1>
              <p className="text-center text-slate-500 mb-10">
                Choose the category that matches your needs
              </p>

              <div className="relative max-w-xl mx-auto mt-6">
                <select 
                  value={data.type}
                  onChange={(e) => setData({ ...data, type: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select category</option>
                  {[
                    "Entrepreneurship",
                    "Education",
                    "Skill Development",
                    "Business Support",
                    "Maternity Support",
                    "Savings Scheme",
                  ].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </section>

            {/* 2️⃣ PROFILE */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2">
              <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">
                Tell us about yourself
              </h2>

              {/* AGE */}
              <div className="mb-10">
                <label className="font-semibold text-slate-700">
                  Age Group
                </label>

                <div className="relative mt-4">
                  <select 
                    value={data.age}
                    onChange={(e) => setData({ ...data, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select age group</option>
                    {["0-10 years", "11-17 years", "18-45 years", "45+ years"].map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </section>

            {/* 3️⃣ EDUCATION */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="pt-8 border-t border-slate-100">
              <div className="mb-10">
                <label className="font-semibold text-slate-700">
                  Education
                </label>

                <div className="relative mt-4">
                  <select 
                    value={data.education}
                    onChange={(e) => setData({ ...data, education: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select education level</option>
                    {[
                      "Below 10th",
                      "10th Pass",
                      "12th Pass",
                      "Graduate",
                      "Post Graduate",
                      "Professional Degree",
                    ].map(e => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </section>

            {/* 4️⃣ LOCATION */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="pt-8 border-t border-slate-100">
              <div>
                <label className="font-semibold text-slate-700">
                  Location
                </label>

                <div className="relative mt-4">
                  <select 
                    value={data.location}
                    onChange={(e) => setData({ ...data, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select location</option>
                    {[
                      "Delhi NCR",
                      "Mumbai",
                      "Bangalore",
                      "Hyderabad",
                      "Chennai",
                      "Kolkata",
                      "Rural Area",
                      "Other",
                    ].map(l => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </section>

            {/* 5️⃣ SUPPORT */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="pt-8 border-t border-slate-100">
              <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">
                What support do you need?
              </h2>

              <div className="relative max-w-xl mx-auto mt-6">
                <select 
                  value={data.need}
                  onChange={(e) => setData({ ...data, need: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select support type</option>
                  {[
                    "Financial Support",
                    "Training & Skills",
                    "Business Loan",
                    "Education Support",
                    "Health & Maternity",
                  ].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              {/* SUBMIT */}
              <div className="flex justify-end mt-16">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
                >
                  Find Programs →
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default WomenPortal;