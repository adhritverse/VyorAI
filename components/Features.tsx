"use client";

import { motion } from "framer-motion";
import { Server, Zap, ShieldCheck } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: Server,
            title: "Scalable Architecture",
            description: "Built on Vercel Edge compute, our API routes provide sub-50ms latency globally, ensuring zero downtime for your apps.",
        },
        {
            icon: Zap,
            title: "AI-Native System",
            description: "Unlike traditional wrappers, Vyor is fundamentally designed around custom neural networks. We optimize everything for inference speed.",
        },
        {
            icon: ShieldCheck,
            title: "Fast Integration",
            description: "Drop the VyorAI SDK into any modern JavaScript environment. Fully typed, documented, and backward compatible.",
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            className="group flex flex-col pt-8 border-t border-white/10 hover:border-purple-500/50 transition-colors"
                        >
                            <feature.icon className="w-8 h-8 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
