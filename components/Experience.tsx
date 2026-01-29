'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Rocket } from 'lucide-react';

const timeline = [
    {
        year: "2026",
        title: "Graduation (Expected)",
        subtitle: "Ajay Kumar Garg Engineering College",
        desc: "B.Tech in Information Technology. Focusing on advanced frontend architectures.",
        icon: GraduationCap
    },
    {
        year: "August 2025",
        title: "Web Development Intern",
        subtitle: "Codec Technologies",
        desc: "Built responsive web apps, improved load speed by 20%, integrated REST APIs with 30% data efficiency improvement.",
        icon: Briefcase
    },
    {
        year: "Early 2025",
        title: "AI Trip Planner Project",
        subtitle: "Personal Milestone",
        desc: "Developed a complex AI-driven application using Next.js and Gemini API flux architecture.",
        icon: Rocket
    },
    {
        year: "2024",
        title: "Full Stack Blog App",
        subtitle: "Team Project",
        desc: "Led a team of 3 to build a secure blogging platform. Implemented JWT auth and admin dashboard.",
        icon: Code2
    },
    {
        year: "2023",
        title: "Python Automation",
        subtitle: "Learning Phase",
        desc: "Built CLI tools for productivity. File search, app launching automation scripts.",
        icon: Code2
    },
    {
        year: "2022",
        title: "Started B.Tech IT",
        subtitle: "AKTU, Ghaziabad",
        desc: "Began journey in Computer Science. Strong foundation in C++ and OOPS.",
        icon: GraduationCap
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Experience & Education</h2>
                    <p className="text-muted-foreground">My path from student to developer.</p>
                </motion.div>

                <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12 md:space-y-16">
                    {timeline.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                {/* Dot */}
                                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300 ring-4 ring-background" />

                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                        <span className="text-indigo-400 font-mono text-sm font-bold tracking-wider">{item.year}</span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-100 transition-colors">{item.title}</h3>
                                    </div>

                                    <p className="text-sm font-medium text-zinc-500">{item.subtitle}</p>

                                    <p className="text-zinc-400 mt-2 leading-relaxed max-w-xl">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
