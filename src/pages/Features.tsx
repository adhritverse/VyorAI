import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Mail, Megaphone, Users, Brain, ArrowRight, Zap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { InsightsAndResources, FAQ, Testimonials, CTABanner } from '@/components/SharedSections';

const featureBlocks = [
  {
    icon: Mail,
    title: "Email Automation",
    description: "AI agents that read, classify, draft, and send emails autonomously. Connected to your CRM, support desk, and calendar.",
    example: "A support ticket arrives → AI reads it → Checks order history → Drafts personalized response → Sends with manager approval",
    color: "bg-gradient-to-br from-violet-600 to-indigo-600",
    lightColor: "bg-violet-50",
    reverse: false,
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Autonomous campaign management — from audience segmentation to content generation to performance analysis.",
    example: "AI monitors engagement → Adjusts send times → A/B tests subject lines → Reports ROI in real-time",
    color: "bg-gradient-to-br from-fuchsia-600 to-pink-600",
    lightColor: "bg-fuchsia-50",
    reverse: true,
  },
  {
    icon: Users,
    title: "CRM Automation",
    description: "Intelligent CRM agents that update records, predict churn, and trigger workflows based on customer behavior.",
    example: "Customer visits pricing page 3x → AI updates lead score → Triggers sales notification → Schedules follow-up",
    color: "bg-gradient-to-br from-blue-600 to-cyan-600",
    lightColor: "bg-blue-50",
    reverse: false,
  },
  {
    icon: Brain,
    title: "Autonomous AI Agents",
    description: "General-purpose agents that can be trained on any workflow. They read documents, make decisions, and execute actions.",
    example: "Agent receives: 'Prepare Q3 report from Salesforce data' → Queries API → Generates charts → Emails stakeholders",
    color: "bg-gradient-to-br from-emerald-600 to-teal-600",
    lightColor: "bg-emerald-50",
    reverse: true,
  },
];

const integrations = [
  "Slack", "Salesforce", "HubSpot", "Gmail", "Zapier", "Notion",
  "Stripe", "Twilio", "Zendesk", "Shopify", "GitHub", "Jira",
];

export default function Features() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto"
          >
            Powerful AI Automation for Every Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto"
          >
            From email workflows to intelligent CRM agents — deploy autonomous AI that reads, reasons, and acts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <Link
              to="/automation-library"
              className="inline-flex items-center px-7 py-3.5 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105"
            >
              Explore Automation Library <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Deep Dives */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {featureBlocks.map((block, i) => {
              const IconComp = block.icon;
              return (
                <AnimatedSection key={i}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${block.reverse ? 'lg:direction-rtl' : ''}`}>
                    <div className={block.reverse ? 'lg:order-2' : ''}>
                      <div className={`w-14 h-14 ${block.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <IconComp className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight mb-4">{block.title}</h2>
                      <p className="text-gray-500 text-lg leading-relaxed mb-6">{block.description}</p>
                      <div className={`${block.lightColor} rounded-xl p-5 border border-gray-100`}>
                        <p className="text-sm font-medium text-gray-900 mb-1">Real-world example:</p>
                        <p className="text-sm text-gray-600">{block.example}</p>
                      </div>
                    </div>
                    <div className={block.reverse ? 'lg:order-1' : ''}>
                      {/* Dashboard Mockup */}
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                        <div className={`h-2 ${block.color}`} />
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-6">
                            <div className={`w-10 h-10 ${block.color} rounded-lg flex items-center justify-center`}>
                              <IconComp className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">{block.title}</h4>
                              <p className="text-xs text-gray-400">Live Dashboard</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs text-gray-400">Active</p>
                              <p className="text-xl font-bold">142</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs text-gray-400">Completed</p>
                              <p className="text-xl font-bold">8.2K</p>
                            </div>
                          </div>
                          <div className="h-24 bg-gray-50 rounded-lg flex items-end px-3 pb-3 gap-1">
                            {[30, 50, 35, 70, 45, 80, 55, 90, 60, 75].map((h, j) => (
                              <div key={j} className="flex-1 bg-black rounded-t-sm" style={{ height: `${h}%`, opacity: 0.1 + (j / 15) }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Connects to Everything You Use</h2>
            <p className="mt-4 text-gray-500">50+ integrations ready to go</p>
          </AnimatedSection>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {integrations.map((name, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-4 border border-gray-100 text-center hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-xs font-medium text-gray-600">{name}</p>
                </div>
              </AnimatedSection>
            ))}
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
