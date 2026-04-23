import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { startupSchemes } from "../data/startupData";

const StartupMSMEPortal = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(1);

  const [data, setData] = useState({
    stage: "",
    sector: "",
    location: "",
    fundingNeed: "",
    registrationStatus: "",
  });

  const sectionRefs = useRef({});

  // 🔥 STEP DETECTION (smooth sidebar highlight)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number(entry.target.dataset.step));
          }
        });
      },
      { threshold: 0.6, rootMargin: "-100px 0px -100px 0px" }
    );

    Object.values(sectionRefs.current).forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    { id: 1, title: "Stage" },
    { id: 2, title: "Sector" },
    { id: 3, title: "Location" },
    { id: 4, title: "Funding" },
    { id: 5, title: "Registration" },
  ];

  // 🔥 SUBMIT
  const handleSubmit = () => {
    const filtered = startupSchemes.filter((s) => {
      if (s.stage !== data.stage) return false;
      if (s.sector !== "General" && s.sector !== data.sector) return false;
      return true;
    });

    navigate("/startup-results", {
      state: { results: filtered },
    });
  };

  return (
    <div className="h-screen bg-[#f5f7fb] flex justify-center p-6 overflow-hidden">
      <div className="w-full max-w-6xl h-full bg-white rounded-lg flex overflow-hidden" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(37,99,235,0.09), 0 24px 64px rgba(37,99,235,0.06), inset 0 0 0 1px rgba(226,232,240,0.9)" }}>

        {/* SIDEBAR */}
        <aside className="w-80 bg-[#eaf2ff] p-10 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-10">Startup Portal</h2>

          <div className="relative flex flex-col gap-12">
            <div className="absolute left-[18px] top-6 bottom-6 w-[2px] bg-blue-200"></div>

            {steps.map((s) => (
              <div key={s.id} className="flex items-center gap-4 relative z-10">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500
                  ${activeStep === s.id
                      ? "bg-blue-600 text-white"
                      : activeStep > s.id
                        ? "bg-blue-100 text-blue-600"
                        : "bg-white border border-gray-300 text-gray-400"
                    }`}
                >
                  {activeStep > s.id ? "✓" : s.id}
                </div>

                <span className={`${activeStep === s.id ? "text-black" : "text-gray-400"}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 px-16 py-12 overflow-y-auto scroll-smooth">
          <div className="max-w-4xl mx-auto space-y-24 pb-32">

            {/* 1️⃣ STAGE */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1">
              <h1 className="text-3xl font-semibold text-center mb-2">
                What stage is your business at?
              </h1>
              <p className="text-center text-gray-500 mb-10">
                Select the stage that best describes your situation
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  "Idea Stage",
                  "Seed Stage",
                  "Early Stage",
                  "Growth Stage",
                  "Established MSME",
                ].map((s) => (
                  <div
                    key={s}
                    onClick={() => setData({ ...data, stage: s })}
                    className={`p-8 border rounded-xl text-center cursor-pointer transition-all duration-200
                      ${data.stage === s
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                      }`}
                    style={data.stage === s
                      ? { boxShadow: "0 0 0 1px #3b82f6, 0 4px 16px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.9)" }
                      : { boxShadow: "0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }
                    }
                  >
                    <h3 className="font-semibold">{s}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* 2️⃣ PROFILE */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2">
              <h2 className="text-2xl font-semibold text-center mb-10">
                Tell us about your business
              </h2>

              {/* SECTOR */}
              <div className="mb-10">
                <label className="font-medium">Sector</label>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[
                    "Technology",
                    "Manufacturing",
                    "Services",
                    "E-commerce",
                    "Healthcare",
                    "Agriculture",
                  ].map((s) => (
                    <button
                      key={s}
                      onClick={() => setData({ ...data, sector: s })}
                      className={`p-6 border rounded-xl
                        ${data.sector === s
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* 3️⃣ LOCATION */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="pt-8 border-t border-slate-100">
              <div>
                <label className="font-medium text-xl mb-4 block">Location</label>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {[
                    "Delhi NCR",
                    "Mumbai",
                    "Bangalore",
                    "Hyderabad",
                    "Chennai",
                    "Pune",
                    "All India",
                    "Other",
                  ].map((l) => (
                    <button
                      key={l}
                      onClick={() => setData({ ...data, location: l })}
                      className={`p-3 border rounded-lg
                        ${data.location === l
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200"
                        }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* 4️⃣ FUNDING */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="pt-8 border-t border-slate-100">
              <h2 className="text-2xl font-semibold text-center mb-10">
                Funding Requirements
              </h2>

              {/* FUNDING */}
              <div className="mb-10">
                <label className="font-medium">Funding Needed</label>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[
                    "Under ₹5 Lakhs",
                    "₹5-20 Lakhs",
                    "₹20-50 Lakhs",
                    "₹50L - ₹1Cr",
                    "Above ₹1Cr",
                    "Non-Monetary",
                  ].map((f) => (
                    <button
                      key={f}
                      onClick={() => setData({ ...data, fundingNeed: f })}
                      className={`p-4 border rounded-lg
                        ${data.fundingNeed === f
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200"
                        }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* 5️⃣ REGISTRATION */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="pt-8 border-t border-slate-100">
              <div>
                <label className="font-medium text-xl mb-4 block">Registration Status</label>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    "Not Registered Yet",
                    "Registered Startup",
                    "MSME Registered",
                    "Private Limited Company",
                  ].map((r) => (
                    <button
                      key={r}
                      onClick={() => setData({ ...data, registrationStatus: r })}
                      className={`p-6 border rounded-xl text-left
                        ${data.registrationStatus === r
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200"
                        }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* SUBMIT */}
              <div className="flex justify-end mt-16">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Find Opportunities →
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default StartupMSMEPortal;