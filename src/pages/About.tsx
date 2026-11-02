import { motion } from 'framer-motion';
import { Target, Zap, Globe, Users, Linkedin, ArrowUpRight, GraduationCap, Sparkles } from 'lucide-react';
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
        role: "Founder & CEO, VYORAI",
  
        edu: "PIEMR, Indore",
        bio: "Visionary leader focused on the intersection of neural networks and autonomous workflows, shaping Vyor's core architecture and long-term vision.",
        image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=512",
        linkedin: "https://www.linkedin.com/in/hritik-jaiswal-vyorai/"
    },
    {
        name: "Rishabh Kushwah",
        role: "Co-Founder & CTO, VYORAI",
     
        edu: "PIEMR, Indore",
        bio: "Strategic architect driving the global scaling of Vyor's core intelligence infrastructure, real-time engines, and deep engineering systems.",
        image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=512",
        linkedin: "https://www.linkedin.com/in/rishabh-kushwah-a819b4296/"
    }
];

const leadershipTeam = [
    {
        name: "Akshay Gour",
        role: "Chief Financial Officer (CFO)",
        badge: "Executive",
        edu: "IIM Mumbai",
        bio: "Steering financial strategy, fiscal governance, and capital allocation for sustainable enterprise scale.",
        image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=512",
        linkedin: "#"
    },
    {
        name: "Shikha Goyal",
        role: "Chief Operating Officer (COO), VYORAI",
        badge: "Executive",
        edu: "IIT Madras",
        bio: "Orchestrating operational excellence, cross-functional execution, and global organizational scaling.",
        image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=512",
        linkedin: "#"
    },
    {
        name: "Dr. Dipti Chauhan",
        role: "Technical Advisor, VYORAI",
        badge: "Advisor",
        edu: "",
        bio: "Expert advisor bringing deep technical insights and academic rigor to shape Vyor's research frontier.",
        image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=512",
        linkedin: "https://www.linkedin.com/in/dr-dipti-chauhan-59803434/"
    }
];

export default function About() {
    return (
        <div className="min-h-screen bg-white text-black overflow-hidden font-sans">
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

            {/* Meet the Team - Apple UI/UX Inspired Leadership Section */}
            <section className="py-28 relative z-10 bg-[#fbfbfd] border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="mb-20 text-center">
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-neutral-200/80 text-neutral-600 text-[11px] font-semibold uppercase tracking-wider mb-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                            <Sparkles className="w-3 h-3 text-vyor-purple" />
                            Leadership
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
                            Meet the Team
                        </h2>
                        <p className="text-neutral-500 text-lg max-w-2xl mx-auto font-normal">
                            Visionaries, engineers, and strategists crafting deterministic, high-performance intelligence.
                        </p>
                    </AnimatedSection>

                    {/* UPPER TIER: Founders Spotlight (2 Columns) */}
                    <div className="mb-14">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                                Executive Leadership
                            </span>
                            <div className="h-px bg-neutral-200/80 flex-grow" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {founders.map((member, idx) => (
                                <AnimatedSection key={member.name} delay={idx * 0.15}>
                                    <div className="group relative h-full flex flex-col md:flex-row gap-7 p-7 md:p-8 rounded-[32px] bg-white border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] hover:border-vyor-purple/30 transition-all duration-500 hover:-translate-y-1">
                                        {/* Avatar Container */}
                                        <div className="w-full md:w-44 md:h-44 aspect-square rounded-[24px] overflow-hidden bg-neutral-100 shrink-0 relative ring-1 ring-black/5">
                                            <img 
                                                src={member.image} 
                                                alt={member.name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Info */}
                                        <div className="flex flex-col justify-between flex-grow">
                                            <div>
                                                <div className="flex items-center justify-between gap-2 mb-1.5">
                                                    <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                                                        {member.name}
                                                    </h3>
                                                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-vyor-purple/10 text-vyor-purple">
                                                        {member.badge}
                                                    </span>
                                                </div>
                                                <p className="text-xs font-semibold text-vyor-purple tracking-wide uppercase mb-3">
                                                    {member.role}
                                                </p>
                                                
                                                {member.edu && (
                                                    <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-600 bg-neutral-100/90 px-3 py-1 rounded-full mb-4 border border-neutral-200/60">
                                                        <GraduationCap className="w-3.5 h-3.5 text-vyor-purple" />
                                                        <span>Edu: {member.edu}</span>
                                                    </div>
                                                )}

                                                <p className="text-neutral-500 text-sm leading-relaxed font-normal">
                                                    {member.bio}
                                                </p>
                                            </div>

                                            <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
                                                <a 
                                                    href={member.linkedin} 
                                                    target={member.linkedin !== "#" ? "_blank" : undefined} 
                                                    rel={member.linkedin !== "#" ? "noopener noreferrer" : undefined}
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-all duration-300 group/link"
                                                >
                                                    <Linkedin className="w-3.5 h-3.5" />
                                                    <span>Connect</span>
                                                    <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>

                    {/* LOWER TIER: Rest of Leadership & Advisors (3 Columns) */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                                Leadership & Advisory
                            </span>
                            <div className="h-px bg-neutral-200/80 flex-grow" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {leadershipTeam.map((member, idx) => (
                                <AnimatedSection key={member.name} delay={idx * 0.15}>
                                    <div className="group relative h-full flex flex-col p-7 rounded-[30px] bg-white border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_44px_rgba(0,0,0,0.07)] hover:border-vyor-purple/30 transition-all duration-500 hover:-translate-y-1">
                                        {/* Avatar Container */}
                                        <div className="w-full aspect-[4/3] rounded-[22px] overflow-hidden bg-neutral-100 mb-6 relative ring-1 ring-black/5">
                                            <img 
                                                src={member.image} 
                                                alt={member.name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute top-3 right-3">
                                                <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-700 shadow-sm border border-black/5">
                                                    {member.badge}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="flex flex-col flex-grow">
                                            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-1">
                                                {member.name}
                                            </h3>
                                            <p className="text-xs font-semibold text-vyor-purple tracking-wide uppercase mb-3">
                                                {member.role}
                                            </p>

                                            {member.edu && (
                                                <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-600 bg-neutral-100/90 px-3 py-1 rounded-full mb-3.5 border border-neutral-200/60 w-fit">
                                                    <GraduationCap className="w-3.5 h-3.5 text-vyor-purple" />
                                                    <span>Edu: {member.edu}</span>
                                                </div>
                                            )}

                                            <p className="text-neutral-500 text-sm leading-relaxed font-normal mb-6 flex-grow">
                                                {member.bio}
                                            </p>

                                            <div className="pt-5 border-t border-neutral-100">
                                                <a 
                                                    href={member.linkedin} 
                                                    target={member.linkedin !== "#" ? "_blank" : undefined} 
                                                    rel={member.linkedin !== "#" ? "noopener noreferrer" : undefined}
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-all duration-300 group/link"
                                                >
                                                    <Linkedin className="w-3.5 h-3.5" />
                                                    <span>Connect</span>
                                                    <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Shared Sections */}
            <SharedSections />
        </div>
    );
}
