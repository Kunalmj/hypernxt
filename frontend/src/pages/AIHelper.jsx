import React, { useState } from "react";
import { Link } from "react-router-dom";

const AIHelper = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hello! I'm your GovSchemes Assistant. I can help you find eligibility details, required documents, or suggest schemes based on your profile. How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { role: 'user', text: input }]);
    setInput("");
    
    // Simulate AI thinking
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: "I'm analyzing your query against 1,200+ government schemes. Please wait a moment..." }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] font-['Inter',_sans-serif]">
      <div className="container mx-auto px-6 pt-32 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* AI Branding */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7L12 12L22 7L12 2Z"/><path d="M2 17L12 22L22 17"/><path d="M2 12L12 17L22 12"/></svg>
            </div>
            <div>
                <h1 className="text-3xl font-[1000] text-slate-900 tracking-tight">AI Scheme <span className="text-blue-600 italic">Advisor.</span></h1>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Powered by Real-time GovData</p>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-blue-500/10 border border-slate-100 overflow-hidden flex flex-col h-[600px]">
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-6 rounded-[2rem] text-sm font-medium leading-relaxed ${
                            m.role === 'user' 
                            ? 'bg-blue-600 text-white rounded-tr-none' 
                            : 'bg-slate-50 text-slate-700 rounded-tl-none border border-slate-100'
                        }`}>
                            {m.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-slate-50 bg-slate-50/50">
                <form onSubmit={handleSend} className="relative flex gap-4">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g. Find education schemes for single mothers in Delhi"
                        className="flex-1 bg-white border border-slate-200 rounded-[2rem] px-8 py-5 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                    />
                    <button className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                </form>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="text-[0.7rem] font-black text-slate-400 uppercase tracking-widest">Suggested:</div>
            {['PAN Card Fix', 'PM Kisan Check', 'Scholarships'].map(s => (
                <button key={s} onClick={() => setInput(s)} className="text-[0.7rem] font-bold text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full border border-blue-100 transition-all">
                    {s}
                </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHelper;
