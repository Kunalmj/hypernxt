import React from "react";
import { Link } from "react-router-dom";

const StatusTracking = () => {
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
              Status <span className="text-blue-600">Tracking.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Monitor your applications across central and state departments through a single, unified dashboard.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl">
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-blue-500/5">
                <h2 className="text-2xl font-black text-slate-900 mb-8">Track Application</h2>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">Application ID / Reference No.</label>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="e.g. APP-987654321"
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                            />
                            <button className="bg-blue-600 text-white font-black px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-700 transition-all">
                                Track
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTracking;
