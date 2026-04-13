"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export function Footer() {
    return (
        <footer className="relative bg-[#030712] pt-20 sm:pt-32 pb-8 sm:pb-12 overflow-hidden border-t border-white/[0.05]">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-emerald-600/10 blur-[120px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 sm:gap-12 lg:gap-8 mb-16 sm:mb-24"
                >
                    {/* Brand Section - Full width on smallest mobile */}
                    <motion.div variants={itemVariants} className="col-span-2 lg:col-span-1 lg:pr-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 mb-5 sm:mb-8 group"
                        >
                            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-[1px] group-hover:scale-105 transition-transform duration-500">
                                <div className="w-full h-full rounded-xl sm:rounded-2xl bg-[#0A0A0A] border border-white/10 group-hover:border-emerald-500/30 overflow-hidden flex items-center justify-center p-1.5 sm:p-2 transition-colors">
                                    <img
                                        src="/LOGO.png"
                                        alt="VyorAI Logo"
                                        className="w-full h-full object-contain group-hover:brightness-110 transition-all"
                                    />
                                </div>
                            </div>
                            <span className="text-xl sm:text-3xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-500">
                                VyorAI
                            </span>
                        </Link>
                        <p className="text-emerald-100/60 leading-relaxed font-light text-sm sm:text-base lg:text-lg max-w-sm">
                            The global AI infrastructure platform for building intelligent
                            applications and automating complex workflows.
                        </p>
                    </motion.div>

                    {/* Products Links */}
                    <motion.div variants={itemVariants} className="col-span-1">
                        <h3 className="font-bold text-white mb-5 sm:mb-8 uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                            Products
                        </h3>
                        <ul className="flex flex-col gap-3 sm:gap-4">
                            {[
                                "Virtual Try-On",
                                "AI Studio Catalog",
                                "Stress Detection AI",
                                "Omni-Engine",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="group text-emerald-100/50 hover:text-white transition-colors duration-300 font-light text-[13px] sm:text-base"
                                    >
                                        <span className="relative overflow-hidden inline-block">
                                            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                                {item}
                                            </span>
                                            <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-emerald-400">
                                                {item}
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Developers Links */}
                    <motion.div variants={itemVariants} className="col-span-1">
                        <h3 className="font-bold text-white mb-5 sm:mb-8 uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                            Developers
                        </h3>
                        <ul className="flex flex-col gap-3 sm:gap-4">
                            {["API Platform", "Documentation", "SDKs", "Pricing"].map(
                                (item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="group text-emerald-100/50 hover:text-white transition-colors duration-300 font-light text-[13px] sm:text-base"
                                        >
                                            <span className="relative overflow-hidden inline-block">
                                                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                                    {item}
                                                </span>
                                                <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-emerald-400">
                                                    {item}
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                ),
                            )}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div variants={itemVariants} className="col-span-2 sm:col-span-1 lg:col-span-1">
                        <h3 className="font-bold text-white mb-5 sm:mb-8 uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                            Company
                        </h3>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-col gap-3 sm:gap-4">
                            {[
                                { name: "About Us", href: "#about" },
                                { name: "Careers", href: "#careers" },
                                { name: "Contact", href: "#" },
                                { name: "Privacy Policy", href: "#" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group text-emerald-100/50 hover:text-white transition-colors duration-300 font-light text-[13px] sm:text-base"
                                    >
                                        <span className="relative overflow-hidden inline-block">
                                            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                                {item.name}
                                            </span>
                                            <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-emerald-400">
                                                {item.name}
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0"
                >
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500 font-medium text-center sm:text-left">
                        <p>© {new Date().getFullYear()} VyorAI. All rights reserved.</p>
                        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
                        <p className="flex items-center gap-2">
                            Built with <span className="text-emerald-500">♥</span> in <span className="text-white">India</span>
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {[
                            { icon: Github, href: "#", label: "GitHub" },
                            { icon: Twitter, href: "#", label: "Twitter" },
                            {
                                icon: Linkedin,
                                href: "https://www.linkedin.com/company/vyorai/",
                                label: "LinkedIn",
                            },
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                target={social.href.startsWith("http") ? "_blank" : undefined}
                                rel={
                                    social.href.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                aria-label={social.label}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:bg-white/[0.06] hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
                            >
                                <social.icon className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
