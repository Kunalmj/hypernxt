const SERVICES = [
  { id: "name", label: "Name Correction", icon: "" },
  { id: "address", label: "Address Update", icon: "" },
  { id: "mobile", label: "Mobile Number Update", icon: "" },
  { id: "lost", label: "Lost Aadhaar", icon: "" },
  { id: "other", label: "Other Issue", icon: "" },
];

const ServiceSelection = ({ value, onChange }) => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Service Selection</h2>
      <p className="text-sm text-gray-500 mb-4">What do you need help with today?</p>

      <div className="space-y-2">
        {SERVICES.map((s) => (
          <label
            key={s.id}
            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${value === s.id
                ? "border-blue-500 bg-white shadow-sm"
                : "border-blue-100 bg-white hover:border-blue-300"
              }`}
          >
            <input
              type="radio"
              name="service"
              value={s.id}
              checked={value === s.id}
              onChange={onChange}
              className="accent-blue-600"
            />
            <span className="text-base">{s.icon}</span>
            <span className="text-gray-700 font-medium">{s.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
