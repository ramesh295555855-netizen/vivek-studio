import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Image as ImageIcon, 
  Mic, 
  Code, 
  FileText, 
  Video, 
  Zap, 
  Search,
  ArrowRight
} from 'lucide-react';

interface Tool {
  id: string;
  category: string;
  title: string;
  desc: string;
  icon: any;
  color: string;
  bg: string;
}

export default function ToolsView() {
  const tools: Tool[] = [
    { id: 'chat', category: 'Conversational', title: 'AI Chat (Zoya)', desc: 'Next-gen conversational intelligence powered by Gemini 2.0.', icon: MessageSquare, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { id: 'writer', category: 'Creative', title: 'AI Writer', desc: 'Generate high-converting copy and professional articles in seconds.', icon: FileText, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { id: 'image', category: 'Generative', title: 'Image Creator', desc: 'Neural art generation from descriptive text prompts.', icon: ImageIcon, color: 'text-pink-400', bg: 'bg-pink-500/10' },
    { id: 'code', category: 'Technical', title: 'Code Assistant', desc: 'Debug and generate clean code across any language.', icon: Code, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { id: 'voice', category: 'Audio', title: 'Voice Synthesis', desc: 'Convert text to ultra-realistic human voices.', icon: Mic, color: 'text-green-400', bg: 'bg-green-500/10' },
    { id: 'video', category: 'Generative', title: 'Video Gen', desc: 'Create stunning short-form videos from raw prompts.', icon: Video, color: 'text-red-400', bg: 'bg-red-500/10' },
  ];

  return (
    <div className="p-8 space-y-12 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <Zap className="w-3 h-3" />
              <span>Neural Foundry</span>
            </div>
            <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter leading-none">AI TOOLS <br/><span className="text-cyan-400">SHOWCASE</span></h2>
          </div>
          <div className="relative group max-w-sm w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Search tools..." className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-xs font-black text-white focus:outline-none focus:border-cyan-400/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[48px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-400/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 blur-3xl" />
              <div className="relative z-10 space-y-6">
                <div className={`w-16 h-16 rounded-2xl ${tool.bg} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  <tool.icon className={`w-8 h-8 ${tool.color}`} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">{tool.category}</span>
                  <h3 className="text-2xl font-black text-white tracking-tight">{tool.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{tool.desc}</p>
                </div>
                <button className="flex items-center space-x-2 text-[10px] font-black text-cyan-400 uppercase tracking-widest hover:translate-x-2 transition-all">
                  <span>Launch Module</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Featured Advanced Section */}
        <div className="mt-20 p-12 rounded-[64px] bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-black border border-white/10 relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-1000" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-white tracking-tighter leading-none uppercase italic">Build Your Own <br/><span className="text-cyan-400">AI Agent</span></h3>
              <p className="text-gray-400 font-medium leading-relaxed">Leverage Vivek Studio's proprietary neural engine to create custom agents tailored to your business logic. A next-gen agentic builder platform.</p>
              <button className="px-10 py-5 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-colors">Start Building (Beta)</button>
            </div>
            <div className="relative aspect-video rounded-3xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.1)_180deg,transparent_360deg)]"
               />
               <Code className="w-20 h-20 text-cyan-400/20 relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
