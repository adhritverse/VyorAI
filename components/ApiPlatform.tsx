"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Shield, Zap } from "lucide-react";

export function ApiPlatform() {
    return (
        <section id="api" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            Developer First
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Scale infinitely with <br />our unified API.</h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Integrate the VyorAI suite into your own applications with just a few lines of code. We built our infrastructure to handle enterprise-level workloads efficiently.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Terminal className="w-4 h-4 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">RESTful Endpoints</h3>
                                    <p className="text-sm text-gray-500">Standard, easy-to-use API.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Zap className="w-4 h-4 text-pink-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Low Latency</h3>
                                    <p className="text-sm text-gray-500">Global edge network routing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-transparent border border-purple-500/20 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform capitalize font-black text-6xl select-none">Scale</div>
                            <h3 className="font-bold text-white mb-2 text-xl">First 10 Credits Free</h3>
                            <p className="text-purple-200/60 mb-6 text-base max-w-sm">Start building immediately without any credit card. Professional usage-based pricing starting at <span className="text-white font-bold">$0.05 per 1k requests</span>.</p>
                            <button className="px-8 py-3 bg-white text-black text-sm font-bold rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                                Deploy Now
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="text-xs text-gray-500 font-mono ml-4">api.vyorai.com/v1/generate</div>
                            </div>
                            <div className="p-6 font-mono text-sm overflow-x-auto text-gray-300">
                                <span className="text-purple-400">import</span> &#123; VyorAI &#125; <span className="text-purple-400">from</span> <span className="text-green-400">'@vyorai/sdk'</span>;<br /><br />
                                <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> VyorAI(process.env.VYORAI_API_KEY);<br /><br />
                                <span className="text-gray-500">// Initialize Virtual Studio automation</span><br />
                                <span className="text-purple-400">const</span> response = <span className="text-blue-400">await</span> client.studio.<span className="text-blue-300">virtualTryOn</span>(&#123;<br />
                                &nbsp;&nbsp;modelImage: <span className="text-green-400">'https://user.jpg'</span>,<br />
                                &nbsp;&nbsp;garmentId: <span className="text-green-400">'sku-4929a'</span>,<br />
                                &nbsp;&nbsp;enhance: <span className="text-orange-400">true</span><br />
                                &#125;);<br /><br />
                                console.<span className="text-blue-300">log</span>(response.outputUrl);
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
