import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { navLinks } from '@/data/navigation';
import { supabase } from '@/lib/supabase';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const scrolled = useScrollPosition();
  const location = useLocation();

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-1'
            : 'bg-white py-2'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center group">
              <img src="/LOGO.png" alt="Vyor AI Logo" className="h-[60px] md:h-[80px] w-auto object-contain" />
            </Link>

            {/* Desktop Nav & CTA */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      className="text-sm font-bold text-black hover:text-gray-500 transition-colors px-1"
                    >
                      {link.label}
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 py-3 z-50"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Auth Buttons / Avatar */}
              <div className="flex items-center gap-3">
                {user ? (
                  <Link
                    to="/account"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors border border-gray-200"
                    title="Account Center"
                  >
                    <User className="w-5 h-5 text-gray-600" />
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/auth"
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-gray-700 hover:text-black transition-colors"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/auth"
                      className="inline-flex items-center justify-center px-6 py-2.5 bg-black text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 shadow-xl lg:hidden"
            >
              <div className="p-6">
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.label} className="border-b border-gray-50 last:border-0 pb-2">
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex-1 px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                            location.pathname === link.href
                              ? 'text-black'
                              : 'text-gray-900'
                          }`}
                        >
                          {link.label}
                        </Link>
                        {link.dropdown && (
                          <button 
                            className="p-3 text-gray-400"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(activeDropdown === link.label ? null : link.label);
                            }}
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                      {link.dropdown && activeDropdown === link.label && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-500 hover:text-black transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Auth Buttons Mobile */}
                <div className="mt-8 flex flex-col gap-3">
                  {user ? (
                    <Link
                      to="/account"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 w-full p-4 bg-gray-50 rounded-xl text-black font-medium transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                      <span>Account Center</span>
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/auth"
                        onClick={() => setMobileOpen(false)}
                        className="block w-full text-center px-5 py-3 border border-gray-200 text-black font-medium rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        Log In
                      </Link>
                      <Link
                        to="/auth"
                        onClick={() => setMobileOpen(false)}
                        className="block w-full text-center px-5 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
