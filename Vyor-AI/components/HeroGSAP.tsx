"use client";

import { motion } from "framer-motion";
import { Noise } from "@/components/ui/Noise";
import { SplitText } from "@/components/ui/SplitText";

export function HeroGSAP() {
    return (
        <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#030712] flex items-center justify-center">
            {/* Background Effects */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 65% at 50% 50%, rgba(16, 185, 129, 0.08), transparent)",
                }}
            />
            {/* Grid overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808009_1px,transparent_1px),linear-gradient(to_bottom,#80808009_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

            <Noise opacity={0.04} />

            {/* Infinity Background */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden mix-blend-screen opacity-50 md:opacity-100">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250vw] sm:w-[180vw] md:w-[130vw] min-w-[800px] h-auto rotate-[75deg] md:rotate-[-15deg]">
                    <svg
                        viewBox="0 0 1000 500"
                        className="w-full h-full text-emerald-500/5"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <linearGradient
                                id="infGradSlow"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
                                <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                                <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="infGradFast"
                                x1="100%"
                                y1="100%"
                                x2="0%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0" />
                                <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
                                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="infGradBase"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#047857" stopOpacity="0.25" />
                                <stop offset="50%" stopColor="#10b981" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#059669" stopOpacity="0.25" />
                            </linearGradient>
                            <filter id="glowLight">
                                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <filter id="glowHeavy">
                                <feGaussianBlur stdDeviation="16" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <path
                            d="M 500 250 C 400 150, 250 100, 150 150 C 50 200, 50 300, 150 350 C 250 400, 400 350, 500 250 C 600 150, 750 100, 850 150 C 950 200, 950 300, 850 350 C 750 400, 600 350, 500 250 Z"
                            fill="none"
                            stroke="url(#infGradBase)"
                            strokeWidth="35"
                            strokeLinecap="round"
                        />
                        <path
                            d="M 500 250 C 400 150, 250 100, 150 150 C 50 200, 50 300, 150 350 C 250 400, 400 350, 500 250 C 600 150, 750 100, 850 150 C 950 200, 950 300, 850 350 C 750 400, 600 350, 500 250 Z"
                            fill="none"
                            stroke="url(#infGradSlow)"
                            strokeWidth="14"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="30 70"
                            className="infinity-draw-slow"
                            filter="url(#glowLight)"
                        />
                        <path
                            d="M 500 250 C 400 150, 250 100, 150 150 C 50 200, 50 300, 150 350 C 250 400, 400 350, 500 250 C 600 150, 750 100, 850 150 C 950 200, 950 300, 850 350 C 750 400, 600 350, 500 250 Z"
                            fill="none"
                            stroke="url(#infGradFast)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="15 85"
                            className="infinity-draw-fast"
                            filter="url(#glowHeavy)"
                        />
                    </svg>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 pt-20 flex flex-col items-center text-center">

                <div className="max-w-4xl mx-auto mb-8">
                    <SplitText
                        text="AI That Understands, Decides & Executes."
                        className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white leading-[1.05]"
                        delay={0.2}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="text-lg md:text-xl text-neutral-400 font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Deploy high-performance autonomous agents and pipelines with{" "}
                    <span className="text-emerald-400 font-semibold">millisecond-scale</span>{" "}
                    latency. Scale from prototype to production in minutes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
                >
                    <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-black text-sm uppercase tracking-wide hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        Get Started
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm uppercase tracking-wide backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group">
                        <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">&lt;/&gt;</span>
                        Documentation
                    </button>
                </motion.div>
                
            </div>
        </section>
    );
}
