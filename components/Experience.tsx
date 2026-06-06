'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Rocket } from 'lucide-react';

const timeline = [
    {
        year: "2026",
        title: "React Native Developer Intern",
        subtitle: "Zenbourg, Indore (Remote)",
        desc: "Developed cross-platform mobile application features using React Native, collaborating directly with Founder & CEO on product architecture and implementation. Delivered complete project end-to-end.",
        icon: Briefcase
    },
    {
        year: "2026",
        title: "Graduation (Expected)",
        subtitle: "Ajay Kumar Garg Engineering College, Ghaziabad",
        desc: "B.Tech in Information Technology. Focus on modern frontend structures, algorithms, and application architectures. CGPA: 7.0/10.",
        icon: GraduationCap
    },
    {
        year: "August 2025",
        title: "Web Development Training",
        subtitle: "Codec Technologies",
        desc: "Completed web development training covering HTML, CSS, JavaScript, and React.js fundamentals.",
        icon: Code2
    },
    {
        year: "2022",
        title: "Started B.Tech IT",
        subtitle: "Ajay Kumar Garg Engineering College, Ghaziabad (AKTU)",
        desc: "Began journey in software engineering. Strong foundation in C++ and Object-Oriented Programming (OOPS).",
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

                <div className="relative border-l border-zinc-800 ml-4 md:ml-12 space-y-12 md:space-y-16">
                    {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="relative pl-8 md:pl-16 group"
                            >
                                {/* Mobile-only Timeline Dot */}
                                <span className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300 ring-4 ring-background md:hidden" />

                                {/* Desktop-only Icon Circle */}
                                <div className="hidden md:flex absolute -left-6 top-1.5 w-12 h-12 bg-zinc-950 border border-zinc-800 text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/50 group-hover:bg-indigo-950/20 rounded-full items-center justify-center shadow-lg transition-all duration-300 z-10">
                                    <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                </div>

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
                    ))}
                </div>
            </div>
        </section>
    )
}
