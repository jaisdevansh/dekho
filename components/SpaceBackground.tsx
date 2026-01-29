'use client';

import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    fadeSpeed: number;
}

export default function SpaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const starCount = 150; // Number of stars
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        // Initialize stars
        const initStars = () => {
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5, // Random size between 0.5 and 2
                    speedX: (Math.random() - 0.5) * 0.2, // Slow horizontal drift
                    speedY: (Math.random() - 0.5) * 0.2, // Slow vertical drift
                    opacity: Math.random(),
                    fadeSpeed: (Math.random() - 0.5) * 0.01 // Twinkle speed
                });
            }
        };

        // Draw and update stars
        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear with a slight fade for trail effect (optional, disabling for clean look)
            // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                // Update position
                star.x += star.speedX;
                star.y += star.speedY;

                // Wrap around screen
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                // Update opacity (twinkle)
                star.opacity += star.fadeSpeed;
                if (star.opacity > 1 || star.opacity < 0.2) {
                    star.fadeSpeed = -star.fadeSpeed;
                }

                // Draw star
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Event listeners
        window.addEventListener('resize', resizeCanvas);

        // Initial setup
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 top-0 left-0 w-full h-full pointer-events-none z-[-1] bg-black"
            style={{ background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)' }}
        />
    );
}
