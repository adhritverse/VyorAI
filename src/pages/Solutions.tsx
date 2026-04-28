import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  XCircle, BarChart3, Zap, ShieldCheck,
  Target, Crosshair, Filter, MessageSquare, Play, ArrowUpRight,
  Rocket
} from 'lucide-react';
import SharedSections from '../components/SharedSections';
import { Link } from 'react-router';

const segments = [
  {
    id: "inbound",
    title: "Inbound Triage",
    icon: Filter,
    color: "#7C5CFC", // vyor-purple
    bg: "bg-vyor-purple/5",
    gradient: "from-vyor-purple to-vyor-violet",
    description: "Instantly engage, qualify, and route incoming website leads.",
    problem: "Leads go cold waiting for a human rep to respond, dropping conversion rates.",
    solution: "AI engages instantly, asks BANT qualifying questions, and books meetings on the spot.",
    outcome: ["Sub-second response time", "3x lead conversion", "No unqualified meetings"],
    mockup: {
      stat1: "98%",
      label1: "Instant Engagement",
      stat2: "45%",
      label2: "Meeting Book Rate",
      chart: [40, 70, 45, 90, 65, 80]
    }
  },
  {
    id: "outbound",
    title: "Outbound Prospecting",
    icon: Target,
    color: "#111827", // gray-900
    bg: "bg-gray-100",
    gradient: "from-gray-800 to-black",
    description: "Personalized, multi-channel outreach at infinite scale.",
    problem: "SDRs burn hours researching prospects and sending generic, low-converting emails.",
    solution: "AI researches the prospect natively, drafts hyper-personalized emails, and follows up automatically.",
    outcome: ["10x volume scale", "Personalization at scale", "Higher open and reply rates"],
    mockup: {
      stat1: "10x",
      label1: "Outreach Volume",
      stat2: "12%",
      label2: "Average Reply Rate",
      chart: [30, 50, 80, 60, 95, 85]
    }
  },
  {
    id: "nurture",
    title: "Pipeline Nurture",
    icon: Crosshair,
    color: "#4B5563", // gray-600
    bg: "bg-gray-50",
    gradient: "from-gray-500 to-gray-700",
    description: "Keep deals warm until they are ready to close.",
    problem: "Deals stall because reps forget to follow up or lack context on older opportunities.",
    solution: "AI monitors prospect intent and automatically sends relevant case studies and check-ins.",
    outcome: ["Zero dropped leads", "Shortened sales cycles", "Higher close rates"],
    mockup: {
      stat1: "0",
      label1: "Dropped Leads",
      stat2: "22%",
      label2: "Cycle Reduction",
      chart: [60, 40, 85, 70, 90, 100]
    }
  }
];

