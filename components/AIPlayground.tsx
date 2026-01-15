
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';

const AIPlayground: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Systems online. I am Alex's neural interface. How can I assist your investigation today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    const response = await geminiService.chat(userMessage, messages);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
  };

  return (
    <section id="ai-assistant" className="py-16 md:py-24 bg-slate-950/40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Neural Playground</h2>
            <p className="text-slate-400 text-base md:text-lg">Query the custom Gemini-powered agent to explore technical proficiencies.</p>
          </div>
          
          <div className="glass rounded-[32px] overflow-hidden shadow-2xl flex flex-col">
            <div className="p-5 md:p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 relative">
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base leading-none mb-1">Portfolio Interface v2.5</h4>
                  <span className="text-[8px] sm:text-[9px] text-cyan-500 font-bold fira-code tracking-widest uppercase">Encryption Active • Gemini</span>
                </div>
              </div>
            </div>
            
            <div 
              ref={scrollRef}
              className="h-[350px] md:h-[500px] overflow-y-auto p-5 md:p-8 space-y-6 scroll-smooth bg-slate-900/40 custom-scrollbar"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-5 py-3 md:px-6 md:py-4 rounded-[20px] text-sm md:text-base leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-cyan-500 text-slate-950 font-bold rounded-tr-none' 
                    : 'glass text-slate-300 rounded-tl-none border-white/5'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass px-4 py-2.5 rounded-[20px] rounded-tl-none flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSend} className="p-4 md:p-6 bg-slate-950/60 border-t border-white/5 flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Alex's AI..."
                className="flex-grow bg-slate-900/50 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-cyan-500/50 fira-code text-sm text-slate-200 placeholder:text-slate-600 shadow-inner"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlayground;
