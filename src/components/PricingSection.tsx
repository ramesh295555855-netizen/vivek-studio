import { motion } from 'motion/react';
import { Check, Zap, Shield, Crown, Star } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for exploring AI capabilities and personal projects.',
      features: ['50 AI Queries / month', 'Standard AI Response', 'Basic Analytics', 'Community Support', 'Save 5 Projects'],
      color: 'border-white/10',
      tag: 'Basic',
      icon: Zap
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'Advanced features for individuals and small teams.',
      features: ['Unlimited AI Queries', 'Fast AI Response (GPT-4)', 'Advanced Analytics', 'Priority Email Support', 'Save 100 Projects', 'API Access'],
      color: 'border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.2)] scale-105',
      tag: 'Most Popular',
      icon: Crown,
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Bespoke solutions for large scale integration and high volume.',
      features: ['Custom AI Training', 'Neural Fine-tuning', '24/7 Dedicated Support', 'SLA Guarantee', 'Dedicated Infrastructure', 'On-premise Options'],
      color: 'border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.2)]',
      tag: 'Elite',
      icon: Star
    }
  ];

  return (
    <section className="py-20 relative bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic font-display">
            Pick Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Power</span>
          </h2>
          <p className="text-gray-400 text-base font-medium max-w-xl mx-auto">
            Competitive pricing models designed to scale with your ambition. No hidden costs, just raw intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[32px] bg-white/5 border-2 ${plan.color} backdrop-blur-xl flex flex-col group`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest shadow-lg shadow-cyan-400/30">
                  {plan.tag}
                </div>
              )}
              {!plan.highlight && (
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">
                  {plan.tag}
                </div>
              )}

              <div className="space-y-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 transition-transform group-hover:rotate-6`}>
                  <plan.icon className={`w-6 h-6 ${plan.highlight ? 'text-cyan-400' : 'text-purple-400'}`} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline space-x-1 text-white">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">/mo</span>}
                </div>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center space-x-3 text-xs text-gray-300 font-bold tracking-tight">
                    <Check className={`w-4 h-4 ${plan.highlight ? 'text-cyan-400' : 'text-gray-600'}`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                plan.highlight 
                ? 'bg-cyan-400 text-black hover:bg-cyan-300 shadow-xl shadow-cyan-400/20' 
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started Now'}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center space-x-2">
            <Shield className="w-3 h-3" />
            <span>Enterprise Grade Security & Compliance included in all plans</span>
          </p>
        </div>
      </div>
    </section>
  );
}
