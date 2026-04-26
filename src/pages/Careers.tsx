
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, Brain, Layout, Megaphone, Globe2, Shield, Zap, CircleDollarSign, X, Loader2, CheckCircle2, Send } from 'lucide-react';
import SharedSections from '../components/SharedSections';
import AnimatedSection from '../components/AnimatedSection';
import { supabase } from '@/lib/supabase';

const roles = [
    { title: "ML Engineer", icon: Brain, type: "Engineering", delay: 0.1 },
    { title: "Backend (Go)", icon: Code, type: "Engineering", delay: 0.2 },
    { title: "Full-Stack", icon: Code, type: "Engineering", delay: 0.3 },
    { title: "DevRel", icon: Megaphone, type: "Developer Relations", delay: 0.4 },
    { title: "Product Design", icon: Layout, type: "Product", delay: 0.5 }
];

const benefits = [
    { title: "Remote-First", description: "Work from anywhere in the world. We value output over hours.", icon: Globe2 },
    { title: "Radical Autonomy", description: "You own your domain end-to-end. No micro-management, just results.", icon: Shield },
    { title: "Equity Package", description: "Be a true owner in the future we are building together.", icon: CircleDollarSign },
    { title: "Modern Stack", description: "Go, Rust, Python, and the latest in neural architecture.", icon: Zap }
];

export default function Careers() {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', linkedin: '', portfolio: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const openModal = (role: string) => {
        setSelectedRole(role);
        setSubmitted(false);
        setError(null);
        setFormData({ name: '', email: '', phone: '', linkedin: '', portfolio: '', message: '' });
    };

    const closeModal = () => setSelectedRole(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error: supabaseError } = await supabase
                .from('job_applications')
                .insert([{
                    role: selectedRole,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    linkedin_url: formData.linkedin,
                    portfolio_url: formData.portfolio,
                    cover_note: formData.message,
                    applied_at: new Date().toISOString(),
                }]);

            if (supabaseError) throw supabaseError;
            setSubmitted(true);
        } catch (err: any) {
            setError(err.message || 'Failed to submit application. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-vyor-purple/5 to-white border-b border-gray-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vyor-purple/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
                            Careers
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.1]">
                            Build the future of <br />
                            <span className="text-gray-400">enterprise intelligence.</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                            Join a team of world-class engineers, researchers, and designers pushing the boundaries of autonomous AI systems.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-5 py-2">
                                <div className="w-2 h-2 rounded-full bg-vyor-purple animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-vyor-purple">Actively Hiring</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="py-32 relative z-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="mb-20 text-center">
                        <h2 className="text-4xl font-bold tracking-tight mb-4 text-black">Open Roles</h2>
                        <p className="text-lg text-gray-500">We are looking for exceptional talent to join our mission.</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {roles.map((role, idx) => (
                            <AnimatedSection key={idx} delay={role.delay}>
                                <div className="group p-8 rounded-3xl bg-white border border-gray-200 hover:border-vyor-purple/30 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-xl h-full flex flex-col">
                                    <div className="relative z-10 flex flex-col flex-grow">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-gray-50 text-gray-500 group-hover:bg-vyor-purple group-hover:text-white transition-colors border border-gray-100 group-hover:border-vyor-purple">
                                            <role.icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">{role.type}</div>
                                        <h3 className="text-2xl font-bold mb-8 text-black">{role.title}</h3>
                                        <div className="mt-auto pt-6 border-t border-gray-50">
                                            <button
                                                onClick={() => openModal(role.title)}
                                                className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-vyor-purple transition-colors"
                                            >
                                                Apply now
                                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits / Culture Section */}
            <section className="py-32 relative z-10 border-y border-gray-100 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-6 text-black tracking-tight">Why Vyor AI?</h2>
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            We're not just building another wrapper. We're engineering the core infrastructure that will power the next generation of autonomous intelligence. 
                            Join us if you want to work on hard problems with a team that values speed, ownership, and first principles.
                        </p>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="p-10 rounded-3xl bg-white border border-gray-100 hover:border-vyor-purple/20 hover:shadow-lg transition-all duration-300 h-full group">
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-gray-500 group-hover:text-vyor-purple group-hover:bg-vyor-purple/5 transition-colors">
                                            <benefit.icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-black">{benefit.title}</h4>
                                    </div>
                                    <p className="text-gray-500 text-lg leading-relaxed">{benefit.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            <AnimatePresence>
                {selectedRole && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={(e) => e.target === e.currentTarget && closeModal()}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-8 border-b border-gray-100">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-vyor-purple mb-1">Apply for</p>
                                    <h3 className="text-2xl font-black text-black">{selectedRole}</h3>
                                </div>
                                <button onClick={closeModal} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                    <X className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>

                            <div className="p-8">
                                {submitted ? (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h4 className="text-xl font-bold text-black mb-2">Application Submitted!</h4>
                                        <p className="text-gray-500 mb-6">We'll review your application and get back to you within 5 business days.</p>
                                        <button onClick={closeModal} className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors">
                                            Close
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {error && (
                                            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl">{error}</div>
                                        )}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                                                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-vyor-purple/20 focus:border-vyor-purple" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-red-500">*</span></label>
                                                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@company.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-vyor-purple/20 focus:border-vyor-purple" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                                            <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-vyor-purple/20 focus:border-vyor-purple" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">LinkedIn Profile</label>
                                            <input type="url" value={formData.linkedin} onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })} placeholder="https://linkedin.com/in/yourname" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-vyor-purple/20 focus:border-vyor-purple" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Portfolio / GitHub</label>
                                            <input type="url" value={formData.portfolio} onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })} placeholder="https://github.com/yourhandle" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-vyor-purple/20 focus:border-vyor-purple" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Why Vyor AI? <span className="text-red-500">*</span></label>
                                            <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us why you're excited about this role and what you'd bring to the team..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-vyor-purple/20 focus:border-vyor-purple resize-none" />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-3.5 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                            {loading ? 'Submitting...' : 'Submit Application'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Shared Sections */}
            <SharedSections />
        </div>
    );
}
