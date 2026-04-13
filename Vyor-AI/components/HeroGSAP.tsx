"use client";

import { motion } from "framer-motion";
import { Noise } from "@/components/ui/Noise";
import { SplitText } from "@/components/ui/SplitText";
import { Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] sm:w-[180vw] md:w-[130vw] min-w-[600px] h-auto rotate-[45deg] sm:rotate-[75deg] md:rotate-[-15deg]">
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
            <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-20 pb-16 sm:pb-8 flex flex-col items-center text-center">




                {/* Main Heading */}
                <div className="max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
                    <SplitText
                        text="AI That Understands, Decides & Executes."
                        className="text-[2rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white leading-snug sm:leading-[1.05] pt-2"
                        delay={0.2}
                    />
                </div>

                {/* Subtitle — enhanced with visual weight */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="text-base sm:text-lg md:text-xl text-neutral-400 font-medium max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2 sm:px-0"
                >
                    Deploy high-performance{" "}
                    <span className="text-white font-semibold">autonomous agents</span> and pipelines with{" "}
                    <span className="text-emerald-400 font-semibold">millisecond-scale</span>{" "}
                    latency. Scale from prototype to production in minutes.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto px-2 sm:px-0"
                >
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-black font-black text-sm uppercase tracking-wide hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        Get Started
                    </button>
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm uppercase tracking-wide backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group">
                        <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">&lt;/&gt;</span>
                        Documentation
                    </button>
                </motion.div>

                {/* Metrics Strip — visual hierarchy reinforcement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                    className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-center"
                >
                    {[
                        { value: "<50ms", label: "Avg Latency", mobileHidden: true },
                        { value: "99.9%", label: "Uptime", mobileHidden: true },
                        { value: "1M+", label: "API Calls/day", mobileHidden: true },
                    ].map((stat) => (
                        <div key={stat.label} className={cn("items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]", stat.mobileHidden ? "hidden sm:flex" : "flex")}>
                            <span className="text-base sm:text-lg font-black text-white tracking-tight">{stat.value}</span>
                            <span className="text-[10px] sm:text-xs text-neutral-500 font-medium uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator — Desktop visual anchor */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-neutral-600 font-bold">
                    Explore
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-4 h-4 text-neutral-600" />
                </motion.div>
            </motion.div>
        </section>
    );
}
