import React from "react";
import { useNavigate } from "react-router-dom";
import { IconAadhaar, IconVoter, IconDL } from "./Icons";

const services = [
  { Icon: IconAadhaar, title: "Aadhaar Card",     desc: "Apply or update your Aadhaar details with step-by-step guidance.", count: "12 Steps", route: "/aadharform" },
  { Icon: IconVoter,   title: "Voter ID",          desc: "Register or update your voter details quickly and easily.",        count: "10 Steps", route: "/voterform" },
  { Icon: IconDL,      title: "Driving License",   desc: "Apply for learner or permanent driving license with ease.",        count: "14 Steps", route: "/drivingform" },
];

const BrowseServices = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Wave → Browse */}
      <div className="bg-[#f0f7ff] leading-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-[40px] md:h-[56px]">
          <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,8 1440,28 L1440,56 L0,56 Z" fill="white" />
        </svg>
      </div>

      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-[1100px] mx-auto text-center md:text-left">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-[1.6rem] md:text-[1.9rem] font-extrabold text-[#0f172a] mb-2">Browse All Services</h2>
            <p className="text-[#64748b] text-[0.85rem] md:text-[0.93rem] max-w-lg mx-auto">Select a document type to start your guided application</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map(({ Icon: SvcIcon, title, desc, count, route }) => (
              <div 
                key={title}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col justify-between shadow-sm transition-all cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-[#bfdbfe]"
                style={{ transition: "all 0.25s" }}
              >
                <div>
                  <div className="flex items-start justify-between mb-5 px-1">
                    <div className="w-12 h-12 bg-[#eff6ff] rounded-2xl flex items-center justify-center">
                      <SvcIcon size={24} color="#2563eb" />
                    </div>
                    <span className="bg-[#f0f9ff] text-[#0369a1] text-[0.72rem] font-bold px-3 py-1 rounded-full border border-[#bae6fd]">{count}</span>
                  </div>
                  <h3 className="text-[1.05rem] font-bold text-[#0f172a] mb-2">{title}</h3>
                  <p className="text-[0.85rem] text-[#64748b] leading-relaxed mb-0">{desc}</p>
                </div>
                <button 
                  onClick={() => navigate(route)}
                  className="mt-6 inline-flex items-center gap-1 text-[#1d4ed8] text-[0.85rem] font-bold bg-transparent border-none cursor-pointer p-0 transition-all group"
                >
                  Apply Now <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <button className="bg-[#1e3a8a] text-white border-none px-8 py-3.5 rounded-xl font-bold text-sm cursor-pointer shadow-md transition-colors hover:bg-[#1e40af]">
              View All Services →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowseServices;
