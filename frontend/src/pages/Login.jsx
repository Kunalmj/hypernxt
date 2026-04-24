import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl md:text-[3.5rem] font-[900] mb-4 tracking-tight text-slate-900 leading-[0.95]">
          Access your <span className="text-blue-600">Benefits.</span>
        </h1>
        <p className="text-slate-400 text-base font-medium leading-relaxed max-w-sm">
          Sign in to your citizen dashboard to track eligible government schemes and receive real-time welfare updates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-5">
          <div className="space-y-2">
            <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Citizen ID / Email</label>
            <div className="relative group/input">
              <input
                type="email"
                required
                placeholder="e.g. rahul@citizen.gov.in"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-slate-50/50 border border-slate-200/60 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-300 font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-[0.2em]">Security PIN</label>
              <Link to="#" className="text-[0.65rem] font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest">Forgot Access?</Link>
            </div>
            <div className="relative group/input">
              <input
                type={showPass ? "text" : "password"}
                required
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-slate-50/50 border border-slate-200/60 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-300 font-medium"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/25 active:scale-[0.98] disabled:opacity-50 text-sm flex items-center justify-center gap-3"
          >
            {loading ? "Establishing Secure Session..." : "Enter Citizen Portal"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
