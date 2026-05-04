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
        <h1 className="text-[2.5rem] font-black mb-2 pt-5 tracking-tight text-slate-900 leading-none">
          Hi Citizen
        </h1>
        <p className="text-slate-600 text-sm font-medium">
          Welcome to FormEase
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
