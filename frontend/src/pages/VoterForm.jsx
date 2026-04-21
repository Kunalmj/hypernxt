import React, { useState } from 'react';

const VoterForm = () => {
  const [formData, setFormData] = useState({
    requestType: 'New Voter Registration',
    sameAsPermanent: false,
    fullName: '',
    gender: '',
    mobile: '',
    idProof: 'Aadhaar Card'
  });

  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">Voter Service Portal</h1>
          <p className="mt-3 text-lg text-slate-500">Fast, Secure, and Transparent Voter Registration</p>
        </header>

        <form className="space-y-8" onSubmit={(e) => { e.preventDefault() }}>
          {/* 1. Basic Personal Details */}
          <section className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center gap-3">
              <span className="text-2xl">🪪</span>
              <h2 className="text-xl font-bold text-blue-900">1. Basic Personal Details</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Mobile Number</label>
                <div className="flex gap-2">
                  <input required type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} className="flex-1 px-4 py-2 rounded-lg border border-slate-200 outline-none" placeholder="+91 0000000000" />
                  <button type="button" onClick={() => setOtpSent(true)} className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200">{otpSent ? 'Resend' : 'Send OTP'}</button>
                </div>
              </div>
              {otpSent && (
                <div className="space-y-2 animate-in fade-in slide-in-from-right-2">
                  <label className="text-sm font-semibold text-blue-600">Enter OTP</label>
                  <input type="text" maxLength="6" className="w-full px-4 py-2 rounded-lg border border-blue-200 bg-blue-50 outline-none" placeholder="000000" />
                </div>
              )}
            </div>
          </section>

          {/* 2. Address Details */}
          <section className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center gap-3">
              <span className="text-2xl">🏠</span>
              <h2 className="text-xl font-bold text-blue-900">2. Address Details</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["House No / Street", "Village/City", "District", "State", "PIN Code"].map((l, i) => (
                  <div key={l} className={`space-y-2 ${i === 0 ? 'md:col-span-2' : ''}`}>
                    <label className="text-sm font-semibold text-slate-700">{l}</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <input type="checkbox" id="same" name="sameAsPermanent" checked={formData.sameAsPermanent} onChange={handleInputChange} className="w-5 h-5 rounded text-blue-600" />
                <label htmlFor="same" className="font-medium text-slate-700">Current address is same as permanent address</label>
              </div>
            </div>
          </section>

          {/* 5. Request Type & Conditional Correction */}
          <section className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center gap-3">
              <span className="text-2xl">🔄</span>
              <h2 className="text-xl font-bold text-blue-900">5. Type of Request</h2>
            </div>
            <div className="p-6 space-y-6">
              <select name="requestType" value={formData.requestType} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500">
                <option>New Voter Registration</option>
                <option>Correction in Existing Voter Card</option>
                <option>Change of Address</option>
                <option>Replacement of Lost Card</option>
              </select>

              {formData.requestType === 'Correction in Existing Voter Card' && (
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 space-y-4 animate-in zoom-in-95">
                  <h3 className="font-bold text-blue-800">✏️ Correction Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Old Value" className="px-4 py-2 rounded-lg border border-blue-200" />
                    <input type="text" placeholder="New Value" className="px-4 py-2 rounded-lg border border-blue-200" />
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 3. Identity & 8. Photo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center gap-3">
                <span className="text-2xl">🆔</span>
                <h2 className="text-lg font-bold text-blue-900">3. Identity Proof</h2>
              </div>
              <div className="p-6 space-y-4">
                <select name="idProof" value={formData.idProof} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-slate-200">
                  <option>Aadhaar Card</option>
                  <option>Passport</option>
                  <option>Driving License</option>
                </select>
                <input type="file" className="w-full text-xs outline-dashed outline-gray-300 p-2 hover:cursor-pointer" />
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center gap-3">
                <span className="text-2xl">📸</span>
                <h2 className="text-lg font-bold text-blue-900">8. Photo</h2>
              </div>
              <div className="p-6 flex items-center gap-4">
                <input type="file" className="w-full text-xs outline-dashed outline-gray-300 p-2 hover:cursor-pointer" />
                <div className="w-16 h-20 bg-slate-100 rounded border-2 border-dashed border-slate-200 flex items-center justify-center text-[10px] text-slate-400">Preview</div>
              </div>
            </section>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white text-xl font-bold py-4 rounded-2xl shadow-xl hover:bg-blue-700 transition-all active:scale-95">Submit Application 🚀</button>
        </form>
      </div>
    </div>
  );
};

export default VoterForm;
