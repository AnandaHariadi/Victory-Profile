'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, User, Send, X, MessageSquare, Minimize2, Maximize2 } from 'lucide-react';
import { getChatbotResponse } from '@/lib/ai-engine';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    { role: 'bot', content: 'Halo! Saya Vira, Asisten Virtual AI dari Victory International Futures. Ada yang bisa saya bantu hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen, isMinimized]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = getChatbotResponse(userMessage);
      setMessages(prev => [...prev, { role: 'bot', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => { setIsOpen(true); setIsMinimized(false); }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gold-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce-subtle"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed z-50 transition-all duration-300 ease-in-out ${isMinimized ? 'bottom-6 right-6 w-auto h-auto' : 'bottom-6 right-6 w-[350px] h-[500px] sm:w-[400px] sm:h-[600px]'} bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden`}>
      {/* Header */}
      <div className="bg-navy-900 text-white p-4 flex items-center justify-between cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative">
            <Bot className="w-6 h-6 text-gold-500" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-navy-900 rounded-full"></span>
          </div>
          <div>
            <h3 className="font-bold text-sm">Vira - AI Assistant</h3>
            <p className="text-[10px] text-slate-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="p-1 hover:bg-white/10 rounded">
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="p-1 hover:bg-red-500/80 rounded transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center mr-2 shrink-0 self-end mb-1">
                    <Bot className="w-4 h-4 text-navy-700" />
                  </div>
                )}
                
                <div className={`chat-bubble text-sm ${msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
                  {msg.content}
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center ml-2 shrink-0 self-end mb-1">
                    <User className="w-4 h-4 text-slate-500" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center mr-2 shrink-0 self-end mb-1">
                  <Bot className="w-4 h-4 text-navy-700" />
                </div>
                <div className="chat-bubble chat-bubble-bot flex items-center h-10 px-4">
                  <div className="flex gap-1">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies (only show if latest is from bot and not typing) */}
          {!isTyping && messages[messages.length-1].role === 'bot' && (
             <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex gap-2 overflow-x-auto no-scrollbar">
                <button onClick={() => { setInput("Cara buka akun"); handleSend(); }} className="whitespace-nowrap text-xs bg-white border border-gold-300 text-gold-700 px-3 py-1.5 rounded-full hover:bg-gold-50 transition-colors">Cara Buka Akun</button>
                <button onClick={() => { setInput("Berapa spread gold"); handleSend(); }} className="whitespace-nowrap text-xs bg-white border border-gold-300 text-gold-700 px-3 py-1.5 rounded-full hover:bg-gold-50 transition-colors">Spread Gold</button>
                <button onClick={() => { setInput("Apakah aman?"); handleSend(); }} className="whitespace-nowrap text-xs bg-white border border-gold-300 text-gold-700 px-3 py-1.5 rounded-full hover:bg-gold-50 transition-colors">Keamanan Dana</button>
             </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1 px-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tanya Vira..." 
                className="flex-1 bg-transparent border-none focus:outline-none text-sm py-2"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-8 h-8 rounded-lg bg-navy-600 text-white flex items-center justify-center disabled:opacity-50 hover:bg-navy-700 transition-colors"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
            <div className="text-[10px] text-center text-slate-400 mt-2">
              AI dapat membuat kesalahan. Harap verifikasi info penting.
            </div>
          </div>
        </>
      )}
    </div>
  );
}
