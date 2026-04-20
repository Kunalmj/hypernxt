const DeclarationConsent = ({ checked, onChange }) => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Declaration &amp; Consent</h2>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          checked={checked}
          onChange={onChange}
          required
          className="mt-1 accent-blue-600 w-4 h-4 flex-shrink-0"
        />
        <span className="text-sm text-gray-600 leading-relaxed">
          I hereby declare that the information provided in this form is true and correct to the
          best of my knowledge. I understand that providing false information may result in
          rejection of the request or legal consequences as per applicable law.
        </span>
      </label>
    </div>
  );
};

export default DeclarationConsent;
