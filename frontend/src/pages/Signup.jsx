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
    <div className="w-full text-center">
      <div className="mb-8">
        <h1 className="text-[2.5rem] font-black mb-2 tracking-tight text-slate-900 leading-none">
          {step === 1 && "Start Journey"}
          {step === 2 && "Your Details"}
          {step === 3 && "Service Level"}
        </h1>
        <p className="text-slate-600 text-sm font-medium">
          {step === 1 && "Select your citizen profile"}
          {step === 2 && "Enter official information"}
          {step === 3 && "Choose portal access level"}
        </p>
      </div>

      {/* Internal Step Indicator (Dot style) */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map(i => (
          <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? 'bg-blue-600 w-6' : 'bg-slate-200 w-1.5'}`}></div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4 text-left">
          <div className="grid grid-cols-1 gap-3">
            {ROLES.map(role => (
              <button
                key={role.id}
                onClick={() => setForm({ ...form, role: role.id })}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                  form.role === role.id ? 'border-blue-600 bg-blue-50/50 shadow-sm' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${form.role === role.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={role.icon} /></svg>
                </div>
                <div>
                  <div className={`font-bold text-sm ${form.role === role.id ? 'text-blue-700' : 'text-slate-900'}`}>{role.title}</div>
                  <p className="text-xs text-slate-500 font-medium">{role.desc}</p>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(2)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] mt-4 text-sm"
          >
            Continue
          </button>
          
          <div className="text-center mt-6">
            <span className="text-xs text-slate-500 font-medium">Already have an account? </span>
            <Link to="/login" className="text-xs font-bold text-blue-600 hover:text-blue-700">Login</Link>
          </div>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={nextStep} className="space-y-4 text-left">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
            />
            <input
              type="text"
              required
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>

          <input
            type="email"
            required
            placeholder="Contact Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
          />

          <input
            type="password"
            required
            placeholder="Portal Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
          />

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={prevStep}
              className="w-12 h-[46px] bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl transition-all flex items-center justify-center shrink-0"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] text-sm"
            >
              Next Step
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid grid-cols-1 gap-3">
            {PLANS.map((p) => (
              <label
                key={p.id}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                  plan === p.id ? "border-blue-600 bg-blue-50/50 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"
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
                    <span className={`font-bold text-sm ${plan === p.id ? 'text-blue-700' : 'text-slate-900'}`}>{p.name}</span>
                    {p.popular && <span className="text-[0.55rem] bg-blue-600 text-white px-1.5 py-0.5 rounded uppercase font-black tracking-wider">Selected</span>}
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{p.tagline}</p>
                </div>
                <div className="text-right">
                  <div className={`font-black text-sm ${plan === p.id ? 'text-blue-600' : 'text-slate-900'}`}>{p.price}</div>
                </div>
              </label>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={prevStep}
              className="w-12 h-[46px] bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl transition-all flex items-center justify-center shrink-0"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] disabled:opacity-50 text-sm"
            >
              {loading ? "Registering..." : "Complete Signup"}
            </button>
          </div>
        </form>
      )}

    </div>
  );
};

export default Signup;
