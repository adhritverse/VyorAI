import { Link } from 'react-router';
import { Linkedin, Globe, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white">
      {/* Newsletter Section - Keeping it above the dark footer but maintaining its light theme */}
      <div className="bg-gray-50 border-b border-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 text-center sm:text-left">
              <div className="flex -space-x-3">
                <img src="/images/avatar-1.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="/images/avatar-2.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="/images/avatar-3.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Stay Ahead of the Workforce Shift</h3>
                <p className="text-gray-500 text-sm mt-1">Monthly insights on AI workforces — zero spam</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-500"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div>
            <h4 className="italic text-gray-400 text-sm mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/product" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">The Console</Link></li>
              <li><Link to="/products/infinity" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">Infinity SDK</Link></li>
              <li><Link to="/automation-library" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">Automation Library</Link></li>
              <li><Link to="/features" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">Platform Features</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="italic text-gray-400 text-sm mb-6">AI Agents</h4>
            <ul className="space-y-4">
              <li><Link to="/digital-employee/customer-support" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">Customer Support</Link></li>
              <li><Link to="/solutions" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">Sales Representative</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="italic text-gray-400 text-sm mb-6">Pricing</h4>
            <ul className="space-y-4">
              <li><Link to="/pricing" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">Plans & Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="italic text-gray-400 text-sm mb-6">Blog</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">Latest Articles</Link></li>
              <li><Link to="/blog" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="italic text-gray-400 text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-6">
              <Link to="/" className="flex items-center group gap-3">
                <img src="/logo.webp" alt="Vyor AI Logo" className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm md:text-base font-medium tracking-[0.25em] uppercase text-white">Vyor AI</span>
              </Link>
              <p className="text-gray-400 text-sm">
                © 2026 Vyor AI. All rights reserved.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex items-center gap-4">
                <a href="https://vyorai.com/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors" title="Website">
                  <Globe className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.linkedin.com/company/vyorai/posts/?feedView=all" target="_blank" rel="noreferrer" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors" title="LinkedIn">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.instagram.com/vyor.ai?igsh=bmhvdmZveGhub2Qw" target="_blank" rel="noreferrer" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors" title="Instagram">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Link to="/privacy-policy" className="hover:text-white transition-colors underline decoration-gray-600 underline-offset-4">Privacy</Link>
                <span>|</span>
                <Link to="/terms-of-service" className="hover:text-white transition-colors underline decoration-gray-600 underline-offset-4">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
