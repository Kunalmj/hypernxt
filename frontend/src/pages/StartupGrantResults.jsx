import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const mockGrants = [
  {
    id: 1,
    title: "Startup India Seed Fund",
    sector: ["AI / ML", "HealthTech", "SaaS"],
    stage: ["Idea", "Prototype / MVP"],
    amount: "Up to ₹50 Lakhs",
    minFunding: 0,
    maxFunding: 50,
    location: "PAN India",
    eligibility: "DPIIT startups",
    deadline: "Dec 2026",
    tags: ["Student startup", "DeepTech"]
  },
  {
    id: 2,
    title: "Women in Tech Grant",
    sector: ["AI / ML", "EdTech", "FinTech"],
    stage: ["Prototype / MVP", "Early Revenue"],
    amount: "₹10 Lakhs - ₹20 Lakhs",
    minFunding: 10,
    maxFunding: 20,
    location: "Karnataka",
    eligibility: "Women-led startups only",
    deadline: "Oct 2026",
    tags: ["Women-led"]
  },
  {
    id: 3,
    title: "Agri-Tech Innovation Challenge",
    sector: ["AgriTech", "CleanTech"],
    stage: ["Early Revenue", "Growth"],
    amount: "₹20 Lakhs - ₹1Cr",
    minFunding: 20,
    maxFunding: 100,
    location: "Maharashtra",
    eligibility: "Registered Pvt Ltd or LLP",
    deadline: "Nov 2026",
    tags: ["Rural startup", "Sustainability / Climate"]
  },
  {
    id: 4,
    title: "HealthTech Scale-Up Fund",
    sector: ["HealthTech"],
    stage: ["Early Revenue", "Growth"],
    amount: "Above ₹1Cr",
    minFunding: 100,
    maxFunding: 9999,
    location: "PAN India",
    eligibility: "Minimum ₹10L ARR",
    deadline: "Jan 2027",
    tags: ["DeepTech"]
  },
  {
    id: 5,
    title: "Student Startup Fellowship",
    sector: ["EdTech", "AI / ML", "SaaS", "FinTech"],
    stage: ["Idea", "Prototype / MVP"],
    amount: "Up to ₹5 Lakhs",
    minFunding: 0,
    maxFunding: 5,
    location: "Delhi",
    eligibility: "College students",
    deadline: "Sep 2026",
    tags: ["Student startup"]
  },
  {
    id: 6,
    title: "Clean Energy Grant",
    sector: ["CleanTech"],
    stage: ["Prototype / MVP", "Early Revenue", "Growth"],
    amount: "₹50 Lakhs - ₹2Cr",
    minFunding: 50,
    maxFunding: 200,
    location: "Gujarat",
    eligibility: "Sustainability focus",
    deadline: "Mar 2027",
    tags: ["Sustainability / Climate"]
  },
  {
    id: 7,
    title: "FinTech Innovation Award",
    sector: ["FinTech"],
    stage: ["Idea", "Prototype / MVP", "Early Revenue"],
    amount: "₹5 Lakhs - ₹20 Lakhs",
    minFunding: 5,
    maxFunding: 20,
    location: "Maharashtra",
    eligibility: "Not Registered / Pvt Ltd",
    deadline: "Aug 2026",
    tags: []
  },
  {
    id: 8,
    title: "National AI Research Grant",
    sector: ["AI / ML", "DeepTech"],
    stage: ["Idea", "Prototype / MVP", "Early Revenue", "Growth"],
    amount: "₹20 Lakhs - ₹50 Lakhs",
    minFunding: 20,
    maxFunding: 50,
    location: "PAN India",
    eligibility: "DPIIT or MSME",
    deadline: "Feb 2027",
    tags: ["DeepTech", "Student startup"]
  }
];

const StartupGrantResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = location.state?.query || null;

  const { filteredGrants, isExactMatch } = useMemo(() => {
    if (!query) return { filteredGrants: mockGrants, isExactMatch: false };

    const matches = mockGrants.filter(grant => {
      // 1. Sector
      if (query.sectors && query.sectors.length > 0) {
        const sectorMatch = grant.sector.some(s => query.sectors.includes(s));
        if (!sectorMatch) return false;
      }
      
      // 2. Stage
      if (query.stage) {
        if (!grant.stage.includes(query.stage)) return false;
      }

      // 3. Location
      if (query.location && !query.location.panIndia) {
        if (grant.location !== "PAN India" && query.location.state && grant.location !== query.location.state) return false;
      }

      // 4. Funding
      if (query.funding && query.funding.max > 0) {
        // overlap logic: grant.min <= user.max && grant.max >= user.min
        if (grant.minFunding > query.funding.max || grant.maxFunding < query.funding.min) return false;
      }

      return true;
    });

    if (matches.length > 0) {
      return { filteredGrants: matches, isExactMatch: true };
    } else {
      return { filteredGrants: mockGrants, isExactMatch: false };
    }
  }, [query]);

  const handleNewSearch = () => {
    navigate("/startup-grant");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pb-20">
      {/* Header section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={handleNewSearch}
            className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Search
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Your Grant Matches</h1>
          <p className="text-lg text-blue-100 max-w-2xl opacity-90">
            {isExactMatch 
              ? `We found ${filteredGrants.length} tailored opportunities based on your startup profile.`
              : "No exact matches found for your highly specific criteria. Showing all available opportunities instead."}
          </p>

          {/* Applied Filters Tags */}
          {query && (
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-md text-sm border border-white/20 backdrop-blur-sm">
                Stage: <span className="font-semibold text-white">{query.stage || "Any"}</span>
              </span>
              {query.sectors.map(s => (
                <span key={s} className="px-3 py-1 bg-white/10 rounded-md text-sm border border-white/20 backdrop-blur-sm">
                  <span className="font-semibold text-white">{s}</span>
                </span>
              ))}
              <span className="px-3 py-1 bg-white/10 rounded-md text-sm border border-white/20 backdrop-blur-sm">
                Loc: <span className="font-semibold text-white">{query.location.panIndia ? "PAN India" : query.location.state || "Any"}</span>
              </span>
              {query.funding.label && (
                <span className="px-3 py-1 bg-white/10 rounded-md text-sm border border-white/20 backdrop-blur-sm">
                  Funding: <span className="font-semibold text-white">{query.funding.label}</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-5xl mx-auto px-6 -mt-6">
        
        {!isExactMatch && query && (
           <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-8 shadow-sm flex items-start gap-4">
              <svg className="w-6 h-6 text-amber-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <div>
                <h3 className="text-amber-800 font-semibold">No exact matches</h3>
                <p className="text-amber-700 text-sm mt-1">We couldn't find grants matching all your criteria. Here are other opportunities you might consider.</p>
              </div>
           </div>
        )}

        <div className="grid gap-6">
          {filteredGrants.map(grant => (
            <div key={grant.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:items-center">
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100">
                    {grant.amount}
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                    {grant.deadline}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800">{grant.title}</h2>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {grant.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {grant.eligibility}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {grant.sector.map(s => (
                    <span key={s} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">{s}</span>
                  ))}
                  {grant.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium border border-purple-100">{t}</span>
                  ))}
                </div>
              </div>

              <div className="md:w-48 flex-shrink-0 flex flex-col gap-3">
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm">
                  Apply Now
                </button>
                <button className="w-full py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors">
                  View Details
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupGrantResults;
