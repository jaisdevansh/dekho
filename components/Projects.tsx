'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { SMOOTH_EASE } from '@/lib/motion-utils';

const projects = [
    {
        id: "01",
        client: "Skyline Studios",
        title: "AI Trip Planner",
        desc: "A smart travel companion that generates personalized itineraries using Gemini API.",
        tech: ["Next.js", "Gemini API", "Clerk", "Tailwind"],
        images: [
            "/images/project-travel.png",
            "/images/project-travel.png", // Using same asset for detail view for now
            "/images/project-travel.png"
        ],
        live: "#",
        color: "bg-[#1a1a1a]"
    },
    {
        id: "02",
        client: "Pixel Forge",
        title: "Blog Platform",
        desc: "Full-stack blogging engine with CMS features, secure auth, and real-time comments.",
        tech: ["React", "Node.js", "MongoDB", "JWT"],
        images: [
            "/images/project-blog.png",
            "/images/project-blog.png",
            "/images/project-blog.png"
        ],
        live: "#",
        color: "bg-[#111111]"
    },
    {
        id: "03",
        client: "AutoMate",
        title: "Python Assistant",
        desc: "CLI-based desktop automation tool for boosting productivity with voice commands.",
        tech: ["Python", "Automation", "Scripting", "Speech Rec."],
        images: [
            "/images/project-python.png",
            "/images/project-python.png",
            "/images/project-python.png"
        ],
        live: "#",
        color: "bg-[#0a0a0a]"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative bg-black text-white py-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto mb-16 px-4">
                <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter">
                    SELECTED <span className="text-indigo-500">WORKS</span>
                </h2>
            </div>

            <div className="flex flex-col gap-8 md:gap-12 pb-24">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} range={[index * 0.25, 1]} targetScale={1 - (projects.length - index) * 0.05} />
                ))}
            </div>
        </section>
    )
}

function ProjectCard({ project, index, range, targetScale }: { project: any, index: number, range: number[], targetScale: number }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

    return (
        <div ref={container} className="h-screen sticky top-0 flex items-center justify-center">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className="relative flex flex-col w-full max-w-6xl h-[85vh] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl bg-zinc-900/10 backdrop-blur-3xl p-8 md:p-12 origin-top transform-gpu"
            >
                {/* Background Gradient Texture */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/card-gradient.png"
                        alt="Gradient"
                        className="w-full h-full object-cover opacity-50 contrast-125 saturate-150"
                    />
                    <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                </div>

                {/* Header - Number Only */}
                <div className="flex justify-between items-start mb-8 relative z-20">
                    <div>
                        <h3 className="text-5xl md:text-8xl font-black text-white/10 font-heading leading-none mix-blend-overlay">
                            {project.id}
                        </h3>
                    </div>
                    {/* Live Indicator Top Right */}
                    <a href={project.live} className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors flex items-center gap-2 font-medium group backdrop-blur-md bg-white/5">
                        Live Project <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </a>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 relative z-20">
                    <div className="w-full md:w-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">{project.title}</h2>
                        <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
                            {project.tech.map((t: string) => (
                                <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/90 backdrop-blur-md border border-white/10 shadow-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* New Client Card - Separated from Header */}
                    <div className="w-full md:w-auto mt-6 md:mt-0 flex flex-col md:items-end p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md shadow-lg">
                        <span className="text-indigo-200 font-bold tracking-widest text-[10px] uppercase mb-1 opacity-80">CLIENT</span>
                        <span className="text-lg font-bold font-heading text-white">{project.client}</span>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                            <span className="text-xs text-zinc-300">Live Project</span>
                        </div>
                    </div>
                </div>

                {/* Grid Layout Images */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-auto h-[60%] w-full relative z-20">
                    {/* Main Large Image */}
                    <div className="md:col-span-2 h-full rounded-2xl overflow-hidden relative group border border-white/10 shadow-2xl">
                        <img src={project.images[0]} alt="Main View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>

                    {/* Side Stacked Images */}
                    <div className="md:col-span-2 grid grid-rows-2 gap-4 h-full">
                        <div className="rounded-2xl overflow-hidden relative group border border-white/10 shadow-xl">
                            <img src={project.images[1]} alt="Detail View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="rounded-2xl overflow-hidden relative group border border-white/10 shadow-xl">
                            <img src={project.images[2]} alt="Mobile View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
