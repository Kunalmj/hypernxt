import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 min-h-screen">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Create Legal Documents Easily
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Generate essential documents like Aadhaar Card, Voter ID, and Driving License 
          quickly with a simple and guided process.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">
            Choose a Service
          </h2>
          <p className="text-gray-500 mt-2">
            Select a document to start your application
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Aadhaar Card */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col justify-between min-h-65">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Aadhar Card
              </h3>
              <p className="text-gray-600">
                Apply or update your Aadhar details with step-by-step guidance.
              </p>
            </div>
            <button
              onClick={() => navigate("/aadharform")}
              className="mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>

          {/* Voter ID */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col justify-between min-h-65">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Voter ID
              </h3>
              <p className="text-gray-600">
                Register or update your voter details quickly and easily.
              </p>
            </div>
            <button
              onClick={() => navigate("/voterform")}
              className="mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>

          {/* Driving License */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col justify-between min-h-65">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Driving License
              </h3>
              <p className="text-gray-600">
                Apply for learner or permanent driving license with ease.
              </p>
            </div>
            <button
              onClick={() => navigate("/drivingform")}
              className="mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;