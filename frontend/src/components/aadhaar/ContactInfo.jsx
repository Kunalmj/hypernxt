const ContactInfo = ({ values, onChange }) => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Contact Information</h2>
      <p className="text-sm text-gray-500 mb-4">We'll use this to update you on your request status.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={values.mobile}
            onChange={onChange}
            placeholder="10-digit mobile number"
            maxLength={10}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address{" "}
            <span className="text-gray-400 text-xs font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="you@example.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
