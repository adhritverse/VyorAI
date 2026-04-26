export const pricingTiers = [
  {
    name: "Starter",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Perfect for trying out VyorAI",
    features: [
      "1,000 API calls/month",
      "1 AI agent",
      "Basic email automation",
      "Community support",
      "Standard integrations",
    ],
    cta: "Get Started Free",
    highlighted: false,
    badge: "No credit card required",
  },
  {
    name: "Growth",
    priceMonthly: 4999,
    priceYearly: 3999,
    description: "For growing teams and businesses",
    features: [
      "50,000 API calls/month",
      "5 AI agents",
      "All automation categories",
      "Priority support",
      "Advanced analytics",
      "Custom workflows",
    ],
    cta: "Start 14-Day Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    priceMonthly: 19999,
    priceYearly: 15999,
    description: "For scaling organizations",
    features: [
      "500,000 API calls/month",
      "25 AI agents",
      "White-label options",
      "Dedicated support",
      "SLA guarantee",
      "Advanced security",
      "Team collaboration",
    ],
    cta: "Contact Sales",
    highlighted: false,
    badge: null,
  },
  {
    name: "Enterprise",
    priceMonthly: null,
    priceYearly: null,
    description: "For large-scale deployments",
    features: [
      "Unlimited API calls",
      "Unlimited AI agents",
      "Custom integrations",
      "Dedicated account manager",
      "99.9% uptime SLA",
      "On-premise deployment",
      "SSO & advanced permissions",
    ],
    cta: "Book a Demo",
    highlighted: false,
    badge: "Custom",
  },
];

export const comparisonFeatures = [
  { name: "API Calls", starter: "1,000/mo", growth: "50,000/mo", pro: "500,000/mo", enterprise: "Unlimited" },
  { name: "AI Agents", starter: "1", growth: "5", pro: "25", enterprise: "Unlimited" },
  { name: "Email Automation", starter: true, growth: true, pro: true, enterprise: true },
  { name: "Marketing Automation", starter: false, growth: true, pro: true, enterprise: true },
  { name: "CRM Automation", starter: false, growth: true, pro: true, enterprise: true },
  { name: "Custom Workflows", starter: false, growth: true, pro: true, enterprise: true },
  { name: "Priority Support", starter: false, growth: true, pro: true, enterprise: true },
  { name: "Advanced Analytics", starter: false, growth: true, pro: true, enterprise: true },
  { name: "White-label", starter: false, growth: false, pro: true, enterprise: true },
  { name: "SLA Guarantee", starter: false, growth: false, pro: true, enterprise: true },
  { name: "On-premise Deploy", starter: false, growth: false, pro: false, enterprise: true },
  { name: "SSO & Permissions", starter: false, growth: false, pro: false, enterprise: true },
];

export const faqs = [
  {
    question: "What makes VyorAI different from other automation tools?",
    answer: "VyorAI combines autonomous AI agents with real-time orchestration. Unlike traditional RPA tools that just automate clicks, our agents read, reason, and act — handling complex multi-step workflows with built-in escalation and audit trails.",
  },
  {
    question: "How fast is the VyorAI automation API?",
    answer: "Our API delivers sub-50ms average latency for inference requests. We use edge-native architecture with global distribution to ensure minimal response times regardless of your location.",
  },
  {
    question: "Do I need machine learning expertise to integrate?",
    answer: "Not at all. VyorAI is designed for developers and operators without ML backgrounds. Our SDKs, pre-built connectors, and visual workflow builder let you deploy AI automations using familiar APIs and drag-and-drop interfaces.",
  },
  {
    question: "How does the pricing model work?",
    answer: "We offer flexible value billing — choose between outcome-based or usage-based pricing. You only pay for what you use, and you can upgrade, downgrade, or cancel your plan at any time without penalties.",
  },
  {
    question: "Is the workflow fully automated?",
    answer: "Yes, workflows can run fully autonomously, but you always maintain control. Set approval gates, escalation rules, and human-in-the-loop checkpoints wherever you need oversight.",
  },
  {
    question: "Can I switch plans at any time?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the next billing cycle.",
  },
];
