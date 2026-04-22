import React, { useState, useEffect, useRef } from 'react';

const DrivingForm = () => {
  const [formData, setFormData] = useState({
    requestType: 'New Learner License',
    vehicleCategory: 'LMV',
    sameAsPermanent: false,
    fullName: '',
    gender: '',
    mobile: '',
    idProof: 'Aadhaar Card'
  });

  const [otpSent, setOtpSent] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const scrollContainerRef = useRef(null);
  const sidebarRef = useRef(null);
  const stepRefs = useRef({});

  const steps = [
    { id: 1, title: 'Personal' },
    { id: 2, title: 'Address' },
    { id: 3, title: 'License Details' },
    { id: 4, title: 'Identity' },
    { id: 5, title: 'Photo & Sig' },
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

  return (
    <div className="h-screen bg-slate-50 flex items-center justify-center p-0 md:p-10 font-sans overflow-hidden">
      <div className="w-full max-w-6xl h-full md:h-[90vh] bg-white rounded-none md:rounded-[1rem] shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Sidebar - Horizontal on mobile, Vertical on desktop */}
        <aside className="no-scrollbar w-full md:w-80 bg-blue-100 backdrop-blur-xl p-4 md:p-10 flex flex-col border-b md:border-b-0 md:border-r border-blue-100 h-auto md:h-full sticky top-0 z-30">
          <div className="mb-2 md:mb-10">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 mt-1 md:mt-2">Driving License Portal</h2>
          </div>

          <div 
            ref={sidebarRef}
            className="flex-1 overflow-x-auto no-scrollbar md:overflow-visible"
            style={{scrollbarWidth:'none'}}
          >
            <nav className="flex flex-row md:flex-col gap-6 md:gap-8 relative min-w-max md:min-w-0 px-2 md:px-0">
              {/* Connecting Line - Desktop Only */}
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
                    {activeStep > step.id ? step.id : step.id}
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

        {/* Form Content - Internal Scroll */}
        <main 
          ref={scrollContainerRef}
          className="flex-1 p-6 md:p-16 overflow-y-auto h-full scroll-smooth custom-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          <form className="space-y-12" onSubmit={(e) => { e.preventDefault() }}>
            
            {/* 1. Personal Details */}
            <div data-step-id="1" className="space-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Your Personal Details</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Basic Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">Full Name</label>
                  <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-medium placeholder:text-slate-200" placeholder="e.g. John Doe" />
                </div>

                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-medium bg-transparent">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2 group md:col-span-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">Mobile Number</label>
                  <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-none border border-slate-100 text-slate-500 font-bold w-fit">
                      +91
                    </div>
                    <input required type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} className="flex-1 px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-medium placeholder:text-slate-200" placeholder="00000 00000" />
                    <button type="button" onClick={() => setOtpSent(true)} className="px-6 py-3 bg-blue-50 text-blue-600 font-black  rounded-[0.5rem] hover:bg-blue-100 transition-all active:scale-95 text-sm uppercase">
                      {otpSent ? 'Resend' : 'Verify'}
                    </button>
                  </div>
                </div>
                
                {otpSent && (
                  <div className="md:col-span-2 p-6 bg-blue-50/50 rounded-none border border-blue-100 animate-in slide-in-from-top-4">
                    <label className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-3 text-center">Enter 6-digit code</label>
                    <input type="text" maxLength="6" className="w-full bg-white border-2 border-blue-200 rounded-none px-4 py-4 text-center text-2xl font-black tracking-[0.5em] focus:border-blue-500 outline-none transition-all shadow-inner" placeholder="000000" />
                  </div>
                )}
              </div>
            </div>

            {/* 2. Address Details */}
            <div data-step-id="2" className="pt-12 border-t border-slate-100 space-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Your Residential Address</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Address Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {["House No / Street", "Village/City", "District", "State", "PIN Code"].map((l, i) => (
                  <div key={l} className={`space-y-2 group ${i === 0 ? 'md:col-span-2' : ''}`}>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">{l}</label>
                    <input type="text" className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-medium placeholder:text-slate-200" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 p-5 bg-slate-50/50 rounded-none border border-slate-100">
                <input type="checkbox" id="same" name="sameAsPermanent" checked={formData.sameAsPermanent} onChange={handleInputChange} className="w-6 h-6 rounded-none accent-blue-600" />
                <label htmlFor="same" className="font-bold text-slate-600 text-sm">Same as permanent address</label>
              </div>
            </div>

            {/* 3. Type of Request */}
            <div data-step-id="3" className="pt-12 space-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">License Classification</p>
                <h3 className="text-2xl font-black text-blue-800 tracking-tight">Service & Vehicle Type</h3>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-800 transition-colors">Service Type</label>
                  <select name="requestType" value={formData.requestType} onChange={handleInputChange} className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-bold text-slate-700 bg-transparent">
                    <option>New Learner License</option>
                    <option>New Permanent License</option>
                    <option>Renewal of Driving License</option>
                    <option>Duplicate Driving License</option>
                  </select>
                </div>

                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-blue-800 transition-colors">Vehicle Category</label>
                  <select name="vehicleCategory" value={formData.vehicleCategory} onChange={handleInputChange} className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all text-lg font-bold text-slate-700 bg-transparent">
                    <option value="LMV">Light Motor Vehicle (LMV)</option>
                    <option value="MCWG">Motor Cycle With Gear (MCWG)</option>
                    <option value="MCWOG">Motor Cycle Without Gear (MCWOG)</option>
                    <option value="HMV">Heavy Motor Vehicle (HMV)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 4. Identity Proof */}
            <div data-step-id="4" className="pt-12 space-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Verification Documents</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Identity & Age Proof</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-wider ml-1">Select Document</label>
                  <select name="idProof" value={formData.idProof} onChange={handleInputChange} className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all font-bold text-slate-600 bg-transparent mb-4">
                    <option>Aadhaar Card</option>
                    <option>Passport</option>
                    <option>PAN Card</option>
                    <option>Birth Certificate</option>
                  </select>
                  <div className="relative border-2 border-dashed border-blue-100 rounded-none p-8 text-center hover:bg-blue-50/30 transition-all cursor-pointer group">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    <span className="text-xs font-black text-blue-600/50 uppercase tracking-tighter">Upload Proof</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Photo & Signature */}
            <div data-step-id="5" className="pt-12 space-y-8 pb-10">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Visual Verification</p>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Photo & Signature</h3>
              </div>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 relative border-2 border-dashed border-blue-100 rounded-none p-8 text-center hover:bg-blue-50/30 transition-all cursor-pointer group">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    <span className="text-xs font-black text-blue-600/50 uppercase tracking-tighter">Upload Photo</span>
                  </div>
                  <div className="w-full md:w-32 h-32 rounded-none bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-300 text-center p-2 uppercase">Photo Preview</div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 relative border-2 border-dashed border-blue-100 rounded-none p-8 text-center hover:bg-blue-50/30 transition-all cursor-pointer group">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    <span className="text-xs font-black text-blue-600/50 uppercase tracking-tighter">Upload Signature</span>
                  </div>
                  <div className="w-full md:w-32 h-20 rounded-none bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-300 text-center p-2 uppercase">Sig Preview</div>
                </div>
              </div>
            </div>

            <div className="pt-10 flex justify-end pb-20 md:pb-0">
              <button type="submit" className="w-full md:w-auto px-10 py-3 bg-blue-600 text-white text-xl font-black rounded-[0.5rem] hover:bg-blue-700 hover:scale-[1.02] transition-all active:scale-95">
                Submit Application
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default DrivingForm;
