import { motion } from 'motion/react';
import { 
  Terminal, 
  Search, 
  Code2, 
  Palette, 
  Database, 
  Fingerprint, 
  Cloud,
  Headphones
} from 'lucide-react';

export default function FeaturesView() {
  const services = [
    { title: 'Neural Chat', icon: Terminal, color: 'text-cyan-400' },
    { title: 'Semantic Search', icon: Search, color: 'text-purple-400' },
    { title: 'Auto-Coding', icon: Code2, color: 'text-blue-400' },
    { title: 'Creative Mode', icon: Palette, color: 'text-pink-400' },
    { title: 'Data Insight', icon: Database, color: 'text-green-400' },
    { title: 'Bio-Auth', icon: Fingerprint, color: 'text-red-400' },
    { title: 'Cloud Sync', icon: Cloud, color: 'text-orange-400' },
    { title: 'Voice Sync', icon: Headphones, color: 'text-yellow-400' },
  ];

  return (
    <div className="p-8 md:p-16 space-y-12 max-w-7xl mx-auto">
      <div className="space-y-4">
        <h2 className="text-4xl font-black">Agentic Features</h2>
        <p className="text-gray-400 max-w-2xl">Zoya AI is built as an ecosystem of specialized tools designed to handle every aspect of your digital life.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-cyan-400/30 hover:bg-white/10 transition-all cursor-pointer overflow-hidden relative"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-current to-transparent opacity-0 group-hover:opacity-10 transition-opacity ${s.color}`} />
            <s.icon className={`w-10 h-10 mb-6 transition-transform group-hover:scale-110 ${s.color}`} />
            <h3 className="text-xl font-bold group-hover:text-white transition-colors">{s.title}</h3>
            <p className="text-sm text-gray-500 mt-2">Advanced integration with the core Zoya neural engine.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
