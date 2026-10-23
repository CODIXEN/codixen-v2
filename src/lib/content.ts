import {
  Code2,
  Boxes,
  BrainCircuit,
  Rocket,
  Smartphone,
  Megaphone,
  Search,
  PenTool,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Cloud,
  Truck,
  Building2,
  GraduationCap,
  Clapperboard,
  Plane,
  type LucideIcon,
} from "lucide-react";

// Cal.com booking — replace CAL_LINK with your real cal.com event link
// (format: "username/event-slug", e.g. "codixen/discovery-call").
export const CAL_NAMESPACE = "discovery";
export const CAL_LINK = "https://cal.com/muhaiminshihab/30min";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Industries", href: "#industries" },
  // { label: "Stories", href: "#stories" }, // hidden until real testimonials
  { label: "FAQ", href: "#faq" },
] as const;

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 25, suffix: "+", label: "Projects delivered" },
  { value: 15, suffix: "+", label: "Clients served" },
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 8, suffix: "+", label: "Countries served" },
] as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Bespoke, high-performance web platforms engineered for reliability and built to scale with your business.",
    bullets: ["Real-time dashboards", "Complex workflows", "Enterprise auth & RBAC"],
  },
  {
    icon: Boxes,
    title: "SaaS Development",
    description:
      "End-to-end multi-tenant SaaS products — from billing and onboarding to analytics and admin tooling.",
    bullets: ["Multi-tenant architecture", "Stripe billing", "Usage analytics"],
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Applications",
    description:
      "LLM features, RAG pipelines, and intelligent automation woven directly into your product experience.",
    bullets: ["RAG & semantic search", "Agentic workflows", "Custom model integration"],
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "Go from idea to a fundable, production-ready MVP fast — with an architecture that won't box you in later.",
    bullets: ["Rapid prototyping", "Scalable foundations", "Launch in weeks"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with native feel, offline support, and seamless backend sync.",
    bullets: ["iOS & Android", "Offline-first", "Push & deep linking"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven marketing that grows your reach — SEO, performance campaigns, and conversion optimization.",
    bullets: ["SEO & content", "Paid acquisition", "Conversion optimization"],
  },
];

export type Project = {
  name: string;
  category: string;
  summary: string;
  image: string;
  tags: string[];
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Nagadhat",
    category: "Multi-vendor Commerce",
    summary:
      "A full-featured e-commerce platform with POS, multi-vendor marketplace, agent network, and affiliate marketing built in.",
    image: "/projects/nagadhat.png",
    tags: ["Laravel", "Livewire", "MySQL", "Tailwind"],
    url: "https://nagadhat.com.bd",
  },
  {
    name: "System Builder",
    category: "E-commerce",
    summary:
      "An e-commerce store for tech gadgets and computers, featuring a smart PC Builder with real-time component compatibility.",
    image: "/projects/systembuilder.png",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap"],
    url: "https://systembuilder.com.bd",
  },
  {
    name: "Easy Loan",
    category: "FinTech",
    summary:
      "A loan distribution and management platform with dedicated customer and admin panels covering the full loan lifecycle.",
    image: "/projects/easyloan.png",
    tags: ["Laravel", "Vue.js", "MySQL", "REST API"],
    url: "https://easyloanint.com",
  },
  // {
  //   name: "Dealiving",
  //   category: "Affiliate Blog",
  //   summary:
  //     "A content-driven blog delivering expert tips and tricks for buying the right products from Amazon.",
  //   image: "/projects/dealiving.png",
  //   tags: ["WordPress", "PHP", "SEO", "MySQL"],
  //   url: "https://dealiving.com",
  // },
  {
    name: "Rupali Steel",
    category: "Corporate Website",
    summary:
      "A polished business portfolio website for a leading steel manufacturer in Bangladesh, showcasing products and capabilities.",
    image: "/projects/rupalisteel.png",
    tags: ["Laravel", "Tailwind", "MySQL", "SEO"],
    url: "https://rupalisteel.com",
  },
  {
    name: "Global Fast Coder",
    category: "News CMS",
    summary:
      "A news platform CMS built for selling, development, and complete editorial management out of the box.",
    image: "/projects/globalfastcoder.png",
    tags: ["Laravel", "Livewire", "MySQL", "Tailwind"],
    url: "https://globalfastcoder.com",
  },
  {
    name: "Daily Bangladesh Mirror",
    category: "News Platform",
    summary:
      "A news platform for a leading local newspaper in Cumilla District, Bangladesh, with fast publishing and rich media.",
    image: "/projects/dailybangladeshmirror.png",
    tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    url: "https://daily-bangladeshmirror.com",
  },
];

