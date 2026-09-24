import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const roles = ['Desarrollador', 'Diseñador', 'Creativo', 'Apasionado'];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2000);
    return () => clearInterval(id);
  }, []);

  // gsap.context limita los selectores ('.name-reveal', '.blur-in') a esta
  // sección, y revert() deshace las animaciones al desmontar: con StrictMode el
  // efecto se ejecuta dos veces en desarrollo y sin revert se duplicarían.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.name-reveal', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 });
      tl.fromTo('.blur-in', { opacity: 0, filter: 'blur(10px)', y: 20 }, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 }, '-=0.8');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative h-screen overflow-hidden">
      {/* Video bg */}
      <video
        autoPlay muted loop playsInline
        className="absolute left-1/2 top-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      >
        <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      {/* Bloque 1: Nombre — ajusta top-[X] */}
      <div className="absolute top-[20%] left-0 right-0 z-10 text-center px-6">
        <h1 className="name-reveal font-display italic text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-white">
          Miguel Ángel<br />Estepa Reina
        </h1>
      </div>

      {/* Bloque 2: Subtítulo — ajusta top-[X] */}
      <div className="absolute top-[62%] left-0 right-0 z-10 text-center px-6">
        <p className="blur-in text-sm md:text-base text-muted mb-3">
          Un{' '}
          <span key={roleIndex} className="font-display italic text-white animate-role-fade-in inline-block">
            {roles[roleIndex]}
          </span>{' '}
          vive en Córdoba.
        </p>
        <p className="blur-in text-sm md:text-base text-muted">
          Técnico superior en DAW especializado en crear experiencias web limpias e interactivas.
        </p>
      </div>

      {/* Bloque 3: Botones — ajusta top-[X] */}
      <div className="absolute top-[78%] left-0 right-0 z-10 flex justify-center px-6">
        <div className="blur-in inline-flex gap-4 flex-wrap justify-center">
          <a
            href="#proyectos"
            className="relative group rounded-full text-sm px-7 py-3.5 bg-white text-black hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 accent-gradient transition-opacity" />
            <span className="relative bg-white rounded-full px-7 py-3.5 -mx-7 -my-3.5 block">Ver proyectos</span>
          </a>
          <a
            href={`${import.meta.env.BASE_URL}cv-miguel-estepa.pdf`}
            download
            className="relative group rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-white hover:scale-105 hover:border-transparent transition-all duration-300"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 accent-gradient transition-opacity" />
            <span className="relative bg-bg rounded-full px-7 py-3.5 -mx-7 -my-3.5 block">Descargar CV ↓</span>
          </a>
          <a
            href="#contacto"
            className="relative group rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-white hover:scale-105 hover:border-transparent transition-all duration-300"
          >
            <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 accent-gradient transition-opacity" />
            <span className="relative bg-bg rounded-full px-7 py-3.5 -mx-7 -my-3.5 block">Escríbeme...</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
