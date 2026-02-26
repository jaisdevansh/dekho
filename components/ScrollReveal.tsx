'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollReveal() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animation Maps
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["2.5rem", "0rem"]);
    const opacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.35, 0.5], [40, 0]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={containerRef} className="h-[250vh] relative z-20">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
                <motion.div
                    style={{
                        scale,
                        borderRadius,
                    }}
                    className="relative w-full h-[100vh] overflow-hidden shadow-2xl origin-center border border-white/10"
                >
                    {/* Background Image with Parallax */}
                    <div className="absolute inset-0 md:hidden h-[100%]">
                        <img
                            src="/images/scroll-reveal-solar-full.png"
                            alt=""
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                    </div>

                    <motion.div style={{ y: bgY }} className="absolute inset-0 h-[120%] -top-[10%] hidden md:block">
                        <img
                            src="/images/scroll-reveal-solar-full.png"
                            alt="Solar System"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay - Balanced for visibility */}
                        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                    </motion.div>

                    {/* Centered Text Content that reveals */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <motion.h2
                            style={{ opacity, y: textY }}
                            className="text-5xl md:text-8xl font-heading font-black text-white tracking-tighter cursor-default drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
                        >
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">D</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">I</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">G</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">I</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">T</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">A</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">L</span>
                            &nbsp;
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">A</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">L</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">C</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">H</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">E</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">M</span>
                            <span className="inline-block hover:animate-rubber-band transition-transform duration-300">Y</span>
                        </motion.h2>
                        <motion.p
                            style={{ opacity, y: textY }}
                            className="mt-6 text-xl md:text-2xl text-indigo-200 font-light max-w-2xl leading-relaxed drop-shadow-md"
                        >
                            Transforming complex code into seamless, gravity-defying user experiences that captivate and inspire.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
