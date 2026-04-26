import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  MessageSquare, Database, Globe, Shield, Zap, BarChart,
  Mail, Megaphone, Headphones, TrendingUp,
  Wallet, Users, LayoutGrid, ArrowUpRight, ChevronLeft, ChevronRight,
  Bot, MessageCircle, GitBranch, Brain, CreditCard, Cog, Briefcase, BarChart3, Clock,
  Search, FileText, RefreshCw, Award, Puzzle, Eye, Banknote
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { features } from '@/data/features';
import ProductsGrid from '@/components/ProductsGrid';
import { InsightsAndResources, Testimonials, CTABanner } from '@/components/SharedSections';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare, Database, Globe, Shield, Zap, BarChart,
  Mail, Megaphone, Headphones, TrendingUp,
  Wallet, Users, LayoutGrid, Bot, MessageCircle, GitBranch, Brain, CreditCard, Cog, Briefcase, BarChart3
};

const floatingTags = [
  { text: "Autonomous AI", style: "top-[15%] left-[8%] bg-violet-600 text-white", delay: 0 },
  { text: "Workflow", style: "top-[12%] right-[15%] bg-indigo-100 text-indigo-700", delay: 0.5 },
  { text: "AI Workflow", style: "top-[45%] right-[5%] bg-purple-100 text-purple-800", delay: 1 },
  { text: "Autonomous AI", style: "bottom-[25%] right-[8%] bg-blue-100 text-blue-700", delay: 1.5 },
];

const floatingIcons = [
  { icon: MessageSquare, style: "top-[30%] left-[5%] bg-violet-100 text-violet-600 p-2 rounded-xl", delay: 0.3 },
  { icon: Shield, style: "top-[55%] left-[12%] bg-emerald-100 text-emerald-600 p-2 rounded-xl", delay: 0.8 },
  { icon: Zap, style: "bottom-[20%] left-[8%] bg-amber-100 text-amber-600 p-2 rounded-xl", delay: 1.2 },
  { icon: BarChart, style: "top-[35%] right-[3%] bg-blue-100 text-blue-600 p-2 rounded-xl", delay: 0.6 },
];

const partners = ["Google Cloud", "AWS", "Microsoft", "NVIDIA", "Salesforce", "Slack", "Stripe", "HubSpot", "Zendesk"];

const methodSteps = [
  {
    badge: "Discover",
    desc: "Scope outcomes, systems, and policies",
    icon: Search,
    color: "bg-[#fef3c7]",
    y: "mt-0"
  },
  {
    badge: "Simulate Work",
    desc: "Task generators create real-world load safely",
    icon: FileText,
    color: "bg-[#dbeafe]",
    y: "mt-16"
  },
  {
    badge: "Auto-Evals",
    desc: "Quality, compliance & cost gates before scale",
    icon: Zap,
    color: "bg-[#e0e7ff]",
    y: "mt-8"
  },
  {
    badge: "Operate & Improve",
    desc: "The platform shows replays; managers coach in real time",
    icon: RefreshCw,
    color: "bg-[#dcfce7]",
    y: "mt-0"
  },
];

const commandTabs = [
  { num: "01", title: "Bird's-eye Analytics", desc: "Instant view of savings & throughput" },
  { num: "02", title: "Drill-down Replay", desc: "Review every digital employee interaction" },
  { num: "03", title: "Coach in Real Time", desc: "Provide instant feedback and guidance" },
  { num: "04", title: "Policy & Integration Hub", desc: "Centralized control for all configurations" },
];

