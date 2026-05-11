import { motion } from 'motion/react';
import { Sparkles, Brain, Cpu, MessageCircle, Bot, Zap, Rocket } from 'lucide-react';

export default function ZoyaHighlightSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[60vw] h-[60vw] -translate-x-[30%] -translate-y-1/2 bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] translate-x-[20%] -translate-y-1/2 bg-purple-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-600 blur-2xl opacity-20 animate-pulse" />
            <div className="relative aspect-[4/5] rounded-[64px] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                alt="Zoya Female AI Agent" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12 space-y-6">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-12 h-1 bg-cyan-400/50 rounded-full" />
                  ))}
                </div>
                <div className="p-6 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Neural Activity: 98.4%</span>
                  </div>
                  <p className="text-white font-bold italic">"How can I assist your workflow today, excellence?"</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <Bot className="w-3 h-3" />
                <span>Proprietary Agent Technology</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none italic font-display">
                MEET <span className="text-cyan-400 text-shadow-glow">ZOYA</span>
              </h2>
              <p className="text-2xl font-black text-white uppercase tracking-tight italic">
                A Next-Gen <span className="text-purple-400">Female AI Agent.</span>
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                Designed by Maa Santoshi Studio, Zoya is an autonomous digital companion that handles your business logic, customer support, and technical automation. She's not just a chatbot; she's a dedicated worker built to scale your vision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Brain, title: "Self Learning", desc: "Adapts to your feedback" },
                { icon: MessageCircle, title: "Hinglish Support", desc: "Understands your language" },
                { icon: Zap, title: "Instant Tasks", desc: "No latency performance" },
                { icon: Rocket, title: "Future Ready", desc: "Deploy in 24 hours" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-3 hover:bg-white/10 transition-all cursor-default">
                  <item.icon className="w-8 h-8 text-cyan-400" />
                  <h4 className="text-sm font-black text-white uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-gray-500 text-xs font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="flex items-center space-x-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black hover:scale-105 transition-all font-black text-sm uppercase tracking-widest group shadow-xl shadow-cyan-400/20">
              <Sparkles className="w-5 h-5" />
              <span>AI MODEL AI PROJECT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
