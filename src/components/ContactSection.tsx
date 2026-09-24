import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ContactSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    // El texto va repetido: al desplazar -50% la segunda mitad ocupa el sitio
    // de la primera, así el bucle reinicia sin salto visible.
    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });
    // Sin kill(), StrictMode (que monta dos veces en desarrollo) dejaba dos
    // animaciones sobre el mismo elemento.
    return () => { tween.kill(); };
  }, []);

  return (
    <footer id="contacto" className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute left-1/2 top-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        >
          <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-24">
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            {Array(20).fill('CONSTRUYENDO EL FUTURO • ').map((text, i) => (
              <span key={i} className="font-display italic text-4xl md:text-6xl text-white/10 mr-4">{text}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 md:px-10 lg:px-16 text-center mb-16">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">¿Trabajamos juntos?</p>
          <h2 className="font-display italic text-5xl md:text-7xl text-white mb-10">Hablemos</h2>
          <div className="relative inline-block group">
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 accent-gradient transition-opacity" />
            <a
              href="mailto:mestepa120504@gmail.com"
              className="relative inline-flex items-center gap-2 border border-stroke rounded-full px-8 py-4 text-white hover:bg-surface transition-colors bg-bg/50 backdrop-blur-sm"
            >
              mestepa120504@gmail.com ↗
            </a>
          </div>
        </div>

        {/* Footer bar */}
        <div className="px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-stroke/50">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-muted">Disponible para proyectos</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/mestepa12" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-estepa-reina-405a7a346/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-white transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs text-muted">© 2025 Miguel Estepa</p>
        </div>
      </div>
    </footer>
  );
}
