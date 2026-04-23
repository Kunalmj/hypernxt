import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { agricultureSchemes } from "../data/agricultureData";

const AgriculturePortal = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);

  const [data, setData] = useState({
    farmerType: "",
    landSize: "",
    state: "",
    support: "",
  });

  const sectionRefs = useRef({});

  // Smooth step detection
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
    { id: 1, title: "Farmer Type" },
    { id: 2, title: "Land Size" },
    { id: 3, title: "State / Region" },
    { id: 4, title: "Support Required" },
    { id: 5, title: "Submit" },
  ];

  // 🔥 SUBMIT → NAVIGATE
  const handleSubmit = () => {
    const filtered = agricultureSchemes.filter((s) => {
      if (s.farmerType !== "General" && s.farmerType !== data.farmerType) return false;
      if (s.landSize !== "Any" && s.landSize !== data.landSize) return false;
      if (s.state !== "General" && s.state !== data.state) return false;
      return true;
    });

    navigate("/agri-results", {
      state: { results: filtered },
    });
  };

  return (
    <div className="h-screen bg-[#f5f7fb] flex justify-center p-6 overflow-hidden">
      <div className="w-full max-w-6xl h-full bg-white rounded-lg flex overflow-hidden" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(37,99,235,0.09), 0 24px 64px rgba(37,99,235,0.06), inset 0 0 0 1px rgba(226,232,240,0.9)" }}>

        {/* SIDEBAR */}
        <aside className="w-80 bg-[#eaf2ff] p-10 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-10">Agriculture Portal</h2>

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

            {/* 1️⃣ FARMER TYPE */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1">
              <h1 className="text-3xl font-semibold text-center mb-2">
                What type of farmer are you?
              </h1>
              <p className="text-center text-gray-500 mb-10">
                Select based on your land holding size
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { id: "Small & Marginal", sub: "Up to 2 hectares" },
                  { id: "Medium Farmer", sub: "2-10 hectares" },
                  { id: "Large Farmer", sub: "Above 10 hectares" },
                ].map((f) => (
                  <div
                    key={f.id}
                    onClick={() => setData({ ...data, farmerType: f.id })}
                    className={`p-8 border rounded-xl text-center cursor-pointer transition-all duration-200
                      ${data.farmerType === f.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                      }`}
                    style={data.farmerType === f.id
                      ? { boxShadow: "0 0 0 1px #3b82f6, 0 4px 16px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.9)" }
                      : { boxShadow: "0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }
                    }
                  >
                    <h3 className="text-lg font-semibold">{f.id}</h3>
                    <p className="text-sm text-gray-500">{f.sub}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2️⃣ FARM DETAILS */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2">
              <h2 className="text-2xl font-semibold mb-8 text-center">
                Tell us about your farm
              </h2>

              {/* LAND SIZE */}
              <div className="mb-10">
                <label className="font-medium">Land Size</label>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {[
                    "Less than 1 hectare",
                    "1-2 hectares",
                    "2-5 hectares",
                    "5-10 hectares",
                    "10-20 hectares",
                    "Above 20 hectares",
                  ].map((l) => (
                    <button
                      key={l}
                      onClick={() => setData({ ...data, landSize: l })}
                      className={`p-3 border rounded-lg
                        ${data.landSize === l
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

            {/* 3️⃣ STATE */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="pt-8 border-t border-slate-100">
              <div>
                <label className="font-medium text-xl mb-4 block">State / Region</label>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {[
                    "Punjab", "Haryana", "Uttar Pradesh", "Maharashtra",
                    "Karnataka", "Tamil Nadu", "West Bengal", "All India"
                  ].map((s) => (
                    <button
                      key={s}
                      onClick={() => setData({ ...data, state: s })}
                      className={`p-3 border rounded-lg
                        ${data.state === s
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

            {/* 4️⃣ SUPPORT */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="pt-8 border-t border-slate-100">
              <h2 className="text-3xl font-semibold text-center mb-10">
                What type of support do you need?
              </h2>

              <div className="grid grid-cols-3 gap-6">
                {[
                  "Financial Support",
                  "Crop Insurance",
                  "Irrigation",
                  "Organic Farming",
                  "Solar/Energy",
                  "Credit/Loan",
                ].map((s) => (
                  <button
                    key={s}
                    onClick={() => setData({ ...data, support: s })}
                    className={`p-8 border rounded-xl
                      ${data.support === s
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </section>

            {/* 5️⃣ SUBMIT */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="pt-8 border-t border-slate-100">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Review and Find Schemes
              </h2>
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Find Schemes →
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default AgriculturePortal;