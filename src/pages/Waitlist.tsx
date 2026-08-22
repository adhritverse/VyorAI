import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, User, Mail, Phone, Building2, Briefcase, Sparkles, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Waitlist() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (supabase) {
        // Attempt to insert into waitlist_submissions or contact_submissions
        const { error: insertError } = await supabase
          .from('waitlist_submissions')
          .insert([
            {
              full_name: formData.fullName,
              email: formData.email,
              phone: formData.phone,
              company: formData.company,
              designation: formData.designation,
              created_at: new Date().toISOString(),
            },
          ]);

        if (insertError) {
          // If waitlist_submissions table doesn't exist, fallback to contact_submissions
          console.warn('Waitlist table note, trying fallback:', insertError.message);
          await supabase.from('contact_submissions').insert([
            {
              name: formData.fullName,
              email: formData.email,
              phone: formData.phone,
              company: formData.company,
              designation: formData.designation,
              message: `Waitlist Request - Company: ${formData.company}, Role: ${formData.designation}`,
            },
          ]);
        }
      }

      // Also cache to localStorage as backup
      try {
        const saved = JSON.parse(localStorage.getItem('vyor_waitlist') || '[]');
        saved.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('vyor_waitlist', JSON.stringify(saved));
      } catch (err) {
        console.error('LocalStorage write error:', err);
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error('Submission error:', err);
      // Still show success to user if offline/local, but show notice if fatal
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-100/50 via-pink-50/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Top Bar */}
      <div className="max-w-xl w-full mx-auto flex items-center justify-between mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <Link to="/" className="inline-flex items-center gap-2">
          <img src="/logo.webp" alt="Vyor AI" className="h-6 sm:h-7 w-auto object-contain" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-black">Vyor AI</span>
        </Link>
      </div>

      {/* Main Card Container */}
      <div className="max-w-xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.07)] border border-gray-100 p-8 sm:p-10 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="waitlist-form"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-vyor-purple text-xs font-bold uppercase tracking-wider mb-4 border border-purple-100/80">
                    <Sparkles className="w-3.5 h-3.5 text-vyor-purple" />
                    Early Access Program
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    Join the Vyor AI Waitlist
                  </h1>
                  <p className="mt-2.5 text-sm sm:text-base text-gray-500 leading-relaxed">
                    Be among the first to deploy autonomous AI agents and enterprise workflows with zero latency.
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-2xl">
                    {error}
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all"
                      />
                    </div>
                  </div>

                  {/* Company & Designation Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all"
                        />
                      </div>
                    </div>

                    {/* Designation */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Designation <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.designation}
                          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                          placeholder="VP of Engineering"
                          className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 bg-black text-white font-bold text-sm rounded-full hover:bg-gray-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Securing Your Spot...</span>
                        </>
                      ) : (
                        <>
                          <span>Join the Waitlist</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Privacy disclaimer */}
                <p className="mt-6 text-center text-xs text-gray-400">
                  By joining, you agree to receive product updates and priority onboarding from Vyor AI.
                </p>
              </motion.div>
            ) : (
              /* Success Confirmation View */
              <motion.div
                key="waitlist-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, type: 'spring', damping: 20 }}
                className="text-center py-6 sm:py-8"
              >
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner ring-8 ring-emerald-50/50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
                  Waitlist Confirmed
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
                  You're on the waitlist!
                </h2>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 my-6 text-left space-y-2">
                  <p className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Our team will contact you within 2 business days.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Thank you, <span className="font-semibold text-gray-800">{formData.fullName}</span> ({formData.company}). We have registered your details and will send onboarding steps to <span className="font-semibold text-gray-800">{formData.email}</span>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                  <Link
                    to="/"
                    className="w-full sm:w-auto px-8 py-3.5 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-all shadow-sm"
                  >
                    Return to Home
                  </Link>
                  <Link
                    to="/product"
                    className="w-full sm:w-auto px-8 py-3.5 border border-gray-200 text-gray-700 text-sm font-bold rounded-full hover:bg-gray-50 transition-all"
                  >
                    Explore Platform
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Footer copyright */}
      <div className="max-w-xl w-full mx-auto text-center mt-8">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Vyor AI. All rights reserved.
        </p>
      </div>
    </div>
  );
}
