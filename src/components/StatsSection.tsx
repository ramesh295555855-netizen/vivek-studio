import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Users, Rocket, Clock, Headset } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { icon: Users, label: 'Total Users', value: 1200, suffix: '+', color: 'text-cyan-400' },
    { icon: Rocket, label: 'Projects Done', value: 450, suffix: '+', color: 'text-purple-500' },
    { icon: Clock, label: 'Systems Uptime', value: 99.9, suffix: '%', color: 'text-green-400' },
    { icon: Headset, label: 'Support hrs', value: 24, suffix: '/7', color: 'text-pink-500' },
  ];

  return (
    <section className="py-16 bg-black/40 backdrop-blur-3xl border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-4 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 transition-transform group-hover:scale-110">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-white tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => 
    Math.floor(latest).toLocaleString() + suffix
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        animate(count, value, { duration: 2, ease: "easeOut" });
      }}
    >
      <motion.p>{display}</motion.p>
    </motion.div>
  );
}
