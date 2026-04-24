import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PLANS = [
  {
    id: "basic",
    name: "Standard Citizen",
    tagline: "For individual awareness",
    price: "Free",
    features: ["Browse all central schemes", "Basic eligibility check"],
    desc: "Perfect for citizens looking to stay informed about standard welfare programs."
  },
  {
    id: "pro",
    name: "Active Beneficiary",
    tagline: "For streamlined applications",
    price: "₹0/mo",
    features: ["One-click applications", "Document locker access"],
    desc: "Highly recommended for those actively applying for multiple social schemes.",
    popular: true
  },
  {
    id: "enterprise",
    name: "Social Worker",
    tagline: "For community assistance",
    price: "Free",
    features: ["Bulk registrations", "Tracking dashboard"],
    desc: "Designed for NGOs and social workers helping local communities access benefits."
  }
];

const ROLES = [
  { id: 'citizen', title: 'Individual Citizen', desc: 'I want to find and apply for schemes for myself or my family.', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { id: 'agent', title: 'Community Assistant', desc: 'I help others in my village/city to register for government benefits.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10l2 2 4-4' }
];

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    role: 'citizen',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
  });
  const [plan, setPlan] = useState("pro");
  const [loading, setLoading] = useState(false);

  const nextStep = (e) => {
    e.preventDefault();
    setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <>
      {/* Internal Step Indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map(i => (
          <div key={i} className={`h-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-blue-600 flex-1' : 'bg-slate-100 w-4'}`}></div>
        ))}
      </div>

      <div className="mb-8">
        <h1 className="text-4xl md:text-[3.25rem] font-[900] mb-4 tracking-tight text-slate-900 leading-[0.95]">
          {step === 1 && <>Citizen <span className="text-blue-600">Onboarding.</span></>}
          {step === 2 && <>Profile <span className="text-blue-600">Verification.</span></>}
          {step === 3 && <>Service <span className="text-blue-600">Level.</span></>}
        </h1>
        <p className="text-slate-400 text-base font-medium leading-relaxed">
          {step === 1 && "Select your profile type to help us filter the most relevant government schemes for you."}
          {step === 2 && "Enter your official details. This information will be used to auto-fill scheme application forms."}
          {step === 3 && "Select how you would like to interact with the portal. All citizen services are free of charge."}
        </p>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {ROLES.map(role => (
              <button
                key={role.id}
                onClick={() => setForm({ ...form, role: role.id })}
                className={`flex items-start gap-5 p-6 rounded-[2rem] border-2 transition-all text-left ${
                  form.role === role.id ? 'border-blue-600 bg-blue-50/50 shadow-xl shadow-blue-600/5' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${form.role === role.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={role.icon} /></svg>
                </div>
                <div>
                  <div className={`font-black text-lg ${form.role === role.id ? 'text-blue-700' : 'text-slate-900'}`}>{role.title}</div>
                  <p className="text-sm text-slate-400 font-medium">{role.desc}</p>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(2)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/25 mt-6 text-sm"
          >
            Continue to Identity Details
          </button>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={nextStep} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">First Name (As per Aadhaar)</label>
              <input
                type="text"
                required
                placeholder="Jane"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full bg-slate-50/50 border border-slate-200/60 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
              <input
                type="text"
                required
                placeholder="Doe"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full bg-slate-50/50 border border-slate-200/60 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">Contact Email</label>
            <input
              type="email"
              required
              placeholder="jane@citizen.gov.in"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-slate-50/50 border border-slate-200/60 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest ml-1">Portal Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-slate-50/50 border border-slate-200/60 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={prevStep}
              className="w-16 h-16 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-2xl transition-all flex items-center justify-center shrink-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/25 text-sm"
            >
              Next: Service Preferences
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {PLANS.map((p) => (
              <label
                key={p.id}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  plan === p.id ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-500/5 scale-[1.01]" : "border-slate-100 bg-slate-50/50 hover:border-slate-200"
                }`}
              >
                <input
                  type="radio"
                  name="plan"
                  className="hidden"
                  checked={plan === p.id}
                  onChange={() => setPlan(p.id)}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-sm ${plan === p.id ? 'text-blue-700' : 'text-slate-700'}`}>{p.name}</span>
                    {p.popular && <span className="text-[0.55rem] bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase font-black tracking-[0.1em]">Selected</span>}
                  </div>
                  <p className="text-[0.65rem] text-slate-400 font-medium">{p.tagline} • {p.features[0]}</p>
                </div>
                <div className="text-right">
                  <div className={`font-black text-sm ${plan === p.id ? 'text-blue-600' : 'text-slate-900'}`}>{p.price}</div>
                </div>
              </label>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={prevStep}
              className="w-16 h-16 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-2xl transition-all flex items-center justify-center shrink-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/25 disabled:opacity-50 text-sm"
            >
              {loading ? "Registering Citizen..." : "Join Citizen Portal"}
            </button>
          </div>
        </form>
      )}

    </>
  );
};

export default Signup;
