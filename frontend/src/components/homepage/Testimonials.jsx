import React, { useState } from "react";

const testimonials = [
  { name: "Priya Sharma",  location: "Mumbai, Maharashtra", tag: "Aadhaar User",  text: "The Aadhaar form was filled in under 10 minutes. The step-by-step process was incredibly clear and made the whole experience stress-free.", doc: "Aadhaar Card",     img: "https://i.pravatar.cc/80?img=47" },
  { name: "Rahul Verma",   location: "Delhi, NCR",          tag: "DL Applicant",  text: "I got my Driving License application submitted without any hassle. The checklist made sure I had everything ready before I even went to the RTO.", doc: "Driving License", img: "https://i.pravatar.cc/80?img=12" },
  { name: "Anita Patel",   location: "Ahmedabad, Gujarat",  tag: "Voter ID User", text: "Voter ID registration was a breeze. I was worried it would be complicated but the guided form took all the confusion away.", doc: "Voter ID",         img: "https://i.pravatar.cc/80?img=32" },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      {/* Wave → Testimonials */}
      <div className="bg-white leading-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-[40px] md:h-[56px]">
          <path d="M0,28 C360,0 720,56 1080,28 C1260,14 1380,42 1440,28 L1440,56 L0,56 Z" fill="#f8fafc" />
        </svg>
      </div>

      <section className="bg-[#f8fafc] py-12 md:py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-[1.6rem] md:text-[1.9rem] font-extrabold text-[#0f172a] mb-2">Real People, Real Results</h2>
            <p className="text-[#64748b] text-[0.85rem] md:text-[0.93rem] max-w-md mx-auto">Thousands of Indians have successfully applied through LegalDoc</p>
          </div>

          <div className="bg-white rounded-3xl border border-[#e2e8f0] shadow-lg p-7 md:p-10 lg:p-12 max-w-[800px] mx-auto relative">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
              <img 
                src={testimonials[activeTestimonial].img} 
                alt={testimonials[activeTestimonial].name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#dbeafe] shadow-sm" 
              />
              <div className="flex-1">
                <div className="text-3xl md:text-4xl text-[#cbd5e1] leading-none mb-3 md:mb-4 font-serif">"</div>
                <p className="text-[#374151] text-[0.9rem] md:text-[1rem] leading-relaxed mb-6 italic">
                  {testimonials[activeTestimonial].text}
                </p>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-[#f1f5f9] pt-6">
                  <div>
                    <div className="font-bold text-[#0f172a] text-[0.95rem]">{testimonials[activeTestimonial].name}</div>
                    <div className="text-[0.82rem] text-[#64748b] mt-0.5">
                      {testimonials[activeTestimonial].location} · <span className="text-[#1d4ed8] font-bold">{testimonials[activeTestimonial].tag}</span>
                    </div>
                  </div>
                  <div className="bg-[#f0fdf4] px-4 py-2 rounded-xl border border-[#dcfce7] inline-block self-center md:self-auto">
                    <div className="text-[0.65rem] text-[#065f46] uppercase font-bold tracking-widest mb-0.5 opacity-60">Applied For</div>
                    <div className="text-[0.85rem] font-extrabold text-[#059669]">{testimonials[activeTestimonial].doc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all ${
                  i === activeTestimonial ? "bg-[#1d4ed8] scale-125 shadow-sm" : "bg-[#bfdbfe]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
