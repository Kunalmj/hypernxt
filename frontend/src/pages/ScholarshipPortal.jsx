
import React, { useState } from "react";
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
  const [selectedType, setSelectedType] = useState("");
  const [profile, setProfile] = useState({
    nationality: "India",
    region: "",
    level: "",
    field: "",
  });

  const steps = [
    {
      id: 1, title: "Scholarship Scope", icon: (color) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
      )
    },
    {
      id: 2, title: "Citizenship", icon: (color) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      )
    },
    {
      id: 3, title: "Region & Territory", icon: (color) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
      )
    },
    {
      id: 4, title: "Academic Tier", icon: (color) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-5" /></svg>
      )
    },
    {
      id: 5, title: "Field of Study", icon: (color) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /><path d="m4.93 4.93 14.14 14.14M4.93 19.07 19.07 4.93" /></svg>
      )
    },
  ];

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSubmit = () => {
    const filtered = scholarships.filter((s) => {
      if (selectedType && s.type !== selectedType) return false;
      if (profile.level && s.level !== profile.level) return false;
      if (profile.field && s.field !== profile.field && s.field !== "General") return false;
      return true;
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 font-['Inter']"
      style={{ background: "linear-gradient(160deg, #f0f7ff 0%, #f5f8ff 40%, #fdf4fb 75%, #fff8f5 100%)" }}
    >
      <div className="w-full max-w-[950px] h-[620px] bg-white rounded-[2rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.1)] flex overflow-hidden border border-white">

        {/* SIDEBAR - MATCHING REFERENCE IMAGE SHAPE */}
        <aside className="hidden md:flex w-[260px] bg-blue-800 flex-col py-8 rounded-r-[3rem] relative overflow-hidden">

          <div className="px-8 mb-10 relative z-10">
            <h2 className="text-white text-xl font-black tracking-tighter flex items-center gap-2">
              Scholarship<span className="opacity-70">Portal</span>
            </h2>
          </div>

          <nav className="flex-1 px-3 space-y-1 relative z-10">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 group
                  ${activeStep === step.id
                    ? "bg-white/15 text-white shadow-lg"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
              >
                <div className={`p-2 rounded-lg transition-all ${activeStep === step.id ? "bg-white text-[#1d4ed8]" : "bg-white/10 text-white/70"}`}>
                  {step.icon(activeStep === step.id ? "#1d4ed8" : "currentColor")}
                </div>
                <span className="text-xs font-bold tracking-tight">{step.title}</span>
                {activeStep === step.id && (
                  <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="px-8 mt-auto mb-8 relative z-10">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3 text-white hover:cursor-pointer text-xs font-bold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
              Exit Portal
            </button>
          </div>

          {/* Building Image at Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[280px] pointer-events-none">
            <div className="absolute inset-0 bg-blue-800"></div>
            <img
              src="/building-scholar.png"
              alt="Building"
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
          </div>
        </aside>

        {/* MAIN FORM AREA */}
        <main className="flex-1 flex flex-col p-6 md:p-10 relative overflow-hidden bg-[#fafafa]">

          <header className="mb-8">
            <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-1">
              {steps.find(s => s.id === activeStep)?.title.split(" ")[0]}
              <span className="text-[#1d4ed8] ml-2">{steps.find(s => s.id === activeStep)?.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-slate-400 font-medium text-xs">Please provide accurate information for better matching.</p>
          </header>

          <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
            {activeStep === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { id: "International", label: "International", desc: "Study abroad in global universities.", icon: "🌐" },
                    { id: "National", label: "National", desc: "Pursue education in local institutions.", icon: "🏛️" }
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
                      <div className={`text-3xl transition-transform duration-500 ${selectedType === type.id ? "scale-110" : "grayscale"}`}>{type.icon}</div>
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
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
              </div>
            )}

            {activeStep === 4 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: "Undergraduate", label: "Bachelor's Level", icon: "🎓" },
                    { id: "Master's", label: "Post-Graduate", icon: "📜" },
                    { id: "PhD", label: "Doctorate / Research", icon: "🔬" },
                    { id: "Diploma", label: "Professional Training", icon: "📝" }
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
                      <span className="text-xl">{l.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeStep === 5 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
              </div>
            )}
          </div>

          {/* NAVIGATION FOOTER */}
          <footer className="mt-auto pt-6 flex justify-between items-center border-t border-slate-100">
            <button
              onClick={handleBack}
              disabled={activeStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs transition-all
                 ${activeStep === 1
                  ? "opacity-0 pointer-events-none"
                  : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
              Previous
            </button>

            {activeStep < steps.length ? (
              <button
                onClick={handleNext}
                className="bg-[#1d4ed8] text-white px-8 py-3 rounded-xl font-bold text-xs shadow-md hover:bg-[#1e40af] hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center gap-2"
              >
                Next Section
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-[#1d4ed8] text-white px-10 py-3 rounded-xl font-bold text-xs shadow-md hover:bg-[#1e40af] hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center gap-2"
              >
                Final Search
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              </button>
            )}
          </footer>
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

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-bottom {
          from { transform: translateY(20px); }
          to { transform: translateY(0); }
        }
        .animate-in {
          animation-duration: 0.5s;
          animation-fill-mode: both;
        }
        .fade-in {
          animation-name: fade-in;
        }
        .slide-in-from-bottom-4 {
          animation-name: slide-in-from-bottom;
        }
      `}} />
    </div>
  );

};

export default ScholarshipPortal;


