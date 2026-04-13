"use client";

import { motion } from "framer-motion";
import { Camera, HeartPulse, Zap, Sparkles, Terminal, Activity, CheckCircle2, Puzzle, Shirt, BoxSelect, Fingerprint } from "lucide-react";
import React, { useRef, useState } from "react";

const products = [
    {
        id: "infinity",
        title: "Infinity (Plugin SDK)",
        description: "Develop, train, and deploy custom neural architectures directly into our ecosystem. Build proprietary plugins that seamlessly interface with core platform intelligence.",
        features: [
            "Access multi-modal underlying models natively",
            "Auto-scaling infrastructure for infinite scale",
            "Monetize and distribute to the community"
        ],
        icon: Puzzle,
        span: "md:col-span-3",
        delay: 0.1,
        theme: "indigo",
        glowColor: "rgba(99,102,241,0.15)"
    },
    {
        id: "tryon",
        title: "AI Virtual Try-On",
        description: "Achieve hyper-realistic photorealistic garment mapping for e-commerce with millimeter precision.",
        features: [
            "Real-time fabric drape simulation",
            "Lighting and shadow harmonization",
            "Sub-second inference times"
        ],
        icon: Shirt,
        span: "md:col-span-2",
        delay: 0.2,
        theme: "pink",
        glowColor: "rgba(236,72,153,0.15)"
    },
    {
        id: "stress",
        title: "Stress Detection",
        description: "Analyze micro-expressions and voice frequencies for real-time cognitive load detection.",
        icon: Activity,
        span: "md:col-span-1",
        delay: 0.3,
        theme: "emerald",
        glowColor: "rgba(16,185,129,0.15)"
    },
    {
        id: "omni",
        title: "Omni-Engine",
        description: "A centralized command module for continuous asynchronous orchestration of AI tasks.",
        isComingSoon: true,
        icon: BoxSelect,
        span: "md:col-span-1",
        delay: 0.4,
        theme: "blue",
        glowColor: "rgba(59,130,246,0.15)"
    },
    {
        id: "api",
        title: "Developer API",
        description: "Robust, zero-latency RESTful and GraphQL endpoints. Integrate high-speed AI capabilities into your stack.",
        features: [
            "99.99% Guaranteed Uptime SLAs",
            "Edge caching and global CDN",
        ],
        icon: Fingerprint,
        span: "md:col-span-2",
        delay: 0.5,
        theme: "yellow",
        glowColor: "rgba(234,179,8,0.15)"
    }
];

