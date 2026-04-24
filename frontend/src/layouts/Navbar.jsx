import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      padding: "12px 24px",
      display: "flex",
      justifyContent: "center",
      pointerEvents: "none",
    }}>
      <div style={{ 
        pointerEvents: "auto",
        maxWidth:"1000px", 
        width: "100%", 
        height:"64px", 
        display:"flex", 
        alignItems:"center", 
        justifyContent:"space-between",
        padding: "0 12px 0 24px",
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(191,219,254,0.6)",
        boxShadow: "0 10px 40px rgba(30,58,138,0.08), 0 1px 3px rgba(0,0,0,0.05)",
        borderRadius: "9999px"
      }}>

        {/* LOGO */}
        <Link to="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ width:"40px", height:"40px", background:"#1e3a8a", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 2px 10px rgba(30,58,138,0.25)" }}>
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              <path d="M6 5h10M6 9h7M6 13h10M6 17h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize:"1.05rem", fontWeight:"800", lineHeight:"1.1", color:"#1e3a8a" }}>OpportunityHub</div>
            <div style={{ fontSize:"0.65rem", color:"#6b7280", fontWeight:"500", lineHeight:"1" }}>India's Opportunity Portal</div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div style={{ display:"flex", alignItems:"center", gap:"32px" }} className="hide-mobile">
          {[
            { to: "/", label: "Home", end: true },
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              style={({ isActive }) => ({
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "600",
                color: isActive ? "#1d4ed8" : "#374151",
                borderBottom: isActive ? "2px solid #1d4ed8" : "2px solid transparent",
                paddingBottom: "4px",
                transition: "all 0.2s",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div style={{ display:"flex", alignItems:"center", gap:"12px" }} className="hide-mobile">
          {/* Log In */}
          <Link
            to="/login"
            style={{ background:"transparent", color:"#1e3a8a", border:"none", padding:"9px 16px", borderRadius:"8px", fontSize:"0.875rem", fontWeight:"700", cursor:"pointer", textDecoration:"none", transition:"opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity="0.8"}
            onMouseLeave={e => e.currentTarget.style.opacity="1"}
          >
            Log In
          </Link>

          {/* Sign Up */}
          <Link
            to="/signup"
            style={{ background:"#1e3a8a", color:"white", border:"none", padding:"10px 24px", borderRadius:"9999px", fontSize:"0.875rem", fontWeight:"700", cursor:"pointer", textDecoration:"none", transition:"background 0.2s", boxShadow:"0 2px 8px rgba(30,58,138,0.25)", display:"inline-block" }}
            onMouseEnter={e => e.currentTarget.style.background="#1e40af"}
            onMouseLeave={e => e.currentTarget.style.background="#1e3a8a"}
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          style={{ display:"none", background:"none", border:"none", fontSize:"1.5rem", cursor:"pointer", color:"#374151" }}
          className="show-mobile"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={{ pointerEvents:"auto", position: "absolute", top: "90px", left: "24px", right: "24px", background:"rgba(255,255,255,0.96)", backdropFilter:"blur(16px)", border:"1px solid rgba(191,219,254,0.5)", borderRadius:"24px", padding:"16px 24px 20px", boxShadow:"0 20px 40px rgba(0,0,0,0.1)" }}>
          {[
            { to: "/", label: "🏠 Home" },
            { to: "/scholarships", label: "🎓 Scholarships" },
            { to: "/startup-msme", label: "💼 Startup & MSME" },
            { to: "/agriculture", label: "🌾 Agriculture" },
            { to: "/tenders", label: "📄 Tenders" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ display:"block", padding:"10px 0", color:"#374151", textDecoration:"none", fontSize:"0.9rem", fontWeight:"500", borderBottom:"1px solid #f0f4ff" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display:"flex", gap:"10px", marginTop:"12px" }}>
            <Link to="/login" style={{ flex:1, background:"transparent", color:"#1e3a8a", border:"1px solid #1e3a8a", padding:"11px", borderRadius:"8px", fontWeight:"700", fontSize:"0.9rem", cursor:"pointer", textDecoration:"none", textAlign:"center" }}>
              Log In
            </Link>
            <Link to="/signup" style={{ flex:1, background:"#1e3a8a", color:"white", border:"none", padding:"11px", borderRadius:"8px", fontWeight:"700", fontSize:"0.9rem", cursor:"pointer", textDecoration:"none", textAlign:"center" }}>
              Sign Up
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
