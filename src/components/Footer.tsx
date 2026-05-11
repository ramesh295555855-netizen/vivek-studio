import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">VIVEK STUDIO</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
            Next-generation AI services and agentic solutions for the global market. Empowering businesses with intelligence.
          </p>
          <div className="flex items-center space-x-4">
            {[Twitter, Instagram, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm font-bold text-gray-500">
            {['Home', 'Features', 'Services', 'Portfolio', 'Pricing'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Company</h4>
          <ul className="space-y-4 text-sm font-bold text-gray-500">
            {['About Us', 'Contact', 'Security', 'Terms', 'Privacy'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Newsletter</h4>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest leading-loose">
            Stay updated with the latest AI trends and features.
          </p>
          <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-none text-xs px-3 focus:ring-0 flex-1 text-white font-bold"
            />
            <button className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-black text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-colors">
              Join
            </button>
          </div>
          <div className="flex items-center space-x-4 pt-2">
            <div className="flex items-center space-x-2 text-[10px] font-black text-gray-600 uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] font-black text-gray-600 uppercase tracking-widest">
              <Zap className="w-3 h-3" />
              <span>Fast</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] font-black text-gray-600 uppercase tracking-widest">
              <Globe className="w-3 h-3" />
              <span>Global</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
        <p>© 2026 VIVEK STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center space-x-8">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
