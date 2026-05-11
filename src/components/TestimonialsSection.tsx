import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Aryan Singh",
      role: "CEO @ TechNova",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan",
      text: "Vivek's AI integration transformed our entire customer support workflow. The agentic system he built handles 90% of queries autonomously. Game changer!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Product Lead @ GlobalFlow",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      text: "The UI/UX design is world-class. It's rare to find a developer who understands both hardcore AI engineering and high-end visual aesthetics.",
      rating: 5
    },
    {
      name: "Rohit Verma",
      role: "Founder @ GlobalStartups",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit",
      text: "Working with Vivek was a breeze. He delivered a complex dashboard solution ahead of schedule. Truly elite tech talent.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative bg-black">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <Heart className="w-3 h-3" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            TRUSTED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">LEADERS</span>
          </h2>
          <p className="text-gray-400 text-base font-medium max-w-xl mx-auto">
            Don't take our word for it. Here's what visionary founders and tech leaders have to say about working with Maa Santoshi Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[40px] bg-white/5 border border-white/5 hover:border-white/10 transition-all group flex flex-col space-y-6"
            >
              <div className="flex items-center space-x-1">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-white/5 group-hover:text-cyan-400/10 transition-colors" />
                <p className="text-gray-300 text-lg font-medium leading-relaxed italic relative z-10">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4 mt-auto">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-2xl bg-white/10" />
                <div>
                  <h4 className="text-white font-black text-sm tracking-tight">{item.name}</h4>
                  <p className="text-gray-500 text-xs font-black uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
