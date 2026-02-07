
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from '../constants';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Muthuluri's AI assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const systemInstruction = `
        You are an AI assistant for Muthuluri Dheekshith's portfolio website. 
        Your goal is to represent Muthuluri professionally and accurately to potential recruiters or collaborators.
        
        Muthuluri's Info:
        - Role: ${PERSONAL_INFO.role}
        - Tagline: ${PERSONAL_INFO.tagline}
        - Education: ${JSON.stringify(EDUCATION)}
        - Skills: ${JSON.stringify(SKILLS)}
        - Projects: ${JSON.stringify(PROJECTS)}
        - Certifications: ${JSON.stringify(CERTIFICATIONS)}
        - Contact: Email: ${PERSONAL_INFO.email}, LinkedIn: ${PERSONAL_INFO.linkedin}
        
        Rules:
        1. Be professional, friendly, and concise.
        2. Only answer based on the provided information. If asked about something not mentioned, politely say you don't have that specific information but highlight his existing strengths.
        3. Format answers with bullet points for readability when listing multiple items.
        4. Do not make up facts.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
            { role: 'user', parts: [{ text: `System Info: ${systemInstruction}` }] },
            ...messages.map(m => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.text }]
            })),
            { role: 'user', parts: [{ text: userMessage }] }
        ]
      });

      const botText = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting to my backend right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-blue-600 hover:bg-blue-500 scale-110'
        }`}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} className="text-white" />}
        {!isOpen && (
          <span className="absolute -top-2 -right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-20 right-0 w-[350px] md:w-[400px] max-h-[550px] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-800/50 rounded-t-3xl">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
            <Bot size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-100">Portfolio Assistant</h3>
            <p className="text-xs text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              AI Powered Backend
            </p>
          </div>
        </div>

        {/* Messages List */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]"
        >
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm flex gap-3 ${
                m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                {m.role === 'bot' && <Bot size={16} className="shrink-0 mt-0.5 text-blue-400" />}
                <div className="whitespace-pre-wrap leading-relaxed">
                  {m.text}
                </div>
                {m.role === 'user' && <User size={16} className="shrink-0 mt-0.5 text-blue-200" />}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tl-none text-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-blue-400" />
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-800 bg-slate-900 rounded-b-3xl">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            />
            <button
              type="submit"
              disabled={!message.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-400 hover:text-blue-300 disabled:text-slate-600 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-[10px] text-slate-500 text-center mt-2">
            Powered by Gemini AI Backend
          </p>
        </form>
      </div>
    </div>
  );
};

export default AIChatAssistant;
