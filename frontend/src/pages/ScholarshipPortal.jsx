import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { scholarships } from "../data/scholarshipData";

const ScholarshipPortal = () => {
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("");

  const [profile, setProfile] = useState({
    nationality: "",
    region: "",
    level: "",
    field: "",
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
      {
        threshold: 0.6,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    { id: 1, title: "Scope" },
    { id: 2, title: "Nationality" },
    { id: 3, title: "Region" },
    { id: 4, title: "Education Level" },
    { id: 5, title: "Field of Study" },
  ];

  // 🔥 Submit → Navigate
  const handleSubmit = () => {
    const filtered = scholarships.filter((s) => {
      if (selectedType && s.type !== selectedType) return false;
      if (profile.level && s.level !== profile.level) return false;
      if (profile.field && s.field !== profile.field && s.field !== "General") return false;
      return true;
    });

    navigate("/results", {
      state: { results: filtered },
    });
  };

  return (
    <div className="h-screen bg-[#f5f7fb] flex justify-center p-6 overflow-hidden">
      <div className="w-full max-w-6xl h-full bg-white rounded-lg flex overflow-hidden" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(37,99,235,0.09), 0 24px 64px rgba(37,99,235,0.06), inset 0 0 0 1px rgba(226,232,240,0.9)" }}>

        {/* SIDEBAR */}
        <aside className="w-80 bg-[#eaf2ff] p-10 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-10">Scholarship Portal</h2>

          <div className="relative flex flex-col gap-12">
            <div className="absolute left-[18px] top-6 bottom-6 w-[2px] bg-blue-200"></div>

            {steps.map((s) => (
              <div key={s.id} className="flex items-center gap-4 relative z-10">

                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-500
                  ${activeStep === s.id
                      ? "bg-blue-600 text-white scale-105"
                      : activeStep > s.id
                        ? "bg-blue-100 text-blue-600"
                        : "bg-white border border-gray-300 text-gray-400"
                    }`}
                >
                  {activeStep > s.id ? "✓" : s.id}
                </div>

                <span
                  className={`text-sm font-medium transition-all duration-500
                  ${activeStep === s.id ? "text-gray-800" : "text-gray-400"}
                `}
                >
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 px-16 py-12 overflow-y-auto scroll-smooth">
          <div className="max-w-4xl mx-auto space-y-24 pb-32">

            {/* SECTION 1 */}
            <section ref={(el) => (sectionRefs.current[1] = el)} data-step="1">
              <h1 className="text-3xl font-semibold text-center mb-2">
                What type of scholarship are you looking for?
              </h1>

              <div className="grid grid-cols-2 gap-6 mt-10">
                {["International", "National"].map((type) => (
                  <div
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`p-8 border rounded-xl cursor-pointer text-center transition-all duration-200
                      ${selectedType === type
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                      }`}
                    style={selectedType === type
                      ? { boxShadow: "0 0 0 1px #3b82f6, 0 4px 16px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.9)" }
                      : { boxShadow: "0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }
                    }
                  >
                    <h3 className="text-xl font-semibold">{type}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 2 */}
            <section ref={(el) => (sectionRefs.current[2] = el)} data-step="2">
              <h2 className="text-2xl font-semibold mb-8">
                Tell us about your profile
              </h2>

              <div className="mb-8">
                <label className="text-sm font-medium">Nationality</label>
                <select
                  className="w-full mt-2 p-3 border rounded-lg"
                  value={profile.nationality}
                  onChange={(e) =>
                    setProfile({ ...profile, nationality: e.target.value })
                  }
                >
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>
              </div>
            </section>

            {/* SECTION 3: Region */}
            <section ref={(el) => (sectionRefs.current[3] = el)} data-step="3" className="pt-8 border-t border-slate-100">
              <div className="mb-8">
                <label className="text-xl font-medium mb-4 block">Region</label>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Punjab", "West Bengal", "All India"].map((r) => (
                    <button
                      key={r}
                      onClick={() => setProfile({ ...profile, region: r })}
                      className={`p-3 border rounded-lg
                        ${profile.region === r
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200"
                        }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 4: Level */}
            <section ref={(el) => (sectionRefs.current[4] = el)} data-step="4" className="pt-8 border-t border-slate-100">
              <div>
                <label className="text-xl font-medium mb-4 block">Education Level</label>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {["Undergraduate", "Master's", "PhD", "Diploma"].map((l) => (
                    <button
                      key={l}
                      onClick={() => setProfile({ ...profile, level: l })}
                      className={`p-6 border rounded-xl
                        ${profile.level === l
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

            {/* SECTION 5: Field */}
            <section ref={(el) => (sectionRefs.current[5] = el)} data-step="5" className="pt-8 border-t border-slate-100">
              <h2 className="text-3xl font-semibold text-center mb-2">
                Field of Study
              </h2>

              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  "Engineering", "Medicine", "Business",
                  "Computer Science", "Arts", "Law", "All Fields"
                ].map((f) => (
                  <button
                    key={f}
                    onClick={() => setProfile({ ...profile, field: f })}
                    className={`p-4 border rounded-lg
                      ${profile.field === f
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200"
                      }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* SUBMIT */}
              <div className="flex justify-end mt-16">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Find Scholarships →
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default ScholarshipPortal;