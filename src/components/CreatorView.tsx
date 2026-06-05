import { motion } from 'motion/react';
import { 
  Mail, 
  Github, 
  Twitter, 
  Linkedin, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award,
  Sparkles
} from 'lucide-react';

export default function CreatorView() {
  const stats = [
    { label: 'Experience', value: '5+ Years' },
    { label: 'Projects', value: '150+' },
    { label: 'Clients', value: '80+' },
    { label: 'AI Models', value: '12' },
  ];

  return (
    <div className="p-8 md:p-16 max-w-5xl mx-auto space-y-16">
      {/* Bio Header */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full" />
          <div className="w-64 h-64 rounded-[40px] border-4 border-white/10 overflow-hidden relative z-10 p-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/40 group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-20" />
            <img 
              src="/src/assets/images/creator_vivek_office_1780655146156.png" 
              alt="Vivek Kumar" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[32px] scale-110 group-hover:scale-100 transition-transform duration-700"
            />
          </div>
        </motion.div>

        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span>Verified Creator & Elite Architect</span>
            </div>
            <h2 className="text-7xl font-black tracking-tighter leading-none text-white">
              Vivek <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Kumar</span>
            </h2>
            <p className="text-gray-300 text-xl font-medium max-w-xl leading-relaxed">
              Hailing from the historic land of <span className="text-white border-b border-cyan-500/50">India</span>, 
              Vivek is a visionary AI Architect who blends technical mastery with creative intuition to build 
              future-ready agentic ecosystems.
            </p>
          </div>

          <div className="space-y-4 text-gray-400 text-lg leading-relaxed border-l-4 border-cyan-500/30 pl-8 bg-gradient-to-r from-cyan-500/5 to-transparent py-4 rounded-r-2xl">
            <p className="italic font-medium text-gray-300 leading-snug">
              "Building technology isn't just about code; it's about shifting the paradigm of how humans interact with machines. 
              I strive to carry the legacy of knowledge forward into the AI revolution."
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4">
            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(34,211,238,0.4)] grow sm:grow-0">
              Work With Me
            </button>
            <div className="flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-md">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="font-bold tracking-tight">India</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
            {[Github, Twitter, Linkedin, Mail].map((Icon, idx) => (
              <button key={idx} className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-black transition-all flex items-center justify-center border border-white/10">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center space-y-1"
          >
            <div className="text-3xl font-black text-white">{stat.value}</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-2xl font-black">
            <Award className="w-8 h-8 text-yellow-500" />
            <h3>Legacy & Milestones</h3>
          </div>
          <div className="space-y-6">
            {[
              { year: '2025', title: 'Global AI Excellence Award', desc: 'Recognized for pioneering work in autonomous agent integration.' },
              { year: '2023', title: 'Zoya AI Ecosystem', desc: 'Scaled Zoya to handle over 1M complex business tasks monthly.' },
              { year: '2020', title: 'Senior Systems Architect', desc: 'Designed scalable neural architectures for Fortune 500 startups.' }
            ].map((item) => (
              <div key={item.title} className="relative pl-10 border-l-2 border-white/5 py-2 group">
                <div className="absolute left-[-9px] top-4 w-4 h-4 rounded-full bg-black border-2 border-cyan-400 group-hover:scale-125 transition-transform" />
                <div className="text-xs font-black text-cyan-400 mb-1 uppercase tracking-tighter">{item.year}</div>
                <div className="font-black text-white text-lg tracking-tight">{item.title}</div>
                <div className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 rounded-[48px] bg-gradient-to-br from-cyan-500/10 via-purple-600/10 to-transparent border border-white/10 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-cyan-400/5 blur-[80px] group-hover:blur-[120px] transition-all" />
          <div className="w-20 h-20 rounded-3xl bg-white text-black flex items-center justify-center shadow-2xl relative z-10 scale-110">
            <GraduationCap className="w-10 h-10" />
          </div>
          <div className="space-y-3 relative z-10">
            <h4 className="text-3xl font-black tracking-tight">The Visionary Mind</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
              Based in <span className="text-white">India</span>, Vivek combines deep-rooted values with 
              unparalleled global technical expertise to provide cutting-edge solutions for the modern world.
            </p>
          </div>
          <button className="px-10 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black uppercase tracking-widest transition-all relative z-10 shadow-xl shadow-cyan-500/20">
            Download Pro Portfolio
          </button>
        </div>
      </div>

      {/* New Project Inquiry Section */}
      <section className="p-12 md:p-20 rounded-[64px] bg-white text-black space-y-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 opacity-20 blur-[100px]" />
        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            Have a project in mind?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Vivek is currently accepting high-impact projects and strategic partnerships. 
            Elevate your business with India's finest AI integration specialist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="w-full sm:w-auto px-12 py-5 rounded-3xl bg-black text-white font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform">
              Send Email
            </button>
            <button className="w-full sm:w-auto px-12 py-5 rounded-3xl border-2 border-black text-black font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Book a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
