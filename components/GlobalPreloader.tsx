'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader';

export default function GlobalPreloader() {
    const [loading, setLoading] = useState(true);

    // Keep the preloader in the DOM initially for server-side rendering
    // Once loading completes, AnimatePresence handles the exit transition cleanly.
    return (
        <AnimatePresence mode="wait">
            {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
        </AnimatePresence>
    );
}
