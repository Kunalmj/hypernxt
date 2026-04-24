import React from "react";
import { Link } from "react-router-dom";

const ScholarshipAssistance = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] font-['Inter',_sans-serif]">
      {/* Hero */}
      <div className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest mb-8 hover:gap-3 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 mb-6 tracking-tighter leading-tight italic">
              Scholarship <span className="text-blue-600">Assistance.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              From profile matching to document verification, we ensure your educational dreams are never sidelined by financial barriers.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <section>
                <h2 className="text-3xl font-black text-slate-900 mb-8">What we provide</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { t: "Smart Matching", d: "We analyze your academic record and background to find the highest-paying scholarships you qualify for." },
                        { t: "Document Checklist", d: "Never miss a deadline with our automated document generation and verification tool." },
                        { t: "Essay Review", d: "Our experts review your statements of purpose to increase your chances of selection." },
                        { t: "Direct Submission", d: "Apply to multiple scholarship boards directly through our verified portal integration." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-500/5">
                            <h4 className="text-lg font-black text-slate-900 mb-2">{item.t}</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-blue-600 p-12 rounded-[3.5rem] text-white">
                <h3 className="text-2xl font-black mb-4">Ready to start your application?</h3>
                <p className="text-blue-100 font-medium mb-8">Join thousands of students who have successfully secured their education through our platform.</p>
                <Link to="/signup" className="inline-block bg-white text-blue-600 font-black px-10 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all">
                    Start My Profile
                </Link>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-500/5">
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Service Stats</h4>
                <div className="space-y-6">
                    <div>
                        <div className="text-3xl font-black text-slate-900 tracking-tighter">₹450Cr+</div>
                        <div className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest">Scholarships Secured</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-slate-900 tracking-tighter">120k+</div>
                        <div className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest">Verified Students</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipAssistance;
