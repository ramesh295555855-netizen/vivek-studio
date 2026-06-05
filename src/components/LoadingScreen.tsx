import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center space-y-8">
      <div className="relative">
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 rounded-full border-2 border-cyan-400/30 overflow-hidden shadow-2xl shadow-cyan-500/20"
        >
          <img 
            src="/src/assets/images/studio_logo_1780654565249.png" 
            alt="Maa Santoshi Studio Logo" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Orbiting particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          </motion.div>
        ))}
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-white tracking-widest uppercase italic">Maa Santoshi Studio</h2>
        <div className="flex items-center justify-center space-x-1">
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Initializing Neural Links</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-cyan-400"
          >...</motion.span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
        />
      </div>
    </div>
  );
}
