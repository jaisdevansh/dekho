'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const certifications = [
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "2024",
        link: "https://drive.google.com/file/d/1vdBbPLZDuUoQyPwLkA9QfPyERnnbFMYk/view?usp=drivesdk",
        image: "/images/cert-cloud.png"
    },
    {
        title: "AI & ML Fundamentals",
        issuer: "Google Cloud",
        date: "2024",
        link: "https://drive.google.com/file/d/1A0P1gkoUeU5pPyWRuaDiTXV2bWoY0jqC/view?usp=drivesdk",
        image: "/images/cert-ai-ml.png"
    },
    {
        title: "Postman Student Expert",
        issuer: "Postman",
        date: "2024",
        link: "https://drive.google.com/file/d/1M0amivra6ADloB31VZ0x5ucQ8eBT-M_a/view?usp=drivesdk",
        image: "/images/cert-api.png"
    },
    {
        title: "Python Programming",
        issuer: "NPTEL",
        date: "2024",
        link: "https://drive.google.com/file/d/14qieexdWoz_hFKS3ox9tkOrpfVE2ScTc/view?usp=drivesdk",
        image: "/images/cert-python.png"
    },
    {
        title: "Generative AI",
        issuer: "Google Cloud",
        date: "2024",
        link: "https://drive.google.com/file/d/1eSieEZ35P3C8HQrUkFoMEnTl4ZeY-aY-/view?usp=drivesdk",
        image: "/images/cert-gen-ai.png"
    },
    {
        title: "Gemini AI",
        issuer: "Google",
        date: "2024",
        link: "https://drive.google.com/file/d/1bF4h0wSuVBwc5vBrltzEmM1CE2-cQfAo/view?usp=drivesdk",
        image: "/images/cert-gemini.png"
    }
];

export default function Certifications() {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const { current } = containerRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="certifications" className="relative py-24 px-6 bg-black z-10 w-full overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-4 tracking-tight">
                        VERIFIED <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">SKILLS</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Recognized proficiency in advanced technologies and methodologies.
                    </p>
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-4 mb-8">
                    <button
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all active:scale-95"
                    >
                        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all active:scale-95"
                    >
                        <ChevronRight className="w-5 h-5" aria-hidden="true" />
                    </button>
                </div>

                {/* Carousel Container */}
                <div
                    ref={containerRef}
                    className="flex gap-6 overflow-x-auto py-8 px-4 snap-x snap-mandatory no-scrollbar"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative min-w-[320px] md:min-w-[380px] h-[420px] bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col hover:border-indigo-500/50 transition-all duration-300 overflow-hidden snap-center"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Thumbnail Image */}
                            <div className="relative w-full h-[200px] overflow-hidden bg-zinc-800">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain bg-black/50 opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />

                                <div className="absolute top-4 right-4">
                                    <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors drop-shadow-md" />
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1 relative z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                                        <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold">Verified</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-heading font-bold text-white group-hover:text-indigo-200 transition-colors mb-2 line-clamp-2 leading-tight">
                                    {cert.title}
                                </h3>

                                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-zinc-400 text-sm">
                                        <Award className="w-4 h-4" />
                                        <span>{cert.issuer}</span>
                                    </div>
                                    <span className="text-zinc-500 font-mono text-xs">{cert.date}</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
