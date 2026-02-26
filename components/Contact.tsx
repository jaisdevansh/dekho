'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Rocket, Github, Twitter, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GRAVITY_FLOAT, SMOOTH_EASE } from '@/lib/motion-utils';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', service: 'Web Development', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            return;
        }

        setStatus('loading');

        try {
            // Using formsubmit.co for professional serverless email routing
            const response = await fetch("https://formsubmit.co/ajax/devanshjais20@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Portfolio Message from ${formData.name}`,
                    name: formData.name,
                    email: formData.email,
                    service: formData.service,
                    message: formData.message,
                    _template: "box"
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', service: 'Web Development', message: '' });
                setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <footer id="contact" className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-24 px-6">

            {/* Background Stars - Simplified */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse" />
                <div className="absolute top-40 right-40 w-2 h-2 bg-indigo-500 rounded-full blur-[2px] animate-pulse" />
                <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white/50 rounded-full" />
            </div>

            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

                {/* Left: User Avatar (Static, Professional) */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full max-w-sm aspect-square relative mb-8 lg:mb-0"
                    >
                        {/* Avatar Image */}
                        <img
                            src="/images/footer-astronaut.png"
                            alt="Rockstar Astronaut"
                            className="w-full h-full object-contain mix-blend-screen drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                        {/* Subtle Glow behind avatar */}
                        <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10 rounded-full" />
                    </motion.div>
                </div>

                {/* Right: Contact Form (Primary Focus) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-transparent backdrop-blur-none border-none p-8 md:p-12 order-1 lg:order-2"
                >
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            Let's Build Something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Extraordinary.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Ready to take your digital presence to the next level?
                            I'm available for freelance projects and full-time roles.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-zinc-300 ml-1">YOUR NAME</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 group-focus-within:text-indigo-400 transition-colors" />
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    disabled={status === 'loading'}
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-zinc-700 disabled:opacity-50"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-zinc-300 ml-1">EMAIL ADDRESS</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 group-focus-within:text-indigo-400 transition-colors" />
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    disabled={status === 'loading'}
                                    placeholder="name@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-zinc-700 disabled:opacity-50"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-zinc-300 ml-1">SERVICE REQUIRED</label>
                            <div className="relative">
                                <select
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    disabled={status === 'loading'}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-zinc-300 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer disabled:opacity-50"
                                >
                                    <option value="Web Development">Web Development</option>
                                    <option value="Mobile Application">Mobile Application</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Consultation">Consultation</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-zinc-300 ml-1">PROJECT DETAILS</label>
                            <div className="relative group">
                                <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-zinc-600 group-focus-within:text-indigo-400 transition-colors" />
                                <textarea
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    disabled={status === 'loading'}
                                    placeholder="Tell me about your project goals..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-zinc-700 resize-none disabled:opacity-50"
                                />
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-400"
                                >
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400"
                                >
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm font-medium">Failed to send message. Please try again.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                            whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                            disabled={status === 'loading'}
                            type="submit"
                            className="group w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-900/20 flex items-center justify-center gap-3 overflow-hidden transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                                </>
                            )}
                        </motion.button>

                        <p className="text-center text-xs text-zinc-500 mt-4">
                            I usually establish comms within 24 hours.
                        </p>
                    </form>
                </motion.div>

                {/* Floating Social Orbitals - Re-positioned */}
                <div className="absolute left-6 bottom-6 flex gap-4 z-20">
                    {[
                        { name: 'Github', icon: Github, href: 'https://github.com/Jaisdevansh' },
                        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/' },
                        { name: 'Linkedin', icon: Linkedin, href: 'https://www.linkedin.com/in/devansh-jaiswal-2493b8276' }
                    ].map((social, i) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors backdrop-blur-md cursor-pointer"
                        >
                            <social.icon className="w-6 h-6" />
                        </motion.a>
                    ))}
                </div>


            </div>
        </footer>
    )
}
