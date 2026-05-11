import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Image as ImageIcon, 
  Mic, 
  Zap, 
  Cloud, 
  ShieldCheck,
  Code,
  Layout,
  Globe,
  Cpu,
  BrainCircuit,
  Lock
} from 'lucide-react';

export default function FeaturesView() {
  const sections = [
    {
      title: "AI POWERED TOOLS",
      features: [
        { icon: MessageSquare, title: "AI Chat", desc: "Advanced conversational agents powered by Gemini 2.0.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
        { icon: ImageIcon, title: "Image Generator", desc: "Creative visual generation from text prompts.", color: "text-purple-400", bg: "bg-purple-500/10" },
        { icon: Mic, title: "AI Voice", desc: "Synthesize natural human-like speech across languages.", color: "text-pink-400", bg: "bg-pink-500/10" },
        { icon: Code, title: "Code Assistant", desc: "Intelligent code generation and debugging for developers.", color: "text-blue-400", bg: "bg-blue-500/10" },
      ]
    },
    {
      title: "CORE SERVICES",
      features: [
        { icon: Globe, title: "Web Development", desc: "High-performance full-stack web applications.", color: "text-green-400", bg: "bg-green-500/10" },
        { icon: Layout, title: "UI/UX Design", desc: "Bespoke digital experiences with modern aesthetics.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
        { icon: Cpu, title: "AI Systems", desc: "Agentic workflows and automated business logic.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
        { icon: Globe, title: "Portfolio Development", desc: "Showcase your brand with world-class digital resumes.", color: "text-purple-400", bg: "bg-purple-500/10" },
      ]
    },
    {
      title: "ELITE INFRASTRUCTURE",
      features: [
        { icon: Zap, title: "Fast Performance", desc: "Optimized for speed and sub-second interactions.", color: "text-red-400", bg: "bg-red-500/10" },
        { icon: Cloud, title: "Cloud Storage", desc: "Seamless and secure data synchronization.", color: "text-blue-400", bg: "bg-blue-500/10" },
        { icon: Lock, title: "Secure System", desc: "Enterprise-grade encryption and auth protocols.", color: "text-gray-400", bg: "bg-gray-500/10" },
        { icon: BrainCircuit, title: "Scalable Logic", desc: "Neural systems that grow with your business.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pb-24 px-8">
      <div className="max-w-7xl mx-auto space-y-32 pt-20">
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ECOSYSTEM</span>
          </h1>
          <p className="text-gray-400 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            From the local heart to the global stage. A complete suite of AI-first tools and services designed to redefine technical excellence.
          </p>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className="space-y-12">
            <h2 className="text-sm font-black text-cyan-400 uppercase tracking-[0.4em] text-center md:text-left underline decoration-white/20 underline-offset-8">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[40px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group flex flex-col items-center text-center space-y-6 relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 blur-2xl" />
                  <div className={`w-16 h-16 rounded-[22px] ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">{feature.title}</h3>
                  <p className="text-gray-500 text-sm font-bold leading-relaxed">
                    {feature.desc}
                  </p>
                  <button className="text-[10px] font-black text-cyan-400 uppercase tracking-widest pt-4 opacity-0 group-hover:opacity-100 transition-all flex items-center space-x-2">
                    <span>EXPLORE NOW</span>
                    <Zap className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Fix missing globe icon import error in code above - it should be 'Globe'
