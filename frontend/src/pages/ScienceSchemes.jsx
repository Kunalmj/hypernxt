import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const allSchemes = [
  {
    id: 1,
    title: "INSPIRE Scheme",
    ministry: "Ministry of Science and Technology",
    desc: "Innovation in Science Pursuit for Inspired Research (INSPIRE) is an innovative programme for attraction of talent to Science.",
    benefit: "Scholarship & Research Grant",
    deadline: "Annual",
    beneficiaries: "Students & Researchers",
    tags: ["STEM", "Research", "Central Government"],
    state: "All India",
    beneficiaryType: "Students",
    gender: "All Genders",
    sponsor: "Central Government",
  },
  {
    id: 2,
    title: "Digital India Internship Scheme",
    ministry: "Ministry of Electronics and Information Technology",
    desc: "Provides an opportunity to students to learn about the policy framework of the government in the digital space.",
    benefit: "Stipend & Experience",
    deadline: "Periodic",
    beneficiaries: "Graduate/Post Graduate Students",
    tags: ["IT", "Digital", "Central Government"],
    state: "All India",
    beneficiaryType: "Students",
    gender: "All Genders",
    sponsor: "Central Government",
  },
];

const STATES = ["All States", "All India", "Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Gujarat", "Uttar Pradesh"];
const BENEFICIARY_TYPES = ["All Beneficiaries", "Students", "Researchers", "Entrepreneurs"];
const GENDERS = ["All Genders", "Male", "Female", "Transgender"];
const SPONSORS = ["All Sponsors", "Central Government", "State Government"];

const Tag = ({ label }) => (
  <span className="inline-flex items-center text-[0.72rem] font-semibold px-2.5 py-0.5 rounded-full border"
    style={{ background: "#fffbeb", borderColor: "#fef3c7", color: "#d97706" }}>
    {label}
  </span>
);

const FilterSelect = ({ label, value, onChange, options }) => (
  <div className="mb-5">
    <label className="block text-[0.78rem] font-bold text-[#374151] mb-1.5 uppercase tracking-wide">{label}</label>
    <div className="relative">
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white border border-[#e2e8f0] rounded-xl px-3 py-2.5 text-[0.85rem] text-[#0f172a] font-medium cursor-pointer focus:outline-none focus:border-[#d97706]">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">▾</span>
    </div>
  </div>
);

const ScienceSchemes = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({ state: "All States", beneficiaryType: "All Beneficiaries", gender: "All Genders", sponsor: "All Sponsors" });

  const filtered = useMemo(() => {
    return allSchemes.filter((s) => {
      if (search && !s.title.toLowerCase().includes(search.toLowerCase()) && !s.desc.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.state !== "All States" && s.state !== filters.state) return false;
      if (filters.beneficiaryType !== "All Beneficiaries" && s.beneficiaryType !== filters.beneficiaryType) return false;
      if (filters.gender !== "All Genders" && s.gender !== filters.gender && s.gender !== "All Genders") return false;
      if (filters.sponsor !== "All Sponsors" && s.sponsor !== filters.sponsor) return false;
      return true;
    });
  }, [search, filters]);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <div className="bg-gradient-to-r from-[#b45309] to-[#f59e0b] px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-1.5 text-amber-100 text-[0.82rem] font-semibold bg-transparent border-none cursor-pointer p-0 mb-4 hover:text-white transition-colors">← Back to All Categories</button>
          <h1 className="text-white text-[1.45rem] md:text-[1.75rem] font-extrabold mb-1">Science, IT &amp; Communications</h1>
          <p className="text-amber-100 text-[0.85rem]">Explore 105 schemes in this category</p>
          <div className="mt-5 relative max-w-2xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg></span>
            <input type="text" placeholder="Search schemes..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-11 pr-4 py-3 rounded-xl border-none text-[0.9rem] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-amber-300" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }} />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex gap-6 items-start">
        {showFilters && (
          <aside className="w-64 flex-shrink-0 bg-white rounded-2xl p-5 sticky top-[96px]" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(37,99,235,0.06), inset 0 0 0 1px rgba(226,232,240,0.8)" }}>
            <div className="flex items-center gap-2 mb-5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg><span className="font-bold text-[#0f172a] text-[0.9rem]">Filters</span></div>
            <FilterSelect label="State/UT" value={filters.state} onChange={(v) => setFilters({...filters, state: v})} options={STATES} />
            <FilterSelect label="Beneficiary Type" value={filters.beneficiaryType} onChange={(v) => setFilters({...filters, beneficiaryType: v})} options={BENEFICIARY_TYPES} />
            <FilterSelect label="Gender" value={filters.gender} onChange={(v) => setFilters({...filters, gender: v})} options={GENDERS} />
            <FilterSelect label="Sponsored By" value={filters.sponsor} onChange={(v) => setFilters({...filters, sponsor: v})} options={SPONSORS} />
            <button onClick={() => setFilters({ state: "All States", beneficiaryType: "All Beneficiaries", gender: "All Genders", sponsor: "All Sponsors" })} className="w-full mt-1 py-2 rounded-xl text-[0.8rem] font-semibold text-[#64748b] border border-[#e2e8f0] bg-transparent cursor-pointer hover:border-[#d97706] hover:text-[#d97706] transition-colors">Reset Filters</button>
          </aside>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[0.92rem] text-[#0f172a] font-semibold"><span className="text-[#d97706] font-extrabold">{filtered.length}</span> Schemes Found</p>
            <button onClick={() => setShowFilters((p) => !p)} className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-[#64748b] border border-[#e2e8f0] bg-white rounded-xl px-4 py-2 cursor-pointer hover:border-[#d97706] hover:text-[#d97706] transition-colors" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>{showFilters ? "Hide Filters" : "Show Filters"}</button>
          </div>
          <div className="flex flex-col gap-4">
            {filtered.length === 0 ? (<div className="bg-white rounded-2xl p-10 text-center" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(226,232,240,0.8)" }}><p className="text-[#64748b] text-[0.9rem]">No schemes match your filters.</p></div>) : (
              filtered.map((scheme) => (
                <div key={scheme.id} className="bg-white rounded-2xl p-6 flex gap-4 transition-all duration-200" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(37,99,235,0.06), inset 0 0 0 1px rgba(226,232,240,0.8)" }}>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[1rem] font-bold text-[#b45309] mb-0.5 leading-snug cursor-pointer hover:underline">{scheme.title}</h3>
                    <p className="text-[0.77rem] text-[#64748b] mb-2">{scheme.ministry}</p>
                    <p className="text-[0.83rem] text-[#374151] leading-relaxed mb-3">{scheme.desc}</p>
                    <div className="flex flex-wrap gap-1.5">{scheme.tags.map((t) => <Tag key={t} label={t} />)}</div>
                  </div>
                  <div className="flex flex-col justify-between items-end flex-shrink-0 min-w-[160px] gap-3">
                    <div className="flex flex-col gap-2 text-right w-full">
                      <div className="bg-[#fffbeb] border border-[#fef3c7] rounded-xl px-3 py-2"><p className="text-[0.68rem] text-[#d97706] font-bold uppercase tracking-wide mb-0.5">Benefit</p><p className="text-[0.82rem] font-semibold text-[#0f172a]">{scheme.benefit}</p></div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <button className="w-full inline-flex items-center justify-center gap-1.5 bg-[#b45309] text-white text-[0.8rem] font-bold rounded-xl px-4 py-2.5 border-none cursor-pointer hover:bg-[#92400e] transition-colors">View Details →</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceSchemes;
