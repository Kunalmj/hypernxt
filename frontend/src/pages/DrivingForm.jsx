import React, { useState } from "react";

const DrivingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    age: "",
    gender: "",
    phone: "",
    email: "",

    address: "",
    state: "",
    city: "",
    pincode: "",

    learnerLicense: "",
    licenseType: "",
    vehicleType: "",

    ageProofType: "",
    ageProofFile: null,
    addressProofType: "",
    addressProofFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Driving License Application
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Fill in your personal details and upload required documents for verification.
        </p>
      </section>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto px-6 pb-20 space-y-8"
      >

        {/* PERSONAL DETAILS */}
        <div className="bg-blue-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Personal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="fullName" placeholder="Full Name" required onChange={handleChange} className="input shadow-sm bg-white p-1" />
            <input type="date" name="dob" required onChange={handleChange} className="input  bg-white shadow-sm p-1" />
            <input name="age" placeholder="Age" required onChange={handleChange} className="input shadow-sm bg-white p-1" />
            
            <select name="gender" required onChange={handleChange} className="input shadow-sm bg-white p-1">
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input name="phone" placeholder="Phone Number" required onChange={handleChange} className="input shadow-sm bg-white p-1" />
            <input name="email" placeholder="Email Address" onChange={handleChange} className="input shadow-sm bg-white p-1" />
          </div>
        </div>

        {/* ADDRESS DETAILS */}
        <div className="bg-blue-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Address Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <textarea name="address" placeholder="Full Address" required onChange={handleChange} className="input col-span-2 shadow-sm bg-white p-1" />
            <input name="city" placeholder="City" required onChange={handleChange} className="input shadow-sm bg-white p-1" />
            <input name="state" placeholder="State" required onChange={handleChange} className="input shadow-sm bg-white p-1" />
            <input name="pincode" placeholder="Pincode" required onChange={handleChange} className="input shadow-sm bg-white p-1" />
          </div>
        </div>

        {/* LICENSE DETAILS */}
        <div className="bg-blue-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            License Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="learnerLicense"
              placeholder="Learner's License Number"
              required
              onChange={handleChange}
              className="input shadow-sm bg-white p-1"
            />

            <select name="licenseType" required onChange={handleChange} className="input shadow-sm bg-white p-1">
              <option value="">License Type</option>
              <option>Learning</option>
              <option>Permanent</option>
            </select>

            <select name="vehicleType" required onChange={handleChange} className="input shadow-sm bg-white p-1">
              <option value="">Vehicle Type</option>
              <option>Two Wheeler</option>
              <option>Four Wheeler</option>
              <option>Commercial</option>
            </select>
          </div>
        </div>

        {/* DOCUMENT VERIFICATION */}
        <div className="bg-blue-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Document Verification
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <select name="ageProofType" required onChange={handleChange} className="input shadow-sm bg-white p-1">
              <option value="">Proof of Age</option>
              <option>Birth Certificate</option>
              <option>PAN Card</option>
              <option>10th Marksheet</option>
            </select>

            <input type="file" name="ageProofFile" required onChange={handleChange} className="input shadow-sm bg-white p-1" />

            <select name="addressProofType" required onChange={handleChange} className="input shadow-sm bg-white p-1">
              <option value="">Address Proof</option>
              <option>Aadhaar Card</option>
              <option>Passport</option>
              <option>Utility Bill</option>
            </select>

            <input type="file" name="addressProofFile" required onChange={handleChange} className="input shadow-sm bg-white p-1" />
          </div>
        </div>

        {/* SUBMIT */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Submit Application
        </button>

      </form>
    </div>
  );
};

export default DrivingForm;