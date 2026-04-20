import React from "react";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Create Legal Documents Easily
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A simple and reliable platform to generate essential documents like 
          Aadhaar Card, Voter ID, Driving License and more — all in one place 
          with guided steps.
        </p>

        <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-500 mt-2">
            Everything you need to create and manage your legal documents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 rounded-2xl p-8 hover:shadow-lg transition transform hover:-translate-y-1 min-h-65"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Why Choose Us
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Our platform simplifies the process of creating essential legal 
          documents by providing a user-friendly interface, guided workflows, 
          and secure handling of your data. Whether you're applying for a new 
          document or updating an existing one, we make the process smooth and fast.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold text-gray-900">
          Start Creating Your Documents Today
        </h2>

        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
          Begin Now
        </button>
      </section>

    </div>
  );
};

const services = [
  {
    title: "Aadhaar Card",
    desc: "Apply, update or correct your Aadhaar details easily with guided steps.",
  },
  {
    title: "Voter ID",
    desc: "Register or update your Voter ID quickly without complicated procedures.",
  },
  {
    title: "Driving License",
    desc: "Apply for learner or permanent driving licenses with a smooth process.",
  },
  {
    title: "PAN Card",
    desc: "Generate or update your PAN card details securely and quickly.",
  },
  {
    title: "Document Tracking",
    desc: "Track your application status in real-time with instant updates.",
  },
  {
    title: "Secure Storage",
    desc: "Keep your documents safe with encrypted and secure storage.",
  },
];

export default Home;