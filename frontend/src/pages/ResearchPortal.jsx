import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { researchGrants } from "../data/researchData";

const ResearchPortal = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);

  const [data, setData] = useState({
    type: "",
    field: "",
    funding: "",
    stage: "",
    institution: "",
  });

  const sectionRefs = useRef({});

  // 🔥 Scroll step sync
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
    { id: 1, title: "Grant Type" },
    { id: 2, title: "Research Field" },
    { id: 3, title: "Career Stage" },
    { id: 4, title: "Institution Type" },
    { id: 5, title: "Funding Required" },
  ];

  // 🔥 Submit
  const handleSubmit = () => {
    const filtered = researchGrants.filter((g) => {
      if (g.type !== data.type) return false;
      if (g.field !== data.field) return false;
      return true;
    });

    navigate("/research-results", { state: { results: filtered } });
  };

  return (
    <div className="h-screen bg-[#f8fafc] flex justify-center p-6">
      <div className="w-full max-w-6xl h-full bg-white rounded-xl flex overflow-hidden" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(37,99,235,0.09), 0 24px 64px rgba(37,99,235,0.06), inset 0 0 0 1px rgba(226,232,240,0.9)" }}>

        {/* SIDEBAR */}
        <aside className="w-80 bg-[#eff6ff] p-10 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-10">Research Portal</h2>

          <div className="relative flex flex-col gap-12">
            <div className="absolute left-[18px] top-6 bottom-6 w-[2px] bg-blue-200"></div>

            {steps.map((s) => (
              <div key={s.id} className="flex items-center gap-4 relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
                  ${activeStep === s.id
                      ? "bg-blue-600 text-white"
                      : activeStep > s.id
                        ? "bg-blue-100 text-blue-600"
                        : "bg-white border text-gray-400"
                    }`}
                >
                  {activeStep > s.id ? "✓" : s.id}
                </div>
                <span className={activeStep === s.id ? "text-black" : "text-gray-400"}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 px-16 py-12 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-24 pb-32">

            {/* SECTION 1 */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1">
              <h1 className="text-3xl font-bold text-center mb-10">
                Tell us about your research
              </h1>

              {/* TYPE */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {["PhD Scholar", "Early Career", "Faculty", "Medical Researcher", "Industry Researcher"].map((t) => (
                  <div
                    key={t}
                    onClick={() => setData({ ...data, type: t })}
                    className={`p-6 border rounded-xl text-center cursor-pointer transition-all duration-200
                      ${data.type === t ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}
                    `}
                    style={data.type === t
                      ? { boxShadow: "0 0 0 1px #3b82f6, 0 4px 16px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.9)" }
                      : { boxShadow: "0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }
                    }
                  >
                    {t}
                  </div>
                ))}
              </div>
            </section>

            {/* 2️⃣ RESEARCH FIELD */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2" className="pt-8 border-t border-slate-100">
              <div>
                <h3 className="text-xl font-semibold mb-4 block">Research Area</h3>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    "Physical Sciences",
                    "Life Sciences",
                    "Engineering",
                    "Medical Sciences",
                    "Social Sciences",
                    "Humanities",
                    "Mathematics",
                    "Interdisciplinary",
                  ].map((f) => (
                    <button
                      key={f}
                      onClick={() => setData({ ...data, field: f })}
                      className={`p-3 border rounded-lg
                        ${data.field === f ? "border-blue-600 bg-blue-50" : ""}
                      `}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* 3️⃣ CAREER STAGE */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="pt-8 border-t border-slate-100">
              <h2 className="text-2xl font-bold text-center mb-10">
                Career Stage
              </h2>

              {/* STAGE */}
              <div className="grid grid-cols-4 gap-4 mb-10">
                {["PhD Student", "Postdoc", "Assistant Professor", "Professor"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setData({ ...data, stage: s })}
                    className={`p-4 border rounded-lg
                      ${data.stage === s ? "border-blue-600 bg-blue-50" : ""}
                    `}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </section>

            {/* 4️⃣ INSTITUTION TYPE */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="pt-8 border-t border-slate-100">
              <h2 className="text-2xl font-bold text-center mb-10">
                Institution Type
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "Central University",
                  "State University",
                  "IIT/NIT/IIIT",
                  "Private University",
                  "Research Institute",
                  "Medical College",
                ].map((i) => (
                  <button
                    key={i}
                    onClick={() => setData({ ...data, institution: i })}
                    className={`p-4 border rounded-lg
                      ${data.institution === i ? "border-blue-600 bg-blue-50" : ""}
                    `}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </section>

            {/* 5️⃣ FUNDING REQUIRED */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="pt-8 border-t border-slate-100">
              <h2 className="text-2xl font-bold text-center mb-10">
                Funding Requirements
              </h2>

              <div className="grid grid-cols-4 gap-4">
                {[
                  "Under ₹10 Lakhs",
                  "₹10-25 Lakhs",
                  "₹25-50 Lakhs",
                  "Above ₹50 Lakhs",
                ].map((f) => (
                  <button
                    key={f}
                    onClick={() => setData({ ...data, funding: f })}
                    className={`p-5 border rounded-lg
                      ${data.funding === f ? "border-blue-600 bg-blue-50" : ""}
                    `}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* SUBMIT */}
              <div className="flex justify-end mt-16">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-blue-600 text-white rounded-lg"
                >
                  Find Grants →
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default ResearchPortal;