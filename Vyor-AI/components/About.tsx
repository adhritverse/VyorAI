"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Testimonials } from "./Testimonials";

const smoothEase = [0.16, 1, 0.3, 1];

export function About() {
    return (
        <section
            id="about"
            className="py-20 lg:py-28 relative bg-[#0D1B2A] overflow-hidden selection:bg-vyor-purple/30"
        >
            {/* Testimonials Section */}
            <div className="w-[100vw] relative left-1/2 -translate-x-1/2 mb-20">
                <Testimonials />
            </div>

            {/* Recruitment Banner */}
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    id="careers"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: smoothEase }}
                    className="mt-10 sm:mt-20 w-full"
                >
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full border border-white/[0.06] bg-[#0D1729] group hover:border-vyor-purple/20 transition-all duration-700 shadow-2xl">
                        {/* Animated gradient top border */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-vyor-purple/60 to-transparent" />
                        
                        {/* Ambient background glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vyor-purple/[0.04] blur-[100px] rounded-full pointer-events-none group-hover:bg-vyor-purple/[0.08] transition-all duration-1000" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-vyor-purple/[0.03] blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative p-5 sm:p-8 md:p-12 z-10">
                            {/* Top row — tag + status */}
                            <div className="flex items-center justify-between mb-6 sm:mb-8">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="h-px w-5 sm:w-8 bg-vyor-purple" />
                                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-vyor-violet">Careers</span>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2 bg-vyor-purple/10 border border-vyor-purple/20 rounded-full px-2.5 sm:px-3 py-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-vyor-violet animate-pulse shadow-[0_0_6px_rgba(124,92,252,0.8)]" />
                                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-vyor-violet">Actively Hiring</span>
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
                                            <span key={role} className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide hover:border-vyor-purple/30 hover:text-vyor-violet transition-all duration-300 cursor-default">
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
