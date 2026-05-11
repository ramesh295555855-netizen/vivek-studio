import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      q: "What is Maa Santoshi Studio?",
      a: "Maa Santoshi Studio is a premium AI consulting and development hub, specializing in building agentic systems, automated workflows, and high-end full-stack applications for the modern enterprise."
    },
    {
      q: "How can I start a project with you?",
      a: "Starting a project is simple. Click the 'Start Project' or 'Lets Connect' button anywhere on the site, or reach out directly via the contact form with your project details."
    },
    {
      q: "Do you offer custom AI solutions?",
      a: "Absolutely. We specialize in bespoke AI agents tailored to specific business needs, including custom data fine-tuning and specialized reasoning engines."
    },
    {
      q: "What technical stacks do you work with?",
      a: "We are experts in React, TypeScript, Node.js, and Python-based AI frameworks. We leverage the best of Gemini API, OpenAI, and custom neural architectures."
    },
    {
      q: "Is there a free consultation available?",
      a: "Yes, we offer a free 30-minute discovery call for new clients to discuss project potential and technical feasibility."
    }
  ];

  return (
    <section className="py-24 relative bg-black">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <HelpCircle className="w-3 h-3" />
            <span>Support Center</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            GOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">QUESTIONS?</span>
          </h2>
          <p className="text-gray-400 text-lg font-medium">
            Everything you need to know about our process and capabilities.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={`faq-${i}`} 
              q={faq.q} 
              a={faq.a} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  q: string;
  a: string;
  key?: string | number;
}

function FAQItem({ q, a }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-3xl border transition-all duration-300 ${isOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-black text-white tracking-tight leading-tight">{q}</span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white text-black border-white' : ''}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 text-gray-400 text-sm font-medium leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
