import React, { useState, useRef, useEffect } from "react";
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

  const [data, setData] = useState({
    scope: "",
    nationality: "India",
    region: "",
    level: "",
    field: "",
  });

  const [activeStep, setActiveStep] = useState(1);
  const sectionRefs = useRef({});

  const steps = [
    { id: 1, title: "Scholarship Scope" },
    { id: 2, title: "Citizenship" },
    { id: 3, title: "Region & Territory" },
    { id: 4, title: "Academic Tier" },
    { id: 5, title: "Field of Study" }
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      const mainContent = e.target;
      const scrollPosition = mainContent.scrollTop + mainContent.clientHeight / 3;

      let currentStep = 1;
      for (let i = 1; i <= 5; i++) {
        const el = sectionRefs.current[i];
        if (el && el.offsetTop <= scrollPosition) {
          currentStep = i;
        }
      }
      setActiveStep(currentStep);
    };

    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
      return () => mainElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = scholarships.filter((s) => {
      if (data.scope && s.type !== data.scope) return false;
      if (data.level && s.level !== data.level) return false;
      if (data.field && s.field !== data.field && s.field !== "General") return false;
      return true;
    });
    console.log(filtered);

    // navigate("/scholarship-results", {
    //   state: { results: filtered },
    // });
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
              const Icon = s.id === 1 ? Icons.Sector : s.id === 2 ? Icons.Stage : s.id === 3 ? Icons.Location : s.id === 4 ? Icons.Funding : Icons.Registration;

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

        {/* MAIN */}
        <main className="flex-1 px-16 py-12 overflow-y-auto scroll-smooth">
          <div className="max-w-4xl mx-auto space-y-12 pb-24">

            {/* 1️⃣ SCHOLARSHIP SCOPE */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1">
              <h1 className="text-3xl font-semibold text-center mb-2">
                Scholarship Scope
              </h1>
              <p className="text-center text-gray-500 mb-8">
                Where are you looking to study?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  { id: "International", label: "International", desc: "Study abroad in global universities." },
                  { id: "National", label: "National", desc: "Pursue education in local institutions." }
                ].map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setData({ ...data, scope: type.id })}
                    className={`p-6 rounded-2xl cursor-pointer transition-all border-2 flex flex-col gap-3 relative overflow-hidden group
                         ${data.scope === type.id
                        ? "bg-blue-50 border-blue-500 shadow-md"
                        : "bg-white border-slate-200 hover:border-blue-200"
                      }`}
                  >
                    <div>
                      <h3 className={`text-lg font-semibold mb-1 ${data.scope === type.id ? "text-blue-700" : "text-slate-800"}`}>{type.label}</h3>
                      <p className="text-sm text-slate-500">{type.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 2️⃣ CITIZENSHIP */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2" className="pt-6 border-t border-slate-100">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Citizenship Details
              </h2>

              <div className="max-w-xl mx-auto">
                <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm">
                  <label className="font-semibold mb-1 block text-slate-800">Current Country</label>
                  <p className="text-sm text-slate-500 mb-4">Please select your primary country of citizenship to determine eligibility.</p>
                  <div className="relative">
                    <select
                      value={data.nationality}
                      onChange={(e) => setData({ ...data, nationality: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                    >
                      <option>India</option>
                      <option>USA</option>
                      <option>UK</option>
                      <option>Canada</option>
                      <option>Australia</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3️⃣ REGION */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="pt-6 border-t border-slate-100">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Region & Territory
                </h2>
                
                <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm">
                  <label className="font-semibold mb-1 block text-slate-800">State / Province</label>
                  <p className="text-sm text-slate-500 mb-4">Many scholarships are strictly allocated based on your home state.</p>
                  <div className="relative">
                  <select
                    value={data.region}
                    onChange={(e) => setData({ ...data, region: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your state / region</option>
                    {["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Punjab", "West Bengal", "All India"].map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
              </div>
            </section>

            {/* 4️⃣ ACADEMIC TIER */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="pt-6 border-t border-slate-100">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Academic Tier
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  { id: "Undergraduate", label: "Bachelor's Level" },
                  { id: "Master's", label: "Post-Graduate" },
                  { id: "PhD", label: "Doctorate / Research" },
                  { id: "Diploma", label: "Professional Training" }
                ].map((l) => (
                  <div
                    key={l.id}
                    onClick={() => setData({ ...data, level: l.id })}
                    className={`flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all border-2
                        ${data.level === l.id
                        ? "bg-blue-50 border-blue-500 shadow-sm"
                        : "bg-white border-slate-200 hover:border-blue-200"
                      }`}
                  >
                    <div>
                      <p className={`font-semibold text-base ${data.level === l.id ? "text-blue-700" : "text-slate-800"}`}>{l.id}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{l.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5️⃣ FIELD OF STUDY */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="pt-6 border-t border-slate-100">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Field of Study
              </h2>

              <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm">
                <label className="font-semibold mb-1 block text-slate-800">Academic Discipline</label>
                <p className="text-sm text-slate-500 mb-4">Choose the general field that closely matches your degree.</p>
                <div className="relative">
                <select
                  value={data.field}
                  onChange={(e) => setData({ ...data, field: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-[15px] font-medium text-slate-700 bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select your field</option>
                  {[
                    "Engineering", "Medicine", "Business",
                    "Computer Science", "Arts", "Law", "Social Sciences", "Pure Sciences"
                  ].map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
                </div>
              </div>
            </section>

            {/* 6️⃣ SUBMIT */}
            <section className="pt-8 border-t border-slate-100 pb-10">
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="px-12 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-200"
                >
                  Find Scholarships
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default ScholarshipPortal;
