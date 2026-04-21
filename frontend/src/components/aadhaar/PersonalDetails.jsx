const GENDERS = ["Male", "Female", "Other"];

const PersonalDetails = ({ values, onChange }) => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Personal Details</h2>
      <p className="text-sm text-gray-500 mb-4">Basic information to identify you.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={onChange}
            placeholder="As per your Aadhaar card"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dob"
            value={values.dob}
            onChange={onChange}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3">
            {GENDERS.map((g) => (
              <label
                key={g}
                className={`flex-1 text-center py-2 rounded-xl border text-sm cursor-pointer transition ${
                  values.gender === g
                    ? "border-blue-500 bg-white text-blue-600 font-medium shadow-sm"
                    : "border-blue-100 bg-white text-gray-600 hover:border-blue-300"
                }`}
              >
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={values.gender === g}
                  onChange={onChange}
                  className="hidden"
                />
                {g}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
