import React from "react";
import { Link } from "react-router-dom";

const AgricultureHelp = () => {
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
              Agriculture <span className="text-blue-600">Subsidies.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Simplifying access to farm equipment subsidies, crop insurance, and PM-Kisan benefits for rural India.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <section>
                <h2 className="text-3xl font-black text-slate-900 mb-8">Farmer Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { t: "PM-Kisan Registry", d: "Ensure your land records are synced for direct benefit transfers." },
                        { t: "Equipment Subsidy", d: "Apply for 50-80% discounts on tractors, tillers, and drip irrigation." },
                        { t: "Crop Insurance", d: "Simplified PM Fasal Bima Yojana registration with claim support." },
                        { t: "Solar Pump Help", d: "Access the PM-KUSUM scheme for free solar-powered water pumps." }
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

export default AgricultureHelp;
