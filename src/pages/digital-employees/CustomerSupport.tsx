import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Globe, Shield, 
  Zap, BarChart3, ArrowUpRight, Play,
  UserCheck, Smartphone, 
  ShoppingBag, Hotel, Stethoscope
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { InsightsAndResources, FAQ, Testimonials, CTABanner } from '@/components/SharedSections';

const capabilities = [
  {
    icon: Zap,
    title: "Calls your systems via secure APIs.",
    description: "Executes actions in real-time by connecting directly to your tech stack."
  },
  {
    icon: Smartphone,
    title: "Omni-channel Support",
    description: "Seamlessly handles chat, email, phone, WhatsApp & SMS."
  },
  {
    icon: Globe,
    title: "95+ Languages",
    description: "Understands and responds to customer intent in nearly any language."
  },
  {
    icon: Shield,
    title: "Grounded & Secure",
    description: "Powered by RAG and strict policy rules for safe, accurate responses."
  },
  {
    icon: UserCheck,
    title: "Human-in-the-loop",
    description: "Automatically routes to human agents when confidence is below threshold."
  },
  {
    icon: MessageSquare,
    title: "Multimodal Processing",
    description: "Handles voice, video, and text; PII redaction built-in."
  }
];

const industries = [
  {
    icon: ShoppingBag,
    name: "Retail",
    image: "/images/retail_dashboard.png",
    accent: "blue",
    solutions: [
      { title: "Order & Return Concierge", desc: "Automates order status, refunds and exchanges 24/7." },
      { title: "Delivery‑Status Chat", desc: "Real-time tracking updates and delivery rescheduling." },
      { title: "Warranty Claim Bot", desc: "Instant warranty verification and claim processing." }
    ]
  },
  {
    icon: Hotel,
    name: "Hospitality",
    image: "/images/hospitality_dashboard.png",
    accent: "indigo",
    solutions: [
      { title: "AI Concierge", desc: "Handles guest FAQs, upgrades and local tips—any language." },
      { title: "Booking & Reservation Desk", desc: "Manages bookings, cancellations and availability queries." },
      { title: "Upsell & Room‑Service Bot", desc: "Suggests upgrades and handles room service orders via chat." }
    ]
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    image: "/images/healthcare_dashboard.png",
    accent: "teal",
    solutions: [
      { title: "Appointment Scheduler", desc: "Books, reschedules and verifies insurance—no hold music." },
      { title: "Pre‑Visit Prep", desc: "Sends instructions and collects patient forms." },
      { title: "Billing Inquiry Bot", desc: "Explains charges, payment plans and insurance coverage." }
    ]
  }
];


