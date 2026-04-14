"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Linkedin, Instagram } from "lucide-react";

const smoothEase = [0.16, 1, 0.3, 1];

export default function PrivacyPolicyPage() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
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

            {/* Content Section */}
            <section className="pt-20 sm:pt-28 pb-16 sm:pb-20 relative z-10">
                <div className="max-w-[800px] mx-auto px-6">
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
                        Legal
                    </motion.h3>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8"
                    >
                        Privacy Policy
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
                        className="text-neutral-400 font-light"
                    >
                        <p className="mb-8">Last updated: {new Date().toLocaleDateString()}</p>
                        
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                                <p className="leading-relaxed">Welcome to VyorAI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">2. The Data We Collect About You</h2>
                                <p className="leading-relaxed mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-300">
                                    <li><strong className="text-white">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                    <li><strong className="text-white">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                    <li><strong className="text-white">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                                    <li><strong className="text-white">Usage Data</strong> includes information about how you use our website, products and services.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Personal Data</h2>
                                <p className="leading-relaxed mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-300">
                                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                    <li>Where we need to comply with a legal obligation.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                                <p className="leading-relaxed">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
                                <p className="leading-relaxed mb-2">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                                <a href="mailto:privacy@vyorai.com" className="text-vyor-violet hover:text-white transition-colors">privacy@vyorai.com</a>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Back to Home CTA */}
            <section className="pb-20 relative z-10">
                <div className="max-w-[800px] mx-auto px-6">
                    <div className="pt-12 border-t border-white/[0.06]">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] font-medium text-sm transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
