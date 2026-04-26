import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { InsightsAndResources, FAQ, Testimonials, CTABanner } from '@/components/SharedSections';
import { automationCategories } from '@/data/automation';

export default function AutomationLibrary() {
  const [search, setSearch] = useState('');

  const filtered = automationCategories.filter(
    (cat) =>
      cat.title.toLowerCase().includes(search.toLowerCase()) ||
      cat.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Automation Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
          >
            12 categories of pre-built automation. Deploy in minutes, customize in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-lg mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search automations..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-500 shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cat, i) => {
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className={`w-12 h-12 ${cat.color} rounded-xl flex items-center justify-center mb-4`}>
                      {/* Using a generic icon since dynamic imports are complex */}
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-1">{cat.desc}</p>
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-gray-400 mb-1">Example:</p>
                      <p className="text-xs text-gray-600">{cat.example}</p>
                    </div>
                    <Link
                      to="/pricing"
                      className="inline-flex items-center gap-1 text-sm font-medium text-black hover:gap-2 transition-all"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No automations found matching "{search}"</p>
            </div>
          )}
        </div>
      </section>
      <InsightsAndResources />
      <FAQ />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
