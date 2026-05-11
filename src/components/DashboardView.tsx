import { motion } from 'motion/react';
import { ChevronRight, Eye, Sparkles, Zap, Globe, Cpu, Layout, MessageSquare } from 'lucide-react';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

interface DashboardViewProps {
  onConnect: () => void;
}

export default function DashboardView({ onConnect }: DashboardViewProps) {
  return (
    <div className="relative min-h-[calc(100vh-88px)] bg-black overflow-x-hidden pt-10">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        {/* Dynamic Emerging Concentric Circles Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 5], 
                opacity: [0, 1, 0],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                delay: i * 1.5,
                ease: "linear"
              }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 shadow-[0_0_40px_rgba(34,211,238,0.6)] ${
                i % 2 === 0 ? 'border-cyan-400' : 'border-purple-500'
              }`}
              style={{ 
                width: '100vh', 
                height: '100vh',
              }}
            />
          ))}
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-cyan-500/40 blur-[180px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vw] bg-purple-600/30 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,black_85%)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">V2.0 AI ECOSYSTEM IS LIVE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] text-white px-4 font-display">
            MAA SANTOSHI <br className="sm:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">STUDIO</span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-black text-white max-w-3xl mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] leading-tight uppercase italic font-serif">
            Engineering the <span className="relative inline-block px-2">
              <span className="text-cyan-400">Next Generation</span>
              <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-cyan-500/20">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee] z-20"
                />
              </div>
            </span> of AI.
          </h2>

          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Bespoke AI Agents. Enterprise Dashboards. 
            <span className="text-white font-bold ml-2 underline decoration-cyan-500/50">India's Premier Tech Artisan.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <button 
              onClick={onConnect}
              className="flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black hover:scale-105 transition-all font-black text-xs uppercase tracking-widest group shadow-[0_20px_40px_-15px_rgba(34,211,238,0.4)]"
            >
              <span>Start a Project</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="flex items-center space-x-3 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-xl transition-all font-black text-xs uppercase tracking-widest group">
              <Eye className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>Case Studies</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: 'Web Development', desc: 'World class full-stack solutions built with React, Node, and performance first architecture.' },
            { icon: Cpu, title: 'AI Integration', desc: 'Custom trained conversational agents and autonomous workflows for business scaling.' },
            { icon: Layout, title: 'UI/UX Design', desc: 'Brutalist, futuristic and high-end glassmorphism interfaces designed for impact.' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[48px] bg-white/3 border border-white/5 hover:border-cyan-400/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 blur-3xl" />
              <item.icon className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black text-white mb-3 tracking-tighter uppercase">{item.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hero Mockup Area */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <div className="relative p-1 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-transparent rounded-[40px]">
          <div className="bg-black/90 rounded-[39px] overflow-hidden border border-white/5 shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
              alt="AI Dashboard Mockup" 
              className="w-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 space-y-3">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none italic">Experience Pure <br/> Intelligence.</h3>
              <p className="text-gray-400 text-sm max-w-lg font-medium">Dive into our custom AI dashboard ecosystem designed for high-stakes business operations.</p>
              <button 
                onClick={onConnect}
                className="px-6 py-3 rounded-lg bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-colors"
              >
                Launch Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
