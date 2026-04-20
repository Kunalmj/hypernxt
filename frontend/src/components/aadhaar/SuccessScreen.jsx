const INITIAL_FORM = {
  service: "",
  fullName: "",
  dob: "",
  gender: "",
  aadhaarNumber: "",
  issueDescription: "",
  urgency: "low",
  mobile: "",
  email: "",
  consent: false,
};

const SuccessScreen = ({ onReset }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center max-w-md w-full shadow-sm">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h2>
        <p className="text-gray-600 mb-6">
          Your Aadhaar service request has been received. Our team will get back to you within{" "}
          <span className="font-medium text-blue-600">48 hours</span>.
        </p>
        <button
          onClick={() => onReset(INITIAL_FORM)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Submit Another Request
        </button>
      </div>
    </div>
  );
};

export { INITIAL_FORM };
export default SuccessScreen;
