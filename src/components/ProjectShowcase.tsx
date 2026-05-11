import { motion } from 'motion/react';
import { ExternalLink, Github, Layers, Layout, Shield } from 'lucide-react';

const projects = [
  {
    title: "Nexus Neural Dashboard",
    category: "Enterprise AI",
    image: "https://images.unsplash.com/photo-1551288049-bbdaef8a2821?q=80&w=2070&auto=format&fit=crop",
    description: "A high-performance dashboard for managing decentralized AI clusters with real-time telemetry.",
    tags: ["React", "D3.js", "Express", "TensorFlow"],
    accent: "border-cyan-500/20 shadow-cyan-500/10"
  },
  {
    title: "Zoya Agentic Core",
    category: "Custom Agents",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2010&auto=format&fit=crop",
    description: "The proprietary engine behind our female AI agents, optimized for logic and natural dialogue.",
    tags: ["Gemini 1.5", "TypeScript", "Node.js", "Python"],
    accent: "border-purple-500/20 shadow-purple-500/10"
  },
  {
    title: "Aura E-Commerce 360",
    category: "Web 3.0",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    description: "A futuristic virtual shopping experience with AI concierge and 3D product previews.",
    tags: ["Three.js", "Aframe", "Firebase", "Stripe"],
    accent: "border-pink-500/20 shadow-pink-500/10"
  }
];

export default function ProjectShowcase() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <Layers className="w-3 h-3" />
            <span>Project Samples</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic font-display">
            RECENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-shadow-glow">ARTIFACTS</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl font-medium">
            A glimpse into the high-precision digital architecture crafted by Maa Santoshi Studio.
          </p>
        </div>
        
        <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/50 transition-all font-black text-xs uppercase tracking-widest">
          View All Work
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`group relative rounded-[40px] overflow-hidden bg-white/3 border-2 transition-all hover:-translate-y-2 ${project.accent}`}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute top-6 right-6 flex space-x-2">
                <button className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">{project.category}</span>
                <div className="w-1 h-1 rounded-full bg-gray-700" />
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="w-3 h-1 rounded-full bg-cyan-400/40" />
                  ))}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{project.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-gray-400 uppercase italic">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
