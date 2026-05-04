import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { scholarships } from "../data/scholarshipData";
import { indianStates } from "../utils/states";

const Icons = {
  Citizenship: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  Region: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
  Tier: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-5" /></svg>,
  Field: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /><path d="m4.93 4.93 14.14 14.14M4.93 19.07 19.07 4.93" /></svg>,
  Exit: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>,
  Globe: () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  Flag: () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>,
};

/* ── Scope Selector Landing Screen ────────────────────────────── */
const ScopeSelectorScreen = ({ onSelect }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1f5c] via-[#153e9c] to-[#1e3a8a] flex flex-col font-sans">
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 pt-8 pb-4">
        <div className="text-white">
          <span className="text-2xl font-extrabold tracking-tight">Scholarship</span>
          <span className="text-2xl font-light opacity-70 ml-1">Portal</span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-semibold"
        >
          <Icons.Exit />
          Exit
        </button>
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-blue-200 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></span>
            Step 1 of 5 — Scholarship Scope
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Where do you want to study?
          </h1>
          <p className="text-blue-200 text-lg max-w-md mx-auto opacity-90">
            Tell us your scholarship scope and we'll find the best opportunities tailored for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          {[
            {
              id: "International",
              Icon: Icons.Globe,
              title: "International",
              subtitle: "Study Abroad",
              desc: "Pursue scholarships at universities worldwide — USA, UK, Canada, Europe, Australia and more.",
              gradient: "from-blue-400/20 to-indigo-500/20",
              border: "border-blue-400/30 hover:border-blue-300",
              badge: " Global",
              highlights: ["Fully-funded options", "Prestigious institutions", "150+ countries"]
            },
            {
              id: "National",
              Icon: Icons.Flag,
              title: "National",
              subtitle: "Study in India",
              desc: "Explore government and private scholarships for studies within India at top universities.",
              gradient: "from-orange-400/20 to-amber-400/20",
              border: "border-orange-400/30 hover:border-orange-300",
              badge: " India",
              highlights: ["Central & state schemes", "Merit & need based", "All levels covered"]
            },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              onMouseEnter={() => setHovered(opt.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative bg-gradient-to-br ${opt.gradient} border-2 ${opt.border} rounded-2xl p-8 text-left transition-all duration-300 group
                ${hovered === opt.id ? "scale-[1.02] shadow-2xl shadow-black/30" : "scale-100 shadow-lg shadow-black/20"}`}
            >
              {/* Badge */}
              <div className="absolute top-5 right-5 text-sm font-bold text-white/80 bg-white/10 border border-white/20 rounded-full px-3 py-0.5">
                {opt.badge}
              </div>

              {/* Icon */}
              <div className="text-white/80 mb-5 group-hover:text-white transition-colors">
                <opt.Icon />
              </div>

              {/* Text */}
              <h2 className="text-2xl font-extrabold text-white mb-0.5">{opt.title}</h2>
              <p className="text-blue-200 text-sm font-semibold mb-3">{opt.subtitle}</p>
              <p className="text-blue-100/80 text-sm leading-relaxed mb-5">{opt.desc}</p>

              {/* Highlights */}
              <div className="flex flex-col gap-1.5">
                {opt.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-blue-100/90">
                    <span className="w-1.5 h-1.5 bg-blue-300 rounded-full shrink-0"></span>
                    {h}
                  </div>
                ))}
              </div>

              {/* Arrow CTA */}
              <div className="mt-6 flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                Select & Continue
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Main Portal Wizard ───────────────────────────────────────── */
const ScholarshipPortal = () => {
  const navigate = useNavigate();

  const [scopeSelected, setScopeSelected] = useState(null);

  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Clear any stale data left from previous sessions
  useEffect(() => {
    localStorage.removeItem("scholarshipSearchState");
  }, []);

  const [data, setData] = useState({
    type: "",
    nationality: "India",
    region: "",
    level: "",
    field: "",
  });


  const handleScopeSelect = (scopeType) => {
    const updated = { ...data, type: scopeType };
    setData(updated);
    setScopeSelected(scopeType);
  };

  const steps = [
    { id: 1, title: "Citizenship" },
    { id: 2, title: "Region" },
    { id: 3, title: "Tier" },
    { id: 4, title: "Field" },
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
  }, [scopeSelected]);

  const handleSubmit = () => {
    setError("");
    if (!data.nationality || !data.region || !data.level || !data.field) {
      setError("Please fill out all required fields before proceeding.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const filtered = scholarships.filter((s) => {
        if (data.type && s.type !== data.type) return false;
        if (data.level && s.level !== data.level) return false;
        if (data.field && s.field !== data.field && s.field !== "General") return false;
        return true;
      });
      navigate("/scholarship-results", { state: { results: filtered } });
    }, 1500);
  };

  // Show scope selector if scope not yet chosen
  if (!scopeSelected) {
    return <ScopeSelectorScreen onSelect={handleScopeSelect} />;
  }

  // Region options differ by scope
  const regionOptions = data.type === "International"
    ? ["USA", "UK", "Canada", "Australia", "Europe", "Japan", "Germany", "Singapore"]
    : indianStates;

  return (
    <div className="h-screen bg-gradient-to-b from-white to-blue-100 flex justify-center p-6 font-sans overflow-hidden">
      <div className="w-full max-w-7xl h-full flex overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">

        {/* Left Sidebar */}
        <aside className="w-[340px] bg-[#153e9c] p-10 hidden md:flex flex-col relative overflow-hidden shrink-0 rounded-l-2xl">
          <div
            className="absolute bottom-0 left-0 right-0 h-[400px] opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle at bottom, rgba(255,255,255,0.8) 0%, transparent 70%)",
              clipPath: "polygon(50% 10%, 100% 100%, 0% 100%)"
            }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0b2259]/80 to-transparent pointer-events-none"></div>

          <h2 className="text-3xl mb-4 text-white flex items-center relative z-10 tracking-tight">
            <span className="font-extrabold mr-1.5">Scholarship</span> <span className="font-light opacity-80">Portal</span>
          </h2>

          {/* Scope badge */}
          <div
            className="relative z-10 mb-8 flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 cursor-pointer hover:bg-white/15 transition-colors group"
            onClick={() => {
              setScopeSelected(null);
              setData({ ...data, type: "" });
            }}
          >
            <span className="text-lg">{data.type === "International" ? "" : ""}</span>
            <div>
              <p className="text-white font-bold text-sm">{data.type} Scholarship</p>
              <p className="text-blue-200 text-xs group-hover:text-blue-100 transition-colors">Click to change scope</p>
            </div>
            <svg className="w-4 h-4 text-white/50 ml-auto group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
          </div>

          <div className="flex flex-col gap-2 relative z-10">
            {steps.map((s) => {
              const isActive = activeStep === s.id;
              const Icon = s.id === 1 ? Icons.Citizenship : s.id === 2 ? Icons.Region : s.id === 3 ? Icons.Tier : Icons.Field;

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

        {/* Main Form Flow */}
        <main className="flex-1 overflow-y-auto scroll-smooth">
          <div className="sticky top-0 bg-white/80 backdrop-blur-md z-20 border-b border-slate-100 p-6 shadow-sm">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
                Find the Right Scholarship
              </h1>
              <div className="text-sm font-medium text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full">
                Step {activeStep} of 4
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-8 py-12 space-y-12 pb-24">

            {/* STEP 1: Citizenship */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1" className="scroll-mt-32">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Citizenship & Country</h2>
                <p className="text-slate-500 text-base">Select your current country of residence.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-semibold mb-2 block text-slate-800">Current Country</label>
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
                        <option>Germany</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold mb-2 block text-slate-800">Passport Status</label>
                    <div className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 text-slate-500 font-medium flex justify-between items-center text-[15px]">
                      <span>Verified</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* STEP 2: Region */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2" className="scroll-mt-32 pt-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  {data.type === "International" ? "Target Country / Region" : "Region & Territory"}
                </h2>
                <p className="text-slate-500 text-base">
                  {data.type === "International"
                    ? "Which country or region are you targeting for studies?"
                    : "Which region are you targeting for studies?"}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm flex flex-wrap gap-4">
                {regionOptions.map((r) => {
                  const isSelected = data.region === r;
                  return (
                    <button
                      key={r}
                      onClick={() => setData({ ...data, region: r })}
                      className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-200 border-2
                        ${isSelected
                          ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                    >
                      {r}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* STEP 3: Tier */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="scroll-mt-32 pt-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Academic Tier</h2>
                <p className="text-slate-500 text-base">Select your target level of study.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: "Undergraduate", label: "Bachelor's Level" },
                    { id: "Master's", label: "Post-Graduate" },
                    { id: "PhD", label: "Doctorate / Research" },
                    { id: "Diploma", label: "Professional Training" }
                  ].map((l) => (
                    <div
                      key={l.id}
                      onClick={() => setData({ ...data, level: l.id })}
                      className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border-2
                        ${data.level === l.id
                          ? "bg-blue-50 border-blue-600 shadow-sm"
                          : "bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${data.level === l.id ? "border-blue-600 bg-blue-600" : "border-slate-300 bg-white"}`}>
                          {data.level === l.id && <div className="w-2 h-2 bg-white rounded-full"></div>}
                        </div>
                        <div>
                          <p className={`font-bold text-[15px] ${data.level === l.id ? "text-blue-700" : "text-slate-800"}`}>{l.id}</p>
                          <p className="text-sm text-slate-500 font-medium">{l.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* STEP 4: Field */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="scroll-mt-32 pt-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Field of Study</h2>
                <p className="text-slate-500 text-base">Select your primary area of academic interest.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm flex flex-wrap gap-4">
                {[
                  "Engineering", "Medicine", "Business",
                  "Computer Science", "Arts", "Law", "Social Sciences", "Pure Sciences"
                ].map((f) => {
                  const isSelected = data.field === f;
                  return (
                    <button
                      key={f}
                      onClick={() => setData({ ...data, field: f })}
                      className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-200 border-2
                        ${isSelected
                          ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                    >
                      {f}
                    </button>
                  );
                })}
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
                {error && <p className="mt-4 text-sm font-medium text-red-500">{error}</p>}
                {!error && <p className="mt-4 text-sm text-slate-500">Your details are saved automatically.</p>}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default ScholarshipPortal;
