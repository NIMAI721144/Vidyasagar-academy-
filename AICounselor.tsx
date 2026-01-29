
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import { geminiService } from '../geminiService';

const AICounselor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm the Vidyasagar Academy AI Counselor. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setInput("");
    setIsLoading(true);

    const response = await geminiService.askCounselor(userMsg);
    setMessages(prev => [...prev, { text: response || "I'm not sure about that.", isUser: false }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-academy-blue p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="text-white h-5 w-5" />
              <span className="text-white font-bold">Admission Counselor AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-blue-800 p-1 rounded">
              <X size={20} />
            </button>
          </div>
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.isUser ? 'bg-academy-blue text-white rounded-tr-none' : 'bg-white text-slate-800 shadow-sm border border-slate-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-400 p-3 rounded-2xl text-sm shadow-sm border border-slate-200 animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about admissions..."
                className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={handleSend}
                className="bg-academy-blue text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-academy-blue text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center space-x-2"
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline font-bold pr-2">Ask AI Counselor</span>
        </button>
      )}
    </div>
  );
};

export default AICounselor;