function InfinityDemo() {
    const [step, setStep] = useState(0);
    const [userTyped, setUserTyped] = useState("");
    const [assistantTyped, setAssistantTyped] = useState("");

    const userText = "Looking for a mechanical keyboard with silent switches under $150.";
    const assistantText = "I found 3 perfect matches in stock! The Keychron Q1 Pro features silent red switches and fits your budget.";

    React.useEffect(() => {
        let isMounted = true;

        const runSequence = async () => {
            while (isMounted) {
                if (isMounted) { setStep(0); setUserTyped(""); setAssistantTyped(""); }

                await new Promise(r => setTimeout(r, 1000));
                if (!isMounted) break;
                setStep(1);

                for (let i = 1; i <= userText.length; i++) {
                    if (!isMounted) break;
                    setUserTyped(userText.slice(0, i));
                    await new Promise(r => setTimeout(r, 30));
                }
                if (!isMounted) break;

                await new Promise(r => setTimeout(r, 400));
                if (!isMounted) break;
                setStep(2);

                await new Promise(r => setTimeout(r, 600));
                if (!isMounted) break;
                setStep(3);

                for (let i = 1; i <= assistantText.length; i++) {
                    if (!isMounted) break;
                    setAssistantTyped(assistantText.slice(0, i));
                    await new Promise(r => setTimeout(r, 20));
                }
                if (!isMounted) break;
                setStep(4);

                await new Promise(r => setTimeout(r, 5000));
            }
        };

        runSequence();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#09090b] overflow-hidden p-3 sm:p-6">
            {/* Background dashboard — hidden on mobile for cleanliness */}
            <div className="absolute inset-x-4 lg:inset-x-8 inset-y-8 border border-white/5 rounded-xl bg-white/[0.01] flex-col overflow-hidden opacity-40 pointer-events-none filter blur-[2px] hidden sm:flex">
                <div className="w-full h-12 border-b border-white/5 flex items-center px-6 gap-4 bg-white/[0.01]">
                    <div className="w-24 h-4 bg-white/10 rounded-full" />
                    <div className="w-16 h-2 bg-white/5 rounded-full" />
                </div>
                <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6 flex-1 opacity-50">
                    <div className="bg-white/5 rounded-xl w-full h-32 md:h-40" />
                    <div className="bg-white/5 rounded-xl w-full h-32 md:h-40 hidden sm:block" />
                    <div className="bg-white/5 rounded-xl w-full h-32 md:h-40 hidden md:block" />
                </div>
            </div>

            <div className="relative w-full max-w-[290px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-md bg-[#0A0A0A] border border-emerald-500/20 rounded-2xl md:rounded-[24px] shadow-[0_0_50px_rgba(16,185,129,0.1)] flex flex-col z-10 overflow-hidden">
                <div className="px-3 py-2 sm:p-3 md:p-4 border-b border-white/5 bg-[#0A0A0A] bg-gradient-to-r from-emerald-500/10 to-transparent flex items-center gap-2 sm:gap-3 relative z-20 shrink-0">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_rgba(52,211,153,1)]" />
                    <span className="text-white font-medium text-xs sm:text-sm tracking-tight opacity-90">VyorAI Assistant</span>
                </div>

                <div className="p-3 sm:p-4 flex-1 flex flex-col gap-2.5 sm:gap-4 justify-end text-[11px] sm:text-sm md:text-base font-normal relative z-10 min-h-[120px] sm:min-h-[140px] md:min-h-[180px]">
                    {step >= 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 border border-white/5 rounded-xl sm:rounded-2xl rounded-br-none p-2.5 sm:p-3 md:p-4 self-end max-w-[88%] text-neutral-300 shadow-lg font-light leading-relaxed"
                        >
                            {userText}
                        </motion.div>
                    )}

                    {step >= 3 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl sm:rounded-2xl rounded-bl-none p-2.5 sm:p-3.5 md:p-4 self-start max-w-[92%] text-white shadow-lg backdrop-blur-md font-light leading-relaxed"
                        >
                            <div className="flex gap-2 sm:gap-3 items-start">
                                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-400 mt-0.5 shrink-0" />
                                <div className="leading-relaxed">
                                    {assistantTyped}
                                    <span className={`inline-block w-1 sm:w-1.5 h-3 sm:h-3.5 md:h-4 ml-0.5 sm:ml-1 bg-emerald-400 align-middle ${step === 3 ? "animate-pulse" : "hidden"}`} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                <div className="px-2.5 py-2 sm:p-3 md:p-4 border-t border-white/5 flex gap-2 items-center bg-[#0A0A0A] relative z-20 shrink-0">
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-full h-8 sm:h-10 md:h-12 px-3 sm:px-4 flex items-center relative overflow-hidden">
                        {(step === 0 || step === 1) && (
                            <span className="text-white/80 text-[11px] sm:text-sm tracking-wide truncate">
                                {userTyped}
                                {step === 1 && (
                                    <span className="inline-block w-1 sm:w-1.5 h-3 sm:h-3.5 bg-white/60 align-middle ml-0.5 animate-pulse" />
                                )}
                            </span>
                        )}
                        {step === 0 && userTyped.length === 0 && (
                            <span className="text-white/30 text-[11px] sm:text-sm tracking-wide absolute left-3 sm:left-4">Type your request...</span>
                        )}
                        {step >= 2 && (
                            <span className="text-white/30 text-[11px] sm:text-sm tracking-wide">Type your request...</span>
                        )}
                    </div>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${step === 1 ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white'}`}>
                        <span className="text-xs sm:text-sm font-bold">↵</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TryOnDemo() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#09090b]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

            <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                {/* Photorealistic Model Base Image */}
                <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
                    alt="Fashion Model"
                    className="w-full h-full object-cover object-center"
                />

                {/* AI Mesh Overlay overlay (simulating garment recognition) */}
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-30 stroke-emerald-400 stroke-[0.5] fill-none" preserveAspectRatio="none">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} className="hidden group-hover:block" />
                        ))}
                        {Array.from({ length: 10 }).map((_, i) => (
                            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" className="hidden group-hover:block" />
                        ))}
                    </svg>
                </div>

                {/* Animated Scanner Laser */}
                <motion.div
                    className="absolute left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_15px_3px_rgba(52,211,153,0.8)] z-20"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                {/* Gradient tracking behind laser */}
                <motion.div
                    className="absolute inset-x-0 h-24 bg-gradient-to-t from-emerald-500/30 to-transparent z-10 pointers-events-none mix-blend-overlay"
                    animate={{ top: ['-24%', '100%', '-24%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                {/* Scanning points highlighting features */}
                <motion.div className="absolute top-[35%] left-[40%] w-2 h-2 rounded-full border border-emerald-400 bg-emerald-400/20 shadow-[0_0_10px_rgba(52,211,153,0.8)]" animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                <motion.div className="absolute top-[60%] right-[30%] w-2 h-2 rounded-full border border-emerald-400 bg-emerald-400/20 shadow-[0_0_10px_rgba(52,211,153,0.8)]" animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
            </div>

            <motion.div
                className="absolute top-6 right-6 bg-[#050505]/80 backdrop-blur-md border border-emerald-500/20 rounded px-2.5 py-1.5 flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.15)] z-30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.8, 1, 1, 0.8], scale: [0.95, 1, 1, 0.95] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(52,211,153,0.8)]" />
                <span className="text-[10px] uppercase text-emerald-400 font-mono tracking-wider font-bold">Scanning Fabric</span>
            </motion.div>

            {/* Bottom floating data bar */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-2 overflow-hidden px-1">
                <motion.div className="bg-[#050505]/60 backdrop-blur-md px-2 py-1 rounded text-[8px] sm:text-[9px] border border-white/5 font-mono text-neutral-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 0 }}>MATCH: 98.4%</motion.div>
                <motion.div className="bg-[#050505]/60 backdrop-blur-md px-2 py-1 rounded text-[8px] sm:text-[9px] border border-white/5 font-mono text-emerald-400/80" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>[GARMENT_ID_X7]</motion.div>
            </div>
        </div>
    );
}

function StressDemo() {
    const [bpm, setBpm] = React.useState(72);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setBpm(prev => {
                const change = Math.floor(Math.random() * 5) - 2;
                return Math.max(65, Math.min(85, prev + change));
            });
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 gap-4 bg-[#09090b]">
            <div className="w-full flex justify-between px-2 text-[10px] md:text-xs uppercase text-neutral-500 font-mono items-center">
                <span className="flex items-center gap-2">
                    <HeartPulse className="w-3.5 h-3.5 text-teal-500" />
                    Live Biometrics
                </span>
                <span className="text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                    <motion.span key={bpm} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>{bpm}</motion.span> BPM
                </span>
            </div>
            <div className="w-full h-24 border border-white/5 bg-[#050505] rounded-[16px] flex items-center overflow-hidden relative shadow-inner">
                <motion.div
                    className="absolute inset-y-0 w-[200%] flex"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                >
                    <svg viewBox="0 0 200 50" className="w-[50%] h-full" preserveAspectRatio="none">
                        <path d="M 0 25 L 40 25 L 50 10 L 60 40 L 70 25 L 120 25 L 130 15 L 140 35 L 150 25 L 200 25" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
                    </svg>
                    <svg viewBox="0 0 200 50" className="w-[50%] h-full" preserveAspectRatio="none">
                        <path d="M 0 25 L 40 25 L 50 10 L 60 40 L 70 25 L 120 25 L 130 15 L 140 35 L 150 25 L 200 25" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
                    </svg>
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none" />

                <div className="absolute bottom-2 left-4 flex gap-1.5 items-center z-10 bg-[#050505]/50 px-2 py-1 rounded backdrop-blur-sm">
                    <div className="flex gap-1">
                        <motion.div className="w-1.5 h-3 bg-teal-500/30 rounded-sm" animate={{ height: [12, 16, 12] }} transition={{ duration: 1, repeat: Infinity }} />
                        <motion.div className="w-1.5 h-4 bg-teal-500/50 rounded-sm" animate={{ height: [16, 24, 16] }} transition={{ duration: 1.2, repeat: Infinity }} />
                        <motion.div className="w-1.5 h-2 bg-teal-400 rounded-sm shadow-[0_0_8px_rgba(45,212,191,0.8)]" animate={{ height: [8, 12, 8] }} transition={{ duration: 0.8, repeat: Infinity }} />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-teal-400 ml-1">Optimal</span>
                </div>
            </div>
        </div>
    );
}

function OmniDemo() {
    // Logic for radiating circuit paths
    const circuitPaths = [
        "M 50 50 L 50 20 L 10 20", // Top Left
        "M 50 50 L 80 50 L 80 10", // Top Right
        "M 50 50 L 50 80 L 90 80", // Bottom Right
        "M 50 50 L 20 50 L 20 90", // Bottom Left
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center group overflow-hidden bg-[#050505]">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_100%)] opacity-50" />
            
            {/* Circuit Traces Layer */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <defs>
                    <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                
                {circuitPaths.map((path, i) => (
                    <g key={i}>
                        {/* Static Wire Trace */}
                        <path
                            d={path}
                            stroke="rgba(59, 130, 246, 0.05)"
                            strokeWidth="0.5"
                            fill="none"
                        />
                        
                        {/* Pumping Energy Pulse */}
                        <motion.path
                            d={path}
                            stroke="url(#pulseGradient)"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="20 80"
                            animate={{ strokeDashoffset: [100, 0] }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        {/* Junction Glow Node */}
                        <motion.circle
                            cx={path.split(' ')[4]}
                            cy={path.split(' ')[5]}
                            r="0.8"
                            fill="#3b82f6"
                            initial={{ opacity: 0.1 }}
                            animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        />
                    </g>
                ))}
            </svg>

            {/* Rotating Orbital Rings (Subtle Backdrop) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <motion.div 
                    className="w-48 h-48 border border-blue-500/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Central Command Module (Engine Core) */}
            <motion.div 
                className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#080808]/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl flex items-center justify-center z-20 shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                animate={{ 
                    y: [0, -4, 0],
                    boxShadow: [
                        "0 0 30px rgba(59,130,246,0.2)",
                        "0 0 60px rgba(59,130,246,0.4)",
                        "0 0 30px rgba(59,130,246,0.2)"
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-md" />
                <BoxSelect className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 relative z-10" />
                
                {/* Core Status "Pulse" Ring */}
                <motion.div 
                    className="absolute inset-0 border-2 border-blue-500/20 rounded-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Internal Pulsing Light */}
                <motion.div 
                    className="absolute inset-2 bg-blue-500/10 rounded-lg"
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>

            {/* Micro-HUD elements */}
            <div className="absolute top-4 right-4 flex flex-col items-end gap-1 opacity-40 font-mono text-[8px] text-blue-400">
                <div className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                    OMNI_LINK: ESTABLISHED
                </div>
                <div className="text-[6px] opacity-60">PULSE: 72 BPM</div>
            </div>
        </div>
    );
}

function ApiDemo() {
    const [line, setLine] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setLine(l => (l >= 4 ? 0 : l + 1));
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#050505] overflow-hidden p-6 gap-6">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />

            <div className="w-full max-w-[280px] bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden font-mono text-[10px] shadow-2xl z-20 hover:border-white/20 transition-colors relative">
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/70" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                        <div className="w-2 h-2 rounded-full bg-green-500/70" />
                    </div>
                    <div className="text-neutral-500 flex items-center gap-1.5 sm:gap-2">
                        <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        vyor-api.js
                    </div>
                </div>
                <div className="p-4 sm:p-5 text-neutral-400 leading-relaxed min-h-[140px] sm:min-h-[160px] relative">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2">
                        <span className="text-indigo-400">import</span> {'{ Vyor }'} <span className="text-indigo-400">from</span> <span className="text-emerald-400">'@vyor/sdk'</span>;
                    </motion.div>

                    {line >= 1 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
                            <span className="text-indigo-400">const</span> vyor = <span className="text-indigo-400">new</span> <span className="text-yellow-200">Vyor</span>('vy_abc123');
                        </motion.div>
                    )}

                    {line >= 2 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 hidden sm:block">
                            <span className="text-neutral-500">// Initialize instant execution</span>
                        </motion.div>
                    )}

                    {line >= 3 && (
                        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                            <div><span className="text-indigo-400">const</span> result = <span className="text-indigo-400">await</span> vyor.<span className="text-blue-400">run</span>({'{'}</div>
                            <div className="pl-4">model: <span className="text-emerald-400">'vision-v2'</span>,</div>
                            <div className="pl-4">image: imgBuffer</div>
                            <div>{'}'});</div>
                        </motion.div>
                    )}

                    {line >= 4 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="absolute bottom-4 right-4 bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md text-indigo-400 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[10px] shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                        >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Executed in 45ms</span>
                        </motion.div>
                    )}
                </div>
            </div>
            <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-indigo-500/10 blur-[50px] rounded-full mix-blend-screen" />
        </div>
    );
}

function ProductVisual({ id }: { id: string }) {
    if (id === "infinity") return <InfinityDemo />;
    if (id === "tryon") return <TryOnDemo />;
    if (id === "stress") return <StressDemo />;
    if (id === "omni") return <OmniDemo />;
    if (id === "api") return <ApiDemo />;
    return null;
}

// Theme color mapping for mobile gradient borders
const themeColors: Record<string, { border: string, glow: string, accent: string }> = {
    indigo: { border: 'border-indigo-500/20', glow: 'shadow-[0_0_20px_rgba(99,102,241,0.08)]', accent: 'text-indigo-400' },
    pink: { border: 'border-pink-500/20', glow: 'shadow-[0_0_20px_rgba(236,72,153,0.08)]', accent: 'text-pink-400' },
    emerald: { border: 'border-emerald-500/20', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.08)]', accent: 'text-emerald-400' },
    blue: { border: 'border-blue-500/20', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.08)]', accent: 'text-blue-400' },
    yellow: { border: 'border-yellow-500/20', glow: 'shadow-[0_0_20px_rgba(234,179,8,0.08)]', accent: 'text-yellow-400' },
};

