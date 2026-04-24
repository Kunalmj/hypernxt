import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ece9ff] via-[#f8fbff] to-[#f0eeff] p-6 md:p-12 font-['Inter',_sans-serif] selection:bg-blue-100 selection:text-blue-700">
      {/* Main Static Card */}
      <div className="bg-white/80 backdrop-blur-2xl border border-white text-slate-900 w-full max-w-6xl h-[720px] rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(37,99,235,0.12)] flex flex-col md:flex-row relative group/card">
        
        {/* Left Side: Dynamic Content Area */}
        <div className="flex-[1.2] p-10 md:p-16 flex flex-col relative z-10 overflow-hidden">
          {/* Shared Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-700 to-blue-500 rounded-2xl shadow-xl shadow-blue-500/40 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-800 uppercase italic">
                Opportunity<span className="text-blue-600">Hub</span>
              </span>
            </div>
            <nav className="flex items-center gap-2">
              <Link 
                to="/login" 
                className={`px-4 py-2 rounded-xl text-[0.7rem] font-bold uppercase tracking-widest transition-all ${location.pathname === '/login' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className={`px-4 py-2 rounded-xl text-[0.7rem] font-bold uppercase tracking-widest transition-all ${location.pathname === '/signup' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
              >
                Sign Up
              </Link>
            </nav>
          </div>

          {/* Animated Outlet */}
          <div className="flex-1 flex flex-col justify-center animate-in fade-in duration-700 slide-in-from-bottom-4">
            <Outlet key={location.pathname} />
          </div>

          <div className="mt-auto pt-8 flex items-center justify-between opacity-30 border-t border-slate-50">
            <div className="flex items-center gap-2">
              <span className="text-[0.6rem] font-bold text-slate-400 italic">Trusted by 2,000+ organizations worldwide</span>
            </div>
            <div className="flex items-center gap-4 text-[0.6rem] font-bold text-slate-400">
              <Link to="#" className="hover:text-slate-900">Security</Link>
              <Link to="#" className="hover:text-slate-900">Help Desk</Link>
            </div>
          </div>
        </div>

        {/* Right Side: Static Image (Shared) */}
        <div className="hidden md:block flex-1 relative overflow-hidden bg-blue-600">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-900/90 z-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-11"></div>
          <img
            src="/auth-panel.png"
            alt="Auth"
            className="absolute inset-0 w-full h-full object-cover saturate-[1.1] brightness-[0.85] contrast-[1.05]"
          />
          
          <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-blue-400/20 rounded-full blur-[140px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/20 rounded-full blur-[120px]"></div>
            <div className="absolute top-0 right-0 w-[1px] h-full bg-white/10 translate-x-[-100px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