export default function CustomerSupport() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6"
              >
                Digital Employee
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.1]"
              >
                Customer <br />Service
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed"
              >
                Resolves tickets across chat, WhatsApp, phone & email—proving savings in real time.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="px-8 py-4 bg-vyor-purple text-white font-bold rounded-full hover:bg-vyor-violet transition-all flex items-center gap-2 group shadow-xl shadow-vyor-purple/20">
                  Live experience
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <button className="px-8 py-4 border border-gray-200 text-black font-bold rounded-full hover:bg-gray-50 transition-all flex items-center gap-2">
                  <Play className="w-4 h-4 fill-current" />
                  Watch Demo
                </button>
              </motion.div>
            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-3xl -rotate-2"></div>
              <div className="relative w-full aspect-square max-w-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-2">
                {/* Mock UI */}
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 bg-vyor-purple rounded-lg flex items-center justify-center text-white font-bold tracking-tighter">V</div>
                    <div>
                      <div className="font-bold text-sm">Vyor AI Agent</div>
                      <div className="text-xs text-vyor-purple font-medium flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-vyor-purple animate-pulse" />
                        Online
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                      Hello! I noticed your order #8429 hasn't shipped yet. Would you like me to check the status or process a refund?
                    </div>
                    <div className="bg-vyor-purple text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-sm shadow-sm">
                      Yes, please check the status first.
                    </div>
                    <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                      One moment... I've accessed the warehouse API. It's scheduled for pickup today. You'll receive a WhatsApp update at 4 PM!
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                    <div className="flex-1 bg-gray-50 h-10 rounded-full border border-gray-200"></div>
                    <div className="w-10 h-10 bg-vyor-purple rounded-full shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Redesigned for High Fidelity */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-32">
            {industries.map((industry, i) => (
              <AnimatedSection key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className={`absolute -inset-4 bg-gradient-to-tr ${
                      industry.accent === 'blue' ? 'from-blue-100 to-cyan-50' : 
                      industry.accent === 'indigo' ? 'from-indigo-100 to-purple-50' : 
                      'from-teal-100 to-emerald-50'
                    } rounded-[40px] opacity-50 group-hover:opacity-100 transition-opacity blur-2xl`} />
                    <div className="relative bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-2xl">
                      <img 
                        src={industry.image} 
                        alt={industry.name} 
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      {/* Dashboard Overlay elements */}
                      <div className="absolute top-6 left-6 flex gap-2">
                        <div className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">Real-time Data</div>
                        <div className="px-3 py-1 bg-green-500/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">Active Agent</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 max-w-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${
                      industry.accent === 'blue' ? 'bg-blue-50 text-blue-600' : 
                      industry.accent === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 
                      'bg-teal-50 text-teal-600'
                    } flex items-center justify-center shadow-inner`}>
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight">{industry.name}</h3>
                  </div>
                  <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                    Purpose-built workflows designed to handle high-volume {industry.name.toLowerCase()} queries with precision and empathy.
                  </p>
                  <div className="grid gap-6">
                    {industry.solutions.map((solution, j) => (
                      <div key={j} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                        <div className={`mt-1 w-2 h-2 rounded-full ${
                          industry.accent === 'blue' ? 'bg-blue-400' : 
                          industry.accent === 'indigo' ? 'bg-indigo-400' : 
                          'bg-teal-400'
                        } group-hover:scale-125 transition-transform`} />
                        <div>
                          <h4 className="text-base font-bold text-black mb-1">{solution.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed">{solution.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight">Capabilities</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 h-full hover:shadow-xl hover:border-vyor-purple/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-vyor-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-vyor-purple transition-colors">
                    <cap.icon className="w-6 h-6 text-vyor-purple group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{cap.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">Integrations</h2>
            <p className="text-gray-500 mb-12">Plug‑ins for CRM, dialer, calendar & more.</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {['Zendesk', 'Salesforce', 'Shopify', 'Slack', 'Intercom', 'HubSpot'].map((brand) => (
                <span key={brand} className="text-xl font-bold tracking-tighter">{brand}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hard Numbers Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <h2 className="text-5xl font-bold tracking-tight mb-8 leading-tight">
                Hard Numbers,<br />Quick Wins
              </h2>
              <div className="space-y-12">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest italic">Up to</span>
                    <span className="text-6xl font-bold">70%</span>
                  </div>
                  <p className="text-xl text-gray-600">cost saved</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        className="h-full bg-vyor-purple rounded-full"
                      />
                    </div>
                    <span className="text-sm font-bold text-vyor-purple">Digital Employee</span>
                  </div>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 w-[30%] rounded-full" />
                    </div>
                    <span className="text-sm font-bold text-gray-400">Human</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <p className="text-4xl font-bold mb-1">3x faster</p>
                    <p className="text-gray-500">resolutions</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-1">99.9%</p>
                    <p className="text-gray-500">uptime</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="relative">
              <div className="aspect-[4/5] bg-gray-50 rounded-[40px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                  alt="Productivity" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Managed in the Platform */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6 text-black">Managed in the Platform</h2>
              <p className="text-gray-500 text-lg mb-8">Included—no extra licence</p>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-vyor-purple/30 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-black">
                    <BarChart3 className="w-5 h-5 text-vyor-purple" />
                    Analytics
                  </h3>
                  <p className="text-gray-500">See conversion funnels and top customer questions in real-time.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-vyor-purple/30 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-black">
                    <Zap className="w-5 h-5 text-vyor-purple" />
                    Coaching
                  </h3>
                  <p className="text-gray-500">Refine AI behavior with one-click feedback loops.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:pl-12">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl aspect-video flex flex-col justify-center items-center">
                 <div className="w-full h-4 bg-gray-100 rounded-full mb-4 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      className="h-full bg-vyor-purple"
                    />
                 </div>
                 <div className="w-full h-4 bg-gray-100 rounded-full mb-4 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      className="h-full bg-indigo-400"
                    />
                 </div>
                 <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      className="h-full bg-violet-400"
                    />
                 </div>
                 <p className="mt-8 text-gray-400 font-mono text-sm uppercase tracking-widest italic">Dashboard Preview</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <InsightsAndResources />
      <FAQ />
      <Testimonials />
      <CTABanner title="Ready to make support<br />70% cheaper?" subtitle="Response within one business day" />
    </div>
  );
}
