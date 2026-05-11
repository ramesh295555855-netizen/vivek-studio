import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Instagram, Phone, Send, MapPin, Globe, CheckCircle2, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setStatus('submitting');
    try {
      await addDoc(collection(db, 'contact_requests'), {
        ...formData,
        status: 'new',
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-radial from-purple-500/5 to-transparent blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">TALK</span>
          </h2>
          <p className="text-gray-400 text-base font-medium max-w-xl mx-auto">
            Ready to integrate AI into your workflow? Reach out and let's build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Mail, label: 'Email', value: 'vivekgoswamirk@gmail.com', color: 'bg-red-500/10 text-red-400', link: 'mailto:vivekgoswamirk@gmail.com' },
                { icon: Instagram, label: 'Instagram', value: 'velvet._vibes.x', color: 'bg-pink-500/10 text-pink-400', link: 'https://instagram.com/velvet._vibes.x' },
                { icon: MessageSquare, label: 'Discord', value: 'santoshistudio#1234', color: 'bg-blue-500/10 text-blue-400', link: '#' }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-3 transition-transform group-hover:scale-110`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{item.label}</h4>
                  <p className="text-gray-400 text-xs font-bold tracking-tight">{item.value}</p>
                  {item.label === 'Instagram' && (
                    <p className="text-cyan-400 text-[9px] font-black mt-1 uppercase tracking-tighter">For contact DM on Insta</p>
                  )}
                </motion.a>
              ))}
            </div>

            <div className="p-8 rounded-[32px] bg-gradient-to-br from-cyan-400/10 via-purple-500/5 to-transparent border border-white/5 space-y-4">
              <h3 className="text-xl font-black text-white tracking-tight">Main Headquarters</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-base font-medium">India - 841226</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-base font-medium">Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-[40px] bg-white text-black space-y-6 relative group">
            <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors pointer-events-none rounded-[40px]" />
            <h3 className="text-3xl font-black tracking-tighter leading-none mb-6 font-display uppercase italic">Send a Message</h3>
            
            <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    placeholder="John Doe" 
                    className="w-full px-5 py-3 rounded-xl bg-black/5 border-2 border-transparent focus:border-black focus:bg-white transition-all text-xs font-black disabled:opacity-50" 
                    disabled={status === 'submitting' || status === 'success'}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com" 
                    className="w-full px-5 py-3 rounded-xl bg-black/5 border-2 border-transparent focus:border-black focus:bg-white transition-all text-xs font-black disabled:opacity-50" 
                    disabled={status === 'submitting' || status === 'success'}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Message</label>
                <textarea 
                  rows={3} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="How can we help you?" 
                  className="w-full px-5 py-3 rounded-xl bg-black/5 border-2 border-transparent focus:border-black focus:bg-white transition-all text-xs font-black resize-none disabled:opacity-50" 
                  disabled={status === 'submitting' || status === 'success'}
                />
              </div>

              <div className="relative pt-2">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-xs font-black uppercase tracking-widest text-center">Message Saved! We'll reach out soon.</span>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="button"
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-xl bg-black text-white font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10 flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Proposal</span>
                          <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-2 text-red-500 text-[10px] font-bold uppercase"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
