import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { scholarships } from "../data/scholarshipData";

const Icons = {
  Stage: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  Sector: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  Location: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Funding: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  Registration: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  Exit: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
};

const ScholarshipPortal = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    scope: "",
    nationality: "India",
    region: "",
    level: "",
    field: ""
  });

  const steps = [
    { id: 1, title: "Scholarship Scope" },
    { id: 2, title: "Citizenship" },
    { id: 3, title: "Region & Territory" },
    { id: 4, title: "Academic Tier" },
    { id: 5, title: "Field of Study" },
  ];

  const sectionRefs = useRef({});

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

  const handleNextStep = (stepId) => {
    if (stepId < 5) {
      const nextEl = sectionRefs.current[stepId + 1];
      if (nextEl) {
        nextEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/"); // Can be a results page in the future
    }, 1500);
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
            <span className="font-extrabold mr-1.5">Scholarship</span> <span className="font-light opacity-80">Portal</span>
          </h2>

          <div className="flex flex-col gap-2 relative z-10">
            {steps.map((s) => {
              const isActive = activeStep === s.id;
              const Icon = s.id === 1 ? Icons.Sector : s.id === 2 ? Icons.Registration : s.id === 3 ? Icons.Location : s.id === 4 ? Icons.Stage : Icons.Funding;

              return (
                <div
                  key={s.id}
                  className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-[#2954b8]' : 'hover:bg-white/5'}`}
                  onClick={() => handleNextStep(s.id - 1)}
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

        {/* MAIN FORM */}
        <main className="flex-1 overflow-y-auto scroll-smooth">
          <div className="sticky top-0 bg-white/80 backdrop-blur-md z-20 border-b border-slate-100 p-6 shadow-sm">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
                Find the Right Scholarship
              </h1>
              <div className="text-sm font-medium text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full">
                Step {activeStep} of 5
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-8 py-12 space-y-32 pb-40">

            {/* STEP 1: Scope */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1" className="scroll-mt-32">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-3">Scholarship Scope</h2>
                <p className="text-slate-500 text-lg">Are you looking for National or International scholarships?</p>
              </div>
              <div className="relative">
                <select
                  value={data.scope}
                  onChange={(e) => setData({ ...data, scope: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select scope</option>
                  {["International", "National"].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </section>

            {/* STEP 2: Citizenship */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2" className="scroll-mt-32">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-3">Citizenship</h2>
                <p className="text-slate-500 text-lg">What is your current nationality?</p>
              </div>
              <div className="relative">
                <select
                  value={data.nationality}
                  onChange={(e) => setData({ ...data, nationality: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select country</option>
                  {["India", "USA", "UK", "Canada", "Australia", "Other"].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </section>

            {/* STEP 3: Region & Territory */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="scroll-mt-32">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-3">Region & Territory</h2>
                <p className="text-slate-500 text-lg">Select your preferred region.</p>
              </div>
              <div className="relative">
                <select
                  value={data.region}
                  onChange={(e) => setData({ ...data, region: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select region</option>
                  {["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Punjab", "West Bengal", "All India"].map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </section>

            {/* STEP 4: Academic Tier */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="scroll-mt-32">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-3">Academic Tier</h2>
                <p className="text-slate-500 text-lg">Select your current or target level of study.</p>
              </div>
              <div className="relative">
                <select
                  value={data.level}
                  onChange={(e) => setData({ ...data, level: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select academic level</option>
                  {["Undergraduate", "Master's", "PhD", "Diploma"].map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </section>

            {/* STEP 5: Field of Study */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="scroll-mt-32">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-3">Field of Study</h2>
                <p className="text-slate-500 text-lg">What is your primary area of academic specialization?</p>
              </div>
              <div className="relative">
                <select
                  value={data.field}
                  onChange={(e) => setData({ ...data, field: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select field</option>
                  {["Engineering", "Medicine", "Business", "Computer Science", "Arts", "Law", "Social Sciences", "Pure Sciences"].map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              <div className="mt-16 flex flex-col items-center">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:shadow-lg hover:-translate-y-1 w-full md:w-auto min-w-[240px] disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Finding Scholarships...
                    </div>
                  ) : (
                    "Find Scholarships →"
                  )}
                </button>
                <p className="mt-4 text-sm text-slate-500">Your details are saved automatically.</p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default ScholarshipPortal;