const HeroGrid = () => {
  const icons = [MessageSquare, Shield, Zap, BarChart, Bot, Brain, Zap, MessageCircle];
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)]">
      <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-12 lg:grid-cols-20 gap-1.5 sm:gap-2 p-1.5 sm:p-2">
        {Array.from({ length: 300 }).map((_, i) => {
          const hasIcon = i % 17 === 0;
          const Icon = icons[i % icons.length];
          return (
            <div 
              key={i} 
              className="aspect-square bg-[#EEEEF0]/50 rounded-lg transition-all duration-500 hover:bg-[#DDE0F7] hover:scale-105 hover:shadow-[0_0_22px_rgba(99,102,241,0.18)] hover:z-10 flex items-center justify-center group/cell"
            >
              {hasIcon && (
                <Icon className="w-4 h-4 text-gray-400 group-hover/cell:text-indigo-500 transition-colors" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Home() {
  const [activeCommandTab, setActiveCommandTab] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <HeroGrid />
        
        {/* Floating Decorative Elements */}
        {floatingTags.map((tag, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.6, delay: tag.delay },
            }}
            className={`absolute px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium shadow-sm z-10 ${tag.style}`}
          >
            {tag.text}
          </motion.div>
        ))}
        {floatingIcons.map((item, i) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={`icon-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.6, delay: item.delay },
              }}
              className={`absolute z-10 ${item.style}`}
            >
              <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          );
        })}

        {/* Avatar Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-[20%] left-[18%] hidden lg:block z-10"
        >
          <img src="https://images.unsplash.com/photo-1742981365880-698cfb84492d?w=200&h=200&auto=format&fit=crop&q=80" alt="" className="w-16 h-16 rounded-xl object-cover shadow-lg rotate-[-6deg]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-[30%] left-[22%] hidden lg:block z-10"
        >
          <img src="https://images.unsplash.com/flagged/photo-1563713076139-d9f44e576124?w=200&h=200&auto=format&fit=crop&q=80" alt="" className="w-14 h-14 rounded-xl object-cover shadow-lg rotate-[4deg]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-[25%] right-[18%] hidden lg:block z-10"
        >
          <img src="https://plus.unsplash.com/premium_photo-1664478244612-d4b3238abd81?w=200&h=200&auto=format&fit=crop&q=80" alt="" className="w-16 h-16 rounded-xl object-cover shadow-lg rotate-[6deg]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto text-black"
          >
            AI That Understands,{" "}
            <span>
              Decides & Executes.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Deploy high-performance autonomous agents and pipelines with millisecond-scale latency. Scale from prototype to production in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
          >
            <Link
              to="/auth"
              className="inline-flex items-center px-7 py-3.5 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-medium bg-white/50 backdrop-blur-sm rounded-full hover:bg-white transition-all"
            >
              <span className="font-mono text-sm">&lt;/&gt;</span>
              Documentation
            </Link>
          </motion.div>

          {/* Stats - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 hidden lg:flex flex-wrap justify-center gap-6 pointer-events-auto"
          >
            {[
              { value: "<50ms", label: "Avg Latency" },
              { value: "99.9%", label: "Uptime" },
              { value: "1M+", label: "API Calls/day" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
                <span className="text-lg font-bold text-black">{stat.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-900 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <p className="text-center text-white/50 text-sm uppercase tracking-wider">
            Our Partners and Recognitions
          </p>
        </div>
        <div className="relative">
          {/* Gradient masks for smooth fade in/out */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Duplicate the list to create a seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-12 sm:gap-20 px-6 sm:px-10">
                {partners.map((partner, i) => (
                  <div key={`${setIndex}-${i}`} className="text-white/40 font-semibold text-lg sm:text-2xl tracking-tight hover:text-white/60 transition-colors">
                    {partner}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Marquee */}
      <section className="bg-white py-10 overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, set) => (
              <div key={set} className="flex items-center gap-8 px-4">
                {["AI Interaction Layer", "Contextual Intelligence", "Real-time Automation", "Sub-50ms Inference", "Neural Workflow SDK", "Virtual Enterprise Studio", "Emotion Analytics Engine"].map((item, i) => (
                  <span key={i} className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid / Intelligence Ecosystem */}
      <ProductsGrid />

      {/* Platform Overview */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-left mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-4">
              Agentic. Multimodal. Real-Time.
            </h2>
            <p className="text-gray-500 text-lg sm:text-xl font-light">
              Text, voice, video, image in & out—grounded in your data
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-0">
            {features.map((feature, i) => {
              const IconComp = iconMap[feature.icon];
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group border-t border-indigo-400/30 py-10 flex justify-between items-start">
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-xl text-black tracking-tight">{feature.title}</h3>
                      <p className="text-gray-500 text-base font-light">{feature.desc}</p>
                    </div>
                    <div className="text-indigo-500/80 mt-1">
                      {IconComp && <IconComp className="w-6 h-6 stroke-[1.5px]" />}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes Section (Dark) */}
      <section className="bg-[#0a0a0a] min-h-[calc(100vh-80px)] flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-[32px] font-bold text-white tracking-tight leading-tight italic">
              Software repeats actions—
              <span className="text-[#c1ff72] inline sm:block">
                AI Agents finish the job.
              </span>
            </h2>
            <p className="mt-8 text-gray-400 text-[20px] max-w-3xl mx-auto leading-relaxed font-light">
              Old tools just automate steps. Our AI agents are smarter: they read, think, and take action for you—then show you exactly how they did it. No hidden fees, no long delays.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Explore Cards / Possible */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="font-bold tracking-tighter leading-[0.85] mb-10">
              <span className="block text-3xl sm:text-4xl text-black mb-2 tracking-tight">Explore what's</span>
              <span className="text-6xl sm:text-7xl lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-vyor-purple via-indigo-500 to-cyan-500">Possible</span>
            </h2>

            <div className="flex gap-3 mb-10">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm">
                <ChevronLeft className="w-5 h-5 text-gray-900" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm">
                <ChevronRight className="w-5 h-5 text-gray-900" />
              </button>
            </div>
          </AnimatedSection>

          <div className="flex gap-6 overflow-x-auto pb-12 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              {
                title: "Customer Support",
                desc: "Resolve post-sales issues across chat, voice & email.",
                bgImage: "https://cdn.zangoh.com/videos/1753785937257_h1.webp",
                avatar: "https://plus.unsplash.com/premium_photo-1664478244612-d4b3238abd81?q=80&w=400&h=400&auto=format&fit=crop",
                accent: "bg-amber-50"
              },
              {
                title: "Sales",
                desc: "Convert inquiries to revenue across chat, voice and web.",
                bgImage: "https://cdn.zangoh.com/videos/1753785952681_h2.webp",
                avatar: "https://images.unsplash.com/photo-1742981365880-698cfb84492d?w=400&h=400&auto=format&fit=crop&q=80",
                accent: "bg-blue-50"
              },
              {
                title: "Coming soon",
                desc: "Intelligent tools for marketing and operations.",
                bgImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
                avatar: "https://images.unsplash.com/flagged/photo-1563713076139-d9f44e576124?w=400&h=400&auto=format&fit=crop&q=80",
                accent: "bg-rose-50"
              },
              {
                title: "Enterprise AI",
                desc: "Custom neural architectures built for your specific needs.",
                bgImage: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800",
                avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200&h=200",
                accent: "bg-violet-50"
              },
            ].map((card, i) => (
              <div key={i} className="flex-none w-[300px] sm:w-[420px]">
                <Link
                  to={card.title === 'Coming soon' ? '#' : `/solutions/${card.title.toLowerCase().replace(' ', '-')}`}
                  className={`flex flex-col h-full group ${card.accent} rounded-[32px] p-3 hover:brightness-95 transition-all duration-300`}
                >
                  <div className="relative shrink-0">
                    <div className="w-full h-[180px] sm:h-[240px] rounded-[24px] overflow-hidden">
                      <img src={card.bgImage} alt={`${card.title} background`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>

                    {/* Avatar */}
                    <img
                      src={card.avatar}
                      alt={`${card.title} expert`}
                      className="absolute -bottom-8 left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-[20px] object-cover border-[4px] border-white transition-colors duration-300 shadow-sm z-10"
                    />

                    {/* Arrow Button */}
                    <div className="absolute -bottom-4 right-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black flex items-center justify-center text-white shadow-lg z-10">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="pt-12 px-3 pb-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-2xl sm:text-[30px] text-gray-900 tracking-tight">{card.title}</h3>
                    {card.desc && <p className="text-[15px] sm:text-base text-gray-600 mt-1 font-medium leading-relaxed">{card.desc}</p>}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Stats Section */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            {/* Top Row */}
            <AnimatedSection delay={0.1} className="md:col-span-5 h-[260px] sm:h-[300px]">
              <div className="bg-[#ebebf5] rounded-[32px] p-8 sm:p-10 h-full flex flex-col justify-center">
                <h2 className="text-[40px] sm:text-[48px] font-bold text-gray-900 leading-[1.05] tracking-tight">
                  Hard<br />Numbers,<br />Quick Wins
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="md:col-span-7 h-[260px] sm:h-[300px]">
              <div className="bg-[#f5f5f5] rounded-[32px] p-8 sm:p-10 h-full flex flex-col justify-between relative overflow-hidden group">
                <h3 className="text-2xl sm:text-[32px] font-medium text-gray-900 leading-tight">
                  Up to 70%<br />cost saved
                </h3>

                {/* Visual Chart Area */}
                <div className="mt-4 flex flex-col gap-4 relative z-10 w-full sm:max-w-md mb-2">
                  {/* Dotted lines background */}
                  <div className="absolute inset-y-0 left-[35%] border-l border-dashed border-gray-300 -z-10 h-[150%] -top-[25%]"></div>
                  <div className="absolute inset-y-0 right-0 border-l border-dashed border-gray-300 -z-10 h-[150%] -top-[25%]"></div>

                  <div className="flex items-center">
                    <span className="w-[35%] text-[13px] text-gray-900 font-medium pr-4">AI Automation</span>
                    <div className="h-6 bg-[#cdd1f7] rounded-r-full w-[35%] transition-all duration-700 group-hover:w-[40%]"></div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-[35%] text-[13px] text-gray-900 font-medium pr-4">Human</span>
                    <div className="h-6 bg-gradient-to-r from-[#cdd1f7] to-[#e7a4a4] rounded-r-full w-full relative transition-all duration-700 group-hover:w-[95%]">
                      <div className="absolute -right-3 sm:-right-8 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-600 bg-[#f5f5f5] pl-2 sm:pl-3">
                        <CreditCard className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bottom Row */}
            <AnimatedSection delay={0.3} className="md:col-span-4 h-[220px] sm:h-[260px]">
              <div className="bg-[#eef5fa] rounded-[32px] p-8 h-full flex flex-col justify-end">
                <div className="mb-auto">
                  <Zap className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-2xl sm:text-[30px] font-medium text-gray-900 leading-tight">
                  3x faster<br />resolutions
                </h3>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="md:col-span-4 h-[220px] sm:h-[260px]">
              <div className="rounded-[32px] overflow-hidden h-full">
                <img
                  src="https://cdn.zangoh.com/videos/1753785764265_blue.webp"
                  alt="Abstract blue visual"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="md:col-span-4 h-[220px] sm:h-[260px]">
              <div className="bg-[#fcf8ec] rounded-[32px] p-8 h-full flex flex-col justify-end">
                <div className="mb-auto">
                  <Clock className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-2xl sm:text-[30px] font-medium text-gray-900 leading-tight">
                  99.9% uptime
                </h3>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Command Centre */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 text-gray-900">
                  Your Command Centre
                </h2>
                <p className="text-[17px] text-gray-500 mb-12">Free with every Automation.</p>

                <div className="space-y-0 border-t border-[#e2e2f6]">
                  {commandTabs.map((tab, i) => {
                    const isActive = activeCommandTab === i;
                    return (
                      <div
                        key={i}
                        onClick={() => setActiveCommandTab(i)}
                        className={`py-5 border-b flex justify-between items-start group cursor-pointer transition-colors ${isActive ? 'border-[#6366f1]' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <div>
                          <h4 className={`text-lg font-semibold transition-colors ${isActive ? 'text-[#4f46e5]' : 'text-gray-900 group-hover:text-[#4f46e5]'}`}>
                            {tab.title}
                          </h4>
                          {isActive && (
                            <p className="text-[15px] text-gray-700 mt-1.5 leading-snug animate-in fade-in slide-in-from-top-2">
                              {tab.desc}
                            </p>
                          )}
                        </div>
                        <span className={`text-[15px] font-semibold mt-0.5 transition-colors ${isActive ? 'text-[#4f46e5]' : 'text-gray-900'}`}>
                          {tab.num}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              {/* Zangoh Style Dashboard Mockup */}
              <div className="relative w-full h-[450px] sm:h-[550px] bg-[#ebebf5] rounded-[40px] overflow-hidden flex items-center justify-center p-8">
                <div className="relative w-full h-full transform -rotate-[8deg] scale-110 sm:scale-100 origin-center transition-transform duration-700 hover:-rotate-[4deg] hover:scale-[1.02]">

                  {/* Top Left Card */}
                  <div className="absolute top-[10%] left-[5%] w-[65%] bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-900/5 z-20">
                    <p className="text-[15px] font-medium text-gray-800 mb-2">Total Tickets</p>
                    <p className="text-[44px] font-bold text-gray-900 leading-none tracking-tight mb-8">312</p>
                    <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                      <p className="text-sm text-gray-400 leading-snug">Increased<br />Queries</p>
                      <div className="flex items-center gap-1 text-[#ef4444] font-semibold text-sm">
                        <span>12%</span>
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Top Right Card */}
                  <div className="absolute top-[20%] right-[-15%] w-[55%] bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-900/5 z-10">
                    <p className="text-[15px] font-medium text-gray-800 mb-2">Avg. Closing Time</p>
                    <p className="text-[40px] font-bold text-gray-900 leading-none tracking-tight">5.8 <span className="text-2xl font-medium text-gray-500">min</span></p>
                  </div>

                  {/* Bottom Left Card */}
                  <div className="absolute top-[60%] left-[0%] w-[60%] bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-900/5 z-30 flex items-center justify-between">
                    <p className="text-[40px] font-bold text-gray-900 leading-none tracking-tight">13</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 bg-[#eafbf0] px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                        <span className="text-[13px] font-medium text-[#166534]">Completed</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#eef5fa] px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                        <span className="text-[13px] font-medium text-[#1e40af]">Queued</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Right Card */}
                  <div className="absolute top-[65%] right-[5%] w-[45%] bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-900/5 z-20">
                    <p className="text-[15px] font-medium text-gray-800 mb-2">Escalations</p>
                    <p className="text-[44px] font-bold text-gray-900 leading-none tracking-tight">18</p>
                  </div>

                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden relative">
        {/* Subtle Background Pattern (Optional to match faint lines in screenshot) */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-24">
            <h2 className="text-4xl sm:text-[44px] font-bold tracking-tight text-gray-900 mb-2">Method, Not Hype</h2>
            <p className="text-[16px] text-gray-500 font-medium">A proven path to agentic ROI</p>
          </AnimatedSection>

          <div className="relative max-w-6xl mx-auto">
            {/* Precise Curved Connecting Lines (SVG) */}
            <div className="hidden lg:block absolute top-0 left-0 w-full h-[200px] pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                {/* 1 to 2 */}
                <path d="M 215,18 C 250,18, 250,82, 285,82" stroke="#9ca3af" strokeWidth="1.5" />
                <circle cx="215" cy="18" r="2.5" fill="white" stroke="#9ca3af" strokeWidth="1.5" />
                <circle cx="285" cy="82" r="2.5" fill="white" stroke="#9ca3af" strokeWidth="1.5" />

                {/* 2 to 3 */}
                <path d="M 465,82 C 500,82, 500,50, 535,50" stroke="#9ca3af" strokeWidth="1.5" />
                <circle cx="465" cy="82" r="2.5" fill="white" stroke="#9ca3af" strokeWidth="1.5" />
                <circle cx="535" cy="50" r="2.5" fill="white" stroke="#9ca3af" strokeWidth="1.5" />

                {/* 3 to 4 */}
                <path d="M 715,50 C 750,50, 750,18, 785,18" stroke="#9ca3af" strokeWidth="1.5" />
                <circle cx="715" cy="50" r="2.5" fill="white" stroke="#9ca3af" strokeWidth="1.5" />
                <circle cx="785" cy="18" r="2.5" fill="white" stroke="#9ca3af" strokeWidth="1.5" />

                {/* Extra decorative lines to match screenshot background */}
                <path d="M 100,120 L 150,120 L 150,150 L 250,150" stroke="#f3f4f6" strokeWidth="2" />
                <path d="M 600,140 L 650,140 L 650,120 L 800,120" stroke="#f3f4f6" strokeWidth="2" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10 pt-4">
              {methodSteps.map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.15} className={`flex flex-col items-center w-full max-w-[260px] mx-auto ${step.y}`}>
                  <div className="relative w-full pt-[18px]">
                    {/* The Pill */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-2.5 rounded-full ${step.color} border-[1.5px] border-black flex items-center justify-center gap-2 w-[88%] z-20 shadow-sm`}>
                      <span className="text-[14px] font-semibold text-black">{step.badge}</span>
                      <step.icon className="w-[15px] h-[15px] text-black" strokeWidth={2.5} />
                    </div>

                    {/* The Card */}
                    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 w-full text-center z-10 pt-10 min-h-[130px] flex items-center justify-center">
                      <p className="text-[13px] text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Central Graphic (Cross + Star) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center pointer-events-none z-0">
            {/* Horizontal Bar */}
            <div className="absolute w-[1000px] h-[200px] bg-gradient-to-r from-transparent via-indigo-200/70 to-transparent rounded-full blur-[80px]"></div>
            {/* Vertical Bar */}
            <div className="absolute h-[800px] w-[200px] bg-gradient-to-b from-transparent via-indigo-200/70 to-transparent rounded-full blur-[80px]"></div>

            {/* Sparkle Icon */}
            <div className="relative z-10 flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 drop-shadow-sm">
                <path d="M10 2L11.5 7.5L17 9L11.5 10.5L10 16L8.5 10.5L3 9L8.5 7.5L10 2Z" fill="currentColor" />
                <path d="M18 4L18.5 6.5L21 7L18.5 7.5L18 10L17.5 7.5L15 7L17.5 6.5L18 4Z" fill="currentColor" />
              </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-32 gap-y-12 relative z-10">
            {[
              { icon: Banknote, title: "Flexible Value Billing", desc: "Outcome or usage based align spend directly to impact." },
              { icon: Award, title: "Enterprise-Grade Control", desc: "ISO-27001 • SOC-2 • GDPR • HIPAA design standards from Day1." },
              { icon: Puzzle, title: "Hybrid Product + Service", desc: "Pre-built Digital Employees plus white-glove fine-tuning— fastest route to production." },
              { icon: Eye, title: "All-in-One Management", desc: "Our Platform—train, monitor, replay and optimise every Employee, including cost oversight, in one console." },
            ].map((feature, i) => {
              const IconComp = feature.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 min-h-[180px] flex flex-col justify-center">
                    <div className="w-10 h-10 bg-[#f8f9fa] rounded-xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
                      <IconComp className="w-[18px] h-[18px] text-gray-700" strokeWidth={2} />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">{feature.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">

          {/* Decorative Laurels */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
            <div className="absolute left-[12%] top-0 w-24 h-24 opacity-80">
              <img src="https://cdn.zangoh.com/videos/1753786334033_left-golden-wing.svg" alt="Left Wing" className="w-full h-full object-contain" />
            </div>
            <div className="absolute right-[12%] top-0 w-24 h-24 opacity-80">
              <img src="https://cdn.zangoh.com/videos/1753786829647_right-golden-wing.svg" alt="Right Wing" className="w-full h-full object-contain" />
            </div>
          </div>

          <AnimatedSection>
            <h2 className="text-[40px] sm:text-[48px] font-bold tracking-tight text-gray-900 mb-4">Compliance, Built-In.</h2>
            <p className="text-[17px] text-gray-500 max-w-2xl mx-auto leading-relaxed mb-2">
              Engineered to the highest security standards—independent audits for ISO-27001 & SOC-2 are underway
            </p>
            <p className="text-[14px] text-gray-400 italic mb-16">Audit in-progress</p>

            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500">
              {/* ISO 27001 */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full border-2 border-blue-600 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <div className="text-[10px] font-bold text-blue-600 leading-none text-center">ISO<br /><span className="text-[14px]">27001</span></div>
                </div>
              </div>

              {/* SOC 2 */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full border-2 border-blue-400 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <div className="text-[9px] font-bold text-blue-400 leading-none text-center italic">AICPA<br /><span className="text-[12px] not-italic">SOC 2</span></div>
                </div>
              </div>

              {/* GDPR */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 bg-indigo-900 rounded-full flex items-center justify-center relative group-hover:scale-110 transition-transform shadow-sm">
                  <div className="text-[9px] font-bold text-white">GDPR</div>
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="absolute w-1 h-1 bg-yellow-400 rounded-full" style={{ transform: `rotate(${i * 30}deg) translateY(-18px)` }}></div>
                  ))}
                </div>
              </div>

              {/* PCI */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-12 bg-white border-2 border-teal-500 rounded-lg flex items-center justify-center p-1 group-hover:scale-110 transition-transform">
                  <span className="text-[16px] font-black text-teal-600 italic tracking-tighter">PCI<span className="text-blue-500">DSS</span></span>
                </div>
              </div>

              {/* HIPAA */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 mb-1">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                      <path d="M12 2L12 22M7 7C7 7 4 9 4 12C4 15 7 17 7 17M17 7C17 7 20 9 20 12C20 15 17 17 17 17M12 6C12 6 9 8 9 12C9 16 12 18 12 18M12 6C12 6 15 8 15 12C15 16 12 18 12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-none">HIPAA</span>
                  <span className="text-[8px] text-gray-400 uppercase tracking-tighter">Compliance</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <InsightsAndResources />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
