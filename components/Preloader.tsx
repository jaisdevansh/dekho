'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const greetings = ["Hello", "नमस्ते", "Bonjour", "Hola", "こんにちは"];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = 'hidden';

        // If we've gone past the last greeting, wait a bit then complete
        if (index >= greetings.length) {
            const timeout = setTimeout(() => {
                document.body.style.overflow = ''; // Unlock scroll
                onComplete();
            }, 300);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, 400); // Duration per greeting

        return () => clearTimeout(timeout);
    }, [index, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
            <AnimatePresence mode="wait">
                {index < greetings.length && (
                    <motion.h1
                        key={greetings[index]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl md:text-6xl font-heading font-medium tracking-tight text-white"
                    >
                        {greetings[index]}
                    </motion.h1>
                )}
            </AnimatePresence>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {/* Optional: subtle loading indicator if needed, but keeping it clean text-only per request */}
            </div>
        </motion.div>
    );
}
