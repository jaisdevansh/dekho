'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { SMOOTH_EASE, GRAVITY_FLOAT } from '@/lib/motion-utils';

const RubberBand = ({ children }: { children: string }) => {
    return (
        <span className="inline-block hover:animate-rubber-band transition-transform duration-300 cursor-default hover:text-indigo-400">
            {children}
        </span>
    );
};

const TextSpan = ({ text }: { text: string }) => {
    return (
        <span className="inline-block whitespace-nowrap">
            {[...text].map((letter, i) => (
                <RubberBand key={i}>{letter}</RubberBand>
            ))}
        </span>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-24 md:pt-0">

            {/* Background Ambience */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Typography */}
                <div className="space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: SMOOTH_EASE }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-base font-bold text-white mb-6 backdrop-blur-md shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Full Stack Developer | Building Scalable & Interactive Web Applications
                        </div>

                        <h1 className="text-[clamp(3rem,8vw,6rem)] font-heading font-black tracking-tighter text-white leading-[0.95] mb-6">
                            <TextSpan text="BUILDING" /> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white">
                                <TextSpan text="DIGITAL" /> <br />
                                <TextSpan text="REALITIES." />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
                            I craft high-performance, visually stunning web experiences.
                            Merging clean code with premium design to deliver impact.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: SMOOTH_EASE }}
                        className="flex flex-wrap gap-4"
                    >
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            aria-label="View Work"
                            className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <a
                            href="https://drive.google.com/file/d/1iUziz0-L-MfacDPugpI1nJrzXk4smZbB/view?usp=drivesdk"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Resume"
                            className="px-8 py-4 border border-white/10 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            Resume <Download className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>

                {/* Right: Anti-Gravity Visual */}
                <div className="relative h-[50vh] md:h-[80vh] flex items-center justify-center">
                    {/* Floating abstract cards logic */}
                    <motion.div
                        variants={GRAVITY_FLOAT}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="hover"
                        custom={0}
                        className="relative z-20 w-64 h-80 md:w-80 md:h-96 bg-gradient-to-b from-zinc-800 to-black rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer group"
                    >
                        {/* Layered Composition */}
                        {/* 1. Abstract Digital Reality Background - Always visible as base */}
                        <Image
                            src="/images/hero-abstract.png"
                            alt="Abstract background"
                            draggable={false}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover mix-blend-screen opacity-60 pointer-events-none select-none"
                        />

                        {/* 2. Profile Images - Swap on Hover */}
                        <div className="relative z-10 w-full h-full flex items-end justify-center">
                            {/* Default Profile (Black Shirt) - Fades OUT on hover */}
                            <motion.div
                                className="absolute inset-0 w-full h-full"
                                variants={{
                                    initial: { opacity: 1 },
                                    hover: { opacity: 0 }
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <Image
                                    src="/images/hero-profile.png"
                                    alt="Devansh Jaiswal Profile"
                                    draggable={false}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-center drop-shadow-2xl pointer-events-none select-none"
                                />
                            </motion.div>

                            {/* Alternate Image (Visible on Hover/Tap) */}
                            <motion.div
                                className="absolute inset-0 w-full h-full pointer-events-none select-none"
                                variants={{
                                    initial: { opacity: 0, scale: 1.1 },
                                    hover: { opacity: 1, scale: 1 }
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src="/images/hero-alternate.png"
                                    alt="Devansh Jaiswal Alternate"
                                    draggable={false}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover pointer-events-none select-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
                            </motion.div>
                        </div>

                        {/* Gradient Overlay for integration */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-20 pointer-events-none" />

                        {/* Gradient Overlay for integration */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-20 pointer-events-none" />
                    </motion.div>

                    {/* Background floating elements for depth (Hidden on mobile for perf) */}
                    <div className="hidden md:block">
                        <motion.div
                            variants={GRAVITY_FLOAT}
                            initial="initial"
                            animate="animate"
                            custom={1}
                            className="absolute top-1/4 right-10 w-24 h-24 bg-indigo-600/20 rounded-2xl backdrop-blur-md border border-white/10 z-10"
                        />
                        <motion.div
                            variants={GRAVITY_FLOAT}
                            initial="initial"
                            animate="animate"
                            custom={2}
                            className="absolute bottom-1/4 left-10 w-32 h-32 bg-blue-600/10 rounded-full backdrop-blur-md border border-white/5 z-0"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}
