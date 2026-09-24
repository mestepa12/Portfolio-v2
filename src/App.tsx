import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WorksSection from './components/WorksSection';
import StackSection from './components/StackSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-bg text-white min-h-screen font-body">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {/* Las secciones no se montan hasta que acaba el loader: así sus animaciones
          de entrada (GSAP, whileInView) arrancan cuando ya se ven, no detrás de él. */}
      {!isLoading && (
        <>
          <Navbar active="Home" />
          <HeroSection />
          <WorksSection />
          <StackSection />
          <StatsSection />
          <ContactSection />
        </>
      )}
    </div>
  );
}
