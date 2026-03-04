"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    const team = [
        {
            name: "Hritik Jaiswal",
            role: "Founder & CEO",
            image: "/Founder.png",
        },
        {
            name: "Rishabh Kushwah",
            role: "Co-Founder",
            image: "/Co-Founder.png",
        }
    ];

    const engineeringMembers = [
        {
            name: "Anmol Malviya",
            role: "AI Engineer & Full Stack Dev",
            image: "/Anmol-Malviya.png",
            isRevealed: true,
        },
        { name: "John Doe", role: "AI Infrastructure", image: null, isRevealed: false },
        { name: "John Doe", role: "Model Architect", image: null, isRevealed: false },
        { name: "John Doe", role: "DevOps", image: null, isRevealed: false },
        { name: "John Doe", role: "Frontend Engine", image: null, isRevealed: false },
    ];

    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
                        The Team
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Building the Future of Automation</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We are deeply committed to making powerful AI accessible, scalable, and beautifully integrated.
                    </p>
                </motion.div>

                {/* Founders */}
                <div className="flex flex-col md:flex-row justify-center gap-12 mb-20">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            className="text-center group"
                        >
                            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-white/5 border-4 border-white/10 mb-6 relative group-hover:border-purple-500/50 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                {/* Fallback to gradient if image is missing */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 absolute inset-0 -z-10" />
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23222"/></svg>'
                                    }}
                                />
                            </div>
                            <h3 className="text-2xl font-bold">{member.name}</h3>
                            <p className="text-purple-400 font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Engineering Core Reveal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center border-t border-white/10 pt-16 max-w-5xl mx-auto"
                >
                    <h4 className="text-xl font-bold mb-8">Expanding Our Engineering Core</h4>
                    <div className="flex justify-center flex-wrap gap-4">
                        {engineeringMembers.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${member.isRevealed ? 'bg-white/10 border-purple-500/50 scale-105' : 'bg-white/5 border-white/5 opacity-50'}`}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden relative border border-white/10">
                                    {member.isRevealed ? (
                                        <Image
                                            src={member.image || ""}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23222"/></svg>'
                                            }}
                                        />
                                    ) : (
                                        <span className="text-xs text-white/50 italic">?</span>
                                    )}
                                </div>
                                <div className="text-left">
                                    <div className={`text-sm font-bold ${member.isRevealed ? 'text-white' : 'text-white/30 blur-[2px] select-none'}`}>
                                        {member.name}
                                    </div>
                                    <div className={`text-[10px] uppercase tracking-wider font-mono ${member.isRevealed ? 'text-purple-400' : 'text-white/20'}`}>
                                        {member.role}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="mt-8 text-sm text-gray-500">We are expanding our core AI and infrastructure team.</p>
                </motion.div>
            </div>
        </section>
    );
}
