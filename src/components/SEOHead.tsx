import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface RouteSEO {
  title: string;
  description: string;
}

const SEO_MAP: Record<string, RouteSEO> = {
  '/': {
    title: 'Vyor AI — Enterprise Autonomous AI Automation & Neural SDK',
    description: 'Deploy high-performance autonomous agents and custom neural architectures with sub-15ms latency. Explore Vyor CRM, AI Virtual Try-On, and the Infinity Plugin SDK.'
  },
  '/products/infinity': {
    title: 'Infinity Architecture & Neural Plugin SDK — Vyor AI',
    description: 'Develop, train, and deploy custom neural architectures directly into our ecosystem. A high-performance SDK built for infinite scale.'
  },
  '/products/virtual-try-on': {
    title: 'AI Virtual Try-On Diffusion Models — Vyor AI',
    description: 'Hyper-realistic, real-time AI virtual try-on engine for apparel and retail. Sub-second cloth simulation and accurate drape modeling.'
  },
  '/product': {
    title: 'The Console & Modular Platform Architecture — Vyor AI',
    description: 'Unified command module for asynchronous orchestration, modular neural agent configuration, and enterprise API access.'
  },
  '/solutions': {
    title: 'Autonomous Enterprise Solutions & Sales Agents — Vyor AI',
    description: 'Transform your revenue pipeline with 24/7 autonomous sales agents, lead qualification, and CRM auto-enrichment.'
  },
  '/automation-library': {
    title: 'Automation Workflow Library — Vyor AI',
    description: 'Explore hundreds of pre-built, production-ready autonomous workflow automations across e-commerce, sales, and operations.'
  },
  '/features': {
    title: 'Platform Engine Features & Performance Benchmarks — Vyor AI',
    description: 'Sub-15ms execution latency, enterprise-grade security, and 99.99% uptime SLA designed for mission-critical workloads.'
  },
  '/pricing': {
    title: 'Transparent Enterprise Pricing & Tiers — Vyor AI',
    description: 'Predictable pricing built for teams of all sizes. From developer prototyping to custom dedicated enterprise infrastructure.'
  },
  '/waitlist': {
    title: 'Join the Priority Platform Waitlist — Vyor AI',
    description: 'Request early access to the Vyor AI platform and developer SDKs. Our enterprise engineering team responds within 2 business days.'
  },
  '/auth': {
    title: 'Join the Priority Platform Waitlist — Vyor AI',
    description: 'Request early access to the Vyor AI platform and developer SDKs. Our enterprise engineering team responds within 2 business days.'
  },
  '/blog': {
    title: 'Engineering Research & AI Industry Insights — Vyor AI',
    description: 'In-depth technical articles on autonomous agent architecture, edge neural diffusion, and real-time enterprise AI orchestration.'
  },
  '/about': {
    title: 'About Us — Building the Next Generation of AI — Vyor AI',
    description: 'Learn about our mission to democratize autonomous neural computing and build resilient enterprise AI intelligence.'
  },
  '/careers': {
    title: 'Careers & Open Engineering Positions — Vyor AI',
    description: 'Join the Vyor AI team to engineer the frontier of autonomous agent swarms, real-time diffusion, and neural SDKs.'
  },
  '/contact': {
    title: 'Contact Enterprise Support & Sales — Vyor AI',
    description: 'Get in touch with our solutions engineering team for custom neural deployments, SLAs, and technical partnerships.'
  },
  '/account': {
    title: 'Account Center — Vyor AI',
    description: 'Manage your Vyor AI organization, API keys, and enterprise deployments.'
  }
};

export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const matched = SEO_MAP[pathname] || SEO_MAP['/'];
    if (matched) {
      document.title = matched.title;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', matched.description);

      // Update OG title & description
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', matched.title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', matched.description);

      // Update canonical link
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      const cleanPath = pathname === '/' ? '' : pathname;
      canonical.setAttribute('href', `https://vyorai.com${cleanPath}`);
    }
  }, [pathname]);

  return null;
}
