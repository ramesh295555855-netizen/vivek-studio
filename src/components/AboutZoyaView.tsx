import { motion } from 'motion/react';
import { Shield, Zap, Target, Cpu, Globe, Rocket, Star } from 'lucide-react';

export default function AboutZoyaView() {
  const coreFeatures = [
    { 
      icon: Cpu, 
      title: 'Neural Core', 
      description: 'Zoya is powered by a custom neural architecture designed for lightning-fast decision making.' 
    },
    { 
      icon: Globe, 
      title: 'Multi-lingual', 
      description: 'Supports over 50 languages with native-level fluency and cultural context awareness.' 
    },
    { 
      icon: Shield, 
      title: 'Privacy First', 
      description: 'Enterprise-grade encryption ensures your data remains yours. No training on user data.' 
    },
    { 
      icon: Zap, 
      title: 'Real-time Processing', 
      description: 'Sub-millisecond latency for real-time task automation and complex analysis.' 
    },
  ];

  return (
    <div className="p-8 md:p-16 max-w-6xl mx-auto space-y-20">
      {/* Intro Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Rocket className="w-3 h-3" />
            <span>Next Generation AI</span>
          </div>
          <h2 className="text-5xl font-black tracking-tight leading-tight">
            Meet <span className="text-cyan-400">Zoya AI</span>. Your Ultimate Digital Companion.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Zoya isn't just another language model. She is an autonomous agent designed to seamlessly integrate into your workflow, 
            understand your goals, and execute tasks with human-like precision. From automation to deep analysis, Zoya is built for 
            those who demand the future, today.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 blur-3xl group-hover:blur-[60px] transition-all duration-500" />
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" 
              alt="Zoya AI Vision" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Cutting-Edge Features</h3>
          <p className="text-gray-400 max-w-xl mx-auto">Explore the capabilities that set Zoya apart from the competition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Elite Pass Section */}
      <section className="relative overflow-hidden p-8 md:p-12 rounded-[40px] border border-cyan-400/30 bg-gradient-to-br from-cyan-900/40 via-black to-purple-900/40">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-widest">
              <Star className="w-3 h-3 fill-yellow-500" />
              <span>Premium Access</span>
            </div>
            <h3 className="text-4xl font-black italic tracking-tight">THE ELITE PASS</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Unlock the full potential of Zoya AI. The Elite Pass grants you priority access to new models, 
              unlimited API calls, and personalized AI fine-tuning based on your specific use case.
            </p>
            <ul className="space-y-3">
              {[
                'Unlimited Context Window',
                'Priority Server Access',
                'Custom Agent Training',
                '24/7 Digital Concierge'
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 transition-all" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black transition-colors uppercase tracking-widest text-sm shadow-xl shadow-cyan-500/40">
              Upgrade to Elite
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-4 text-center space-y-2">
              <Zap className="w-8 h-8 text-yellow-500" />
              <span className="text-xs font-bold uppercase text-gray-500 tracking-tighter">Ultra Speed</span>
            </div>
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-4 text-center space-y-2 translate-y-8">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-xs font-bold uppercase text-gray-500 tracking-tighter">Gold Security</span>
            </div>
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-4 text-center space-y-2">
              <Target className="w-8 h-8 text-purple-400" />
              <span className="text-xs font-bold uppercase text-gray-500 tracking-tighter">Max Precision</span>
            </div>
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-4 text-center space-y-2 translate-y-8">
              <Rocket className="w-8 h-8 text-red-500" />
              <span className="text-xs font-bold uppercase text-gray-500 tracking-tighter">Earliest Beta</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
