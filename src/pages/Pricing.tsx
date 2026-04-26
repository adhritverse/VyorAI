import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { InsightsAndResources, FAQ, Testimonials, CTABanner } from '@/components/SharedSections';
import { pricingTiers, comparisonFeatures } from '@/data/pricing';

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-gray-50 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Start free, scale as you grow. No hidden fees, no long-term contracts.
          </motion.p>
        </div>
      </section>

      {/* Toggle */}
      <section className="bg-white pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${!yearly ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${yearly ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
                }`}
            >
              Yearly
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`relative rounded-3xl p-8 h-full flex flex-col ${tier.highlighted
                    ? 'bg-black text-white border-2 border-black shadow-xl'
                    : 'bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
                  }`}>
                  {tier.badge && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium rounded-full ${tier.highlighted ? 'bg-white text-black' : 'bg-gray-100 text-gray-800'
                      }`}>
                      {tier.badge}
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    <p className={`text-sm mt-1 ${tier.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    {tier.priceMonthly === null ? (
                      <span className="text-4xl font-bold">Custom</span>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">
                          ${yearly ? tier.priceYearly : tier.priceMonthly}
                        </span>
                        <span className={`text-sm ${tier.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                          /mo
                        </span>
                      </div>
                    )}
                    {yearly && tier.priceYearly !== null && tier.priceYearly !== tier.priceMonthly && (
                      <p className={`text-xs mt-1 line-through ${tier.highlighted ? 'text-gray-500' : 'text-gray-400'}`}>
                        ${tier.priceMonthly}/mo
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-white' : 'text-black'}`} />
                        <span className={tier.highlighted ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/auth"
                    className={`block w-full text-center py-3 rounded-full font-medium text-sm transition-all hover:scale-105 active:scale-95 ${tier.highlighted
                        ? 'bg-white text-black'
                        : 'bg-black text-white hover:bg-gray-800'
                      }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Full Feature Comparison</h2>
          </AnimatedSection>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-black">Growth</th>
                  <th className="text-center py-4 px-4 font-semibold">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="py-4 px-4 font-medium">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.starter === 'boolean'
                        ? feature.starter
                          ? <Check className="w-5 h-5 text-black mx-auto" />
                          : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        : <span className="text-gray-600">{feature.starter}</span>
                      }
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.growth === 'boolean'
                        ? feature.growth
                          ? <Check className="w-5 h-5 text-black mx-auto" />
                          : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        : <span className="text-gray-600">{feature.growth}</span>
                      }
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.pro === 'boolean'
                        ? feature.pro
                          ? <Check className="w-5 h-5 text-black mx-auto" />
                          : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        : <span className="text-gray-600">{feature.pro}</span>
                      }
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.enterprise === 'boolean'
                        ? feature.enterprise
                          ? <Check className="w-5 h-5 text-black mx-auto" />
                          : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        : <span className="text-gray-600">{feature.enterprise}</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <InsightsAndResources />
      <FAQ />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
