import { motion } from 'motion/react';
import { Mail, MessageSquare, Instagram, Phone, Send, MapPin, Globe } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-radial from-purple-500/5 to-transparent blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">TALK</span>
          </h2>
          <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">
            Ready to integrate AI into your workflow? Reach out and let's build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Mail, label: 'Email', value: 'ramesh295555855@gmail.com', color: 'bg-red-500/10 text-red-400', link: 'mailto:ramesh295555855@gmail.com' },
                { icon: Instagram, label: 'Instagram', value: '@officialvivek', color: 'bg-pink-500/10 text-pink-400', link: '#' },
                { icon: Phone, label: 'WhatsApp', value: '+91 9123456789', color: 'bg-green-500/10 text-green-400', link: 'https://wa.me/919123456789' },
                { icon: MessageSquare, label: 'Discord', value: 'vivekstudio#1234', color: 'bg-blue-500/10 text-blue-400', link: '#' }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1">{item.label}</h4>
                  <p className="text-gray-400 text-sm font-bold tracking-tight">{item.value}</p>
                </motion.a>
              ))}
            </div>

            <div className="p-8 rounded-[40px] bg-gradient-to-br from-cyan-400/10 via-purple-500/5 to-transparent border border-white/5 space-y-6">
              <h3 className="text-2xl font-black text-white tracking-tight">Main Headquarters</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-400">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg font-medium">India - 841226</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <Globe className="w-6 h-6 text-purple-400" />
                  <span className="text-lg font-medium">Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-12 rounded-[48px] bg-white text-black space-y-8 relative group">
            <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors pointer-events-none rounded-[48px]" />
            <h3 className="text-4xl font-black tracking-tighter leading-none mb-8">SEND A MESSAGE</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-black/5 border-2 border-transparent focus:border-black focus:bg-white transition-all text-sm font-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-black/5 border-2 border-transparent focus:border-black focus:bg-white transition-all text-sm font-black" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-black/5 border-2 border-transparent focus:border-black focus:bg-white transition-all text-sm font-black resize-none" />
              </div>
              <button className="w-full py-5 rounded-2xl bg-black text-white font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10 flex items-center justify-center space-x-3 group">
                <span>Send Proposal</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