export type ProcessStep = {
  icon: LucideIcon;
  step: string;
  tag: string;
  title: string;
  description: string;
};

export const PROCESS: ProcessStep[] = [
  {
    icon: Search,
    step: "01",
    tag: "Free · 30 min",
    title: "Discovery",
    description:
      "A focused call to understand your goals, constraints, and what success looks like. No prep, no pressure.",
  },
  {
    icon: PenTool,
    step: "02",
    tag: "Optional · 2–4 wks",
    title: "Blueprint",
    description:
      "We map the architecture, scope, and roadmap — so you know exactly what we're building and why before a line of code.",
  },
  {
    icon: Rocket,
    step: "03",
    tag: "Fixed scope or retainer",
    title: "Build & ship",
    description:
      "Senior engineers build in fast, reviewable iterations and ship to production — then keep iterating with you.",
  },
];

export type Industry = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export const INDUSTRIES: Industry[] = [
  { icon: HeartPulse, name: "Healthcare & Life Sciences", description: "HIPAA-ready platforms, patient portals, and clinical tooling." },
  { icon: Landmark, name: "Financial Services & FinTech", description: "Secure payments, ledgers, and compliant financial products." },
  { icon: ShoppingBag, name: "E-commerce & Retail", description: "High-converting storefronts and headless commerce at scale." },
  { icon: Cloud, name: "SaaS & Technology", description: "Multi-tenant SaaS, admin tooling, and developer platforms." },
  { icon: Truck, name: "Logistics & Supply Chain", description: "Fleet tracking, routing, and real-time operations dashboards." },
  { icon: Building2, name: "Real Estate & PropTech", description: "Listing platforms, CRMs, and property management systems." },
  { icon: GraduationCap, name: "Education & EdTech", description: "Learning platforms, assessments, and student experiences." },
  { icon: Clapperboard, name: "Media & Entertainment", description: "Streaming, content tooling, and audience engagement apps." },
  { icon: Plane, name: "Travel & Hospitality", description: "Booking engines, itineraries, and guest-facing products." },
];

export type Segment = {
  tier: string;
  title: string;
  description: string;
};

export const SEGMENTS: Segment[] = [
  { tier: "Startup", title: "Pre-seed to Seed", description: "Go from idea to a fundable MVP fast, with an architecture that won't box you in later." },
  { tier: "Startup", title: "Series A–C", description: "Scale your product and team with senior engineering muscle and zero ramp-up." },
  { tier: "Mid-market", title: "Growth companies", description: "Modernize legacy stacks and ship new revenue lines without slowing the business." },
  { tier: "Enterprise", title: "Large organizations", description: "Embed with your teams to deliver secure, compliant, production-grade systems." },
];

export const REGIONS = [
  "North America",
  "Europe",
  "Middle East",
  "Asia-Pacific",
] as const;

export const WHY_BELIEF = {
  eyebrow: "Core belief",
  title: "We engineer like owners — not like a vendor.",
  body: "CODIXEN is built around senior engineers who treat your product as their own. We challenge assumptions, sweat the details, and optimize for outcomes — not billable hours. The result is software that ships fast and survives scale.",
};

