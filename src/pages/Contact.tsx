import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Loader2, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { InsightsAndResources, FAQ, Testimonials, CTABanner } from '@/components/SharedSections';
import { supabase } from '@/lib/supabase';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured. Please check your environment variables.');
      }
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          designation: formData.designation,
          company: formData.company,
          message: formData.message,
        }]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', designation: '', company: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Contact Hero */}
      <section className="bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <AnimatedSection>
              <div>
                <div className="mb-8">
                  <img src="/logo.webp" alt="Vyor AI" className="h-20 w-auto object-contain" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
                  Contact<br />Information
                </h1>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:hello@vyorai.com" className="text-black hover:text-indigo-600 transition-colors">
                        hello@vyorai.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href="tel:+918462802086" className="text-black hover:text-indigo-600 transition-colors">
                        +91 84628 02086
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-black">Indore, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-sm text-gray-400 mb-4">Follow us</p>
                  <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/company/vyorai/posts/?feedView=all" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Linkedin className="w-5 h-5 text-gray-600" />
                    </a>
                    <a href="https://www.instagram.com/vyor.ai?igsh=bmhvdmZveGhub2Qw" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Instagram className="w-5 h-5 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <h2 className="text-xl font-semibold mb-6">Contact Form</h2>

                {/* Success Banner */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 text-green-700"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">Message sent! We'll get back to you shortly.</p>
                  </motion.div>
                )}

                {/* Error Banner */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-500"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your number"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-500"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Designation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        placeholder="Your Designation"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Company name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Who is your employer"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write any message or a query you have"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-500 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? 'Sending...' : 'Send Request'}
                  </button>
                </form>
              </div>
            </AnimatedSection>
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
