import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Tab = 'login' | 'signup' | 'forgot';

export default function Auth() {
  const [tab, setTab] = useState<Tab>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured. Please check your environment variables.');
      }
      
      if (tab === 'login') {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        // Handle successful login (e.g. redirect to dashboard)
        window.location.href = '/product';
      } else if (tab === 'signup') {
        if (!formData.agree) {
          throw new Error('You must agree to the Terms and Privacy Policy');
        }
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.name,
            }
          }
        });
        if (error) throw error;
        setMessage('Check your email to confirm your account! After confirming, please log in.');
      } else if (tab === 'forgot') {
        const { error } = await supabase.auth.resetPasswordForEmail(formData.email);
        if (error) throw error;
        setMessage('Password reset instructions sent to your email.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/logo.webp" alt="Vyor AI" className="h-16 w-auto object-contain" />
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-8 relative">
            <motion.div
              layoutId="auth-tab"
              className="absolute inset-y-1 rounded-full bg-white shadow-sm"
              style={{
                width: `${100 / 3}%`,
                left: tab === 'login' ? '4px' : tab === 'signup' ? `${100 / 3}%` : `${(100 / 3) * 2}%`,
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            />
            {(['login', 'signup', 'forgot'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative z-10 flex-1 py-2.5 text-sm font-medium rounded-full transition-colors ${
                  tab === t ? 'text-black' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {t === 'login' ? 'Log In' : t === 'signup' ? 'Sign Up' : 'Reset'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Messages */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl">
                  {error}
                </div>
              )}
              {message && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl">
                  {message}
                </div>
              )}

              {/* Login Form */}
              {tab === 'login' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="••••••••"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-black pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input type="checkbox" className="rounded border-gray-300" />
                      Remember me
                    </label>
                    <button
                      type="button"
                      onClick={() => setTab('forgot')}
                      className="text-sm text-black hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    Log In
                  </button>
                </form>
              )}

              {/* Signup Form */}
              {tab === 'signup' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="••••••••"
                        required
                        minLength={6}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-black pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {/* Strength indicator */}
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`flex-1 h-1 rounded-full ${
                            formData.password.length >= level * 2
                              ? level <= 2
                                ? 'bg-red-400'
                                : level <= 3
                                ? 'bg-yellow-400'
                                : 'bg-green-400'
                              : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <label className="flex items-start gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="rounded border-gray-300 mt-0.5"
                    />
                    <span>
                      I agree to the <a href="#" className="text-black hover:underline">Terms</a> and{' '}
                      <a href="#" className="text-black hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    Create Account
                  </button>
                </form>
              )}

              {/* Forgot Password */}
              {tab === 'forgot' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-gray-500 mb-4">
                    Enter your email and we'll send you a link to reset your password.
                  </p>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-black"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    Send Reset Link
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab('login')}
                    className="w-full text-center text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    Back to login
                  </button>
                </form>
              )}
            </motion.div>
          </AnimatePresence>



          {/* Bottom link */}
          <div className="mt-6 text-center">
            {tab === 'login' ? (
              <p className="text-sm text-gray-500">
                Don't have an account?{' '}
                <button onClick={() => setTab('signup')} className="text-black hover:underline font-medium">
                  Sign up
                </button>
              </p>
            ) : tab === 'signup' ? (
              <p className="text-sm text-gray-500">
                Already have an account?{' '}
                <button onClick={() => setTab('login')} className="text-black hover:underline font-medium">
                  Log in
                </button>
              </p>
            ) : null}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
