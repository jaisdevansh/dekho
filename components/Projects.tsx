'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const projects = [
    {
        id: "01",
        client: "AI Mental Health Platform",
        title: "MindCare – AI Mental Health & Wellness Platform",
        desc: "AI-powered mental health platform with real-time mood detection, depression risk analysis, and adaptive assessments using Groq LLaMA + Gemini APIs. Features Socket.io chats and Razorpay premium tiers.",
        tech: ["Next.js 14", "Node.js", "MongoDB Atlas", "Groq LLaMA", "Gemini API", "Socket.io", "Razorpay", "JWT", "TypeScript"],
        images: [
            "/images/project-travel.png",
            "/images/project-travel.png",
            "/images/project-travel.png"
        ],
        live: "https://mindcare-frontend-tan.vercel.app/",
        github: "https://github.com/Jaisdevansh/MindCare",
        color: "bg-[#0b0f19]",
        status: "LIVE / DEPLOYED",
        featured: true
    },
    {
        id: "02",
        client: "Full Stack AI Tool",
        title: "AI Website Builder – Live In-Browser Code Creator",
        desc: "AI website generator featuring live code execution using Sandpack + Monaco Editor. Driven by multi-LLM support (Gemini + Groq) with Redis caching and WebSockets for real-time stream execution.",
        tech: ["React 19", "Fastify", "PostgreSQL", "Prisma ORM", "Redis", "WebSockets", "Gemini API", "Groq SDK", "Sandpack", "Monaco Editor"],
        images: [
            "/images/project-blog.png",
            "/images/project-blog.png",
            "/images/project-blog.png"
        ],
        live: "https://builder-client.vercel.app/",
        github: "https://github.com/jaisdevansh/Builder",
        color: "bg-[#0d0d0d]",
        status: "LIVE / DEPLOYED",
        featured: false
    },
    {
        id: "03",
        client: "Chrome Extension + Full Stack",
        title: "DSA Auto Sync – Submissions Syncing Engine",
        desc: "Chrome extension that auto-detects and extracts code submissions from LeetCode, GFG, and CodingNinjas. Syncs solutions to GitHub automatically and displays metrics on a Next.js dashboard.",
        tech: ["Chrome Extension API", "Next.js 14", "Fastify", "PostgreSQL", "Drizzle ORM", "GitHub API", "Recharts", "pnpm Monorepo"],
        images: [
            "/images/project-python.png",
            "/images/project-python.png",
            "/images/project-python.png"
        ],
        live: "#",
        github: "https://github.com/jaisdevansh/sync-dsa",
        color: "bg-[#0b0c10]",
        status: "COMPLETED",
        featured: false
    }
];

