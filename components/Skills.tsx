'use client';

import { cn } from '@/lib/utils';
import {
    Code2, Database, Layout, Smartphone, Server,
    GitBranch, Globe, Cpu, Layers, Terminal, Key, Shield, Lock, CreditCard, UserCheck, Cloud, Radio, Activity, BarChart3, AppWindow
} from 'lucide-react';

const row1 = [
    { name: "C++", icon: Code2, color: "text-blue-500" },
    { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
    { name: "TypeScript", icon: Terminal, color: "text-blue-400" },
    { name: "Python", icon: Terminal, color: "text-emerald-400" },
    { name: "React.js", icon: Code2, color: "text-cyan-400" },
    { name: "Next.js 14", icon: Globe, color: "text-white" },
    { name: "Vite", icon: Cpu, color: "text-purple-400" },
    { name: "Tailwind CSS", icon: Layout, color: "text-sky-400" },
    { name: "Framer Motion", icon: Layers, color: "text-pink-500" },
    { name: "Zustand", icon: Database, color: "text-orange-400" },
    { name: "Recharts", icon: BarChart3, color: "text-green-400" },
];

const row2 = [
    { name: "React Native", icon: Smartphone, color: "text-blue-500" },
    { name: "Cross-platform Dev", icon: Smartphone, color: "text-indigo-400" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "Express.js", icon: Server, color: "text-zinc-300" },
    { name: "Fastify", icon: Cpu, color: "text-yellow-500" },
    { name: "WebSockets", icon: Activity, color: "text-pink-400" },
    { name: "Socket.io", icon: Activity, color: "text-cyan-500" },
    { name: "REST APIs", icon: Cpu, color: "text-orange-500" },
    { name: "JWT", icon: Key, color: "text-amber-400" },
    { name: "Passport.js", icon: Shield, color: "text-red-400" },
    { name: "Zod", icon: Shield, color: "text-blue-300" },
    { name: "bcrypt", icon: Lock, color: "text-slate-400" },
    { name: "MongoDB Atlas", icon: Database, color: "text-green-400" },
    { name: "PostgreSQL (Neon)", icon: Database, color: "text-sky-500" },
    { name: "MySQL", icon: Database, color: "text-blue-600" },
    { name: "Prisma ORM", icon: Layers, color: "text-emerald-300" },
    { name: "Mongoose", icon: Layers, color: "text-red-500" },
    { name: "Drizzle ORM", icon: Database, color: "text-yellow-600" },
    { name: "Redis", icon: Database, color: "text-red-600" },
];

const row3 = [
    { name: "Gemini API", icon: Cpu, color: "text-cyan-400" },
    { name: "Groq SDK", icon: Cpu, color: "text-orange-500" },
    { name: "Razorpay", icon: CreditCard, color: "text-blue-400" },
    { name: "GitHub API", icon: GitBranch, color: "text-zinc-200" },
    { name: "Google OAuth 2.0", icon: Key, color: "text-red-400" },
    { name: "Clerk", icon: UserCheck, color: "text-violet-400" },
    { name: "GitHub", icon: GitBranch, color: "text-zinc-400" },
    { name: "Vercel", icon: Cloud, color: "text-white" },
    { name: "Railway", icon: Cloud, color: "text-purple-400" },
    { name: "Render", icon: Cloud, color: "text-teal-400" },
    { name: "Postman", icon: Radio, color: "text-orange-500" },
    { name: "Sandpack", icon: Terminal, color: "text-yellow-400" },
    { name: "Monaco Editor", icon: Code2, color: "text-blue-500" },
    { name: "Chrome Extension API", icon: AppWindow, color: "text-green-400" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="text-center mb-16 px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
                    My <span className="text-indigo-500">Tech Stack</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg">The tools I use to bring ideas to life.</p>
            </div>

            {/* Marquees Container */}
            <div className="flex flex-col gap-6 relative z-10 w-full">
                
                {/* Row 1: Left Scroll */}
                <div className="relative flex overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
                    <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-6 py-2">
                        {[...row1, ...row1, ...row1].map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm group-hover:border-indigo-500/30 transition-colors"
                                >
                                    <Icon className={cn("w-5 h-5", skill.color)} />
                                    <span className="text-base font-semibold text-white/80">{skill.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Row 2: Right Scroll */}
                <div className="relative flex overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
                    <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused] whitespace-nowrap gap-6 py-2">
                        {[...row2, ...row2, ...row2].map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm group-hover:border-indigo-500/30 transition-colors"
                                >
                                    <Icon className={cn("w-5 h-5", skill.color)} />
                                    <span className="text-base font-semibold text-white/80">{skill.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Row 3: Left Scroll */}
                <div className="relative flex overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
                    <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-6 py-2">
                        {[...row3, ...row3, ...row3].map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm group-hover:border-indigo-500/30 transition-colors"
                                >
                                    <Icon className={cn("w-5 h-5", skill.color)} />
                                    <span className="text-base font-semibold text-white/80">{skill.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
