const URGENCY_LEVELS = [
  { val: "low",    label: "Low",    sub: "Resolved within 1 week",   color: "green"  },
  { val: "medium", label: "Medium", sub: "Resolved in 2–3 days",     color: "yellow" },
  { val: "high",   label: "High",   sub: "Urgent, within 48 hours",  color: "red"    },
];

const IssueDetails = ({ values, onChange }) => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Issue Details</h2>
      <p className="text-sm text-gray-500 mb-4">Describe your problem so we can help you faster.</p>

      <div className="space-y-4">
        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Issue Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="issueDescription"
            value={values.issueDescription}
            onChange={onChange}
            rows={4}
            required
            placeholder="Briefly describe the issue you are facing with your Aadhaar card..."
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          />
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Urgency Level <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {URGENCY_LEVELS.map(({ val, label, sub, color }) => (
              <label
                key={val}
                className={`p-3 rounded-xl border cursor-pointer transition text-center ${
                  values.urgency === val
                    ? `border-${color}-400 bg-${color}-50 shadow-sm`
                    : "border-blue-100 bg-white hover:border-blue-300"
                }`}
              >
                <input
                  type="radio"
                  name="urgency"
                  value={val}
                  checked={values.urgency === val}
                  onChange={onChange}
                  className="hidden"
                />
                <p className={`font-semibold text-sm ${values.urgency === val ? `text-${color}-600` : "text-gray-700"}`}>
                  {label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
