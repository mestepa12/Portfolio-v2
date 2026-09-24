import { motion } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Proyectos Completados' },
  { value: '8', label: 'Tecnologías Dominadas' },
  { value: '100%', label: 'Dedicación' },
];

export default function StatsSection() {
  return (
    <section className="bg-bg py-16 md:py-24 border-y border-stroke">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-stroke">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:px-12"
            >
              <div className="font-display italic text-6xl md:text-7xl text-white mb-2">{stat.value}</div>
              <div className="text-sm text-muted uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
