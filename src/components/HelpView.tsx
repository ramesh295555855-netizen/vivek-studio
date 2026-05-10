import { motion } from 'motion/react';
import { HelpCircle, MessageSquare, BookOpen, ExternalLink, Mail, Phone } from 'lucide-react';

export default function HelpView() {
  const faqs = [
    { q: 'How do I upgrade to the Elite Pass?', a: 'You can upgrade directly from the About Zoya section or your dashboard settings.' },
    { q: 'Is my data encrypted?', a: 'Yes, Zoya uses AES-256 bit encryption for all user interactions and stored parameters.' },
    { q: 'Can I use Zoya offline?', a: 'Basic features work offline via the Desktop App, but advanced neural processing requires a cloud connection.' },
  ];

  return (
    <div className="p-8 md:p-16 max-w-4xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="w-10 h-10 text-cyan-400" />
        </div>
        <h2 className="text-5xl font-black tracking-tight">Need Support?</h2>
        <p className="text-gray-400 text-lg">We are here to help you master Zoya AI.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-400 text-black flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Documentation</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Explore our comprehensive guides, API references, and community tutorials.</p>
          <button className="flex items-center space-x-2 text-cyan-400 font-bold uppercase tracking-widest text-[10px] hover:translate-x-2 transition-transform">
            <span>Read Docs</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        <div className="p-8 rounded-[40px] bg-purple-600/10 border border-purple-600/20 space-y-6 text-purple-100">
          <div className="w-12 h-12 rounded-2xl bg-purple-500 text-white flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Live Support</h3>
          <p className="text-purple-200/60 text-sm leading-relaxed">Our team of experts is available 24/7 for Elite Pass members.</p>
          <button className="flex items-center space-x-2 text-purple-400 font-bold uppercase tracking-widest text-[10px] hover:translate-x-2 transition-transform">
            <span>Start Chat</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <h4 className="text-xl font-bold">Common Questions</h4>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <p className="font-bold text-white">{faq.q}</p>
              <p className="text-gray-500 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10 text-gray-500 text-sm">
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span>support@zoya.ai</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>+91 (800) ZOYA-AI</span>
        </div>
      </div>
    </div>
  );
}
