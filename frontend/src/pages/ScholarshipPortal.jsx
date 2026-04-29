import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { scholarships } from "../data/scholarshipData";

const Icons = {
  Scope: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
  Citizenship: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  Region: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
  Tier: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-5" /></svg>,
  Field: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /><path d="m4.93 4.93 14.14 14.14M4.93 19.07 19.07 4.93" /></svg>,
  Exit: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
};

const ScholarshipPortal = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(1);
  const sectionRefs = useRef({});
  const [selectedType, setSelectedType] = useState("");
  const [profile, setProfile] = useState({
    nationality: "India",
    region: "",
    level: "",
    field: "",
  });

  useEffect(() => {
    localStorage.setItem("scholarshipSearchState", JSON.stringify(data));
  }, [data]);

  const steps = [
    { id: 1, title: "Scope" },
    { id: 2, title: "Citizenship" },
    { id: 3, title: "Region" },
    { id: 4, title: "Tier" },
    { id: 5, title: "Field" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number(entry.target.dataset.step));
          }
        });
      },
      { threshold: 0.5, rootMargin: "-50px 0px -50px 0px" }
    );

    Object.values(sectionRefs.current).forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    const filtered = scholarships.filter((s) => {
      if (selectedType && s.type !== selectedType) return false;
      if (profile.level && s.level !== profile.level) return false;
      if (profile.field && s.field !== profile.field && s.field !== "General") return false;
      return true;
    });
    console.log(filtered);
    navigate("/scholarships-results", { state: { results: filtered } });
  };

  return (
    <div className="h-screen bg-gradient-to-b from-white to-blue-100 flex justify-center p-6 font-sans overflow-hidden">
      <div className="w-full max-w-7xl h-full flex overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">

        {/* SIDEBAR */}
        <aside className="w-[340px] bg-[#153e9c] p-10 hidden md:flex flex-col relative overflow-hidden shrink-0 rounded-l-2xl">
          {/* Overlay gradient graphic to mimic the architecture building */}
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
            {steps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-[#2954b8]' : 'hover:bg-white/5'}`}
                  onClick={() => {
                    const el = sectionRefs.current[step.id];
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <div className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white text-[#153e9c] shadow-md' : 'bg-white/10 text-white/70'}`}>
                    {step.icon(isActive ? '#153e9c' : 'currentColor')}
                  </div>
                  <span className={`flex-1 text-[16px] transition-all duration-300 ${isActive ? 'text-white font-semibold' : 'text-white/70 font-medium'}`}>
                    {step.title}
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

        {/* MAIN FORM AREA */}
        <main className="flex-1 px-16 py-12 overflow-y-auto scroll-smooth custom-scrollbar bg-[#fafafa]">
          <div className="max-w-4xl mx-auto space-y-12 pb-24">

            {/* Step 1 */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1">
              <header className="mb-6">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-1">
                  Scholarship <span className="text-[#1d4ed8] ml-2">Scope</span>
                </h1>
                <p className="text-slate-400 font-medium text-xs">Please provide accurate information for better matching.</p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { id: "International", label: "International", desc: "Study abroad in global universities." },
                  { id: "National", label: "National", desc: "Pursue education in local institutions." }
                ].map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-6 rounded-[1.5rem] cursor-pointer transition-all border-2 flex flex-col gap-3 relative overflow-hidden group
                       ${selectedType === type.id
                        ? "bg-white border-[#1d4ed8] shadow-md"
                        : "bg-white border-slate-100 hover:border-slate-200"
                      }`}
                  >
                    <div>
                      <h3 className={`text-base font-bold mb-0.5 ${selectedType === type.id ? "text-[#1d4ed8]" : "text-slate-800"}`}>{type.label}</h3>
                      <p className="text-[0.7rem] text-slate-400 font-medium leading-tight">{type.desc}</p>
                    </div>
                    {selectedType === type.id && (
                      <div className="absolute top-4 right-4 w-5 h-5 bg-[#1d4ed8] rounded-full flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Step 2 */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2" className="pt-6 border-t border-slate-100">
              <header className="mb-6">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-1">
                  Citizenship <span className="text-[#1d4ed8] ml-2">Details</span>
                </h1>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-3">Current Country</label>
                  <select
                    className="w-full bg-white border-2 border-slate-100 rounded-xl px-5 py-4 text-slate-700 font-bold outline-none focus:border-[#1d4ed8] transition-all appearance-none cursor-pointer text-sm"
                    value={profile.nationality}
                    onChange={(e) => setProfile({ ...profile, nationality: e.target.value })}
                  >
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-3">Passport Status</label>
                  <div className="bg-white border-2 border-slate-100 rounded-xl px-5 py-4 text-slate-400 font-bold flex justify-between items-center text-sm">
                    <span>Verified</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="pt-6 border-t border-slate-100">
              <header className="mb-6">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-1">
                  Region <span className="text-[#1d4ed8] ml-2">& Territory</span>
                </h1>
              </header>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Punjab", "West Bengal", "All India"].map((r) => (
                  <button
                    key={r}
                    onClick={() => setProfile({ ...profile, region: r })}
                    className={`p-4 rounded-xl text-xs font-bold transition-all border-2
                      ${profile.region === r
                        ? "bg-[#1d4ed8] text-white border-transparent shadow-md scale-[1.02]"
                        : "bg-white border-slate-100 text-slate-500 hover:border-slate-200"
                      }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </section>

            {/* Step 4 */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="pt-6 border-t border-slate-100">
              <header className="mb-6">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-1">
                  Academic <span className="text-[#1d4ed8] ml-2">Tier</span>
                </h1>
              </header>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { id: "Undergraduate", label: "Bachelor's Level" },
                  { id: "Master's", label: "Post-Graduate" },
                  { id: "PhD", label: "Doctorate / Research" },
                  { id: "Diploma", label: "Professional Training" }
                ].map((l) => (
                  <div
                    key={l.id}
                    onClick={() => setProfile({ ...profile, level: l.id })}
                    className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border-2
                      ${profile.level === l.id
                        ? "bg-white border-[#1d4ed8] shadow-sm scale-[1.01]"
                        : "bg-white border-slate-100 hover:border-slate-200"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${profile.level === l.id ? "border-[#1d4ed8] bg-[#1d4ed8]" : "border-slate-200"}`}>
                        {profile.level === l.id && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                      </div>
                      <div>
                        <p className={`font-bold text-sm ${profile.level === l.id ? "text-[#1d4ed8]" : "text-slate-700"}`}>{l.id}</p>
                        <p className="text-[0.65rem] text-slate-400 font-medium">{l.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Step 5 */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="pt-6 border-t border-slate-100">
              <header className="mb-6">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-1">
                  Field <span className="text-[#1d4ed8] ml-2">of Study</span>
                </h1>
              </header>
              <div className="flex flex-wrap gap-3">
                {[
                  "Engineering", "Medicine", "Business",
                  "Computer Science", "Arts", "Law", "Social Sciences", "Pure Sciences"
                ].map((f) => (
                  <button
                    key={f}
                    onClick={() => setProfile({ ...profile, field: f })}
                    className={`px-8 py-4 rounded-full text-sm font-bold transition-all border-2
                      ${profile.field === f
                        ? "bg-[#1d4ed8] text-white border-transparent shadow-lg"
                        : "bg-white border-slate-100 text-slate-500 hover:border-slate-200"
                      }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <button
                  onClick={handleSubmit}
                  className="bg-[#1d4ed8] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-[#1e40af] hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center gap-2"
                >
                  Final Search
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>

      {/* INLINE CSS FOR CUSTOM SCROLLBAR & ANIMATIONS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}} />
    </div>
  );
};

export default ScholarshipPortal;
