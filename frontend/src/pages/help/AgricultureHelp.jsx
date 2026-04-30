import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ── Contact method icons ─────────────────────────────────────── */
const IconEmail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconPhoneOutline = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.32-1.32a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconWhatsApp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const serviceOptions = [
  "Citizen Schemes Assistance",
  "Scholarship Application Services",
  "Startup Grant Assistance",
  "MSME Subsidy Support",
  "Agriculture Scheme Help",
  "Women Program Guidance",
  "Research Grant Support",
  "Tender/RFP Filing Services",
];

const RequestServiceModal = ({ service, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    specificService: service || "",
    description: "",
    contactMethod: "Email",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2500);
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(15,23,42,0.55)", backdropFilter: "blur(4px)" }}
      onClick={handleBackdrop}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[500px] shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-6 pt-5 pb-4 border-b border-[#f1f5f9] flex items-center justify-between">
          <div>
            <h2 className="text-[1.05rem] font-extrabold text-[#0f172a]">Request Service</h2>
            <p className="text-[0.78rem] text-[#64748b] mt-0.5">{service}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a] transition-colors cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 px-8 text-center">
            <div className="w-14 h-14 bg-[#d1fae5] rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 className="text-[1rem] font-extrabold text-[#0f172a] mb-1.5">Request Submitted!</h3>
            <p className="text-[0.82rem] text-[#64748b] leading-relaxed">Our team will contact you within 24 hours on your preferred channel.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[0.76rem] font-bold text-[#0f172a] mb-1">Full Name <span className="text-red-500">*</span></label>
                <input type="text" required value={form.name} onChange={e => set("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2.5 rounded-xl border border-[#e2e8f0] text-[0.82rem] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15 transition-all"
                />
              </div>
              <div>
                <label className="block text-[0.76rem] font-bold text-[#0f172a] mb-1">Email Address <span className="text-red-500">*</span></label>
                <input type="email" required value={form.email} onChange={e => set("email", e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 rounded-xl border border-[#e2e8f0] text-[0.82rem] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[0.76rem] font-bold text-[#0f172a] mb-1">Phone / WhatsApp <span className="text-red-500">*</span></label>
                <input type="tel" required value={form.phone} onChange={e => set("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2.5 rounded-xl border border-[#e2e8f0] text-[0.82rem] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15 transition-all"
                />
              </div>
              <div>
                <label className="block text-[0.76rem] font-bold text-[#0f172a] mb-1">Service Needed <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select required value={form.specificService} onChange={e => set("specificService", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#e2e8f0] text-[0.82rem] text-[#0f172a] bg-white appearance-none focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15 transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] text-xs">▾</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[0.76rem] font-bold text-[#0f172a] mb-1">Brief Description <span className="text-red-500">*</span></label>
              <textarea required rows={2} value={form.description} onChange={e => set("description", e.target.value)}
                placeholder="Describe your requirements, timeline, and any specific needs..."
                className="w-full px-3 py-2.5 rounded-xl border border-[#e2e8f0] text-[0.82rem] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15 transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-[0.76rem] font-bold text-[#0f172a] mb-2">Preferred Contact Method <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { label: "Email", Icon: IconEmail },
                  { label: "Phone", Icon: IconPhoneOutline },
                  { label: "WhatsApp", Icon: IconWhatsApp },
                ].map(({ label, Icon: CIcon }) => (
                  <button key={label} type="button" onClick={() => set("contactMethod", label)}
                    className={`flex flex-col items-center gap-1.5 py-2.5 rounded-xl border-2 transition-all cursor-pointer font-semibold text-[0.75rem] ${
                      form.contactMethod === label
                        ? "border-[#3b82f6] bg-[#eff6ff] text-[#1d4ed8]"
                        : "border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#bfdbfe] hover:bg-[#f8fafc]"
                    }`}
                  >
                    <CIcon />{label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={onClose}
                className="flex-1 py-2.5 rounded-xl border-2 border-[#e2e8f0] text-[#374151] font-bold text-[0.82rem] bg-white hover:bg-[#f8fafc] transition-colors cursor-pointer"
              >Cancel</button>
              <button type="submit"
                className="flex-1 py-2.5 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-[0.82rem] transition-colors cursor-pointer shadow-md shadow-blue-200 flex items-center justify-center gap-2"
              >Submit Request →</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const AgricultureHelp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fbff] font-['Inter',_sans-serif]">
      {showModal && <RequestServiceModal service="Agriculture Scheme Help" onClose={() => setShowModal(false)} />}

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
                  { t: "Solar Pump Help", d: "Access the PM-KUSUM scheme for free solar-powered water pumps." },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-500/5">
                    <h4 className="text-lg font-black text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-blue-600 p-12 rounded-[3.5rem] text-white">
              <h3 className="text-2xl font-black mb-4">Ready to claim your farm benefits?</h3>
              <p className="text-blue-100 font-medium mb-8">Our agriculture specialists help you navigate subsidy schemes from application to disbursement.</p>
              <button
                onClick={() => setShowModal(true)}
                className="inline-block bg-white text-blue-600 font-black px-10 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all cursor-pointer border-none"
              >
                Get Started →
              </button>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-500/5">
              <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Service Stats</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tighter">₹800Cr+</div>
                  <div className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest">Subsidies Claimed</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tighter">85k+</div>
                  <div className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest">Farmers Assisted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureHelp;
