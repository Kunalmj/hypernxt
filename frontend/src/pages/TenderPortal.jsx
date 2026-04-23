import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tenders } from "../data/tenderData";

const TenderPortal = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);

  const [data, setData] = useState({
    type: "",
    industry: "",
    budget: "",
    location: "",
    orgType: "",
  });

  const sectionRefs = useRef({});

  // 🔥 Scroll-based step highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number(entry.target.dataset.step));
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs.current).forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    { id: 1, title: "Type" },
    { id: 2, title: "Industry" },
    { id: 3, title: "Budget" },
    { id: 4, title: "Location" },
    { id: 5, title: "Organization" },
  ];

  // 🔥 Submit
  const handleSubmit = () => {
    const filtered = tenders.filter((t) => {
      if (data.type && t.type !== data.type) return false;
      if (data.industry && t.industry !== "General" && t.industry !== data.industry) return false;
      return true;
    });

    navigate("/tender-results", { state: { results: filtered } });
  };

  return (
    <div className="h-screen bg-[#f8fafc] flex justify-center p-6">
      <div className="w-full max-w-6xl h-full bg-white rounded-xl flex overflow-hidden" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(37,99,235,0.09), 0 24px 64px rgba(37,99,235,0.06), inset 0 0 0 1px rgba(226,232,240,0.9)" }}>

        {/* ================= SIDEBAR ================= */}
        <aside className="w-80 bg-[#eff6ff] p-10 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-10">Tender Portal</h2>

          <div className="relative flex flex-col gap-12">
            <div className="absolute left-[18px] top-6 bottom-6 w-[2px] bg-blue-200"></div>

            {steps.map((s) => (
              <div key={s.id} className="flex items-center gap-4 relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${activeStep === s.id
                      ? "bg-blue-600 text-white"
                      : activeStep > s.id
                        ? "bg-blue-100 text-blue-600"
                        : "bg-white border text-gray-400"
                    }`}
                >
                  {activeStep > s.id ? "✓" : s.id}
                </div>

                <span
                  className={`transition ${activeStep === s.id ? "text-black" : "text-gray-400"
                    }`}
                >
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="flex-1 px-16 py-12 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-24 pb-32">

            {/* ================= SECTION 1 ================= */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1">
              <h1 className="text-3xl font-bold text-center mb-12">
                Tell us about your business capabilities
              </h1>

              <div className="grid grid-cols-3 gap-6">
                {["Supply", "Works", "Services"].map((t) => (
                  <div
                    key={t}
                    onClick={() => setData({ ...data, type: t })}
                    className={`p-8 border rounded-xl text-center cursor-pointer transition-all duration-200
                      ${data.type === t
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                      }`}
                    style={data.type === t
                      ? { boxShadow: "0 0 0 1px #3b82f6, 0 4px 16px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.9)" }
                      : { boxShadow: "0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }
                    }
                  >
                    <p className="font-semibold">{t}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= SECTION 2 ================= */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2">
              <h2 className="text-2xl font-bold text-center mb-12">
                Industry & Sector
              </h2>

              <div className="grid grid-cols-4 gap-4">
                {[
                  "Information Technology",
                  "Construction",
                  "Healthcare",
                  "Consulting",
                  "Manufacturing",
                  "Software Development",
                  "Maintenance",
                  "Education",
                ].map((i) => (
                  <button
                    key={i}
                    onClick={() => setData({ ...data, industry: i })}
                    className={`p-3 border rounded-lg transition
                      ${data.industry === i
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </section>

            {/* ================= SECTION 3 ================= */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="pt-8 border-t border-slate-100">
              <h2 className="text-3xl font-bold text-center mb-14">
                Budget & Preferences
              </h2>

              <div className="space-y-16">

                {/* 🔹 Budget */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-gray-700">
                    Budget Range
                  </h3>

                  <div className="grid grid-cols-2 gap-6">
                    {[
                      "Under ₹50 Lakhs",
                      "₹50L - ₹2 Crores",
                      "₹2-10 Crores",
                      "Above ₹10 Crores",
                    ].map((b) => (
                      <button
                        key={b}
                        onClick={() => setData({ ...data, budget: b })}
                        className={`p-6 rounded-xl border transition
                          ${data.budget === b
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                          }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ================= SECTION 4 ================= */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="pt-8 border-t border-slate-100">
              <div className="space-y-16">
                {/* 🔹 Location */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-gray-700">
                    Preferred Location
                  </h3>

                  <div className="grid grid-cols-4 gap-4">
                    {[
                      "Delhi NCR",
                      "Maharashtra",
                      "Karnataka",
                      "Tamil Nadu",
                      "Gujarat",
                      "West Bengal",
                      "Pan India",
                      "Multiple Locations",
                    ].map((l) => (
                      <button
                        key={l}
                        onClick={() => setData({ ...data, location: l })}
                        className={`p-4 rounded-lg border transition
                          ${data.location === l
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                          }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ================= SECTION 5 ================= */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="pt-8 border-t border-slate-100">
              <div className="space-y-16">
                {/* 🔹 Organization */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-gray-700">
                    Organization Type
                  </h3>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      "Central Government",
                      "State Government",
                      "PSU",
                      "Autonomous Bodies",
                      "Municipal Corporation",
                      "All",
                    ].map((o) => (
                      <button
                        key={o}
                        onClick={() => setData({ ...data, orgType: o })}
                        className={`p-4 rounded-lg border transition
                          ${data.orgType === o
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                          }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* 🔻 Submit */}
              <div className="flex justify-end mt-16">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Find Tenders →
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default TenderPortal;