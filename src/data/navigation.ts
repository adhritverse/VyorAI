export const navLinks = [
  {
    label: 'Platform',
    href: '/product',
    dropdown: [
      { label: 'The Console', href: '/product' },
      { label: 'Infinity SDK', href: '/products/infinity' },
      { label: 'Virtual Try On', href: '/products/virtual-try-on' },
      { label: 'Automation Library', href: '/automation-library' },
      { label: 'Platform Features', href: '/features' },
    ],
  },
  {
    label: 'AI Agents',
    href: '/digital-employee/customer-support',
    dropdown: [
      { label: 'Customer Support', href: '/digital-employee/customer-support' },
      { label: 'Sales Representative', href: '/solutions' },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
    // No dropdown for pricing, it acts as a direct link
  },
  {
    label: 'Blog',
    href: '/blog',
    dropdown: [
      { label: 'Latest Articles', href: '/blog' },
      { label: 'Case Studies', href: '/blog' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    dropdown: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];
