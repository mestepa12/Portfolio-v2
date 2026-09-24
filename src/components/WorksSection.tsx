import { motion } from 'framer-motion';

// Clases completas en un mapa y no `md:col-span-${n}`: Tailwind encuentra las
// clases leyendo el código como texto, y una construida en tiempo de ejecución
// no llegaría al CSS generado.
const spanClasses: Record<number, string> = {
  5: 'md:col-span-5',
  7: 'md:col-span-7',
  12: 'md:col-span-12',
};

// Imágenes con BASE_URL: el sitio vive en /Portfolio/ y una ruta absoluta
// ('/x.png') apuntaría a la raíz del dominio de GitHub Pages.
const projects = [
  {
    title: 'Rincón de Lectura',
    desc: 'App de lectura en producción con 72 usuarias activas. Firebase Auth, Firestore con reglas de seguridad propias y Cloud Functions para notificaciones y rachas. Búsqueda en Google Books con OpenLibrary de respaldo, importación del CSV de Goodreads y app Android con Capacitor.',
    tech: ['JavaScript', 'Firebase', 'Cloud Functions', 'Capacitor'],
    href: 'https://rinconlectura.es/',
    gradient: 'from-indigo-900/40 to-purple-900/40',
    img: `${import.meta.env.BASE_URL}rincon-preview.png`,
    span: 7,
  },
  {
    title: 'Daysu Copistería',
    desc: 'Web corporativa para negocio real en Córdoba. Diseño responsivo centrado en conversión: horarios, servicios, ubicación y llamada directa desde móvil.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://graceful-dango-c75225.netlify.app/',
    gradient: 'from-blue-900/40 to-cyan-900/40',
    img: `${import.meta.env.BASE_URL}daysu-preview.png`,
    span: 5,
  },
  {
    title: 'Stellar',
    desc: 'Visualizador 3D del historial de cualquier repositorio de GitHub. Cada commit es una estrella en una espiral cronológica: del primer commit en el centro al más reciente en el borde, con el color marcando su antigüedad. Shaders GLSL propios con un solo draw call.',
    tech: ['Angular 21', 'TypeScript', 'Three.js', 'WebGL'],
    href: 'https://mestepa12.github.io/stellar/',
    gradient: 'from-zinc-900/80 to-black/80',
    img: `${import.meta.env.BASE_URL}stellar-preview.png`,
    span: 7,
  },
  {
    title: 'Portfolio Personal',
    desc: 'Este mismo portfolio, construido como proyecto en sí mismo. Animaciones de entrada con GSAP, transiciones con Framer Motion, vídeo de fondo en bucle y diseño 100% personalizado.',
    tech: ['React', 'TypeScript', 'Tailwind', 'GSAP', 'Framer Motion'],
    href: '#',
    gradient: 'from-slate-800/40 to-zinc-800/40',
    img: `${import.meta.env.BASE_URL}portfolio-preview.png`,
    span: 5,
  },
];

export default function WorksSection() {
  return (
    <section id="proyectos" className="bg-bg py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Proyectos Destacados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-white">
              Mis <em className="italic">proyectos</em>
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md">
              Una selección de proyectos, desde concepto hasta lanzamiento.
            </p>
          </div>
          <a
            href="https://github.com/mestepa12"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex relative group rounded-full border border-stroke px-5 py-2.5 text-sm text-muted hover:text-white transition-colors items-center gap-2"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 accent-gradient transition-opacity" />
            <span className="relative">Ver GitHub →</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target={p.href !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${spanClasses[p.span]} group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-video cursor-pointer`}
            >
              {/* Background: image or gradient */}
              {'img' in p && p.img
                ? <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                : <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              }
              {/* Dark gradient overlay always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg/75 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-300 flex items-center justify-center p-6">
                <div className="text-center">
                  <p className="text-white/90 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {p.tech.map(t => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full border border-stroke/60 text-muted">{t}</span>
                    ))}
                  </div>
                  <div className="relative inline-block">
                    <span className="absolute inset-[-2px] rounded-full accent-gradient" />
                    <span className="relative bg-white text-black text-sm px-5 py-2.5 rounded-full font-medium block">
                      Ver — <em className="font-display italic">{p.title}</em>
                    </span>
                  </div>
                </div>
              </div>
              {/* Card label */}
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-white font-medium text-lg">{p.title}</h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
