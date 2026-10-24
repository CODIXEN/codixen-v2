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
  CreditCard,
  HandCoins,
  HardHat,
  Trophy,
  Luggage,
  Car,
  UtensilsCrossed,
  Zap,
  Fuel,
  type LucideIcon,
} from "lucide-react";
import {
  siReact,
  siNextdotjs,
  siVuedotjs,
  siTypescript,
  siTailwindcss,
  siJavascript,
  siLaravel,
  siPhp,
  siLivewire,
  siNodedotjs,
  siPython,
  siGraphql,
  siFlutter,
  siExpo,
  siFirebase,
  siSwift,
  siKotlin,
  siAnthropic,
  siLangchain,
  siHuggingface,
  siOllama,
  siPytorch,
  siMysql,
  siPostgresql,
  siRedis,
  siMongodb,
  siSupabase,
  siPrisma,
  siDocker,
  siVercel,
  siDigitalocean,
  siGithubactions,
  siCloudflare,
  type SimpleIcon,
} from "simple-icons";

// Cal.com booking — replace CAL_LINK with your real cal.com event link
// (format: "username/event-slug", e.g. "codixen/discovery-call").
export const CAL_NAMESPACE = "discovery";
export const CAL_LINK = "https://cal.com/muhaiminshihab/30min";

// Company social profiles (footer + structured data).
// TODO: these were guessed — confirm both pages are CODIXEN's before launch.
export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/codixen" },
  { label: "Facebook", href: "https://www.facebook.com/codixen" },
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
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

export const HERO_PROOF = [
  "Free 30-min discovery call",
  "You own 100% of the code",
  "Senior engineers only",
] as const;

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
  { icon: CreditCard, name: "Banking & Payments", description: "Digital banking, wallets, and payment gateway integrations." },
  { icon: HandCoins, name: "Mortgage & Lending", description: "Loan origination, underwriting workflows, and borrower portals." },
  { icon: ShoppingBag, name: "Retail, E-commerce & FMCG", description: "High-converting storefronts, POS, and distribution systems." },
  { icon: Cloud, name: "SaaS & Technology", description: "Multi-tenant SaaS, admin tooling, and developer platforms." },
  { icon: Truck, name: "Logistics & Shipping", description: "Fleet tracking, routing, and real-time operations dashboards." },
  { icon: Building2, name: "Real Estate & PropTech", description: "Listing platforms, CRMs, and property management systems." },
  { icon: HardHat, name: "Construction", description: "Project tracking, site reporting, and procurement tools." },
  { icon: GraduationCap, name: "Education & E-learning", description: "Learning platforms, assessments, and student experiences." },
  { icon: Clapperboard, name: "Media & Entertainment", description: "News, streaming, content tooling, and audience engagement." },
  { icon: Trophy, name: "Sports", description: "Fan apps, league management, ticketing, and live scores." },
  { icon: Luggage, name: "Travel & Hospitality", description: "Booking engines, itineraries, and guest-facing products." },
  { icon: Plane, name: "Aviation", description: "Crew scheduling, maintenance logs, and passenger services." },
  { icon: Car, name: "Automotive", description: "Dealer platforms, fleet apps, and service booking systems." },
  { icon: UtensilsCrossed, name: "Food & Beverage", description: "Ordering, delivery, inventory, and restaurant operations." },
  { icon: Zap, name: "Energy & Utilities", description: "Metering dashboards, billing, and field-service apps." },
  { icon: Fuel, name: "Oil & Gas", description: "Asset monitoring, compliance reporting, and supply tracking." },
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
};

export const FOUNDER: Founder = {
  name: "Maria Islam",
  role: "Founder, CODIXEN",
};

export type TechItem = {
  name: string;
  /** Short role label shown under the name. */
  role: string;
  /** simple-icons brand icon; omitted for brands simple-icons can't ship (e.g. AWS). */
  icon?: SimpleIcon;
  /** Brand color used when `icon` is absent. */
  color?: string;
};

export type TechCategory = { label: string; description: string; items: TechItem[] };

// Technology stack grouped by tab. Edit freely — keep each list honest.
export const TECH_STACK: TechCategory[] = [
  {
    label: "Frontend",
    description: "Fast, accessible interfaces built with modern component frameworks.",
    items: [
      { name: "React", role: "UI library", icon: siReact },
      { name: "Next.js", role: "React framework", icon: siNextdotjs },
      { name: "Vue.js", role: "UI framework", icon: siVuedotjs },
      { name: "TypeScript", role: "Typed JavaScript", icon: siTypescript },
      { name: "Tailwind CSS", role: "Styling system", icon: siTailwindcss },
      { name: "JavaScript", role: "Web language", icon: siJavascript },
    ],
  },
  {
    label: "Backend",
    description: "Secure APIs and business logic designed to scale with your users.",
    items: [
      { name: "Laravel", role: "PHP framework", icon: siLaravel },
      { name: "PHP", role: "Server language", icon: siPhp },
      { name: "Livewire", role: "Reactive UI for Laravel", icon: siLivewire },
      { name: "Node.js", role: "JavaScript runtime", icon: siNodedotjs },
      { name: "Python", role: "Scripting & AI", icon: siPython },
      { name: "GraphQL", role: "API query language", icon: siGraphql },
    ],
  },
  {
    label: "Mobile",
    description: "Cross-platform and native apps with offline support and push.",
    items: [
      { name: "Flutter", role: "Cross-platform UI", icon: siFlutter },
      { name: "React Native", role: "Native apps in React", icon: siReact },
      { name: "Expo", role: "React Native tooling", icon: siExpo },
      { name: "Firebase", role: "Backend for mobile", icon: siFirebase },
      { name: "Swift", role: "Native iOS", icon: siSwift },
      { name: "Kotlin", role: "Native Android", icon: siKotlin },
    ],
  },
  {
    label: "AI & ML",
    description: "LLM features, RAG pipelines and agents wired into your product.",
    items: [
      { name: "Claude", role: "Large language model", icon: siAnthropic },
      { name: "LangChain", role: "LLM orchestration", icon: siLangchain },
      { name: "Hugging Face", role: "Open models", icon: siHuggingface },
      { name: "Ollama", role: "Self-hosted LLMs", icon: siOllama },
      { name: "PyTorch", role: "Model training", icon: siPytorch },
      { name: "Python", role: "ML ecosystem", icon: siPython },
    ],
  },
  {
    label: "Database",
    description: "Relational and document stores tuned for reliability and speed.",
    items: [
      { name: "MySQL", role: "Relational database", icon: siMysql },
      { name: "PostgreSQL", role: "Relational database", icon: siPostgresql },
      { name: "Redis", role: "Cache & queues", icon: siRedis },
      { name: "MongoDB", role: "Document database", icon: siMongodb },
      { name: "Supabase", role: "Postgres platform", icon: siSupabase },
      { name: "Prisma", role: "Type-safe ORM", icon: siPrisma },
    ],
  },
  {
    label: "Cloud & DevOps",
    description: "Automated deploys, containers and edge delivery you can trust.",
    items: [
      { name: "AWS", role: "Cloud infrastructure", color: "#FF9900" },
      { name: "Docker", role: "Containers", icon: siDocker },
      { name: "Vercel", role: "Edge hosting", icon: siVercel },
      { name: "DigitalOcean", role: "Cloud servers", icon: siDigitalocean },
      { name: "GitHub Actions", role: "CI/CD", icon: siGithubactions },
      { name: "Cloudflare", role: "CDN & security", icon: siCloudflare },
    ],
  },
];

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
