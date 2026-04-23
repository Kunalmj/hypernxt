import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { womenPrograms } from "../data/womenData";

const WomenPortal = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);

  const [data, setData] = useState({
    type: "",
    age: "",
    education: "",
    location: "",
    need: "",
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
      { threshold: 0.6, rootMargin: "-100px 0px -100px 0px" }
    );

    Object.values(sectionRefs.current).forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    { id: 1, title: "Category" },
    { id: 2, title: "Age Bracket" },
    { id: 3, title: "Education" },
    { id: 4, title: "Location" },
    { id: 5, title: "Primary Need" },
  ];

  // 🔥 Submit → navigate
  const handleSubmit = () => {
    const filtered = womenPrograms.filter((p) => {
      if (p.type !== data.type) return false;
      if (p.need !== data.need && p.need !== "Financial Support") return false;
      return true;
    });

    navigate("/women-results", { state: { results: filtered } });
  };

  return (
    <div className="h-screen bg-[#f8fafc] flex justify-center p-6 overflow-hidden">
      <div className="w-full max-w-6xl h-full bg-white rounded-xl flex overflow-hidden" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(37,99,235,0.09), 0 24px 64px rgba(37,99,235,0.06), inset 0 0 0 1px rgba(226,232,240,0.9)" }}>

        {/* SIDEBAR */}
        <aside className="w-80 bg-[#eff6ff] p-10 flex-shrink-0">
          <h2 className="text-lg font-semibold text-slate-800 mb-10">
            Women Portal
          </h2>

          <div className="relative flex flex-col gap-12">
            <div className="absolute left-[18px] top-6 bottom-6 w-[2px] bg-blue-200"></div>

            {steps.map((s) => (
              <div key={s.id} className="flex items-center gap-4 relative z-10">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500
                  ${activeStep === s.id
                      ? "bg-blue-600 text-white shadow-md"
                      : activeStep > s.id
                        ? "bg-blue-100 text-blue-600 border border-blue-200"
                        : "bg-white border border-gray-300 text-gray-400"
                    }`}
                >
                  {activeStep > s.id ? "✓" : s.id}
                </div>

                <span
                  className={`font-medium ${activeStep === s.id
                      ? "text-slate-800"
                      : "text-slate-400"
                    }`}
                >
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 px-16 py-12 overflow-y-auto scroll-smooth">
          <div className="max-w-4xl mx-auto space-y-24 pb-32">

            {/* 1️⃣ CATEGORY */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1">
              <h1 className="text-3xl font-bold text-center text-slate-900 mb-2">
                What are you looking for?
              </h1>
              <p className="text-center text-slate-500 mb-10">
                Choose the category that matches your needs
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  "Entrepreneurship",
                  "Education",
                  "Skill Development",
                  "Business Support",
                  "Maternity Support",
                  "Savings Scheme",
                ].map((c) => (
                  <div
                    key={c}
                    onClick={() => setData({ ...data, type: c })}
                    className={`p-8 border rounded-xl text-center cursor-pointer transition-all duration-200
                      ${data.type === c
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 hover:border-blue-300"
                      }`}
                    style={data.type === c
                      ? { boxShadow: "0 0 0 1px #3b82f6, 0 4px 16px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.9)" }
                      : { boxShadow: "0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }
                    }
                  >
                    <h3 className="font-semibold text-slate-800">{c}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* 2️⃣ PROFILE */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2">
              <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">
                Tell us about yourself
              </h2>

              {/* AGE */}
              <div className="mb-10">
                <label className="font-semibold text-slate-700">
                  Age Group
                </label>

                <div className="grid grid-cols-4 gap-4 mt-4">
                  {["0-10 years", "11-17 years", "18-45 years", "45+ years"].map((a) => (
                    <button
                      key={a}
                      onClick={() => setData({ ...data, age: a })}
                      className={`p-4 border rounded-xl transition-all
                        ${data.age === a
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-200 hover:border-blue-300"
                        }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* 3️⃣ EDUCATION */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="pt-8 border-t border-slate-100">
              <div className="mb-10">
                <label className="font-semibold text-slate-700">
                  Education
                </label>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[
                    "Below 10th",
                    "10th Pass",
                    "12th Pass",
                    "Graduate",
                    "Post Graduate",
                    "Professional Degree",
                  ].map((e) => (
                    <button
                      key={e}
                      onClick={() => setData({ ...data, education: e })}
                      className={`p-4 border rounded-lg transition-all
                        ${data.education === e
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-200 hover:border-blue-300"
                        }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* 4️⃣ LOCATION */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="pt-8 border-t border-slate-100">
              <div>
                <label className="font-semibold text-slate-700">
                  Location
                </label>

                <div className="grid grid-cols-4 gap-4 mt-4">
                  {[
                    "Delhi NCR",
                    "Mumbai",
                    "Bangalore",
                    "Hyderabad",
                    "Chennai",
                    "Kolkata",
                    "Rural Area",
                    "Other",
                  ].map((l) => (
                    <button
                      key={l}
                      onClick={() => setData({ ...data, location: l })}
                      className={`p-3 border rounded-lg transition-all
                        ${data.location === l
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-200 hover:border-blue-300"
                        }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* 5️⃣ SUPPORT */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="pt-8 border-t border-slate-100">
              <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">
                What support do you need?
              </h2>

              <div className="grid grid-cols-3 gap-6">
                {[
                  "Financial Support",
                  "Training & Skills",
                  "Business Loan",
                  "Education Support",
                  "Health & Maternity",
                ].map((n) => (
                  <div
                    key={n}
                    onClick={() => setData({ ...data, need: n })}
                    className={`p-8 border rounded-xl text-center cursor-pointer transition-all
                      ${data.need === n
                        ? "border-blue-600 bg-blue-50 shadow-sm"
                        : "border-slate-200 hover:border-blue-300"
                      }`}
                  >
                    <h3 className="font-semibold text-slate-800">{n}</h3>
                  </div>
                ))}
              </div>

              {/* SUBMIT */}
              <div className="flex justify-end mt-16">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
                >
                  Find Programs →
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default WomenPortal;