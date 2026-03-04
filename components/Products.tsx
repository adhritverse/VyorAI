"use client";

import { motion } from "framer-motion";
import { Camera, HeartPulse, Zap } from "lucide-react";

const products = [
    {
        icon: Camera,
        title: "AI Virtual Try-On",
        description: "A state-of-the-art AI solution for realistic garment visualization. Get started with 10 free credits—allowing up to 100 virtual try-ons—to test the experience in your workflow.",
        features: ["Realistic Rendering", "Body-aware Fitting", "Instant Style Switching"],
        color: "from-blue-500/20 to-purple-500/20",
        border: "group-hover:border-blue-500/50",
        delay: 0.2,
    },
    {
        icon: HeartPulse,
        title: "Stress Detection AI",
        description: "An advanced emotional pattern recognition system designed to monitor, detect, and provide dynamic mental wellness support through real-time biometrics.",
        features: ["Pattern Recognition", "Dynamic Wellness", "Real-time Support"],
        color: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-pink-500/50",
        delay: 0.3,
    },
    {
        icon: Zap,
        title: "Vyor Omni-Engine",
        description: "The flagship AI automation engine. A powerful logic and reasoning backbone for enterprise-scale autonomous execution across distributed systems.",
        features: ["Logical Reasoning", "Enterprise Scale", "Autonomous Execution"],
        color: "from-pink-500/20 to-orange-500/20",
        border: "group-hover:border-orange-500/50",
        delay: 0.4,
        isComingSoon: true,
    }
];

export function Products() {
    return (
        <section id="products" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Intelligence Suite</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Purpose-built AI models designed to solve complex business problems through our scalable infrastructure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: product.delay, duration: 0.5 }}
                            className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-500 ${product.border} hover:bg-white/[0.04] overflow-hidden flex flex-col`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {product.isComingSoon && (
                                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/10 text-xs font-medium border border-white/10 backdrop-blur-md">
                                    Coming Soon
                                </div>
                            )}

                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <product.icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">{product.description}</p>

                            {product.features && (
                                <ul className="space-y-3 mb-8">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2 text-sm text-gray-300 group-hover:text-white transition-colors cursor-pointer w-fit">
                                Explore Demo <span className="text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
