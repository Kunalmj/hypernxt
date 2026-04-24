import React from "react";
import { Link } from "react-router-dom";

const StartupHelp = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] font-['Inter',_sans-serif]">
      <div className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest mb-8 hover:gap-3 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 mb-6 tracking-tighter leading-tight italic">
              Startup & <span className="text-blue-600">MSME Help.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Empowering entrepreneurs with the right grants, compliance support, and government funding opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <section>
                <h2 className="text-3xl font-black text-slate-900 mb-8">Ecosystem Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { t: "Grant Eligibility", d: "Automatic check for SIDBI, MUDRA, and Startup India seed funds." },
                        { t: "Udyam Registration", d: "Hassle-free registration for MSMEs with direct portal sync." },
                        { t: "Tax Exemption", d: "Assistance in applying for 80-IAC and other startup tax benefits." },
                        { t: "Vendor Onboarding", d: "Get listed on GeM (Government e-Marketplace) to sell to gov departments." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-500/5">
                            <h4 className="text-lg font-black text-slate-900 mb-2">{item.t}</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupHelp;
