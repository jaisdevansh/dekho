import { Variants, BezierDefinition } from 'framer-motion';

// Cubic bezier for that "Apple-style" smooth, non-bouncy feel
export const SMOOTH_EASE: BezierDefinition = [0.33, 1, 0.68, 1];

// Duration constants
export const DURATION = {
    FAST: 0.4,
    MEDIUM: 0.6,
    SLOW: 0.8,
};

// Anti-gravity floating animation variants
// Uses subtle Y-axis oscillation and rotation
export const GRAVITY_FLOAT: Variants = {
    initial: { y: 0, rotate: 0 },
    animate: (custom: number = 0) => ({
        y: [0, -15, 0],
        rotate: [0, 1, -1, 0], // Very subtle rotation for realism
        transition: {
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: custom * 0.5, // Allow staggering based on custom prop
        },
    }),
};

// Standard fade-up entry for sections
export const FADE_UP: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: SMOOTH_EASE
        }
    }
};

// Stagger container for children
export const STAGGER_CONTAINER: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
