"use client";

import { motion } from "framer-motion";
import { Terminal, Zap, Code2, Globe, Cpu, Layers } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const codeTokens = [
  { text: "import ", color: "text-indigo-400" },
  { text: "{ VisionAI } ", color: "text-white" },
  { text: "from ", color: "text-indigo-400" },
  { text: "'@visionai/sdk';\n\n", color: "text-emerald-400" },

  { text: "const ", color: "text-indigo-400" },
  { text: "client ", color: "text-white" },
  { text: "= ", color: "text-white" },
  { text: "new ", color: "text-indigo-400" },
  { text: "VisionAI", color: "text-yellow-200" },
  { text: "(process.env.", color: "text-white" },
  { text: "API_KEY", color: "text-neutral-100" },
  { text: ");\n\n", color: "text-white" },

  { text: "// Initialize Encoder-Decoder Architecture\n", color: "text-neutral-500" },
  
  { text: "const ", color: "text-indigo-400" },
  { text: "response ", color: "text-white" },
  { text: "= ", color: "text-white" },
  { text: "await ", color: "text-indigo-400" },
  { text: "client.inference.", color: "text-white" },
  { text: "generateCaption", color: "text-blue-400" },
  { text: "({\n", color: "text-white" },
  
  { text: "  model: ", color: "text-white" },
  { text: "'vision-enc-dec-v2'", color: "text-emerald-400" },
  { text: ",\n", color: "text-white" },

  { text: "  imageInput: ", color: "text-white" },
  { text: "'gs://bucket/sample_img.jpg'", color: "text-emerald-400" },
  { text: ",\n", color: "text-white" },

  { text: "  analyzeContext: ", color: "text-white" },
  { text: "true", color: "text-orange-400" },
  { text: ",\n", color: "text-white" },

  { text: "  precision: ", color: "text-white" },
  { text: "'ultra'", color: "text-emerald-400" },
  { text: "\n});\n\n", color: "text-white" },

  { text: "console.", color: "text-white" },
  { text: "log", color: "text-blue-400" },
  { text: "(", color: "text-white" },
  { text: "\"Generated Caption:\"", color: "text-emerald-400" },
  { text: ", response.caption);\n", color: "text-white" },

  { text: "console.", color: "text-white" },
  { text: "log", color: "text-blue-400" },
  { text: "(", color: "text-white" },
  { text: "\"Confidence:\"", color: "text-emerald-400" },
  { text: ", response.confidenceScore);", color: "text-white" }
];

