import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Network, Layers, Cpu, Globe, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SharedSections from '@/components/SharedSections';
import InfinityDemo, { SCENARIOS } from '@/components/InfinityDemo';

export default function Infinity() {
  return (
    <div className="bg-white">
      {/* ── SECTION 1: Flagship Hero (Audio & Wireless Tech) ── */}
      <section className="relative pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-hidden border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* 1. Header & Title Block */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-50 text-vyor-violet text-xs font-bold uppercase tracking-wider mb-5 border border-violet-100"
            >
              <Network className="w-3.5 h-3.5" />
              Plugin SDK
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.08]"
            >
              Infinity{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
                Architecture.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Develop, train, and deploy custom neural architectures directly into our ecosystem. A powerful SDK built for infinite scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/auth"
                className="px-8 py-4 bg-vyor-purple text-white font-bold rounded-full hover:bg-vyor-violet transition-all flex items-center gap-2 group shadow-xl shadow-vyor-purple/20 hover:scale-105"
              >
                Get API Keys
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all flex items-center gap-2"
              >
                Read Documentation
              </Link>
            </motion.div>
          </div>

          {/* Section 1 Showcase: Audio & Gadgets (bot 1) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-6xl mx-auto relative"
          >
            <div className="relative w-full bg-transparent">
              <InfinityDemo videoSrc="/sec1_bot.mp4" scenario={SCENARIOS.juice} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: Fashion Showcase ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-6xl mx-auto relative">
            <div className="relative w-full bg-transparent">
              <InfinityDemo videoSrc="/sec2_fashion_bot.mp4" scenario={SCENARIOS.fashion} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 3: Smart Gadgets Showcase ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-6xl mx-auto relative">
            <div className="relative w-full bg-transparent">
              <InfinityDemo videoSrc="/sec3_gadgets_bot.mp4" scenario={SCENARIOS.gadgets} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Core Capabilities ── */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Built for the Ecosystem</h2>
            <p className="text-lg text-gray-500">Everything you need to build next-generation AI plugins that seamlessly integrate into any platform.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Access Multi-Modal Models Natively",
                desc: "Hook directly into text, vision, and voice models without managing complex inference infrastructure.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Cpu,
                title: "Auto-Scaling Infrastructure",
                desc: "Built for infinite scale. From zero to millions of requests seamlessly without provisioning servers.",
                color: "text-vyor-violet",
                bg: "bg-violet-50"
              },
              {
                icon: Globe,
                title: "Monetize & Distribute",
                desc: "Deploy your plugin to our global community network. Monetize your architectures with built-in billing.",
                color: "text-emerald-600",
                bg: "bg-emerald-50"
              }
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[32px] border border-gray-100 h-full hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shared Sections (FAQ, CTA, Footer) ── */}
      <SharedSections />
    </div>
  );
}
