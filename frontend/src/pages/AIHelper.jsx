import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AIHelper = () => {
  const initialMessage = { role: 'ai', text: "Hello! I'm FormEase Intelligence. I'm here to simplify your access to government schemes and support services. What can I help you find today?" };
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleNewChat = () => {
    setMessages([initialMessage]);
    setInput("");
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput("");
    
    // Simulate AI thinking
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: "I'm analyzing the national welfare database against your query. This will just take a moment..." }]);
    }, 1000);
  };

  return (
    // We use a fixed height container to avoid window scrolling and the "cutting off" issue at the top navbar.
    // Navbar is sticky and approx 88px tall.
    <div className="flex h-[calc(100vh-88px)] bg-[#f8fafc] font-sans text-slate-800 overflow-hidden relative">
      
      {/* LEFT SIDEBAR - Desktop Only */}
      <aside className="hidden md:flex flex-col w-[320px] bg-white border-r border-slate-200/60 h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <button onClick={handleNewChat} className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-slate-900/10 uppercase tracking-wider text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                New Consultation
            </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <div className="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 mt-2">Recent Queries</div>
            <div className="space-y-1.5">
                {['Eligibility for PM Kisan', 'Student Scholarship Docs', 'Startup Seed Fund 2026', 'Agriculture Equipment Subsidy'].map((q, i) => (
                    <button key={i} className="w-full text-left px-4 py-3.5 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all truncate border border-transparent hover:border-blue-100 flex items-center gap-3 group">
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                        <span className="truncate">{q}</span>
                    </button>
                ))}
            </div>
        </div>


      </aside>

      {/* MAIN CHAT AREA */}
      <main className="flex-1 flex flex-col h-full relative bg-[#f8fafc]">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>

        {/* Chat Header (Mobile only) */}
        <div className="md:hidden p-4 border-b border-slate-200/60 bg-white/80 backdrop-blur-md flex items-center justify-between shadow-sm z-20">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"/><path d="M12 8v4l3 3"/></svg>
                </div>
                <div className="text-sm font-black text-slate-800">FormEase AI</div>
            </div>
            <button onClick={handleNewChat} className="text-xs font-bold bg-slate-900 text-white px-4 py-2 rounded-lg">New Chat</button>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 space-y-8 custom-scrollbar relative z-10">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up max-w-4xl mx-auto w-full`}>
              {m.role === 'ai' && (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-xl shadow-blue-600/20 flex-shrink-0 mr-4 md:mr-6 border border-white/20">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"/><path d="M12 8v4l3 3"/></svg>
                </div>
              )}
              <div className={`max-w-[90%] sm:max-w-[80%] p-5 md:p-7 text-sm md:text-base leading-relaxed tracking-wide ${
                  m.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-2xl rounded-tr-sm shadow-xl shadow-slate-900/10 font-medium' 
                  : 'bg-white text-slate-700 rounded-2xl rounded-tl-sm border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] font-medium'
              }`}>
                  {m.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 sm:p-6 md:p-8 relative z-20 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc] to-transparent">
          <div className="max-w-4xl mx-auto w-full">
              {/* Suggestions */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-5">
                {['Check Scholarship Eligibility', 'Track My Application', 'Download PDF Forms'].map(s => (
                  <button 
                    key={s} 
                    onClick={() => setInput(s)} 
                    className="text-[0.65rem] sm:text-xs font-bold text-slate-500 hover:text-blue-700 bg-white shadow-sm border border-slate-200/80 hover:border-blue-300 px-4 py-2.5 rounded-full transition-all uppercase tracking-widest"
                  >
                    {s}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSend} className="relative flex items-center shadow-[0_8px_40px_rgb(0,0,0,0.08)] rounded-[2rem] bg-white border border-slate-200 group focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50 transition-all p-1.5 sm:p-2">
                  <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your query here..."
                      className="flex-1 bg-transparent border-none px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none font-semibold"
                  />
                  <button 
                    type="submit"
                    disabled={!input.trim()}
                    className="bg-blue-600 disabled:bg-slate-100 disabled:text-slate-300 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 disabled:shadow-none disabled:cursor-not-allowed flex-shrink-0"
                  >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
              </form>
              <div className="text-center mt-5">
                  <span className="text-[0.6rem] md:text-[0.65rem] text-slate-400 font-bold tracking-[0.15em] uppercase">
                    AI responses may vary. Please verify with official documents.
                  </span>
              </div>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
          border: 2px solid #f8fafc;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default AIHelper;
