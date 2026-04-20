const AadhaarIdentification = ({ value, onChange }) => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Aadhaar Identification</h2>
      <p className="text-sm text-gray-500 mb-4">Provide your Aadhaar number to proceed.</p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Aadhaar Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="aadhaarNumber"
          value={value}
          onChange={onChange}
          placeholder="XXXX XXXX XXXX"
          maxLength={14}
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <p className="text-xs text-gray-400 mt-1">12-digit number printed on your Aadhaar card</p>
      </div>
    </div>
  );
};

export default AadhaarIdentification;
