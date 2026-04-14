"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Book,
    Code2,
    Terminal,
    Zap,
    ArrowLeft,
    Lock,
    Rocket,
    Layers,
    GitBranch,
    Shield,
    Cpu,
    Globe,
} from "lucide-react";

const sidebarSections = [
    {
        title: "Getting Started",
        icon: Rocket,
        items: ["Introduction", "Quick Start", "Installation", "Authentication"],
    },
    {
        title: "Core Concepts",
        icon: Layers,
        items: ["Architecture", "Models & Pipelines", "Plugins", "Webhooks"],
    },
    {
        title: "API Reference",
        icon: Code2,
        items: ["REST API", "GraphQL API", "SDK Methods", "Error Codes"],
    },
    {
        title: "Guides",
        icon: GitBranch,
        items: ["Virtual Try-On", "Stress Detection", "Custom Plugins", "Deployment"],
    },
    {
        title: "Security",
        icon: Shield,
        items: ["API Keys", "Rate Limiting", "Data Privacy", "Compliance"],
    },
];

const docContent = {
    gettingStarted: {
        title: "Getting Started with Vyor AI",
        description:
            "Welcome to the Vyor AI documentation. This guide will help you integrate our powerful AI capabilities into your applications within minutes.",
    },
    codeExample: `import { Vyor } from '@vyor/sdk';

// Initialize the client
const vyor = new Vyor({
  apiKey: process.env.VYOR_API_KEY,
  region: 'ap-south-1',
});

// Run a vision model
const result = await vyor.run({
  model: 'vision-v2',
  input: imageBuffer,
  options: {
    confidence: 0.95,
    format: 'json',
  },
});

console.log(result.predictions);`,
    features: [
        {
            icon: Zap,
            title: "Sub-50ms Latency",
            desc: "Edge-optimized inference with global CDN distribution.",
        },
        {
            icon: Cpu,
            title: "Multi-Model Support",
            desc: "Access vision, NLP, and generative models through a unified API.",
        },
        {
            icon: Globe,
            title: "Global Edge Network",
            desc: "Deploy models to 30+ edge locations worldwide.",
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            desc: "SOC 2 Type II compliant with end-to-end encryption.",
        },
    ],
};

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-[#0D1B2A] text-white">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0D1B2A]/80 backdrop-blur-2xl">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                            <span className="text-sm hidden sm:inline">Back</span>
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
                        <div className="h-5 w-px bg-white/10 hidden sm:block" />
                        <div className="flex items-center gap-1.5 hidden sm:flex">
                            <Book className="w-4 h-4 text-vyor-violet" />
                            <span className="text-sm font-medium text-neutral-200">
                                Documentation
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-1.5">
                            <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                            <span className="text-xs text-neutral-500 font-mono">
                                Search docs...
                            </span>
                            <kbd className="text-[10px] bg-white/[0.06] border border-white/10 rounded px-1.5 py-0.5 text-neutral-500 ml-6 font-mono">
                                ⌘K
                            </kbd>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-vyor-violet font-bold bg-vyor-purple/15 border border-vyor-purple/20 rounded-full px-3 py-1">
                            v0.1 Beta
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Layout: Sidebar + Content */}
            <div className="max-w-[1400px] mx-auto flex relative">
                {/* Sidebar — visible & crisp */}
                <aside className="hidden lg:block w-[260px] shrink-0 border-r border-white/[0.06] sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4">
                    <nav className="space-y-6">
                        {sidebarSections.map((section, sIdx) => (
                            <div key={sIdx}>
                                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 font-bold mb-3 px-2">
                                    <section.icon className="w-3.5 h-3.5 text-vyor-purple" />
                                    {section.title}
                                </div>
                                <ul className="space-y-0.5">
                                    {section.items.map((item, iIdx) => (
                                        <li key={iIdx}>
                                            <button
                                                className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                                                    sIdx === 0 && iIdx === 0
                                                        ? "bg-vyor-purple/15 text-vyor-violet border border-vyor-purple/20 font-medium"
                                                        : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                                                }`}
                                            >
                                                {item}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Documentation Content — blurred with overlay lock */}
                <main className="flex-1 min-w-0 relative">
                    {/* Actual blurred content underneath */}
                    <div className="p-6 sm:p-8 lg:p-12 select-none filter blur-[6px] pointer-events-none">
                        {/* Hero / Intro */}
                        <div className="mb-12">
                            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-vyor-violet mb-4">
                                <div className="h-px w-6 bg-vyor-purple" />
                                Getting Started
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                                {docContent.gettingStarted.title}
                            </h1>
                            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                                {docContent.gettingStarted.description}
                            </p>
                        </div>

                        {/* Feature cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {docContent.features.map((f, i) => (
                                <div
                                    key={i}
                                    className="p-5 rounded-xl bg-[#0F1A2E] border border-white/[0.06]"
                                >
                                    <f.icon className="w-5 h-5 text-vyor-violet mb-3" />
                                    <h3 className="font-semibold text-white mb-1">
                                        {f.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400">{f.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Code block */}
                        <div className="mb-12">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4">
                                Quick Start
                            </h2>
                            <p className="text-neutral-400 mb-6 max-w-xl">
                                Install the SDK and make your first API call in under 60
                                seconds.
                            </p>
                            <div className="rounded-xl bg-[#0B1525] border border-white/[0.08] overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                    </div>
                                    <span className="text-[11px] text-neutral-500 font-mono">
                                        index.ts
                                    </span>
                                </div>
                                <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto text-neutral-300">
                                    <code>{docContent.codeExample}</code>
                                </pre>
                            </div>
                        </div>

                        {/* More placeholder sections */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xl font-bold mb-3">
                                    API Reference
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        "POST /v1/run",
                                        "GET /v1/models",
                                        "POST /v1/plugins/deploy",
                                        "GET /v1/status",
                                    ].map((endpoint, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 p-4 rounded-lg bg-[#0F1A2E] border border-white/[0.06]"
                                        >
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-vyor-purple/20 text-vyor-violet px-2 py-0.5 rounded">
                                                {endpoint.split(" ")[0]}
                                            </span>
                                            <code className="text-sm text-neutral-300 font-mono">
                                                {endpoint.split(" ")[1]}
                                            </code>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold mb-3">
                                    Authentication
                                </h2>
                                <p className="text-neutral-400 text-sm leading-relaxed max-w-xl mb-4">
                                    All API requests require authentication via API keys.
                                    Include your key in the Authorization header as a
                                    Bearer token.
                                </p>
                                <div className="p-4 rounded-lg bg-[#0B1525] border border-white/[0.06] font-mono text-sm text-neutral-400">
                                    Authorization: Bearer vy_sk_xxxxxxxxxxxxx
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lock Overlay — centered on the content */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        {/* Gradient backdrop for contrast */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/30 via-[#0D1B2A]/60 to-[#0D1B2A]/90 pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                            className="relative text-center px-6 max-w-lg"
                        >
                            {/* Lock icon with glow ring */}
                            <div className="relative mx-auto w-20 h-20 mb-8">
                                <div className="absolute inset-0 bg-vyor-purple/20 rounded-full blur-xl animate-pulse" />
                                <div className="relative w-full h-full rounded-full bg-[#0F1A2E] border border-vyor-purple/30 flex items-center justify-center shadow-[0_0_40px_rgba(124,92,252,0.2)]">
                                    <Lock className="w-8 h-8 text-vyor-violet" />
                                </div>
                                {/* Orbiting ring */}
                                <motion.div
                                    className="absolute -inset-3 rounded-full border border-vyor-purple/20"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-vyor-violet rounded-full shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                                </motion.div>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                                Documentation Coming Soon
                            </h2>
                            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
                                Our comprehensive API documentation, SDKs, and developer
                                guides are being finalized. Join the waitlist to get early
                                access.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Link
                                    href="/#products"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-vyor-purple to-vyor-indigo text-white font-semibold text-sm shadow-[0_0_25px_rgba(124,92,252,0.4)] hover:shadow-[0_0_35px_rgba(124,92,252,0.6)] hover:scale-[1.02] transition-all duration-300"
                                >
                                    <Rocket className="w-4 h-4" />
                                    Explore Products
                                </Link>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] font-medium text-sm transition-all duration-300"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Home
                                </Link>
                            </div>

                            {/* Status indicator */}
                            <div className="mt-8 flex items-center justify-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vyor-violet opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-vyor-violet"></span>
                                </span>
                                <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
                                    In Active Development
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
}
