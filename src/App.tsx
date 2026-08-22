import { Routes, Route } from 'react-router';
import PageLayout from '@/components/PageLayout';
import Home from '@/pages/Home';
import Features from '@/pages/Features';
import Solutions from '@/pages/Solutions';
import Pricing from '@/pages/Pricing';
import AutomationLibrary from '@/pages/AutomationLibrary';
import Product from '@/pages/Product';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Waitlist from '@/pages/Waitlist';
import About from '@/pages/About';
import Careers from '@/pages/Careers';
import AccountCenter from '@/pages/AccountCenter';
import InfinityPage from '@/pages/Infinity';
import VirtualTryOn from '@/pages/VirtualTryOn';
import BlogPostDetail from '@/pages/BlogPostDetail';
import ScrollToTop from '@/components/ScrollToTop';
import InfinityFAB from '@/components/InfinityFAB';
import SEOHead from '@/components/SEOHead';

export default function App() {
  return (
    <>
      <SEOHead />
      <ScrollToTop />
      <InfinityFAB />
      <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/automation-library" element={<AutomationLibrary />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/infinity" element={<InfinityPage />} />
        <Route path="/products/virtual-try-on" element={<VirtualTryOn />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/account" element={<AccountCenter />} />
      </Route>
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/auth" element={<Waitlist />} />
    </Routes>
    </>
  );
}
