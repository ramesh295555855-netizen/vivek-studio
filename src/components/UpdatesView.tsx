import { motion } from 'motion/react';
import { Tag, Calendar, ChevronRight } from 'lucide-react';

export default function UpdatesView() {
  const updates = [
    { version: 'v2.4.0', date: 'Oct 12, 2025', title: 'Context Window Expansion', desc: 'Increased context window to 2M tokens for all Elite Pass users.' },
    { version: 'v2.3.5', date: 'Sep 28, 2025', title: 'Multi-Modal Voice v3', desc: 'New crystal-clear voice synthesis with emotional depth adjustment.' },
    { version: 'v2.3.0', date: 'Aug 15, 2025', title: 'Zoya Desktop App', desc: 'Native support for Windows and macOS with system-wide automation.' },
    { version: 'v2.2.0', date: 'Jul 01, 2025', title: 'Web Grounding Pro', desc: 'Real-time web browsing capabilities for more accurate fact checking.' },
  ];

  return (
    <div className="p-8 md:p-16 max-w-4xl mx-auto space-y-12">
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-black italic">CHRONICLE</h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold">System Updates & Logs</p>
        </div>
        <div className="text-right">
          <span className="text-4xl font-black text-cyan-400">v2.4.0</span>
          <p className="text-gray-600 text-[10px] uppercase font-bold">Current Release</p>
        </div>
      </div>

      <div className="space-y-6">
        {updates.map((update, i) => (
          <motion.div
            key={update.version}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group flex gap-6 p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-white/20 transition-all cursor-pointer items-start"
          >
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-[10px] font-black uppercase">{update.version}</span>
                <div className="flex items-center space-x-2 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                  <Calendar className="w-3 h-3" />
                  <span>{update.date}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors tracking-tight">{update.title}</h3>
              <p className="text-gray-400 leading-relaxed italic border-l-2 border-cyan-400/20 pl-4">{update.desc}</p>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ChevronRight className="w-5 h-5" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <button className="w-full py-4 rounded-2xl border-2 border-dashed border-white/10 text-gray-500 hover:text-white hover:border-white/20 transition-all text-xs font-bold uppercase tracking-widest">
        View Archived Updates
      </button>
    </div>
  );
}
