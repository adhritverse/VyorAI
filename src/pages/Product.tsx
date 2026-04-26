import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { LayoutDashboard, Workflow, LineChart, Shield, Code, Plug } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { InsightsAndResources, FAQ, Testimonials, CTABanner } from '@/components/SharedSections';
// Static bar heights - defined outside component to avoid Math.random() in render
const CHART_BAR_HEIGHTS = [28, 45, 35, 72, 48, 83, 56, 91, 62, 77, 41, 68, 55, 39, 85, 47, 73, 60, 82, 51, 65, 44, 79, 57];

const productFeatures = [
  { icon: LayoutDashboard, title: "Intuitive Dashboard", desc: "Clean, modern interface designed for operators and developers alike." },
  { icon: Workflow, title: "Visual Workflow Builder", desc: "Drag-and-drop automation builder with 50+ pre-built connectors." },
  { icon: LineChart, title: "Real-time Analytics", desc: "Monitor agent performance, costs, and outcomes in real-time." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC-2, GDPR, HIPAA compliant with role-based access control." },
  { icon: Code, title: "Developer API", desc: "RESTful and GraphQL APIs with comprehensive SDK support." },
  { icon: Plug, title: "50+ Integrations", desc: "Connect to your existing stack in minutes, not weeks." },
];

export default function Product() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-vyor-purple/5 to-white pt-32 pb-20 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vyor-purple/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-vyor-purple text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
          >
            The Console
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]"
          >
            See VyorAI in Action
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            A powerful, intuitive dashboard for building, monitoring, and optimizing your AI automations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/auth"
              className="inline-flex items-center px-8 py-4 bg-vyor-purple text-white font-bold rounded-full hover:bg-vyor-violet transition-all shadow-xl shadow-vyor-purple/20"
            >
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="bg-white py-20 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Window chrome */}
              <div className="h-12 bg-gray-50 border-b border-gray-200 flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="ml-4 text-xs font-bold text-gray-400 uppercase tracking-widest">VyorAI Dashboard — Production</div>
              </div>
              <div className="flex bg-gray-50/30">
                {/* Sidebar */}
                <div className="w-20 bg-white border-r border-gray-100 flex flex-col items-center py-6 gap-4 shrink-0">
                  <div className="w-10 h-10 bg-vyor-purple/10 rounded-xl flex items-center justify-center">
                    <LayoutDashboard className="w-5 h-5 text-vyor-purple" />
                  </div>
                  {[{i: Workflow}, {i: LineChart}, {i: Shield}, {i: Code}].map((item, j) => (
                    <div key={j} className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-gray-50 hover:text-vyor-purple text-gray-400 transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                      <item.i className="w-5 h-5" />
                    </div>
                  ))}
                </div>
                {/* Main content */}
                <div className="flex-1 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">Overview</h3>
                    <div className="flex gap-2">
                      <span className="px-4 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold text-xs rounded-full uppercase tracking-wider">All Systems Online</span>
                    </div>
                  </div>
                  {/* KPI Cards */}
                  <div className="grid grid-cols-4 gap-6 mb-8">
                    {[
                      { label: "Active Agents", val: "24", change: "+12%" },
                      { label: "Tasks Today", val: "8,492", change: "+23%" },
                      { label: "Success Rate", val: "98.7%", change: "+2.1%" },
                      { label: "Cost Saved", val: "$12.4K", change: "+18%" },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{kpi.label}</p>
                        <div className="flex items-end gap-3 mt-2">
                          <p className="text-gray-900 text-3xl font-black">{kpi.val}</p>
                          <span className="text-vyor-purple text-sm font-bold mb-1 bg-vyor-purple/5 px-2 py-0.5 rounded">{kpi.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Charts area */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-6">Task Volume (24h)</p>
                      <div className="flex-1 flex items-end gap-1">
                        {CHART_BAR_HEIGHTS.map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-vyor-purple rounded-t-md"
                              style={{ height: `${h}%`, opacity: 0.3 + (i / 50) }}
                            />
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-6">Agent Types</p>
                      <div className="space-y-5">
                        {[
                          { label: "Email", pct: 35, color: "bg-vyor-purple" },
                          { label: "CRM", pct: 28, color: "bg-indigo-400" },
                          { label: "Support", pct: 22, color: "bg-blue-400" },
                          { label: "Sales", pct: 15, color: "bg-gray-300" },
                        ].map((item, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-sm font-bold mb-2">
                              <span className="text-gray-700">{item.label}</span>
                              <span className="text-gray-500">{item.pct}%</span>
                            </div>
                            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                              <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Recent activity */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Recent Automations</p>
                    <div className="space-y-1">
                      {[
                        { task: "Email triage — Customer inquiry", status: "Completed", time: "2m ago" },
                        { task: "Lead scoring update", status: "Running", time: "5m ago" },
                        { task: "Monthly report generation", status: "Queued", time: "12m ago" },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
                          <span className="text-sm font-medium text-gray-800">{row.task}</span>
                          <div className="flex items-center gap-4">
                             <span className={`text-xs px-3 py-1 font-bold rounded-full uppercase tracking-wider ${
                               row.status === 'Completed' ? 'bg-vyor-purple/10 text-vyor-purple' :
                               row.status === 'Running' ? 'bg-amber-50 text-amber-600' :
                               'bg-gray-100 text-gray-500'
                             }`}>
                               {row.status}
                             </span>
                             <span className="text-xs font-medium text-gray-400 w-16 text-right">{row.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Walkthrough */}
      <section className="bg-gray-50 py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Everything You Need</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">A complete platform for AI automation, giving you full observability and control over your digital workforce.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFeatures.map((feature, i) => {
              const IconComp = feature.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-10 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-vyor-purple/20 transition-all duration-300 h-full group">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-vyor-purple/10 transition-colors">
                      <IconComp className="w-7 h-7 text-gray-600 group-hover:text-vyor-purple transition-colors" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
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