export default function Solutions() {
  const [activeSegment, setActiveSegment] = useState(segments[0]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vyor-purple/5 text-vyor-purple text-xs font-bold uppercase tracking-wider mb-6"
              >
                Digital Employee
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.1]"
              >
                Sales <br />Representative
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed"
              >
                Deploy deterministic AI SDRs that qualify leads, book meetings, and accelerate revenue 24/7. Never miss another opportunity.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 group">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-vyor-purple/5 to-gray-50 rounded-3xl -rotate-2"></div>
              <div className="relative w-full aspect-square max-w-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-2 flex flex-col">
                <div className="p-6 border-b border-gray-100 flex items-center gap-3 bg-white relative z-10 shrink-0">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold tracking-tighter">V</div>
                  <div>
                    <div className="font-bold text-sm">Vyor AI SDR</div>
                    <div className="text-xs text-vyor-purple font-medium flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-vyor-purple animate-pulse" />
                      Active
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-end space-y-4 bg-gray-50/50">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm shadow-sm text-gray-800">
                    Hi Alex! I saw you were looking at our Enterprise pricing. Are you evaluating options for your team right now?
                  </div>
                  <div className="bg-black text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-sm shadow-sm">
                    Yes, trying to figure out if it integrates with Salesforce.
                  </div>
                  <div className="bg-vyor-purple/5 border border-vyor-purple/10 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm shadow-sm text-gray-900">
                    It absolutely does! We offer a native bi-directional Salesforce sync. Would you like me to book a quick 10-min demo with an integration specialist for tomorrow?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Segment Dashboard */}
      <section className="pb-32 relative z-10 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-6 sm:p-10">
            {/* Segment Switcher */}
            <div className="flex flex-wrap gap-3 mb-12">
              {segments.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSegment(s)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all ${activeSegment.id === s.id
                    ? 'bg-black text-white shadow-xl shadow-black/10 scale-105'
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeSegment.id === s.id ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <s.icon className="w-4 h-4" />
                  </div>
                  {s.title}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Content Side */}
              <div className="lg:col-span-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSegment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`inline-block px-3 py-1 rounded-md bg-white border border-gray-200 text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-gray-500`}>
                      Core Function
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{activeSegment.title}</h2>
                    <p className="text-gray-500 mb-10 leading-relaxed">{activeSegment.description}</p>

                    <div className="space-y-6">
                      <div className="p-6 rounded-2xl bg-white border border-gray-200 relative">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">The Bottleneck</div>
                        <p className="text-gray-600 font-medium">"{activeSegment.problem}"</p>
                      </div>

                      <div className="p-6 rounded-2xl bg-gray-100 border border-gray-200 text-gray-900 relative shadow-sm">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Our Solution</div>
                        <p className="font-bold">{activeSegment.solution}</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Key Outcomes</div>
                      <div className="flex flex-wrap gap-3">
                        {activeSegment.outcome.map((o, i) => (
                          <div key={i} className={`px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 text-sm font-bold flex items-center gap-2`}>
                            <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />
                            {o}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Visual/Mockup Side */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSegment.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <div className="relative bg-white rounded-[2rem] border border-gray-200 shadow-xl p-4 sm:p-8 overflow-hidden flex flex-col bg-gradient-to-b from-white to-gray-50/50">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                        </div>
                        <div className="px-4 py-1.5 rounded-md bg-gray-100 border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <MessageSquare className="w-3 h-3" />
                          CRM Integration Active
                        </div>
                      </div>

                      {/* Stat Grid */}
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                          <div className={`text-4xl font-black mb-1 text-black`}>{activeSegment.mockup.stat1}</div>
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{activeSegment.mockup.label1}</div>
                        </div>
                        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                          <div className={`text-4xl font-black mb-1 text-vyor-purple`}>{activeSegment.mockup.stat2}</div>
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{activeSegment.mockup.label2}</div>
                        </div>
                      </div>

                      {/* Main Chart Area */}
                      <div className="flex-grow bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative overflow-hidden h-48">
                        <div className="h-full flex items-end gap-3 relative z-10">
                          {activeSegment.mockup.chart.map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: i * 0.05, duration: 0.6 }}
                              className={`flex-1 rounded-t-lg bg-gray-200 relative`}
                            >
                              {h > 80 && (
                                <div className="absolute top-0 w-full h-full bg-vyor-purple rounded-t-lg" style={{ height: '100%' }} />
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Floating Indicator */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-4 right-4 sm:bottom-12 sm:right-12 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-gray-100 hidden sm:flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gray-100 text-black flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase">Live Event</div>
                          <div className="text-sm font-bold text-black">Meeting Booked</div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After: Transformation Dashboard */}
      <section className="py-32 bg-gray-50 relative overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The Transformation.</h2>
            <p className="text-gray-500 text-lg">From manual prospecting to autonomous revenue generation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Column */}
            <div className="p-10 bg-white rounded-3xl border border-gray-200 shadow-sm relative group">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 text-gray-500 flex items-center justify-center">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-400">Manual Sales</h3>
                </div>

                <ul className="space-y-6">
                  {[
                    { text: "Leads leak through cracks", sub: "Response times measured in hours or days." },
                    { text: "Reps waste time on bad fits", sub: "Qualifying prospects manually instead of closing." },
                    { text: "Cold outreach is generic", sub: "Copy-paste emails yield poor reply rates." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group/item opacity-60 group-hover:opacity-100 transition-opacity">
                      <div className="w-px h-auto bg-gray-200" />
                      <div>
                        <h4 className="font-bold text-gray-800">{item.text}</h4>
                        <p className="text-sm text-gray-500">{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* After Column */}
            <div className="p-6 sm:p-10 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-sm relative group">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-vyor-purple text-white flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">AI Orchestration</h3>
                </div>

                <ul className="space-y-6">
                  {[
                    { text: "Instant 24/7 engagement", sub: "AI responds within milliseconds, anytime." },
                    { text: "Meetings booked automatically", sub: "AEs wake up to calendars full of qualified leads." },
                    { text: "Hyper-personalized outreach", sub: "Deep prospect research before every touchpoint." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group/item">
                      <div className="w-px h-auto bg-vyor-purple" />
                      <div>
                        <h4 className="font-bold text-slate-900">{item.text}</h4>
                        <p className="text-sm text-gray-500">{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results: SaaS Data Grid */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { value: "3x", label: "Pipeline Velocity", desc: "Deals close faster with instant responses.", icon: Rocket },
              { value: "<5s", label: "Response Time", desc: "Leads engaged instantly 24/7.", icon: Zap },
              { value: "$10M+", label: "Pipeline Generated", desc: "Revenue directly attributed to AI SDRs.", icon: BarChart3 }
            ].map((stat, i) => (
              <div key={i} className="p-6 sm:p-10 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-white hover:border-vyor-purple/30 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 bg-white border border-gray-200 text-black group-hover:bg-vyor-purple group-hover:border-vyor-purple/20 group-hover:text-white transition-colors`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`text-6xl font-bold mb-4 tracking-tight text-slate-900`}>{stat.value}</div>
                <h4 className="text-xl font-bold mb-2 text-slate-800">{stat.label}</h4>
                <p className="text-gray-500 transition-colors">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Detail: Node Grid */}
      <section className="py-24 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-10 md:p-16 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-8">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-bold mb-6 text-black">Strict Sales Guardrails.</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Your brand reputation is everything. Our AI Sales agents operate within deterministic policy engines. They never promise unapproved discounts, and seamlessly hand off complex deals to human AEs.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Salesforce Native" },
                    { name: "HubSpot Certified" },
                    { name: "Role-Based Logic" },
                    { name: "SOC-2 Secure" }
                  ].map((badge) => (
                    <span key={badge.name} className={`px-4 py-2 rounded-md bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-black`}>
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl p-4 sm:p-8 border border-gray-200 shadow-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
                    <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">CRM Sync // Active</span>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: "Intent Classification", progress: 98 },
                      { label: "BANT Qualification", progress: 92 },
                      { label: "Calendar Booking Sync", progress: 100 }
                    ].map((bar, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          <span>{bar.label}</span>
                          <span className="text-black">{bar.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${bar.progress}%` }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className={`h-full bg-black`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">CRM Sync Delay</div>
                      <div className="text-3xl font-bold text-black tracking-tighter">12<span className="text-sm font-normal text-gray-400 ml-1">ms</span></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Lead Accuracy</div>
                      <div className="text-3xl font-bold text-black tracking-tighter">99.8<span className="text-sm font-normal text-gray-400 ml-1">%</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SharedSections />
    </div>
  );
};
