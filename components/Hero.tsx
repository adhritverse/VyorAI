"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles, ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/aceternity/spotlight";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* Layer 1: Background Typography (STAYING BEHIND) */}
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center select-none pointer-events-none overflow-hidden mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center w-full"
                >
                    <span className="text-[18vw] font-black tracking-tightest text-white/[0.03] leading-[0.75] uppercase">
                        Future
                    </span>
                    <span className="text-[18vw] font-black tracking-tightest text-transparent bg-clip-text bg-gradient-to-b from-white/[0.05] to-transparent leading-[0.75] uppercase">
                        Intelligence
                    </span>
                </motion.div>
            </div>

            {/* Visual Overlays & Lighting */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20 z-[1]"
                fill="white"
            />

            <div className="absolute inset-0 z-[2] bg-transparent pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-gradient-to-r from-purple-500/10 via-indigo-500/5 to-transparent blur-[140px] opacity-30 pointer-events-none rounded-full animate-pulse z-[1]"></div>

            {/* Layer 2: Interactive Foreground (CONTENT RESTORED) */}
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-start justify-between min-h-[85vh] py-12">

                {/* Branding & Badge (Restored to Left) */}
                <div className="flex flex-col items-start text-left pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-6 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] hover:border-purple-500/30 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                        <span className="text-xs font-bold text-neutral-300 uppercase tracking-[0.3em] font-mono">
                            VyorAI Neural Interface
                        </span>
                    </motion.div>

                    {/* Small Visible Header */}
                    <h3 className="text-sm font-mono text-purple-400/60 tracking-[0.5em] uppercase mb-4 ml-2">Autonomous OS v4.0</h3>

                    {/* Primary Tagline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter ml-2 mb-10 max-w-2xl leading-[1.1]"
                    >
                        AI That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Understands, Decides & Executes</span>
                    </motion.h1>
                </div>

                {/* Subtitle & Actions Bar at bottom */}
                <div className="w-full flex flex-col lg:flex-row items-end justify-between gap-12 mt-auto">

                    {/* Left: Secondary Context */}
                    <div className="hidden lg:flex flex-col items-start max-w-xs text-left pointer-events-auto">
                        <div className="h-px w-20 bg-white/20 mb-6" />
                        <p className="text-xs font-mono text-neutral-400 tracking-widest leading-relaxed uppercase">
                            Optimized for low-latency inference and cross-model orchestration workflows.
                        </p>
                    </div>

                    {/* Right: Primary Call to Action */}
                    <div className="flex flex-col items-center lg:items-end text-center lg:text-right pointer-events-auto">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg md:text-2xl text-neutral-300/90 max-w-xl mb-10 leading-relaxed font-medium tracking-tight bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 shadow-2xl"
                        >
                            Deploy high-performance <span className="text-white font-bold">AI agents</span> and autonomous pipelines with <span className="text-purple-400 font-extrabold underline decoration-purple-500/30 underline-offset-8">millisecond-scale</span> latency.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                        >
                            <button className="relative group px-12 py-5 rounded-2xl bg-white text-black font-extrabold hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden shadow-[0_20px_40px_-20px_rgba(255,255,255,0.4)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white group-hover:from-white group-hover:to-purple-50 transition-all opacity-0 group-hover:opacity-100" />
                                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                                    Access API <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <button className="px-12 py-5 rounded-2xl bg-white/[0.03] text-white font-bold backdrop-blur-3xl border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all flex items-center justify-center gap-3 text-lg group">
                                <Code className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
                                <span>Library</span>
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-auto"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold mb-2">Initialize Core</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-5 h-5 text-neutral-500"
                    >
                        <ChevronDown className="w-full h-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
