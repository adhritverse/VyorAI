"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Testimonials } from "./Testimonials";

const team = [
    {
        name: "Hritik Jaiswal",
        role: "Founder & CEO",
        image: "/Founder.png",
        bio: "Visionary leader focused on the intersection of neural networks and autonomous workflows.",
    },
    {
        name: "Rishabh Kushwah",
        role: "Co-Founder",
        image: "/Co-Founder.png",
        bio: "Strategic architect driving the global scaling of Vyor's core intelligence infrastructure.",
    },
];



// Production-level easing curve
const smoothEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const slideUpBlur = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export function About() {
    const containerRef = useRef<HTMLElement>(null);

    // Smooth scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax transformations
    const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacityFade = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0],
    );

    return (
        <section
            id="about"
            ref={containerRef}
            className="py-20 lg:py-28 relative bg-[#030712] overflow-hidden selection:bg-emerald-500/30"
        >
            {/* Scroll-linked Background Atmosphere */}
            <motion.div
                style={{ y: bgY, opacity: opacityFade }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-emerald-600/10 via-teal-500/5 to-transparent blur-[120px] pointer-events-none rounded-full"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Unified Split Layout for Mission & Team */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start w-full relative mb-20 md:mb-24 mt-10">
                    
                    {/* Left Column: Mission Statement (Sticky on Desktop) */}
                    <motion.div 
                        style={{ y: headingY }} 
                        className="lg:w-5/12 shrink-0 lg:sticky lg:top-32"
                    >
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: "3rem" }}
                            viewport={{ once: true }}
                            className="h-[1px] bg-emerald-500 mb-6"
                        />
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs mb-4"
                        >
                            Our Mission
                        </motion.h3>
                        
                        <motion.h2
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="text-3xl md:text-4xl lg:text-[40px] font-medium tracking-tight text-white leading-[1.2] max-w-xl mb-8"
                        >
                            <motion.span
                                variants={slideUpBlur}
                                className="block text-white"
                            >
                                Uncompromising
                            </motion.span>
                            <motion.span
                                variants={slideUpBlur}
                                className="block text-neutral-400"
                            >
                                Intelligence.
                            </motion.span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
                        >
                            <p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed max-w-md">
                                We engineer production-grade infrastructure. No wrappers, no latency spikes, no black-box hallucinations. Just deterministic, high-performance AI designed for absolute reliability at scale.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Team Member Cards */}
                    <div className="lg:w-7/12 w-full flex flex-col gap-6 lg:gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                                className="group relative"
                            >
                                {/* Premium Glow effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative h-full flex flex-col sm:flex-row gap-6 p-6 lg:p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl shadow-black/50 overflow-hidden">
                                    {/* Inside card subtle gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                                    
                                    <div className="w-full sm:w-48 h-64 sm:h-48 shrink-0 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-[#030712] border border-white/10 group-hover:border-emerald-500/30 transition-colors relative z-10 group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out filter grayscale group-hover:grayscale-0"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src =
                                                    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23111"/></svg>';
                                            }}
                                        />
                                        {/* Inner image overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                                    </div>

                                    <div className="flex flex-col flex-grow justify-center relative z-10">
                                        <h3 className="text-2xl lg:text-3xl font-black text-white mb-1 group-hover:text-emerald-300 transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs mb-4">
                                            {member.role}
                                        </p>
                                        <p className="text-emerald-100/60 leading-relaxed font-light text-base md:text-md">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>



                {/* Testimonials Integrated Section */}
                <div className="w-[100vw] relative left-1/2 -translate-x-1/2 mb-20 mt-10">
                    <Testimonials />
                </div>

                {/* Recruitment Banner */}
                <motion.div
                    id="careers"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: smoothEase }}
                    className="mt-10 sm:mt-20 w-full"
                >
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full border border-white/[0.06] bg-[#080808] group hover:border-emerald-500/20 transition-all duration-700 shadow-2xl">
                        {/* Animated gradient top border */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
                        
                        {/* Ambient background glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/[0.08] transition-all duration-1000" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/[0.03] blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative p-5 sm:p-8 md:p-12 z-10">
                            {/* Top row — tag + status */}
                            <div className="flex items-center justify-between mb-6 sm:mb-8">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="h-px w-5 sm:w-8 bg-emerald-500" />
                                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Careers</span>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 sm:px-3 py-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-400">Actively Hiring</span>
                                </div>
                            </div>

                            {/* Main content */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
                                <div className="flex-1">
                                    <h4 className="text-xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
                                        Build the future of <br className="hidden sm:block" />
                                        <span className="text-neutral-400">enterprise intelligence.</span>
                                    </h4>
                                    <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-lg mb-5 sm:mb-6">
                                        Join a team of world-class engineers, researchers, and designers pushing the boundaries of autonomous AI systems.
                                    </p>

                                    {/* Role chips */}
                                    <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                        {['ML Engineer', 'Backend (Go)', 'Full-Stack', 'DevRel', 'Design'].map((role) => (
                                            <span key={role} className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide hover:border-emerald-500/30 hover:text-emerald-300 transition-all duration-300 cursor-default">
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="group/btn flex-shrink-0 flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-black font-bold text-sm sm:text-base hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] w-full md:w-auto">
                                    View Open Roles
                                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
