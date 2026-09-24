import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Diseño', 'Código', 'Crear'];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // requestAnimationFrame y no setInterval: el contador avanza al ritmo del
  // repintado y llega a 100 justo en `duration`, sin saltos ni desfase.
  useEffect(() => {
    const start = performance.now();
    const duration = 600;
    const raf = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) requestAnimationFrame(raf);
      else setTimeout(onComplete, 400);
    };
    requestAnimationFrame(raf);
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => setWordIndex(i => (i + 1) % words.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 left-8 text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.p>

      <AnimatePresence mode="wait">
        <motion.span
          key={wordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="font-display italic text-6xl md:text-8xl text-white/80"
        >
          {words[wordIndex]}
        </motion.span>
      </AnimatePresence>

      <div className="absolute bottom-12 right-8">
        <span className="font-display text-8xl md:text-9xl text-white tabular-nums">
          {String(count).padStart(3, '0')}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <motion.div
          className="h-full accent-gradient origin-left"
          style={{ scaleX: count / 100 }}
        />
      </div>
    </motion.div>
  );
}
