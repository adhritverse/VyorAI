import { Link } from 'react-router';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const testimonials = [
  {
    quote: "Working with Vyor felt like having an elite internal strike team. They absorbed feedback call-by-call, refined the flow through multiple iterations, and delivered a PoC our stakeholders could test—and love—within the same sprint.",
    author: "Neeraj Agrawal",
    role: "Assistant Vice President",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The POC developed by Vyor effectively demonstrated how natural language queries can eliminate the need for SQL scripting, significantly simplifying data access and analysis. Their solution showcased impressive capabilities.",
    author: "Amit Pingle",
    role: "Head of Innovation",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Vyor has performed an outstanding work to explore this ability to automatically translate natural language intention into a contextualized SQL script. Vyor's ability to learn fast a totally new context is remarkable.",
    author: "Arnaud De-Gayffier",
    role: "Digital Transformation",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export function InsightsAndResources() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8 md:mb-12">Insights & Resources</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          <Link to="/blog" className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all">
            Explore more
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              category: "Blog",
              title: "Introduction Customer service has become the linchpin of brand loyalty and revenue growth....",
              image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
            },
            {
              category: "Case Study",
              title: "A global fintech leader used Vyor's AI Agent to automate support, cutting response times ...",
              image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
            },
            {
              category: "Blog",
              title: "Imagine a future where Artificial General Intelligence (AGI) isn't just a concept but an...",
              image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
            }
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group cursor-pointer bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-[14px] text-gray-600 leading-relaxed mb-8 min-h-[60px]">
                    {item.title}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-1.5 bg-[#f3f4f6] text-[13px] font-semibold text-gray-900 rounded-lg">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">What our Customers Say</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-black">{t.author}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABanner({ title = "Ready to See a Digital Employee<br />in Action?", subtitle = "Industry-specific deck included" }) {
  return (
    <section className="bg-white py-32 sm:py-40 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'url("https://cdn.zangoh.com/videos/1753785133846_Layer_1.svg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-[52px] font-bold tracking-tight text-gray-900 mb-4 leading-[1.1]" dangerouslySetInnerHTML={{ __html: title }}>
          </h2>
          <p className="text-[17px] text-gray-500 font-medium mb-12">
            {subtitle}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
          >
            Book Live Demo
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Build vs Buy?",
    a: "In‑house builds take 6‑12 mo and a full ML‑Ops team. CSR DE goes live in weeks and includes continuous tuning."
  },
  {
    q: "Pricing?",
    a: "Subscription + usage; pay only for resolved work—no seat licences."
  },
  {
    q: "Security?",
    a: "Data encrypted in transit & at rest; private VPC or on‑prem options; audits underway for ISO‑27001 & SOC‑2."
  },
  {
    q: "Human Escalation?",
    a: "Confidence‑threshold triggers route conversations to your agents with full context."
  }
];

export function FAQ() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-black">FAQ</h2>
          <p className="text-gray-500">Frequently asked questions and answers about our services</p>
        </AnimatedSection>
        <div className="space-y-12 text-black">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
              <p className="text-gray-500 leading-relaxed">{faq.a}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function SharedSections() {
  return (
    <>
      <InsightsAndResources />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
