import { motion } from 'motion/react';
import { ChevronRight, Download, Eye, Link as LinkIcon, MessageCircle } from 'lucide-react';

interface DashboardViewProps {
  onConnect: () => void;
}

export default function DashboardView({ onConnect }: DashboardViewProps) {
  return (
    <div className="relative min-h-[calc(100vh-88px)] flex flex-col items-center justify-center p-8 text-center overflow-hidden bg-black">
      {/* Large Immersive Rotating Concentric Circles (Matches Reference Image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[130vw] md:h-[130vw] pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative"
          style={{
            background: `repeating-radial-gradient(
              circle at center,
              transparent 0px,
              transparent 12px,
              rgba(34, 211, 238, 0.08) 13px,
              rgba(139, 92, 246, 0.08) 14px
            )`
          }}
        >
          {/* Enhanced Glow Layers for Depth */}
          <div className="absolute inset-0 bg-radial from-transparent via-cyan-500/10 to-transparent blur-[150px] opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 mix-blend-overlay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-radial from-purple-500/10 to-transparent blur-[80px]" />
        </motion.div>
        
        {/* Dark Vignette to focus content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 space-y-8"
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-tight">
          Vivek <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Kumar</span>
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Engineering the <span className="text-cyan-400">Next Generation</span> of AI.
        </h2>

        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
          Bespoke AI Agents. Enterprise Dashboards. 
          <span className="text-white font-bold ml-2 underline decoration-cyan-500/50">Bihar's Premier Tech Artisan.</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
          <button 
            onClick={onConnect}
            className="flex items-center space-x-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black hover:scale-105 transition-all font-black text-sm uppercase tracking-widest group shadow-[0_20px_40px_-15px_rgba(34,211,238,0.4)]"
          >
            <span>Start a Project</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="flex items-center space-x-3 px-10 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-xl transition-all font-black text-sm uppercase tracking-widest group">
            <Eye className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Case Studies</span>
          </button>
        </div>

        {/* Floating Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto opacity-50">
          {['Scalable Architecture', 'Neural Intelligence', 'Cloud Native', 'Quantum Security'].map((badge) => (
            <div key={badge} className="px-4 py-3 rounded-xl border border-white/5 bg-white/3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              {badge}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Scroll Indicator (from reference) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
      </motion.div>

      {/* Floating WhatsApp fixed button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 z-50 overflow-hidden"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <div className="absolute inset-0 bg-white/10 animate-pulse" />
      </motion.button>
    </div>
  );
}
