
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Network, Layers, Sparkles, Cpu, Globe, Zap, Search, ShoppingBag, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SharedSections from '@/components/SharedSections';
import InfinityDemo from '@/components/InfinityDemo';

export default function Infinity() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vyor-purple/5 blur-[120px] rounded-full mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-vyor-violet text-xs font-bold uppercase tracking-wider mb-6"
              >
                <Network className="w-3.5 h-3.5" />
                Plugin SDK
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]"
              >
                Infinity <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vyor-purple to-indigo-600">
                  Architecture.
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed"
              >
                Develop, train, and deploy custom neural architectures directly into our ecosystem. A powerful SDK built for infinite scale.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/auth" className="px-8 py-4 bg-vyor-purple text-white font-bold rounded-full hover:bg-vyor-violet transition-all flex items-center gap-2 group shadow-xl shadow-vyor-purple/20">
                  Get API Keys
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-8 py-4 border border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all flex items-center gap-2">
                  Read Documentation
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-50 to-indigo-50 rounded-[40px] -rotate-3" />
              <div className="relative w-full aspect-[4/3] bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden transform rotate-2">
                <InfinityDemo />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-32 bg-gray-50">
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

      {/* Shopping App SDK Use Case */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-100 to-orange-50 rounded-[40px] opacity-50 blur-2xl" />
              <div className="relative bg-white rounded-[32px] border border-gray-100 shadow-2xl overflow-hidden aspect-square flex flex-col">
                <div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div className="mx-auto px-4 py-1 bg-white border border-gray-200 rounded-md text-[10px] text-gray-500 font-mono">
                    shop.example.com
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col bg-gray-50/50">
                  <div className="flex justify-between items-center mb-8">
                    <div className="font-bold text-xl tracking-tighter">LUXE.</div>
                    <div className="flex gap-4">
                      <Search className="w-5 h-5 text-gray-400" />
                      <ShoppingBag className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Plugin SDK overlay demo */}
                  <div className="flex-1 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col relative">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2 py-1 bg-vyor-purple text-white text-[9px] font-bold uppercase tracking-wider rounded">Infinity Plugin</span>
                    </div>
                    <div className="p-6 border-b border-gray-100 flex-1">
                       <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-4">Discover</p>
                       <div className="space-y-4">
                         <div className="bg-gray-50 rounded-xl p-4 text-sm font-medium text-gray-700">
                           "Find me a waterproof jacket under $200 for my hiking trip."
                         </div>
                         <div className="flex gap-3 items-start">
                           <Sparkles className="w-4 h-4 text-vyor-violet mt-1" />
                           <div className="bg-violet-50 rounded-xl p-4 text-sm text-vyor-violet font-medium">
                             Found 2 perfect matches using native intent resolution. They are automatically added to your comparison view.
                           </div>
                         </div>
                       </div>
                    </div>
                    <div className="p-4 bg-gray-50 flex items-center gap-3">
                      <div className="flex-1 h-10 bg-white border border-gray-200 rounded-lg flex items-center px-4">
                        <span className="text-gray-400 text-sm">Type to find what you want...</span>
                      </div>
                      <div className="w-10 h-10 bg-vyor-purple rounded-lg flex items-center justify-center text-white">
                        <Zap className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-wider mb-6">
                Use Case
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Save time.<br />Eliminate clicks.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Embed the Infinity SDK directly into your shopping app or platform. Users can simply type what they want, and the plugin translates natural intent into instant navigation and product discovery.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Drop-in UI components for React and Vue",
                  "Zero latency intent mapping",
                  "Automatic product catalog indexing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-semibold text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SharedSections />
    </div>
  );
}