export function ApiPlatform() {
    const sectionRef = useRef(null);
    const [charIndex, setCharIndex] = useState(0);
    const totalChars = codeTokens.reduce((acc, token) => acc + token.text.length, 0);

    useEffect(() => {
        let isMounted = true;

        const runLoop = async () => {
            while (isMounted) {
                // Type the code character by character
                for (let i = 0; i <= totalChars; i += 2) {
                    if (!isMounted) return;
                    setCharIndex(i);
                    await new Promise(r => setTimeout(r, 30));
                }
                // Pause at the end so user can read
                await new Promise(r => setTimeout(r, 4000));
                if (!isMounted) return;
                // Reset and pause briefly before retyping
                setCharIndex(0);
                await new Promise(r => setTimeout(r, 800));
            }
        };

        runLoop();
        return () => { isMounted = false; };
    }, [totalChars]);

    return (
        <section
            id="api"
            ref={sectionRef}
            className="py-20 sm:py-28 md:py-40 relative overflow-hidden bg-[#030712]"
        >
            {/* Background Elements - Shifted securely to Emerald/Teal */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="lg:w-5/12 w-full"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-400">
                                Vision Infrastructure
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium tracking-tight text-white mb-4 sm:mb-6 leading-[1.2] max-w-xl">
                            Process with <br className="hidden sm:block" />
                            <span className="text-neutral-400">Absolute Precision.</span>
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg text-neutral-400 mb-8 sm:mb-10 font-light leading-relaxed max-w-md">
                            A neural engine built for developers who demand
                            millisecond-scale latency. Orchestrate complex AI analysis
                            workflows via a single unified interface.
                        </p>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-12">
                            {[
                                {
                                    icon: Code2,
                                    title: "Universal SDK",
                                    desc: "Native JS/TS, Python, and Go support.",
                                },
                                {
                                    icon: Globe,
                                    title: "Edge Native",
                                    desc: "Global distribution with 0ms cold starts.",
                                },
                                {
                                    icon: Cpu,
                                    title: "Auto-Scale",
                                    desc: "From 1 to 1M requests instantly.",
                                },
                                {
                                    icon: Layers,
                                    title: "Versioned",
                                    desc: "Backward compatibility guaranteed.",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="group relative p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-[24px] bg-[#0C0C0C] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden shadow-xl">
                                    {/* Inner Glow on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    
                                    {/* Subtle Top highlight */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 group-hover:via-emerald-400/40 to-transparent transition-all duration-500" />

                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c]/80 to-[#050505] z-0 backdrop-blur-xl pointer-events-none" />
                                    
                                    <div className="relative z-10">
                                        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#111] to-[#050505] flex items-center justify-center mb-3 sm:mb-6 border border-white/5 group-hover:border-emerald-500/30 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(52,211,153,0.3)] transition-all duration-500">
                                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                                        </div>
                                        <h4 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 tracking-tight group-hover:text-emerald-300 transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        <p className="text-[11px] sm:text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                                            {item.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Ambient corner light */}
                                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500/10 blur-[30px] rounded-full group-hover:bg-emerald-500/30 transition-all duration-700 z-0 pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="lg:w-7/12 w-full perspective-[2000px]"
                    >
                        <div className="relative group">
                            {/* Decorative Glows */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-500" />

                            <div className="relative rounded-2xl md:rounded-[24px] border border-white/5 bg-[#0C0C0C] backdrop-blur-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] xl:translate-x-8">
                                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/5 bg-white/[0.02]">
                                    <div className="flex gap-1.5 sm:gap-2.5">
                                        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-red-500/40 border border-red-500/50" />
                                        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-yellow-500/40 border border-yellow-500/50" />
                                        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-emerald-500/40 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                                    </div>
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-white/[0.03] border border-white/5 rounded-full backdrop-blur-sm">
                                            <div className="text-[7px] xs:text-[9px] sm:text-[13px] text-neutral-400 font-mono tracking-widest uppercase truncate max-w-[120px] xs:max-w-none">
                                                <span className="opacity-40 mr-1 hidden xs:inline">ENDPOINT:</span>
                                                <span className="text-emerald-500/80">omni-engine-v2.1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-8 md:p-12 font-mono text-[10px] sm:text-[14px] md:text-base lg:text-[17px] min-h-[300px] sm:min-h-[460px] relative overflow-x-auto">
                                    <pre className="text-neutral-300 leading-loose">
                                        <code>
                                            {(() => {
                                                let count = 0;
                                                return codeTokens.map((token, index) => {
                                                    const start = count;
                                                    const end = count + token.text.length;
                                                    count = end;
                                                    
                                                    if (charIndex <= start) return null;
                                                    const visibleText = charIndex < end ? token.text.slice(0, charIndex - start) : token.text;
                                                    
                                                    return (
                                                        <span key={index} className={token.color}>
                                                            {visibleText}
                                                        </span>
                                                    );
                                                });
                                            })()}
                                            <span className={`inline-block w-2.5 h-6 ml-1 bg-emerald-400 align-middle ${charIndex > totalChars ? "animate-pulse" : ""}`} />
                                        </code>
                                    </pre>
                                </div>
                                <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3 sm:gap-6">
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                                            <span className="text-[10px] sm:text-[13px] font-bold text-neutral-400 uppercase tracking-widest">
                                                <span className="hidden sm:inline">Engine: </span>Active
                                            </span>
                                        </div>
                                        <div className="h-4 w-px bg-white/10 hidden sm:block" />
                                        <span className="text-[10px] sm:text-[13px] font-bold text-neutral-400 uppercase tracking-widest hidden sm:block">
                                            Latency: <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>12ms</motion.span>
                                        </span>
                                    </div>
                                    <div className="flex text-emerald-500/70 items-center justify-center font-mono font-bold text-xl">
                                        {'>_'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Developer Sandbox - Full Width Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mt-10 sm:mt-16 md:mt-20 w-full relative group p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[32px] bg-[#0C0C0C] border border-emerald-500/10 backdrop-blur-3xl overflow-hidden hover:border-emerald-500/20 transition-colors shadow-[0_0_40px_rgba(16,185,129,0.05)] flex flex-col items-center md:flex-row justify-between gap-6 sm:gap-8"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] -z-10 group-hover:bg-emerald-500/10 transition-all duration-700" />
                    
                    <div className="relative z-10 flex-1">
                        <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                            Developer Sandbox
                        </h3>
                        <p className="text-sm sm:text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                            Start with 1,000 free inference credits. No credit card
                            required to test the models in production. Scale infinitely when you're ready.
                        </p>
                    </div>
                    
                    <div className="relative z-10 shrink-0">
                        <button className="group/btn relative px-5 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold text-sm sm:text-lg rounded-xl sm:rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] w-full sm:w-auto">
                            <span className="relative z-10 flex items-center gap-3">
                                Generate API Key <Zap className="w-5 h-5 fill-black" />
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
