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
import Auth from '@/pages/Auth';
import CustomerSupport from '@/pages/digital-employees/CustomerSupport';
import About from '@/pages/About';
import Careers from '@/pages/Careers';
import AccountCenter from '@/pages/AccountCenter';
import Infinity from '@/pages/Infinity';
import BlogPostDetail from '@/pages/BlogPostDetail';
import ScrollToTop from '@/components/ScrollToTop';
import InfinityFAB from '@/components/InfinityFAB';

export default function App() {
  return (
    <>
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
        <Route path="/products/infinity" element={<Infinity />} />
        <Route path="/digital-employee/customer-support" element={<CustomerSupport />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/account" element={<AccountCenter />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
    </>
  );
}
