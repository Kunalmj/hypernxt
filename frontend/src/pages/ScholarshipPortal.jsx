import React, { useState } from 'react';

const Icons = {
  Pencil: () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
  ),
  Gear: () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  ),
  Bell: () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  ),
  Megaphone: () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  ),
  ChevronRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
  ChevronLeft: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>,
  Check: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
};

const TERRITORY_OPTIONS = [
  { id: 'dl', name: 'Delhi' },
  { id: 'mh', name: 'Maharashtra' },
  { id: 'ka', name: 'Karnataka' },
  { id: 'tn', name: 'Tamil Nadu' },
  { id: 'gj', name: 'Gujarat' },
  { id: 'pb', name: 'Punjab' },
  { id: 'wb', name: 'West Bengal' },
  { id: 'ai', name: 'All India' }
];

export default function ScholarshipPortal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    country: 'India',
    territory: ['dl'],
    plan: 'International',
    tier: 'Undergraduate',
    domain: ['Engineering']
  });

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const toggleTerritory = (id) => {
    setFormData(prev => ({
      ...prev,
      territory: prev.territory.includes(id) 
        ? prev.territory.filter(t => t !== id)
        : [...prev.territory, id]
    }));
  };

  const toggleDomain = (id) => {
    setFormData(prev => ({
      ...prev,
      domain: prev.domain.includes(id) 
        ? prev.domain.filter(d => d !== id)
        : [...prev.domain, id]
    }));
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="w-full max-w-[500px] animate-[fadeIn_0.3s_ease-in-out]">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <Icons.Pencil />
              </div>
            </div>
            <h1 className="text-3xl font-semibold text-slate-800 text-center mb-2">CITIZENSHIP</h1>
            <p className="text-center text-slate-500 text-[15px] mb-10 mt-[-8px]">Select your country of origin.</p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-500 mb-2">Country</label>
              <input 
                type="text" 
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-md text-slate-700 text-[14px] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" 
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
              />
            </div>

            <div className="mb-6 mt-8">
              <h1 className="text-[20px] font-semibold text-slate-800 text-left mb-2">TERRITORY</h1>
              <label className="block text-sm font-medium text-slate-500 mb-3">Preferred state or region.</label>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                {TERRITORY_OPTIONS.map(opt => {
                  const isSelected = formData.territory.includes(opt.id);
                  return (
                    <div 
                      key={opt.id} 
                      className={`flex flex-col items-center py-3 border rounded-lg cursor-pointer transition-all hover:bg-slate-50 ${isSelected ? 'border-blue-500' : 'border-slate-200'}`}
                      onClick={() => toggleTerritory(opt.id)}
                    >
                      <div className="w-7 h-7 rounded mb-2.5 flex items-center justify-center font-bold text-lg" style={{ 
                        backgroundColor: isSelected ? '#3b82f6' : '#f1f5f9',
                        color: isSelected ? 'white' : '#94a3b8'
                      }}>
                        <div className="w-4 h-4 bg-current" style={{
                          maskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect></svg>')",
                          WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect></svg>')"
                        }}></div>
                      </div>
                      <span className="text-[11px] font-medium" style={{
                        color: isSelected ? '#1e293b' : '#64748b'
                      }}>{opt.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full max-w-[500px] animate-[fadeIn_0.3s_ease-in-out]">
            <div className="flex justify-center mb-6">
               <div className="w-20 h-20 flex items-center justify-center">
                <Icons.Gear />
              </div>
            </div>
            <h1 className="text-3xl font-semibold text-slate-800 text-center mb-2">Scholarship Plan</h1>
            <p className="text-center text-slate-500 text-[15px] mb-10 mt-[-8px]">Choose the type of scholarship you want to apply for.</p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div 
                className={`p-5 border rounded-lg cursor-pointer transition-all relative flex flex-col justify-center ${formData.plan === 'International' ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50'}`}
                onClick={() => setFormData({...formData, plan: 'International'})}
              >
                <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700">Premium</span>
                <h3 className="text-lg font-semibold text-slate-800 mb-1 mt-2">International</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Global opportunities and study abroad programs</p>
              </div>
              <div 
                className={`p-5 border rounded-lg cursor-pointer transition-all relative flex flex-col justify-center ${formData.plan === 'National' ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50'}`}
                onClick={() => setFormData({...formData, plan: 'National'})}
              >
                <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-1 rounded-full bg-slate-100 text-slate-600">Standard</span>
                <h3 className="text-lg font-semibold text-slate-800 mb-1 mt-2">National</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Scholarships within your country</p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full max-w-[500px] animate-[fadeIn_0.3s_ease-in-out]">
             <div className="flex justify-center mb-6">
               <div className="w-20 h-20 flex items-center justify-center">
                <Icons.Bell />
              </div>
            </div>
            <h1 className="text-3xl font-semibold text-slate-800 text-center mb-2">ACADEMIC TIER</h1>
            <p className="text-center text-slate-500 text-[15px] mb-10 mt-[-8px]">Current educational status.</p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
               {[
                 { id: 'Undergraduate', desc: 'Bachelor’s level' },
                 { id: 'Master\'s', desc: 'Postgraduate level' },
                 { id: 'PhD', desc: 'Doctorate level' },
                 { id: 'Diploma', desc: 'Professional certification' }
               ].map(tier => (
                 <div 
                   key={tier.id}
                   className={`p-4 border rounded-lg cursor-pointer transition-all flex flex-col justify-center ${formData.tier === tier.id ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50'}`}
                   onClick={() => setFormData({...formData, tier: tier.id})}
                 >
                   <span className="text-[15px] font-semibold text-slate-800 mb-1">{tier.id}</span>
                   <span className="text-[13px] text-slate-500">{tier.desc}</span>
                 </div>
               ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full max-w-[600px] animate-[fadeIn_0.3s_ease-in-out]">
             <div className="flex justify-center mb-6">
               <div className="w-20 h-20 flex items-center justify-center">
                <Icons.Megaphone />
              </div>
            </div>
            <h1 className="text-3xl font-semibold text-slate-800 text-center mb-2">DOMAIN</h1>
            <p className="text-center text-slate-500 text-[15px] mb-10 mt-[-8px]">Area of academic specialization.</p>
            
            <div className="mt-8 flex justify-center">
              <div className="flex flex-wrap gap-3 justify-center max-w-[450px]">
                {[
                  "Engineering", "Medicine", "Business", 
                  "Computer Science", "Arts", "Law", "All Fields"
                ].map(domain => {
                  const isSelected = formData.domain.includes(domain);
                  return (
                    <span 
                      key={domain}
                      className={`px-4 py-2 border rounded-md text-[14px] font-medium cursor-pointer transition-all ${isSelected ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                      onClick={() => toggleDomain(domain)}
                    >
                      {domain}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="w-full max-w-[500px] animate-[fadeIn_0.3s_ease-in-out]">
             <div className="flex justify-center mb-6">
               <div className="w-20 h-20 flex items-center justify-center">
                <Icons.Check />
              </div>
            </div>
            <h1 className="text-3xl font-semibold text-slate-800 text-center mb-2">Review and Continue</h1>
            <p className="text-center text-slate-500 text-[15px] mb-10 mt-[-8px]">You’re almost done. Review your selections and continue to create your account.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const stepsInfo = [
    {
      num: 1,
      title: 'Citizenship & Location',
      desc: 'Select your country and preferred region.'
    },
    {
      num: 2,
      title: 'Scholarship Plan',
      desc: 'Choose national or international opportunities.'
    },
    {
      num: 3,
      title: 'Academic Level',
      desc: 'Select your current level of study.'
    },
    {
      num: 4,
      title: 'Field of Study',
      desc: 'Pick your area of specialization.'
    },
    {
      num: 5,
      title: 'Final Step',
      desc: 'Review your details and continue.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex w-screen h-screen bg-[#091125] font-['Inter',_sans-serif] overflow-hidden m-0 p-0">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      {/* Left White Area */}
      <div className="w-[65%] h-full bg-white relative z-10 shadow-[20px_0_50px_rgba(0,0,0,0.2)] flex flex-col">
        {/* Header */}
        <div className="px-12 py-8 flex items-center">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm mr-3">B</div>
          <div className="font-bold text-xl text-slate-800">Benti</div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-24 overflow-y-auto">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full px-12 py-6 flex justify-between items-center bg-white border-t border-slate-50 z-20">
          <button className="text-blue-500 font-medium text-[15px] focus:outline-none">Cancel</button>
          <div className="flex gap-4">
            {currentStep > 1 && (
              <button className="text-slate-400 font-medium text-[15px] flex items-center gap-2 focus:outline-none" onClick={handlePrev}>
                <Icons.ChevronLeft /> Previous step
              </button>
            )}
            <button className="bg-blue-600 hover:bg-blue-700 text-white border-none rounded-md px-6 py-2.5 font-medium text-[15px] flex items-center gap-2 transition-colors focus:outline-none" onClick={handleNext}>
              {currentStep === 5 ? 'Open Account' : 'Next step'} {currentStep < 5 && <Icons.ChevronRight />}
            </button>
          </div>
        </div>
      </div>

      {/* Right Blue Area */}
      <div className="w-[35%] h-full bg-[#091125] relative flex flex-col justify-center pr-16 py-8">
        <div className="flex flex-col gap-12 relative">
          {stepsInfo.map((step) => {
            let status = 'inactive';
            if (currentStep === step.num) status = 'active';
            else if (currentStep > step.num) status = 'completed';

            return (
              <div key={step.num} className={`relative pl-12 transition-opacity duration-300 ${status === 'inactive' ? 'opacity-50' : status === 'active' ? 'opacity-100' : 'opacity-70'}`}>
                {/* Circle exactly on boundary */}
                <div className={`absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center text-[13.5px] font-semibold z-20 transition-all duration-300 ${
                  status === 'active' ? 'bg-blue-500 text-white shadow-[0_0_0_4px_rgba(59,130,246,0.2)]' :
                  status === 'inactive' ? 'bg-slate-800 text-blue-500' :
                  'bg-slate-800 text-white'
                }`}>
                  {status === 'completed' ? <Icons.Check /> : step.num}
                </div>
                <h4 className="text-white font-semibold text-base mb-2 mt-1">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed m-0 pr-4">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-8 left-12 text-slate-500 text-[13px] leading-relaxed">
          Need a helping hand?<br/>
          Visit us at <a href="#" className="text-slate-400 hover:underline">help.bentiapp.com</a> or call +1 (202) 123 4567
        </div>
      </div>
    </div>
  );
}