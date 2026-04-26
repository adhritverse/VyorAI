
import { motion } from 'framer-motion';
import { Target, Zap, Globe, Users, Linkedin, ArrowUpRight } from 'lucide-react';
import SharedSections from '../components/SharedSections';
import AnimatedSection from '../components/AnimatedSection';

const values = [
    {
        title: "First Principles",
        description: "We build from the ground up. No wrappers, no shortcuts — just deterministic, reliable AI.",
        icon: Target
    },
    {
        title: "Speed as a Feature",
        description: "Sub-50ms latency isn't a benchmark — it's our baseline. Every millisecond matters.",
        icon: Zap
    },
    {
        title: "Open Ecosystem",
        description: "Our plugin SDK empowers anyone to build, extend, and monetize on top of our platform.",
        icon: Globe
    },
    {
        title: "Radical Ownership",
        description: "Every team member owns their domain end-to-end. Autonomy drives our best work.",
        icon: Users
    }
];

const founders = [
    {
        name: "Hritik Jaiswal",
        role: "FOUNDER & CEO",
        bio: "Visionary leader focused on the intersection of neural networks and autonomous workflows.",
        image: "https://vyor-ai.vercel.app/_next/image?url=%2FFounder.png&w=1920&q=75"
    },
    {
        name: "Rishabh Kushwah",
        role: "CO-FOUNDER",
        bio: "Strategic architect driving the global scaling of Vyor's core intelligence infrastructure.",
        image: "https://vyor-ai.vercel.app/_next/image?url=%2FCo-Founder.png&w=1920&q=75"
    }
];

export default function About() {
    return (
        <div className="min-h-screen bg-white text-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-gray-100 bg-gradient-to-b from-vyor-purple/5 to-white">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vyor-purple/5 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-vyor-purple text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
                            Our Mission
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.1]">
                            Uncompromising <br />
                            <span className="text-gray-400">Intelligence.</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
                            We engineer production-grade infrastructure. No wrappers, no latency spikes, no black-box hallucinations. 
                            Just deterministic, high-performance AI designed for absolute reliability at scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-32 relative z-10 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-4xl font-bold tracking-tight text-black mb-4">Our Core Values</h2>
                        <p className="text-lg text-gray-500">The principles that drive our engineering and culture.</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="group p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-vyor-purple/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white border border-gray-200 text-gray-500 group-hover:bg-vyor-purple group-hover:text-white group-hover:border-vyor-purple transition-colors">
                                        <value.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-black">{value.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-lg">{value.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-32 relative z-10 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="mb-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                            Leadership
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-black">Meet the Founders</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {founders.map((founder, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.2}>
                                <div className="group relative h-full flex flex-col p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-vyor-purple/20 transition-all duration-300 shadow-sm hover:shadow-xl">
                                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-8 relative">
                                        <img 
                                            src={founder.image} 
                                            alt={founder.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-3xl font-bold mb-2 text-black">{founder.name}</h3>
                                        <p className="text-vyor-purple font-bold uppercase tracking-widest text-xs mb-6">{founder.role}</p>
                                        <p className="text-gray-500 leading-relaxed mb-8 flex-grow">{founder.bio}</p>
                                        <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-vyor-purple transition-colors font-bold group/link">
                                            <Linkedin className="w-4 h-4" />
                                            Connect
                                            <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shared Sections */}
            <SharedSections />
        </div>
    );
}