function ProductCard({ product }: { product: typeof products[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const isWide = product.span === "md:col-span-2" || product.span === "md:col-span-3";
    const isFullWidth = product.span === "md:col-span-3";
    const isCompact = product.span === "md:col-span-1";
    const theme = themeColors[(product as any).theme] || themeColors.emerald;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: product.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative rounded-2xl md:rounded-[20px] bg-[#080808] overflow-hidden flex flex-col ${isWide ? 'md:flex-row' : ''} ${product.span} ${isFullWidth ? 'md:h-[460px]' : isWide ? 'md:h-[380px]' : ''} transition-all duration-500 hover:border-white/10 hover:shadow-emerald-500/10 ${theme.border} ${theme.glow} border md:border-white/5 md:shadow-2xl`}
        >
            {/* Interactive Spotlight Glow — desktop only */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 md:group-hover:opacity-100 z-20 rounded-[20px] hidden md:block"
                style={{
                    background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${(product as any).glowColor || 'rgba(255,255,255,0.03)'}, transparent 40%)`,
                }}
            />

            {product.isComingSoon && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-[#1c1c1c]/90 backdrop-blur-md text-white text-[9px] md:text-[10px] font-bold border border-white/10 z-20 uppercase tracking-widest shadow-xl">
                    Coming Soon
                </div>
            )}

            {/* Content Container */}
            <div className={`p-5 md:p-8 flex flex-col z-10 flex-1 ${isWide ? 'md:w-[45%] md:flex-none' : 'w-full'} justify-start relative`}>
                <div className="flex flex-col h-full justify-start">
                    <div className="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
                        <div className={`p-2 md:p-2.5 rounded-lg md:rounded-xl bg-white/[0.03] border border-white/5 shadow-inner group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500`}>
                            <product.icon className={`w-4 h-4 md:w-7 md:h-7 ${theme.accent} md:text-neutral-400 group-hover:text-emerald-400 transition-colors duration-500`} />
                        </div>
                        <h3 className={`${isFullWidth ? 'text-lg sm:text-xl md:text-3xl' : isWide ? 'text-lg sm:text-xl md:text-[26px]' : 'text-lg md:text-2xl'} font-bold tracking-tight text-white`}>{product.title}</h3>
                    </div>
                    <p className={`${isFullWidth ? 'text-[13px] sm:text-[14px] md:text-base' : 'text-[13px] md:text-[14px]'} text-neutral-400 leading-relaxed font-light mb-4 md:mb-6 ${isFullWidth ? 'max-w-xl' : 'max-w-sm'}`}>{product.description}</p>
                </div>

                {product.features && (
                    <ul className="space-y-2 md:space-y-2.5 mt-auto mb-1">
                        {product.features.map((feature, idx) => (
                            <li key={idx} className={`flex items-center gap-2 md:gap-2.5 text-[12px] sm:text-[13px] md:text-[14px] font-normal text-neutral-500 md:group-hover:text-neutral-300 transition-colors duration-300`}>
                                <span className={`rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors duration-300 shrink-0 w-1 h-1 md:w-1.5 md:h-1.5`} />
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Visual Container — hidden on mobile for compact cards; constrained height for fullWidth */}
            <div className={`relative flex items-center justify-center bg-[#050505] overflow-hidden transition-colors duration-500 ${isWide
                    ? `w-full md:w-[55%] border-t md:border-t-0 md:border-l border-white/5 md:flex-none ${isFullWidth ? 'h-[300px] sm:h-[320px] md:h-auto md:flex-1' : 'flex-1 min-h-[220px] md:min-h-[260px]'}`
                    : `w-full h-[200px] md:h-auto md:min-h-[220px] border-t border-white/5`
                }`}>
                <ProductVisual id={product.id} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/80 pointer-events-none" />
            </div>
        </motion.div>
    );
}

export function Products() {
    return (
        <section id="products" className="py-16 sm:py-24 md:py-40 relative z-10 overflow-hidden bg-black">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 md:mb-24 gap-4 sm:gap-8"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2.5 md:gap-3 mb-4 md:mb-6">
                            <div className="h-px w-6 md:w-8 bg-emerald-500" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Intelligence Ecosystem</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-3 sm:mb-6 leading-tight">
                            Build scalable modular applications with Vyor AI Engine.
                        </h2>
                        <p className="text-sm sm:text-base text-neutral-400 md:text-lg leading-relaxed max-w-lg">
                            We deliver highly optimized vector algorithms and neural architectures that command complex workflows directly on the edge.
                        </p>
                    </div>
                </motion.div>

                {/* The Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-[1240px] mx-auto">
                    {products.map((product, i) => (
                        <ProductCard key={i} product={product as any} />
                    ))}
                </div>
            </div>
        </section>
    );
}
