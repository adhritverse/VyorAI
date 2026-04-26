export const blogPosts = [
  {
    id: 1,
    title: "How We Built a 1M-Request AI Pipeline",
    excerpt: "Scaling from prototype to production: lessons learned from handling over one million autonomous agent requests per day with sub-50ms latency.",
    category: "Blog",
    image: "/images/blog-1.jpg",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    author: "Hritik Jaiswal",
    authorRole: "CEO & Founder",
    content: `
      <h2>The Challenge of Scale</h2>
      <p>When we first started building VyorAI, the goal was simple: create an AI agent that could handle customer inquiries in real-time. However, as we moved into production with our first enterprise partners, the requirements shifted dramatically. We weren't just looking at a few hundred requests a day; we were looking at over one million requests across a distributed network of autonomous agents.</p>
      
      <h2>Latency: The Silent Killer</h2>
      <p>In the world of autonomous agents, latency is more than just a performance metric—it's the difference between a helpful interaction and a failed workflow. We spent months optimizing our inference engine, moving away from standard wrappers to a custom-built architecture that sits closer to the metal. By implementing edge-native processing, we brought our average response time down to sub-50ms.</p>
      
      <blockquote>"Scale is not about doing the same thing more often; it's about doing things differently so that they can be done more often."</blockquote>

      <h2>Lessons Learned</h2>
      <ul>
        <li><strong>Statelessness is Key:</strong> To handle erratic loads, our pipeline must be entirely stateless.</li>
        <li><strong>Predictive Pre-fetching:</strong> We use lightweight models to predict potential next steps in a workflow, pre-loading context before it's even requested.</li>
        <li><strong>Deterministic Guardrails:</strong> Even the most intelligent agent needs boundaries. Our "Sales Guardrails" ensure that every one of those 1M requests stays within brand policy.</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As we continue to grow, our focus remains on pushing the boundaries of what's possible with real-time AI. The next milestone? 10 million requests a day, with even tighter integration into the enterprise stack.</p>
    `
  },
  {
    id: 2,
    title: "Reducing Customer Response Time by 70%",
    excerpt: "A global fintech leader used VyorAI's automation to cut response times, boost CSAT scores, and lower operational costs by 20%.",
    category: "Case Study",
    image: "/images/blog-2.jpg",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    author: "Rishabh Kushwah",
    authorRole: "Co-Founder",
    content: `
      <h2>The Client Problem</h2>
      <p>A major European fintech firm was struggling with an average response time of 4.5 hours for Tier 1 support tickets. This delay was impacting their Customer Satisfaction (CSAT) scores and leading to increased churn among their premium user base.</p>

      <h2>The VyorAI Solution</h2>
      <p>We deployed our Customer Support AI Agent, integrated directly with their Zendesk and internal banking API. The agent was trained on their specific compliance documentation and historical ticket data, allowing it to handle 85% of incoming queries autonomously.</p>

      <h2>The Results</h2>
      <ul>
        <li><strong>70% Reduction</strong> in average response time (from 4.5 hours to under 2 minutes).</li>
        <li><strong>20% Lower</strong> operational costs by automating repetitive tasks.</li>
        <li><strong>15% Increase</strong> in CSAT scores within the first 60 days.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>This case study proves that when AI is implemented with deep integration and deterministic guardrails, it doesn't just replace human effort—it elevates the entire service standard of an enterprise.</p>
    `
  },
  {
    id: 3,
    title: "The Future of Autonomous Enterprise Agents",
    excerpt: "Imagine a future where AGI isn't just a concept but an integral part of your enterprise — collaborating with humans and driving innovation.",
    category: "Blog",
    image: "/images/blog-3.jpg",
    date: "Feb 10, 2026",
    readTime: "12 min read",
    author: "Hritik Jaiswal",
    authorRole: "CEO & Founder",
    content: `
      <h2>Beyond Chatbots</h2>
      <p>The conversation around AI has long been dominated by "chat." But the future of the enterprise isn't just about talking to AI; it's about AI doing the work. We are moving from the era of Copilots to the era of Autonomous Agents.</p>

      <h2>The Three Pillars of Autonomous Work</h2>
      <ol>
        <li><strong>Contextual Awareness:</strong> Agents must understand not just the words, but the business context, history, and goals.</li>
        <li><strong>Deterministic Execution:</strong> Enterprise work requires reliability. You can't have an agent "hallucinating" a contract or a refund.</li>
        <li><strong>Human-in-the-Loop Orchestration:</strong> The most powerful systems are those where humans set the strategy and AI handles the execution.</li>
      </ol>

      <h2>Impact on the Workforce</h2>
      <p>This shift will redefine what it means to be an "operator." Instead of doing the tasks, managers will coach their digital employees, optimizing workflows and setting new boundaries for performance.</p>
    `
  },
  {
    id: 4,
    title: "Getting Started with Email Automation",
    excerpt: "A step-by-step guide to deploying your first AI-powered email automation workflow in under 30 minutes.",
    category: "Guide",
    image: "/images/blog-1.jpg",
    date: "Jan 22, 2026",
    readTime: "6 min read",
    author: "Vyor Engineering Team",
    authorRole: "Product Development",
    content: `
      <h2>Introduction</h2>
      <p>Email remains the lifeblood of business communication, but it's also one of the biggest time sinks. In this guide, we'll show you how to set up a VyorAI agent to triage, draft, and respond to common business emails.</p>

      <h2>Step 1: Connect your Inbox</h2>
      <p>Using our secure OAuth2 connector, you can link your Gmail or Outlook account in seconds. VyorAI uses enterprise-grade encryption to ensure your data stays private.</p>

      <h2>Step 2: Define your Rules</h2>
      <p>This is where you set the "Guardrails." For example, tell the agent: "If an email is about a refund, escalate to a human. If it's about a scheduling request, suggest these three times."</p>

      <h2>Step 3: Training with Samples</h2>
      <p>Upload a few dozen examples of how you usually reply to common questions. Our "Few-Shot" learning engine will pick up your tone and style almost instantly.</p>

      <h2>Step 4: Live Monitoring</h2>
      <p>Start in "Draft Mode" where the agent prepares replies for you to review. Once you're confident in its performance, toggle on "Auto-Pilot."</p>
    `
  },
  {
    id: 5,
    title: "Scaling AI Agents for Enterprise",
    excerpt: "Best practices for deploying autonomous AI agents at enterprise scale while maintaining security, compliance, and performance.",
    category: "Blog",
    image: "/images/blog-2.jpg",
    date: "Jan 8, 2026",
    readTime: "10 min read",
    author: "Rishabh Kushwah",
    authorRole: "Co-Founder",
    content: `
      <h2>Security First</h2>
      <p>In an enterprise environment, security isn't a feature—it's the foundation. Scaling AI requires a robust framework for data privacy, including SOC-2 compliance and role-based access controls.</p>

      <h2>Performance at Scale</h2>
      <p>As you move from 10 to 1,000 agents, the infrastructure load increases exponentially. We recommend using a containerized approach with dynamic scaling to ensure that no single agent bottlenecks the system.</p>

      <h2>Monitoring and Observability</h2>
      <p>You can't manage what you can't measure. Use Vyor's real-time dashboard to track agent accuracy, cost per task, and success rates. Setting up automated alerts for anomalies is crucial for maintaining 99.9% uptime.</p>
    `
  },
  {
    id: 6,
    title: "From Prototype to Production in 48 Hours",
    excerpt: "How a digital marketing agency leveraged VyorAI to automate content creation and scale personalized video production.",
    category: "Case Study",
    image: "/images/blog-3.jpg",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    author: "Vyor Success Team",
    authorRole: "Customer Success",
    content: `
      <h2>The Challenge</h2>
      <p>A marketing agency needed to produce personalized video scripts for 500 different clients every week. Doing this manually was impossible, and generic AI tools lacked the brand-specific nuance required.</p>

      <h2>The Fast-Track Implementation</h2>
      <p>Using the Vyor Automation Library, the agency selected a pre-built marketing template. They customized the variables to include client-specific data points from their CRM.</p>

      <h2>The Outcome</h2>
      <p>Within 48 hours, the entire workflow was live. The agency went from zero to full production, saving approximately 120 man-hours per week while increasing client engagement by 25%.</p>
    `
  },
];