const otherProjects = [
    {
        title: "TrackWise – Smart Productivity Management App",
        desc: "A comprehensive productivity management app designed to help you stay organized, manage tasks easily, and track progress seamlessly.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind"],
        live: "https://trackwise-theta-gilt.vercel.app/",
        github: "https://github.com/jaisdevansh/Trackwise",
        status: "LIVE"
    },
    {
        title: "AI Trip Planner – AI Powered Travel Itinerary Generator",
        desc: "A smart travel companion that generates customized day-by-day itineraries using the Gemini AI API.",
        tech: ["Next.js", "Gemini API", "Clerk", "Tailwind"],
        live: "https://ai-trip-plannner-plum.vercel.app/",
        github: "https://github.com/jaisdevansh/ai-trip-plannner",
        status: "LIVE"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative bg-black text-white py-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto mb-16 px-4">
                <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter">
                    SELECTED <span className="text-indigo-500">WORKS</span>
                </h2>
                <p className="text-zinc-400 mt-2 text-lg">My strongest, production-grade applications.</p>
            </div>

            <div className="flex flex-col gap-8 md:gap-12 pb-24">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} range={[index * 0.25, 1]} targetScale={1 - (projects.length - index) * 0.05} />
                ))}
            </div>

            {/* Other Projects Section */}
            <div className="max-w-7xl mx-auto mt-24 px-4 border-t border-white/5 pt-16">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Other Projects
                </h3>
                <p className="text-zinc-500 mb-8 text-sm md:text-base">Additional tools and applications built during learning phases.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {otherProjects.map((proj, idx) => {
                        const handleOtherClick = (e: React.MouseEvent) => {
                            const target = e.target as HTMLElement;
                            if (target.closest('a') || target.closest('button')) {
                                return;
                            }
                            const url = proj.live && proj.live !== "#" ? proj.live : proj.github;
                            if (url && url !== "#") {
                                window.open(url, '_blank', 'noopener,noreferrer');
                            }
                        };
                        return (
                            <div key={idx} onClick={handleOtherClick} className="bg-zinc-950/40 border border-white/5 hover:border-indigo-500/20 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:bg-zinc-900/10 transition-all duration-300 cursor-pointer">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                                            {proj.status}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-white">{proj.title}</h4>
                                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{proj.desc}</p>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {proj.tech.map((t) => (
                                            <span key={t} className="px-2.5 py-0.5 bg-white/5 rounded-full text-[11px] text-zinc-400 border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {proj.live && proj.live !== "#" && (
                                            <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                                                Live Demo <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                        {proj.github && (
                                            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5">
                                                GitHub <Github className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

interface Project {
    id: string;
    client: string;
    title: string;
    desc: string;
    tech: string[];
    images: string[];
    live: string;
    github: string;
    color: string;
    status: string;
    featured: boolean;
}

function ProjectCard({ project, index, targetScale }: { project: Project, index: number, range: number[], targetScale: number }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleCardClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('a') || target.closest('button')) {
            return;
        }

        const url = project.live && project.live !== "#" ? project.live : project.github;
        if (url && url !== "#") {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div ref={container} className="h-auto md:h-screen relative md:sticky md:top-0 flex flex-col items-center justify-center py-6 md:py-0 md:pb-10">
            <motion.div
                onClick={handleCardClick}
                style={{ scale: isMobile ? 1 : scale, top: isMobile ? '0' : `calc(-5vh + ${index * 25}px)` }}
                className={cn(
                    "relative flex flex-col w-full max-w-6xl h-[75vh] md:h-[85vh] md:rounded-[2.5rem] border-y md:border overflow-hidden shadow-2xl bg-zinc-900/10 backdrop-blur-3xl p-6 md:p-12 md:origin-top transform-gpu transition-colors duration-500 cursor-pointer hover:border-indigo-500/20",
                    project.featured ? "border-indigo-500/30" : "border-white/10"
                )}
            >
                {/* Background Gradient Texture */}
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-black opacity-50 contrast-125 saturate-150 pointer-events-none select-none" />
                    <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                    {project.featured && (
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
                    )}
                </div>

                {/* Header - Number Only */}
                <div className="flex justify-between items-start mb-8 relative z-20">
                    <div>
                        <h3 className="text-5xl md:text-8xl font-black text-white/10 font-heading leading-none mix-blend-overlay">
                            {project.id}
                        </h3>
                    </div>
                    <div className="flex items-center gap-3">
                        {project.featured && (
                            <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest bg-indigo-500/20 border border-indigo-500/40 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                                Featured Hero Project
                            </span>
                        )}
                        <span className={cn(
                            "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border",
                            project.status.includes("LIVE") 
                              ? "text-emerald-300 bg-emerald-500/10 border-emerald-500/20"
                              : "text-blue-300 bg-blue-500/10 border-blue-500/20"
                        )}>
                            {project.status}
                        </span>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 relative z-20">
                    <div className="w-full md:w-auto max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">{project.title}</h2>
                        <p className="text-zinc-300 mb-6 text-sm md:text-base leading-relaxed line-clamp-2">{project.desc}</p>

                        <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-0">
                            {project.live && project.live !== "#" && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`} className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 shadow-lg">
                                    Live Demo <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View GitHub repository for ${project.title}`} className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 backdrop-blur-md">
                                    GitHub <Github className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.tech.map((t: string) => (
                                <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/80 backdrop-blur-md border border-white/10">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* New Client Card - Separated from Header */}
                    <div className="w-full md:w-auto mt-6 md:mt-0 flex flex-col md:items-end p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md shadow-lg">
                        <span className="text-indigo-200 font-bold tracking-widest text-[10px] uppercase mb-1 opacity-80">PROJECT TYPE</span>
                        <span className="text-lg font-bold font-heading text-white">{project.client}</span>
                    </div>
                </div>

                {/* Grid Layout Images */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-auto h-[60%] w-full relative z-20">
                    {/* Main Large Image */}
                    <div className="md:col-span-2 h-full rounded-2xl overflow-hidden relative group border border-white/10 shadow-2xl">
                        <Image src={project.images[0]} alt={`${project.title} Main View`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>

                    {/* Side Stacked Images */}
                    <div className="md:col-span-2 grid grid-rows-2 gap-4 h-full">
                        <div className="rounded-2xl overflow-hidden relative group border border-white/10 shadow-xl">
                            <Image src={project.images[1]} alt={`${project.title} Detail View`} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="rounded-2xl overflow-hidden relative group border border-white/10 shadow-xl">
                            <Image src={project.images[2]} alt={`${project.title} Mobile View`} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
