import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          LegalDoc
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Home
          </Link>

          <Link
            to="/Services"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Services
          </Link>

          <Link
            to="/AboutUs"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            About Us
          </Link>

          <Link
            to="/Contact Us"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Contact Us
          </Link>

          {/* SEARCH */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1 focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="text"
              placeholder="Search"
              className="outline-none px-2 py-1 text-sm"
            />
            <button className="text-blue-600">🔍</button>
          </div>

          {/* CTA BUTTON */}
          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              LOGIN
            </button>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              SIGN UP
            </button>
          </div>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/VoterIDForm"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Voter ID
          </Link>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full text-sm"
            />
            <button className="text-blue-600">🔍</button>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;