"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Linkedin, Instagram } from "lucide-react";

const team = [
    {
        name: "Hritik Jaiswal",
        role: "Founder & CEO",
        image: "/Founder.png",
        bio: "Visionary leader focused on the intersection of neural networks and autonomous workflows.",
        linkedin: "https://www.linkedin.com/company/vyorai/",
    },
    {
        name: "Rishabh Kushwah",
        role: "Co-Founder",
        image: "/Co-Founder.png",
        bio: "Strategic architect driving the global scaling of Vyor's core intelligence infrastructure.",
        linkedin: "https://www.linkedin.com/company/vyorai/",
    },
];

const values = [
    {
        title: "First Principles",
        desc: "We build from the ground up. No wrappers, no shortcuts — just deterministic, reliable AI.",
    },
    {
        title: "Speed as a Feature",
        desc: "Sub-50ms latency isn't a benchmark — it's our baseline. Every millisecond matters.",
    },
    {
        title: "Open Ecosystem",
        desc: "Our plugin SDK empowers anyone to build, extend, and monetize on top of our platform.",
    },
    {
        title: "Radical Ownership",
        desc: "Every team member owns their domain end-to-end. Autonomy drives our best work.",
    },
];

const smoothEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const slideUpBlur = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export default function TeamPage() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacityFade = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0],
    );

    return (
        <main ref={containerRef} className="min-h-screen bg-[#0D1B2A] text-white relative overflow-hidden">
            {/* Background atmosphere */}
            <motion.div
                style={{ y: bgY, opacity: opacityFade }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-vyor-navy/10 via-vyor-purple/5 to-transparent blur-[120px] pointer-events-none rounded-full"
            />

            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0D1B2A]/80 backdrop-blur-2xl">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                            <span className="text-sm hidden sm:inline">Home</span>
                        </Link>
                        <div className="h-5 w-px bg-white/10" />
                        <Link href="/" className="flex items-center gap-2.5">
                            <Image
                                src="/LOGO.png"
                                alt="VyorAI Logo"
                                width={28}
                                height={28}
                                className="rounded-lg"
                            />
                            <span className="font-semibold text-white tracking-tight text-sm sm:text-base">
                                Vyor<span className="text-vyor-violet">AI</span>
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                            {[
                                {
                                    icon: Linkedin,
                                    href: "https://www.linkedin.com/company/vyorai/",
                                    label: "LinkedIn",
                                },
                                {
                                    icon: Instagram,
                                    href: "https://www.instagram.com/vyor.ai?igsh=bmhvdmZveGhub2Qw",
                                    label: "Instagram",
                                },
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-400 hover:text-vyor-violet hover:border-vyor-purple/30 transition-all duration-300"
                                >
                                    <social.icon className="w-3.5 h-3.5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero / Mission Statement */}
            <section className="pt-20 sm:pt-28 pb-16 sm:pb-20 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "3rem" }}
                        className="h-[1px] bg-vyor-purple mb-6"
                    />

                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-vyor-purple font-bold tracking-[0.2em] uppercase text-xs mb-4"
                    >
                        Our Mission
                    </motion.h3>

                    <motion.h1
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] max-w-2xl mb-8"
                    >
                        <motion.span variants={slideUpBlur} className="block text-white">
                            Uncompromising
                        </motion.span>
                        <motion.span variants={slideUpBlur} className="block text-neutral-400">
                            Intelligence.
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
                        className="text-base sm:text-lg lg:text-xl text-neutral-400 font-light leading-relaxed max-w-xl"
                    >
                        We engineer production-grade infrastructure. No wrappers, no
                        latency spikes, no black-box hallucinations. Just deterministic,
                        high-performance AI designed for absolute reliability at scale.
                    </motion.p>
                </div>
            </section>

            {/* Core Values Grid */}
            <section className="pb-20 sm:pb-28 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 bg-vyor-purple" />
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-vyor-violet">
                                What We Believe
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                            Our Core Values
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group p-6 sm:p-8 rounded-2xl bg-[#0F1A2E] border border-white/[0.06] hover:border-vyor-purple/20 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-vyor-purple/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-vyor-violet transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                        {value.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="pb-20 sm:pb-28 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 bg-vyor-purple" />
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-vyor-violet">
                                Leadership
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                            Meet the Founders
                        </h2>
                    </motion.div>

                    <div className="flex flex-col gap-6 lg:gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: i * 0.1,
                                }}
                                className="group relative"
                            >
                                {/* Premium Glow effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-vyor-purple/20 via-transparent to-vyor-indigo/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative h-full flex flex-col sm:flex-row gap-6 p-6 lg:p-8 rounded-[2rem] bg-[#0F1A2E] border border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl shadow-black/50 overflow-hidden">
                                    {/* Inside card subtle gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                                    <div className="w-full sm:w-48 h-64 sm:h-48 shrink-0 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-[#0D1B2A] border border-white/10 group-hover:border-vyor-purple/30 transition-colors relative z-10 group-hover:shadow-[0_0_40px_-10px_rgba(124,92,252,0.4)]">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out filter grayscale group-hover:grayscale-0"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src =
                                                    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23111"/></svg>';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                                    </div>

                                    <div className="flex flex-col flex-grow justify-center relative z-10">
                                        <h3 className="text-2xl lg:text-3xl font-black text-white mb-1 group-hover:text-vyor-violet transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-vyor-violet font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs mb-4">
                                            {member.role}
                                        </p>
                                        <p className="text-neutral-400 leading-relaxed font-light text-base md:text-md mb-4">
                                            {member.bio}
                                        </p>
                                        {member.linkedin && (
                                            <Link
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-vyor-violet hover:text-white transition-colors"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                                <span className="font-medium">Connect</span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recruitment / Careers Banner */}
            <section id="careers" className="pb-20 sm:pb-28 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: smoothEase }}
                    >
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full border border-white/[0.06] bg-[#0D1729] group hover:border-vyor-purple/20 transition-all duration-700 shadow-2xl">
                            {/* Animated gradient top border */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-vyor-purple/60 to-transparent" />

                            {/* Ambient background glow */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vyor-purple/[0.04] blur-[100px] rounded-full pointer-events-none group-hover:bg-vyor-purple/[0.08] transition-all duration-1000" />
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-vyor-purple/[0.03] blur-[80px] rounded-full pointer-events-none" />

                            <div className="relative p-5 sm:p-8 md:p-12 z-10">
                                <div className="flex items-center justify-between mb-6 sm:mb-8">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="h-px w-5 sm:w-8 bg-vyor-purple" />
                                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-vyor-violet">
                                            Careers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 bg-vyor-purple/10 border border-vyor-purple/20 rounded-full px-2.5 sm:px-3 py-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-vyor-violet animate-pulse shadow-[0_0_6px_rgba(124,92,252,0.8)]" />
                                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-vyor-violet">
                                            Actively Hiring
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
                                    <div className="flex-1">
                                        <h4 className="text-xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
                                            Build the future of{" "}
                                            <br className="hidden sm:block" />
                                            <span className="text-neutral-400">
                                                enterprise intelligence.
                                            </span>
                                        </h4>
                                        <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-lg mb-5 sm:mb-6">
                                            Join a team of world-class engineers, researchers,
                                            and designers pushing the boundaries of autonomous AI
                                            systems.
                                        </p>

                                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                            {[
                                                "ML Engineer",
                                                "Backend (Go)",
                                                "Full-Stack",
                                                "DevRel",
                                                "Design",
                                            ].map((role) => (
                                                <span
                                                    key={role}
                                                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide hover:border-vyor-purple/30 hover:text-vyor-violet transition-all duration-300 cursor-default"
                                                >
                                                    {role}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="group/btn flex-shrink-0 flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-black font-bold text-sm sm:text-base hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] w-full md:w-auto">
                                        View Open Roles
                                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Back to Home CTA */}
            <section className="pb-20 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] font-medium text-sm transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}
