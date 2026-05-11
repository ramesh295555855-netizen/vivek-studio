import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, Trash2, Cpu, Zap } from 'lucide-react';
import { streamAIChatResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function BrainView() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Namaste! I am Zoya, your personal female AI agent from Maa Santoshi Studio. I'm here to do all your work and ensure your vision comes to life. Aapka creator (Vivek) ne mujhe bohot advanced banaya hai. How can I serve you today, boss?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      let assistantResponse = '';
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      
      const stream = streamAIChatResponse(userMessage);
      for await (const chunk of stream) {
        assistantResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = assistantResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-black p-4 md:p-8">
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col bg-white/5 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-pulse" />
        
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-400/20">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                alt="Zoya" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-black text-white uppercase italic tracking-tighter">Zoya AI Core</h2>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Neural Link Active</span>
                </div>
                <span className="text-[9px] font-bold text-gray-500 italic">Advanced Female AI Agent • Dedicated to your work</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setMessages([{ role: 'assistant', content: "Memory purged. Memory space is now clean. How can I help you, boss?" }])}
            className="p-3 rounded-xl bg-white/5 text-gray-500 hover:text-red-400 transition-colors"
            title="Clear Chat"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        {/* Message Container */}
        <div ref={scrollRef} className="flex-1 overflow-auto p-6 space-y-4 custom-scrollbar">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[85%] md:max-w-[70%] space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <div className={`w-10 h-10 rounded-xl flex-shrink-0 overflow-hidden shadow-lg border ${
                    msg.role === 'user' ? 'bg-purple-600 border-purple-500' : 'bg-cyan-500 border-cyan-400'
                  }`}>
                    {msg.role === 'user' ? (
                      <div className="w-full h-full flex items-center justify-center text-white"><User className="w-5 h-5" /></div>
                    ) : (
                      <img 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                        alt="Zoya" 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm font-bold leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-purple-600/20 text-white border border-purple-500/20 rounded-tr-none shadow-[0_10px_20px_-5px_rgba(147,51,234,0.2)]' 
                    : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.content || (isTyping && <motion.div className="flex space-x-1" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </motion.div>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="relative group">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query neural network..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 pr-14 text-xs font-black text-white focus:outline-none focus:border-cyan-400/50 transition-all group-focus-within:bg-white/[0.08]"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-cyan-400 text-black flex items-center justify-center hover:bg-cyan-300 disabled:bg-gray-700 disabled:text-gray-500 transition-all active:scale-95 shadow-lg shadow-cyan-400/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center space-x-4 opacity-30">
              <div className="flex items-center space-x-2 text-[8px] font-black text-white uppercase tracking-widest">
                <Cpu className="w-3 h-3" />
                <span>Gemini 2.0 Flash</span>
              </div>
              <div className="flex items-center space-x-2 text-[8px] font-black text-white uppercase tracking-widest">
                <Zap className="w-3 h-3" />
                <span>Latency: 24ms</span>
              </div>
            </div>
            <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">
              Secured by Maa Santoshi Studio Neural Engine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