export const WHY_POINTS = [
  { title: "Founder-led delivery", description: "Senior architects lead your engagement personally — no juniors learning on your dime." },
  { title: "Built to scale", description: "Clean architecture, tests, and observability so your product grows without rewrites." },
  { title: "Ship in weeks", description: "A proven delivery system and reusable foundations get you to production fast." },
];

export type ClientStory = {
  company: string;
  industry: string;
  service: string;
  initials: string;
  quote: string;
  author: string;
  role: string;
};

export const CLIENT_STORIES: ClientStory[] = [
  {
    company: "Quanta",
    industry: "Analytics SaaS",
    service: "SaaS Platform Rebuild",
    initials: "SC",
    quote:
      "CODIXEN shipped our SaaS MVP in six weeks and it just worked. They operate like an in-house team that happens to be world-class — and they cut our query latency by 80% along the way.",
    author: "Sarah Chen",
    role: "CEO, Quanta",
  },
  {
    company: "Lumen",
    industry: "AI Product",
    service: "AI-Powered App Development",
    initials: "MR",
    quote:
      "The AI features they built became our biggest differentiator. They engineered a RAG pipeline over millions of documents — genuinely senior engineers who care about the product, not just the code.",
    author: "Marcus Reid",
    role: "CTO, Lumen",
  },
  {
    company: "Vaultive",
    industry: "Fintech",
    service: "Payments Platform Engineering",
    initials: "EN",
    quote:
      "Bank-grade reliability and a beautiful UI. CODIXEN sweated the details we didn't even know to ask about, and shipped a PCI-compliant platform that just doesn't go down.",
    author: "Elena Novak",
    role: "VP Engineering, Vaultive",
  },
];

export type Founder = {
  name: string;
  role: string;
  image: string;
  bio: string[];
  highlights: { value: string; label: string }[];
  skills: string[];
  socials: { label: string; href: string }[];
};

export const FOUNDER: Founder = {
  name: "Md Muhaiminul Islam Shihab",
  role: "Founder & Principal Engineer",
  image: "/founder.jpg",
  bio: [
    "Hi, I'm Shihab — a software developer with 3+ years of hands-on experience building web apps, SaaS platforms, and e-commerce systems that ship and scale.",
    "I've delivered production products across FinTech, commerce, and media — from multi-vendor marketplaces to loan management platforms — working end-to-end from architecture to launch. I lead every CODIXEN engagement personally, so you work directly with the engineer building your product.",
  ],
  highlights: [
    { value: "3+", label: "Years experience" },
    { value: "20+", label: "Products shipped" },
    { value: "100%", label: "Client ownership of code" },
  ],
  skills: [
    "Laravel",
    "PHP",
    "Vue.js",
    "Next.js",
    "React",
    "Livewire",
    "MySQL",
    "PostgreSQL",
    "Tailwind CSS",
    "AWS",
  ],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/muhaiminshihab" },
    { label: "Portfolio", href: "https://muhaiminshihab.github.io" },
  ],
};

export type FAQ = {
  question: string;
  answer: string;
};

export const FAQS: FAQ[] = [
  {
    question: "How quickly can you start?",
    answer:
      "Most engagements kick off within 1–2 weeks. After a discovery call we scope the work, align on timeline, and assign a dedicated senior team.",
  },
  {
    question: "How do you price projects?",
    answer:
      "We offer fixed-scope project pricing and monthly retainers for ongoing product work. After discovery, you get a clear proposal with no hidden costs.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. We help founders go from idea to MVP fast, then scale. We also partner with SMEs and enterprises modernizing their stack.",
  },
  {
    question: "Who owns the code and IP?",
    answer:
      "You do — 100%. All code, designs, and IP are yours, delivered in your own repositories with full documentation.",
  },
  {
    question: "Can you join an existing team or codebase?",
    answer:
      "Yes. We regularly embed with in-house teams, audit existing code, and accelerate delivery without disrupting your workflow.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer ongoing support, monitoring, and iteration. Many clients keep us on retainer to continuously ship improvements.",
  },
];
