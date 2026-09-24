import { motion } from 'framer-motion';

const stack = [
  { name: 'HTML & CSS', level: 'Avanzado', icon: '🌐' },
  { name: 'JavaScript', level: 'Avanzado', icon: '⚡' },
  { name: 'TypeScript', level: 'Intermedio', icon: '📘' },
  { name: 'React', level: 'Intermedio', icon: '⚛️' },
  { name: 'Angular', level: 'Intermedio', icon: '🅰️' },
  { name: 'Node.js', level: 'Intermedio', icon: '🟢' },
  { name: 'Firebase', level: 'Intermedio', icon: '🔥' },
  { name: 'Three.js', level: 'Básico', icon: '🌌' },
  { name: 'Python', level: 'Intermedio', icon: '🐍' },
  { name: 'PHP', level: 'Intermedio', icon: '🐘' },
  { name: 'MySQL', level: 'Intermedio', icon: '🗄️' },
  { name: 'Docker', level: 'Básico', icon: '🐳' },
];

export default function StackSection() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Tecnologías</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-white">
              Mi <em className="italic">stack</em>
            </h2>
            <p className="text-muted text-sm mt-3">Herramientas con las que trabajo día a día.</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          {stack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors cursor-default group"
            >
              <span className="text-2xl w-10 text-center">{tech.icon}</span>
              <span className="text-white font-medium flex-1">{tech.name}</span>
              <span className="text-xs text-muted uppercase tracking-[0.2em] hidden sm:block">{tech.level}</span>
              <div className="w-24 h-1 bg-stroke rounded-full overflow-hidden hidden sm:block">
                <div
                  className="h-full accent-gradient rounded-full transition-all duration-500"
                  style={{
                    width: tech.level === 'Avanzado' ? '90%' : tech.level === 'Intermedio' ? '65%' : tech.level === 'Básico' ? '40%' : '20%'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
