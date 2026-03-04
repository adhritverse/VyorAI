"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Products", href: "#products" },
        { name: "API Platform", href: "#api" },
        { name: "Documentation", href: "#docs" },
        { name: "About", href: "#about" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                ? "py-4 bg-[#0B0F19]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-white to-neutral-200 overflow-hidden flex items-center justify-center p-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                        <img src="/LOGO.png" alt="VyorAI Logo" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter text-white leading-none">VyorAI</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-bold text-neutral-400 hover:text-white transition-colors group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="h-4 w-px bg-white/10 mx-2"></div>

                    <div className="flex items-center gap-6">
                        <button className="text-sm font-bold text-neutral-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                            <Terminal className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Log In
                        </button>
                        <button className="relative px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_25px_-5px_rgba(255,255,255,0.3)]">
                            Get Access
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="lg:hidden absolute top-full left-0 w-full p-6 bg-[#0B0F19]/95 backdrop-blur-3xl border-b border-white/10 flex flex-col gap-6 shadow-2xl"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-bold text-neutral-400 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <button className="py-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white font-bold">Log In</button>
                        <button className="py-4 rounded-2xl bg-white text-black font-bold">Get Started</button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
