import { useEffect, useState } from 'react';

const links = ['Home', 'Proyectos', 'Contacto'];

export default function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-6 py-2 gap-2 transition-shadow ${scrolled ? 'shadow-md shadow-black/10' : ''}`}>
        {/* Logo */}
        <div className="relative w-9 h-9 rounded-full p-[2px] cursor-pointer hover:scale-110 transition-transform group">
          <div className="absolute inset-0 rounded-full accent-gradient" />
          <div className="relative w-full h-full rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-white">ME</span>
          </div>
        </div>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Nav links */}
        {links.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`text-sm rounded-full px-8 py-2 transition-colors ${
              active === link
                ? 'text-white bg-stroke/50'
                : 'text-muted hover:text-white hover:bg-stroke/50'
            }`}
          >
            {link}
          </a>
        ))}

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* CTA */}
        <div className="relative group">
          <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity accent-gradient" />
          <a
            href="mailto:mestepa120504@gmail.com"
            className="relative text-sm rounded-full px-5 py-2 border border-stroke bg-bg/50 text-white flex items-center gap-1 backdrop-blur-sm hover:bg-surface transition-colors"
          >
            Hablemos <span>↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
