import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { agricultureSchemes } from "../data/agricultureData";

const AgriculturePortal = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    farmerType: "",
    landSize: "",
    state: "",
    support: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = agricultureSchemes.filter((s) => {
      if (s.farmerType !== "General" && s.farmerType !== data.farmerType) return false;
      if (s.landSize !== "Any" && s.landSize !== data.landSize) return false;
      if (s.state !== "General" && s.state !== data.state) return false;
      return true;
    });

    // navigate("/agri-results", {
    //   state: { results: filtered },
    // });
  };

  return (
    <div className="min-h-screen max-w-[90%] mx-auto bg-white relative overflow-hidden font-['Inter',sans-serif] rounded-2xl">
      
      {/* Decorative Wave Background (Top Right) */}
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        className="absolute top-0 right-0 w-[45vw] h-[75vh] md:h-[65vh] pointer-events-none z-0"
      >
        <path d="M0,0 C40,40 60,20 100,40 L100,0 Z" fill="#282be8ff" />
        <path d="M0,15 C45,55 55,25 100,55" fill="none" stroke="#6366f1" strokeWidth="0.3" opacity="0.8"/>
        <path d="M0,30 C50,70 50,30 100,70" fill="none" stroke="#181cedff" strokeWidth="0.3" opacity="0.6"/>
      </svg>

      {/* Building Image (Bottom Right) */}
      <img 
        src="/agriculture-img.png" 
        alt="Building" 
        className="absolute bottom-0 right-0 md:w-[450px] md:h-[450px] object-cover pointer-events-none" 
      />

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row gap-16 min-h-screen items-center">
        
        {/* Left Side: Form */}
        <div className="flex-1 max-w-xl md:pl-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight mb-12">
            Fill the form <br />
            to <span className="text-blue-800">find schemes.</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Farmer Type */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-slate-700 mb-2">Farmer Type</label>
                <select 
                  className="w-full border-b-2 border-slate-300 pb-2 bg-transparent outline-none focus:border-[#6366f1] text-slate-600 transition-colors appearance-none cursor-pointer text-sm"
                  value={data.farmerType}
                  onChange={(e) => setData({...data, farmerType: e.target.value})}
                  required
                >
                  <option value="" disabled>Select type</option>
                  <option value="Small & Marginal">Small & Marginal</option>
                  <option value="Medium Farmer">Medium Farmer</option>
                  <option value="Large Farmer">Large Farmer</option>
                </select>
              </div>

              {/* Land Size */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-slate-700 mb-2">Land Size</label>
                <select 
                  className="w-full border-b-2 border-slate-300 pb-2 bg-transparent outline-none focus:border-[#6366f1] text-slate-600 transition-colors appearance-none cursor-pointer text-sm"
                  value={data.landSize}
                  onChange={(e) => setData({...data, landSize: e.target.value})}
                  required
                >
                  <option value="" disabled>Select size</option>
                  <option value="Less than 1 hectare">Less than 1 hectare</option>
                  <option value="1-2 hectares">1-2 hectares</option>
                  <option value="2-5 hectares">2-5 hectares</option>
                  <option value="5-10 hectares">5-10 hectares</option>
                  <option value="10-20 hectares">10-20 hectares</option>
                  <option value="Above 20 hectares">Above 20 hectares</option>
                </select>
              </div>
            </div>

            {/* State */}
            <div className="flex flex-col pt-4">
              <label className="text-sm font-semibold text-slate-700 mb-2">State / Region</label>
              <select 
                className="w-full border-b-2 border-slate-300 pb-2 bg-transparent outline-none focus:border-[#6366f1] text-slate-600 transition-colors appearance-none cursor-pointer text-sm"
                value={data.state}
                onChange={(e) => setData({...data, state: e.target.value})}
                required
              >
                <option value="" disabled>Select state</option>
                <option value="Punjab">Punjab</option>
                <option value="Haryana">Haryana</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="West Bengal">West Bengal</option>
                <option value="All India">All India</option>
              </select>
            </div>

            {/* Support Required */}
            <div className="flex flex-col pt-4 pb-8">
              <label className="text-sm font-semibold text-slate-700 mb-2">How we can help you? Describe here your problem</label>
              <select 
                className="w-full border-b-2 border-slate-300 pb-2 bg-transparent outline-none focus:border-[#6366f1] text-slate-600 transition-colors appearance-none cursor-pointer text-sm"
                value={data.support}
                onChange={(e) => setData({...data, support: e.target.value})}
                required
              >
                <option value="" disabled>Select support type</option>
                <option value="Financial Support">Financial Support</option>
                <option value="Crop Insurance">Crop Insurance</option>
                <option value="Irrigation">Irrigation</option>
                <option value="Organic Farming">Organic Farming</option>
                <option value="Solar/Energy">Solar/Energy</option>
                <option value="Credit/Loan">Credit/Loan</option>
              </select>
            </div>

            <button 
              type="submit"
              className="bg-blue-800 text-white px-10 py-3 rounded-md font-bold text-sm shadow-md hover:bg-[#4f46e5] hover:-translate-y-0.5 transition-all w-max"
            >
              Find Schemes
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AgriculturePortal;