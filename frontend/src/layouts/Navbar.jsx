import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background:"white", borderBottom:"1px solid #e5e7eb", position:"sticky", top:0, zIndex:50 }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px", height:"64px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>

        {/* LOGO */}
        <Link to="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ width:"42px", height:"42px", background:"linear-gradient(135deg, #4f46e5, #7c3aed)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.5" />
              <path d="M7 11 L10 14 L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize:"1.05rem", fontWeight:"800", color:"#111827", lineHeight:"1.1" }}>LegalDoc</div>
            <div style={{ fontSize:"0.65rem", color:"#6b7280", fontWeight:"500", lineHeight:"1" }}>India's Document Portal</div>
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
                color: isActive ? "#4f46e5" : "#374151",
                borderBottom: isActive ? "2px solid #4f46e5" : "2px solid transparent",
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
          {/* Saved */}
          <button style={{ display:"flex", alignItems:"center", gap:"5px", background:"none", border:"none", cursor:"pointer", color:"#6b7280", fontSize:"0.85rem", fontWeight:"500" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Saved
          </button>

          {/* Bell */}
          <button style={{ position:"relative", background:"none", border:"none", cursor:"pointer", color:"#6b7280", padding:"4px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span style={{ position:"absolute", top:"2px", right:"2px", width:"8px", height:"8px", background:"#ef4444", borderRadius:"50%", border:"1.5px solid white" }} />
          </button>

          {/* Sign In */}
          <button
            style={{ background:"#4f46e5", color:"white", border:"none", padding:"9px 22px", borderRadius:"8px", fontSize:"0.875rem", fontWeight:"700", cursor:"pointer", transition:"background 0.2s", boxShadow:"0 2px 8px rgba(79,70,229,0.25)" }}
            onMouseEnter={e => e.target.style.background="#4338ca"}
            onMouseLeave={e => e.target.style.background="#4f46e5"}
          >
            Sign In
          </button>
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
        <div style={{ background:"white", borderTop:"1px solid #f3f4f6", padding:"16px 24px 20px" }}>
          {[
            { to: "/", label: "🏠 Home" },
            { to: "/aadharform", label: "🪪 Aadhaar Card" },
            { to: "/voterform", label: "🗳️ Voter ID" },
            { to: "/drivingform", label: "🚗 Driving License" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ display:"block", padding:"10px 0", color:"#374151", textDecoration:"none", fontSize:"0.9rem", fontWeight:"500", borderBottom:"1px solid #f9fafb" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button style={{ marginTop:"12px", width:"100%", background:"#4f46e5", color:"white", border:"none", padding:"11px", borderRadius:"8px", fontWeight:"700", fontSize:"0.9rem", cursor:"pointer" }}>
            Sign In
          </button>
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