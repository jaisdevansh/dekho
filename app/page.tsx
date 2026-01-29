'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import ScrollReveal from '@/components/ScrollReveal';
import SpaceBackground from '@/components/SpaceBackground';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

import Navbar from '@/components/Navbar';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-transparent min-h-screen text-foreground selection:bg-indigo-500/30 relative">
      <SpaceBackground />
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="flex flex-col relative z-10 hidden-scrollbar">
          <Navbar />
          <Hero />
          <ScrollReveal />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Contact />
        </div>
      )}
    </main>
  );
}
