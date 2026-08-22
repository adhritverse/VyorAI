# Sitemap & Robots.txt Architecture

---

## 1. Robots.txt Directives

Location: [`public/robots.txt`](file:///c:/Users/nikhi/Downloads/VyorAI/public/robots.txt)

```txt
# Vyor AI Robots.txt
# https://vyorai.com

User-agent: *
Allow: /
Disallow: /account
Disallow: /auth

# AI Crawlers & LLM Agents (GEO Optimization)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

# Sitemap Location
Sitemap: https://vyorai.com/sitemap.xml
```

---

## 2. XML Sitemap Matrix

Location: [`public/sitemap.xml`](file:///c:/Users/nikhi/Downloads/VyorAI/public/sitemap.xml)

| URL | Change Frequency | Priority | Target Content |
|---|---|---|---|
| `https://vyorai.com/` | `daily` | `1.0` | Flagship Home & Intelligence Ecosystem |
| `https://vyorai.com/products/infinity` | `weekly` | `0.9` | Infinity Plugin SDK Architecture |
| `https://vyorai.com/products/virtual-try-on` | `weekly` | `0.9` | AI Virtual Try-On Diffusion Models |
| `https://vyorai.com/product` | `weekly` | `0.9` | The Console & Core AI Platform |
| `https://vyorai.com/solutions` | `weekly` | `0.9` | Enterprise AI Solutions & Sales Agents |
| `https://vyorai.com/automation-library` | `weekly` | `0.8` | Pre-built Workflow Automation Templates |
| `https://vyorai.com/features` | `weekly` | `0.8` | Engine Performance, Latency & Capabilities |
| `https://vyorai.com/pricing` | `weekly` | `0.8` | Plans, Custom Tiers & Enterprise Billing |
| `https://vyorai.com/waitlist` | `weekly` | `0.9` | Priority Waitlist Application Form |
| `https://vyorai.com/blog` | `daily` | `0.8` | Industry Insights & Engineering Research |
| `https://vyorai.com/about` | `monthly` | `0.7` | Company Mission, Team & Vision |
| `https://vyorai.com/careers` | `weekly` | `0.7` | Open Engineering & AI Research Positions |
| `https://vyorai.com/contact` | `monthly` | `0.7` | Direct Inquiries & Office Support |
