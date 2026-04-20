import { useState } from "react";
import ServiceSelection     from "../components/aadhaar/ServiceSelection";
import PersonalDetails      from "../components/aadhaar/PersonalDetails";
import AadhaarIdentification from "../components/aadhaar/AadhaarIdentification";
import IssueDetails         from "../components/aadhaar/IssueDetails";
import ContactInfo          from "../components/aadhaar/ContactInfo";
import DeclarationConsent   from "../components/aadhaar/DeclarationConsent";
import SuccessScreen, { INITIAL_FORM } from "../components/aadhaar/SuccessScreen";

const AadhaarForm = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessScreen onReset={handleReset} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-3 border border-blue-100">
            Aadhaar Services
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Service Request Form</h1>
          <p className="mt-3 text-gray-500">
            Fill in the details below and our team will resolve your issue within 48 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <ServiceSelection      value={form.service}          onChange={handleChange} />
          <PersonalDetails       values={form}                 onChange={handleChange} />
          <AadhaarIdentification value={form.aadhaarNumber}    onChange={handleChange} />
          <IssueDetails          values={form}                 onChange={handleChange} />
          <ContactInfo           values={form}                 onChange={handleChange} />
          <DeclarationConsent    checked={form.consent}        onChange={handleChange} />

          {/* Form Actions */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium text-sm"
            >
              Reset Form
            </button>
            <button
              type="submit"
              className="px-8 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm shadow-sm"
            >
              Submit Request →
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AadhaarForm;
