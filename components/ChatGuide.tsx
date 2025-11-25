import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Sparkles, Minimize2, Maximize2 } from 'lucide-react';
import { Message, LoadingState } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '您好，信徒。我是鎮門宮的數位守護靈。關於鄭成功的歷史、赤腳門神的傳說，或是參拜的方式，您都可以問我。',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSend = async () => {
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    try {
      const responseText = await sendMessageToGemini(messages, userMessage.text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Minimized view
  if (isOpen && isMinimized) {
     return (
       <div className="fixed bottom-4 right-4 z-50">
         <button
            onClick={() => setIsMinimized(false)}
            className="bg-temple-red text-white p-4 rounded-full shadow-2xl hover:bg-red-900 transition-transform hover:scale-110 flex items-center gap-2 border-2 border-temple-gold"
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-serif font-bold">導覽中...</span>
          </button>
       </div>
     )
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-temple-red text-temple-gold p-4 rounded-full shadow-2xl hover:bg-red-900 transition-transform hover:scale-110 group border-2 border-temple-gold"
          aria-label="Open Guide"
        >
          <MessageCircle size={32} className="group-hover:animate-bounce" />
          <span className="absolute -top-2 -left-2 bg-temple-gold text-temple-red text-xs font-bold px-2 py-1 rounded-full">
            問問廟公
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[95vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-temple-gold/30 animate-fade-in-up">
          {/* Header */}
          <div className="bg-temple-red p-4 flex items-center justify-between text-white shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-temple-gold" />
              <h3 className="font-serif font-bold text-lg tracking-wide">鎮門宮數位導覽</h3>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <Minimize2 size={18} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-temple-wood text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-stone-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loadingState === LoadingState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                  <div className="w-2 h-2 bg-temple-red rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-temple-red rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-temple-red rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-stone-200 shrink-0">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="請問門神為什麼赤腳？"
                className="flex-1 p-3 bg-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-red/50 text-gray-700 placeholder-gray-400"
                disabled={loadingState === LoadingState.LOADING}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loadingState === LoadingState.LOADING}
                className="p-3 bg-temple-red text-white rounded-xl hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="mt-2 text-center">
              <p className="text-[10px] text-gray-400">
                 AI 導覽可能會有些許誤差，請以廟方實際資訊為準。
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatGuide;