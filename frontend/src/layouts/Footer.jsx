import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-extrabold text-white mb-3">
              <span className="bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded-lg">OH</span>
              OpportunityHub
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              India's trusted portal for Scholarships, Grants, Tenders, and
              Startup opportunities — simple, secure, and guided.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Home", "About Us", "Services", "Contact Us"].map((item) => (
                <li key={item} className="hover:text-blue-400 cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "Scholarships", to: "/scholarships" },
                { label: "Startup & MSME", to: "/startup-msme" },
                { label: "Agriculture", to: "/agriculture" },
                { label: "Tenders", to: "/tenders" },
                { label: "Women Programs", to: "/women-programs" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="hover:text-blue-400 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-3">
              Get the latest updates on new services and features.
            </p>
            <div className="flex rounded-lg overflow-hidden border border-gray-700">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 text-sm text-gray-200 px-3 py-2.5 outline-none placeholder-gray-500"
              />
              <button className="bg-blue-600 text-white text-sm font-semibold px-4 hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
            <div className="mt-5 space-y-1.5 text-sm text-gray-400">
              <div>📧 support@opportunityhub.in</div>
              <div>📞 +91 1800-XXX-XXXX</div>
              <div>🕐 Mon–Sat, 9:00 AM – 6:00 PM</div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 OpportunityHub. All rights reserved.</span>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item) => (
              <span key={item} className="hover:text-blue-400 cursor-pointer transition">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;