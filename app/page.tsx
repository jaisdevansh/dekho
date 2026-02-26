import SpaceBackground from '@/components/SpaceBackground';

export const dynamic = 'force-static';
export const revalidate = false;
import Hero from '@/components/Hero';
import ScrollReveal from '@/components/ScrollReveal';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen text-foreground selection:bg-indigo-500/30 relative">
      <SpaceBackground />
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
    </main>
  );
}
