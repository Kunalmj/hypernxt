import React from "react";

const ContactSupport = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] font-['Inter',_sans-serif]">
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Left: Info */}
            <div>
              <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 mb-8 tracking-tighter leading-tight italic">
                Get in <span className="text-blue-600">Touch.</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                Have questions about a specific scheme or need technical support? Our team of application experts is here to assist you.
              </p>

              <div className="space-y-10">
                {[
                    { t: "Expert Support", v: "1800-300-4000 (Toll Free)", d: "Mon-Sat, 9am - 6pm", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                    { t: "Email Inquiry", v: "support@opportunityhub.gov.in", d: "24/7 Response time: 4 hours", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                    { t: "Main Office", v: "Civic Tower, Sector 62", d: "Gurugram, HR, India", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" }
                ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg shadow-blue-500/5 flex items-center justify-center shrink-0 text-blue-600 border border-slate-50">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d={item.icon} /></svg>
                        </div>
                        <div>
                            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{item.t}</div>
                            <div className="text-lg font-black text-slate-900 mb-0.5">{item.v}</div>
                            <div className="text-sm text-slate-500 font-medium">{item.d}</div>
                        </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-blue-500/10 border border-slate-100">
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">Inquiry Subject</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium appearance-none">
                            <option>Scheme Eligibility Question</option>
                            <option>Technical Issue</option>
                            <option>Document Correction</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                        <textarea rows="4" placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium resize-none"></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all hover:scale-[0.99]">
                        Send Message
                    </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
