import { motion } from 'motion/react';
import { ExternalLink, Layers, Sparkles, Wand2 } from 'lucide-react';

const projects = [
  {
    title: "Zoya AI",
    category: "Proprietary Female AI Agent",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    description: "Zoya is a highly sophisticated companion AI who talks exactly like a real person, acting as a supportive and understanding friend to chat with at any time.",
    tags: ["Friendly AI", "Natural Speech", "Emotional Intel", "Custom LLM"],
    accent: "border-cyan-500/30 shadow-cyan-500/15",
    link: "https://zoyaai001.netlify.app/",
    isZoya: true
  },
  {
    title: "Santoshi AI",
    category: "Prompt-to-Web Builder",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    description: "An intelligent prompt-to-web platform that enables you to build and preview fully-featured professional web applications instantly using only natural language prompts.",
    tags: ["AI Coding", "Tailwind Generator", "React Engine", "Instant Deploy"],
    accent: "border-purple-500/20 shadow-purple-500/10",
    link: "https://santoshiai.vercel.app",
    isZoya: false
  },
  {
    title: "Nexus Neural Dashboard",
    category: "Enterprise AI Orchestrator",
    image: "https://images.unsplash.com/photo-1551288049-bbdaef8a2821?q=80&w=2070&auto=format&fit=crop",
    description: "An enterprise-grade decentralized platform designed for real-time orchestrating, clustering and monitoring of advanced agent frameworks.",
    tags: ["React", "D3.js", "Express", "TensorFlow"],
    accent: "border-emerald-500/20 shadow-emerald-500/10",
    link: null,
    isZoya: false
  }
];

export default function ProjectShowcase() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <Layers className="w-3 h-3" />
            <span>Project Artifacts</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic font-display">
            RECENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-shadow-glow">ARTIFACTS</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl font-medium">
            Explore the cutting-edge digital creations engineered by Maa Santoshi Studio.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className={`group relative rounded-[40px] overflow-hidden bg-white/3 border-2 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${project.accent}`}
          >
            <div>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {project.link && (
                  <div className="absolute top-6 right-6 flex space-x-2">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">{project.category}</span>
                  <div className="w-1 h-1 rounded-full bg-gray-750" />
                  {project.isZoya && (
                    <span className="px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-400 text-[8px] font-black uppercase tracking-wider">Top Ranked</span>
                  )}
                </div>
                
                <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{project.title}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-gray-400 uppercase italic">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Box */}
            <div className="p-8 pt-0">
              {project.isZoya ? (
                /* Blue special container block styled specifically for Zoya AI */
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 rounded-2xl bg-cyan-600/20 border border-cyan-400/40 text-center hover:bg-cyan-500 hover:text-black transition-all group/btn shadow-[0_4px_20px_rgba(34,211,238,0.15)] cursor-pointer"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Explore Zoya</span>
                  </div>
                </a>
              ) : project.link ? (
                /* Normal link button box */
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Wand2 className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest text-white">Explore Project</span>
                  </div>
                </a>
              ) : (
                <div className="block w-full p-4 rounded-2xl bg-white/2 border border-dashed border-white/5 text-center cursor-default">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-600">Internal Deployment</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

