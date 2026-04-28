import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="w-full text-center">
      <div className="mb-10">
        <h1 className="text-[2.5rem] font-black mb-2 tracking-tight text-slate-900 leading-none">
          Hi Citizen
        </h1>
        <p className="text-slate-600 text-sm font-medium">
          Welcome to Opportunity Hub
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="space-y-4">
          <input
            type="email"
            required
            placeholder="Citizen ID or Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
          />
          <input
            type="password"
            required
            placeholder="Security PIN"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
          />
        </div>
        
        <div className="flex justify-end pt-1">
          <Link to="#" className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors">Forgot password?</Link>
        </div>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-slate-200 flex-1"></div>
          <span className="text-xs font-medium text-slate-400">or</span>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        <button
          type="button"
          className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-3 mb-4 shadow-sm"
        >
          Login with Google
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </button>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] text-sm disabled:opacity-70 mt-2"
        >
          {loading ? "Establishing Session..." : "Login"}
        </button>

        <div className="text-center mt-8">
          <span className="text-xs text-slate-500 font-medium">Don't have an account? </span>
          <Link to="/signup" className="text-xs font-bold text-red-500 hover:text-red-600">Sign up</Link> 
        </div>
      </form>
    </div>
  );
};

export default Login;
