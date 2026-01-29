'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
    Code2, Database, Layout, Smartphone, Server,
    GitBranch, Globe, Cpu, Layers, Terminal
} from 'lucide-react';

const skills = [
    { name: "React.js", icon: Code2, color: "text-cyan-400" },
    { name: "Next.js", icon: Globe, color: "text-white" },
    { name: "Tailwind CSS", icon: Layout, color: "text-sky-400" },
    { name: "React Native", icon: Smartphone, color: "text-blue-500" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "Framer Motion", icon: Layers, color: "text-pink-500" },
    { name: "TypeScript", icon: Terminal, color: "text-blue-400" },
    { name: "MongoDB", icon: Database, color: "text-green-400" },
    { name: "Git & GitHub", icon: GitBranch, color: "text-orange-500" },
    { name: "APIs", icon: Cpu, color: "text-yellow-400" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-background relative overflow-hidden border-t border-white/5">
            <div className="text-center mb-16 px-6">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                    My <span className="text-indigo-500">Tech Stack</span>
                </h2>
                <p className="text-muted-foreground">The tools I use to bringing ideas to life.</p>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                {/* Scrolling Track - Duplicated for seamless loop */}
                <div className="flex animate-marquee whitespace-nowrap gap-12 py-4">
                    {[...skills, ...skills, ...skills].map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm group-hover:border-indigo-500/30 transition-colors"
                            >
                                <Icon className={cn("w-6 h-6", skill.color)} />
                                <span className="text-lg font-medium text-white/80">{skill.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* CSS for custom marquee since Tailwind native animate-spin etc doesn't cover this well out of box without config */}
            <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
             animation: marquee 40s linear infinite;
          }
          .group:hover .animate-marquee {
             animation-play-state: paused;
          }
       `}</style>
        </section>
    )
}
