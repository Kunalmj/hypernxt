function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold text-blue-600">LegalDoc</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Simplifying legal document creation with a fast and secure process.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">Services</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Services</h3>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li>Aadhaar Card</li>
              <li>Voter ID</li>
              <li>Driving License</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-400">
          © 2026 LegalDoc Hub. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;