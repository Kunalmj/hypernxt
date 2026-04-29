import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { womenPrograms as mockPrograms } from "../data/womenData";

const WomenResults = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const query = state?.query || null;

  const { filteredPrograms, isExactMatch } = useMemo(() => {
    if (!query) return { filteredPrograms: mockPrograms, isExactMatch: false };

    const matches = mockPrograms.filter(p => {
      if (query.type && p.type !== "Any" && p.type !== query.type) return false;
      if (query.age && p.age !== "Any" && p.age !== query.age) return false;
      if (query.education && p.education !== "Any" && p.education !== query.education) return false;
      if (query.location && p.location !== "Any" && p.location !== "All India" && p.location !== query.location) return false;
      if (query.need && p.need !== "Any" && p.need !== query.need) return false;
      return true;
    });

    if (matches.length > 0) {
      return { filteredPrograms: matches, isExactMatch: true };
    } else {
      return { filteredPrograms: mockPrograms, isExactMatch: false };
    }
  }, [query]);

  const handleNewSearch = () => {
    navigate("/women-programs");
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Your Program Matches</h1>
          <p className="text-lg text-blue-100 max-w-2xl opacity-90">
            {isExactMatch 
              ? `We found ${filteredPrograms.length} tailored opportunities based on your profile.`
              : "No exact matches found for your highly specific criteria. Showing all available programs instead."}
          </p>

          {/* Applied Filters Tags */}
          {query && (
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-md text-sm border border-white/20 backdrop-blur-sm">
                <span className="font-semibold text-white">{query.type || "Any Category"}</span>
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-md text-sm border border-white/20 backdrop-blur-sm">
                <span className="font-semibold text-white">{query.age || "Any Age"}</span>
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-md text-sm border border-white/20 backdrop-blur-sm">
                <span className="font-semibold text-white">{query.education || "Any Education"}</span>
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-md text-sm border border-white/20 backdrop-blur-sm">
                <span className="font-semibold text-white">{query.location || "Any Location"}</span>
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-md text-sm border border-white/20 backdrop-blur-sm">
                <span className="font-semibold text-white">{query.need || "Any Need"}</span>
              </span>
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
                <p className="text-amber-700 text-sm mt-1">We couldn't find programs perfectly matching all your criteria. Here are other opportunities you might consider.</p>
              </div>
           </div>
        )}

        <div className="grid gap-6">
          {filteredPrograms.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:items-center">
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100">
                    {p.benefit || p.amount}
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                    {p.deadline}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800">{p.title}</h2>
                <p className="text-sm text-slate-500 font-medium">{p.provider}</p>
                <p className="text-slate-600 text-sm">{p.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {p.location === "Any" ? "All India" : p.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    {p.age === "Any" ? "All Ages" : p.age}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                    {p.type}
                  </span>
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                    {p.education === "Any" ? "Any Education" : p.education}
                  </span>
                  {p.tags?.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium border border-purple-100">
                      {t}
                    </span>
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

export default WomenResults;
