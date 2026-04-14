"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What makes VyorAI's Virtual Try-On different?",
        answer: "We don't use simple 2D overlays. Our generative AI infrastructure dynamically analyzes fabric physics, drape, and lighting to synthesize photorealistic fits precisely tailored to the user's unique body type."
    },
    {
        question: "How fast is the VyorAI automation API?",
        answer: "Built for true enterprise scale, our edge-distributed APIs guarantee global endpoint execution with sub-50ms latency and a 99.9% uptime SLA to keep your applications running flawlessly."
    },
    {
        question: "Do I need machine learning expertise to integrate?",
        answer: "Not at all. Our entire ecosystem is exposed via clean RESTful APIs and modern SDKs designed to drop directly into your Next.js, Node, or Python backend with just a few lines of code."
    },
    {
        question: "How does the pricing model work?",
        answer: "We offer a generous perpetually-free tier for independent developers, moving into transparent usage-based scaling for enterprise platforms. No hidden fees or massive upfront contracts."
    },
    {
        question: "Is the product catalog workflow fully automated?",
        answer: "Yes. You can generate entire high-quality lifestyle marketing catalogs automatically, starting from a single flat-lay or ghost mannequin photo without any manual Photoshop work."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 sm:py-28 lg:py-32 relative bg-[#0B1525] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-vyor-purple/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-vyor-purple/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-vyor-violet animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-300">FAQ</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Common <span className="text-neutral-500">Inquiries.</span>
                    </h2>
                    <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-light">
                        Everything you need to know about integrating and scaling with VyorAI's next-generation architecture.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                                className={cn(
                                    "rounded-2xl transition-all duration-300 overflow-hidden border",
                                    isOpen ? "bg-white/[0.04] border-white/10 shadow-[0_0_30px_rgba(71,84,106,0.05)]" : "bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left px-6 py-6 sm:py-7 flex items-center justify-between gap-4"
                                >
                                    <h3 className="text-base sm:text-lg font-medium text-white tracking-wide pr-8">
                                        {faq.question}
                                    </h3>
                                    <div className={cn(
                                        "shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300",
                                        isOpen ? "bg-vyor-purple/20 border-vyor-purple/30 text-vyor-violet rotate-180" : "bg-white/5 text-neutral-400"
                                    )}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-7 text-neutral-400 leading-relaxed font-light text-sm sm:text-base border-t border-white/5 pt-4 mt-2">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
