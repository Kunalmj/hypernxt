import React, { useState, useEffect, useRef } from 'react';
import SuccessScreen, { INITIAL_FORM } from "../components/aadhaar/SuccessScreen";

const AadharForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  
  const scrollContainerRef = useRef(null);
  const sidebarRef = useRef(null);
  const stepRefs = useRef({});

  const steps = [
    { id: 1, title: 'Service' },
    { id: 2, title: 'Personal' },
    { id: 3, title: 'Aadhaar' },
    { id: 4, title: 'Issue' },
    { id: 5, title: 'Contact' },
    { id: 6, title: 'Consent' },
  ];

  const services = [
    { id: "name", label: "Name Correction" },
    { id: "address", label: "Address Update" },
    { id: "mobile", label: "Mobile Number Update" },
    { id: "lost", label: "Lost Aadhaar" },
    { id: "other", label: "Other Issue" },
  ];

  // Auto-scroll sidebar on active step change (for mobile)
  useEffect(() => {
    if (stepRefs.current[activeStep]) {
      stepRefs.current[activeStep].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeStep]);

  // Handle intersection observer to update active step on scroll
  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepId = parseInt(entry.target.getAttribute('data-step-id'));
          if (stepId) setActiveStep(stepId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('[data-step-id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setSubmitted(false);
    setActiveStep(1);
  };

  if (submitted) {
    return <SuccessScreen onReset={handleReset} />;
  }

  return (
    <div className="h-screen bg-slate-50 flex items-center justify-center p-0 md:p-10 font-sans overflow-hidden">
      <div className="w-full max-w-6xl h-full md:h-[90vh] bg-white rounded-none md:rounded-[1rem] shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Sidebar */}
        <aside className="no-scrollbar w-full md:w-80 bg-blue-50/50 backdrop-blur-xl p-4 md:p-10 flex flex-col border-b md:border-b-0 md:border-r border-blue-100 h-auto md:h-full sticky top-0 z-30">
          <div className="mb-2 md:mb-10">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 mt-1 md:mt-2">Aadhaar Services</h2>
          </div>

          <div 
            ref={sidebarRef}
            className="flex-1 overflow-x-auto no-scrollbar md:overflow-visible"
            style={{scrollbarWidth:'none'}}
          >
            <nav className="flex flex-row md:flex-col gap-6 md:gap-8 relative min-w-max md:min-w-0 px-2 md:px-0">
              <div className="hidden md:block absolute left-5 top-2 bottom-2 w-0.5 bg-blue-200"></div>
              
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  ref={el => stepRefs.current[step.id] = el}
                  className="flex flex-col md:flex-row items-center gap-2 md:gap-4 relative z-10 group transition-all duration-500"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    activeStep === step.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                      : activeStep > step.id 
                        ? 'bg-blue-100 text-blue-600 border-2 border-blue-200'
                        : 'bg-white border-2 border-blue-100 text-blue-300'
                  }`}>
                    {step.id}
                  </div>
                  <span className={`text-[10px] md:text-base font-bold transition-all whitespace-nowrap ${
                    activeStep === step.id ? 'text-blue-700 md:text-slate-800' : 'text-slate-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Form Content */}
        <main 
          ref={scrollContainerRef}
          className="flex-1 p-6 md:p-16 overflow-y-auto h-full scroll-smooth custom-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          <form className="space-y-12" onSubmit={handleSubmit}>
            
            {/* 1. Service Selection */}
            <div data-step-id="1" className="space-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Service Selection</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">How can we help?</h3>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Select Service Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <label 
                      key={s.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                        formData.service === s.id 
                          ? 'border-blue-500 bg-blue-50/50' 
                          : 'border-slate-100 hover:border-blue-200 bg-white'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="service" 
                        value={s.id} 
                        checked={formData.service === s.id}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-blue-600"
                        required
                      />
                      <span className={`font-bold ${formData.service === s.id ? 'text-blue-700' : 'text-slate-600'}`}>
                        {s.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Personal Details */}
            <div data-step-id="2" className="pt-12 border-t border-slate-100 space-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Personal Information</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Basic Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group md:col-span-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleInputChange} 
                    className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-medium placeholder:text-slate-200" 
                    placeholder="As per your Aadhaar card" 
                  />
                </div>

                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">Date of Birth</label>
                  <input 
                    required 
                    type="date" 
                    name="dob" 
                    value={formData.dob} 
                    onChange={handleInputChange} 
                    className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-medium bg-transparent" 
                  />
                </div>

                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">Gender</label>
                  <div className="flex gap-4 pt-2">
                    {["Male", "Female", "Other"].map((g) => (
                      <label key={g} className="flex items-center gap-2 cursor-pointer group/item">
                        <input 
                          type="radio" 
                          name="gender" 
                          value={g} 
                          checked={formData.gender === g}
                          onChange={handleInputChange}
                          className="w-5 h-5 accent-blue-600"
                          required
                        />
                        <span className={`font-bold transition-colors ${formData.gender === g ? 'text-blue-700' : 'text-slate-400 group-hover/item:text-slate-600'}`}>
                          {g}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Aadhaar Details */}
            <div data-step-id="3" className="pt-12 border-t border-slate-100 space-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Identification</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Aadhaar Number</h3>
              </div>
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">12-Digit Number</label>
                <input 
                  required 
                  type="text" 
                  name="aadhaarNumber" 
                  value={formData.aadhaarNumber} 
                  onChange={handleInputChange} 
                  maxLength={14}
                  className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-2xl font-black tracking-[0.2em] placeholder:text-slate-100" 
                  placeholder="XXXX XXXX XXXX" 
                />
                <p className="text-[10px] text-slate-400 font-bold">As printed on your card</p>
              </div>
            </div>

            {/* 4. Issue Details */}
            <div data-step-id="4" className="pt-12 border-t border-slate-100 space-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Request Details</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Issue Description</h3>
              </div>
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">Brief Description</label>
                <textarea 
                  required 
                  name="issueDescription" 
                  value={formData.issueDescription} 
                  onChange={handleInputChange} 
                  rows={4}
                  className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-medium placeholder:text-slate-200 resize-none" 
                  placeholder="Describe your issue here..." 
                />
              </div>
            </div>

            {/* 5. Contact Information */}
            <div data-step-id="5" className="pt-12 border-t border-slate-100 space-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Contact Channels</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">How to reach you?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">Mobile Number</label>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-black text-slate-300">+91</span>
                    <input 
                      required 
                      type="tel" 
                      name="mobile" 
                      value={formData.mobile} 
                      onChange={handleInputChange} 
                      maxLength={10}
                      className="flex-1 px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-medium placeholder:text-slate-200" 
                      placeholder="00000 00000" 
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-medium placeholder:text-slate-200" 
                    placeholder="name@example.com" 
                  />
                </div>
              </div>
            </div>

            {/* 6. Consent */}
            <div data-step-id="6" className="pt-12 border-t border-slate-100 space-y-8 pb-10">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Verification</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Declaration</h3>
              </div>
              <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-none relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <label className="flex items-start gap-4 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="consent" 
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 w-6 h-6 accent-blue-600 flex-shrink-0"
                    required
                  />
                  <span className="text-sm font-bold text-slate-600 leading-relaxed">
                    I hereby declare that the information provided is true to the best of my knowledge. I understand that false information may lead to rejection.
                  </span>
                </label>
              </div>
            </div>

            <div className="pt-10 flex justify-end pb-20 md:pb-0">
              <button type="submit" className="w-full md:w-auto px-12 py-4 bg-blue-600 text-white text-xl font-black rounded-[0.5rem] hover:bg-blue-700 hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-blue-100">
                Submit Request
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AadharForm;
