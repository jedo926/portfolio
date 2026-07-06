export const projects = [
  {
    name: "PassMate",
    tag: "flagship",
    desc: "No-code platform for creating, distributing and validating Apple & Google Wallet passes — from designer to a signed, scannable pass on a customer's phone.",
    stack: ["Next.js", "TypeScript", "Supabase RLS", "Apple PassKit", "Google Wallet API"],
    proof: "134 commits · Vitest + pgTAP + Playwright · live beta",
    repo: "https://github.com/jedo926/PassMate",
    live: "https://passmate-five.vercel.app",
    shot: "/shots/passmate.png",
  },
  {
    name: "TrendVision1",
    tag: "built @ Trend Micro",
    desc: "AI-powered cybersecurity training platform: RAG assistant grounded in product docs, dynamic assessments, voice lessons and a custom LLM firewall with secret detection.",
    stack: ["FastAPI", "LangChain", "OpenAI", "Supabase", "Railway"],
    proof: "in production · sole owner of releases",
    repo: "https://github.com/jedo926/trend-vision1",
    live: "https://trendvision1.vercel.app",
    shot: "/shots/trendvision1.png",
  },
  {
    name: "Amtvision OS",
    tag: "playground",
    desc: "A macOS-style workspace in the browser — six windowed apps behind a menu bar and dock, including an AI assistant with tools that operates the whole workspace for you.",
    stack: ["Next.js", "React 19", "TypeScript", "Claude API", "Playwright"],
    proof: "windowing engine + lexical RAG from scratch",
    repo: "https://github.com/jedo926/amtvision_os",
    live: "https://amtvisionos.vercel.app",
    shot: "/shots/amtvision.png",
  },
  {
    name: "Sentinel Vision",
    tag: "computer vision",
    desc: "Real-time CCTV behavior detection: flags phone use with YOLOv8 and sleeping via MediaPipe face-mesh, buffers rolling clips and logs events to Supabase through FastAPI.",
    stack: ["Python", "YOLOv8", "MediaPipe", "OpenCV", "FastAPI"],
    proof: "RTSP streams · 10s rolling clip buffer",
    repo: "https://github.com/jedo926/sentinel-vision",
    live: null,
    shot: null,
  },
  {
    name: "CosmicAI",
    tag: "NASA Space Apps",
    desc: "ML platform that hunts exoplanets in telescope light-curve data — a Random Forest trained on Kepler, K2 and TESS archives, with multi-planet detection and host-star lookups.",
    stack: ["Node.js", "scikit-learn", "Random Forest", "NASA archives"],
    proof: "hackathon build · interactive visualizations",
    repo: "https://github.com/jedo926/cosmicai-exoplanets",
    live: null,
    shot: "/shots/cosmicai.png",
  },
  {
    name: "LeadGen AI",
    tag: "automation",
    desc: "End-to-end B2B outreach machine: prospects from Apollo.io, an OpenAI-personalized email per lead, delivery through Gmail OAuth — tracked in a Next.js dashboard.",
    stack: ["Next.js 16", "OpenAI", "Apollo.io", "Gmail API", "Supabase"],
    proof: "prospect → personalize → send → track",
    repo: "https://github.com/jedo926/leadgen-ai",
    live: null,
    shot: null,
  },
  {
    name: "Meal Mate",
    tag: "consumer app",
    desc: "Meal planning and recipe discovery: personalized recommendations, a weekly planner with shopping lists, favorites, allergy management and nutrition tracking.",
    stack: ["JavaScript", "Supabase", "Auth", "Dark mode"],
    proof: "complete consumer front-end · live",
    repo: "https://github.com/jedo926/meal-mate",
    live: "https://mealmate-cyan.vercel.app",
    shot: "/shots/mealmate.png",
  },
];

export const caseStudies = [
  {
    client: "Al-Futtaim · Marks & Spencer",
    title: "Corporate staff-training platform",
    desc: "Delivered a training platform for retail staff with quizzes and automatic certificate generation, shipped end-to-end as a solo freelancer for one of the Gulf's largest retail groups.",
    stack: ["JavaScript", "Quiz engine", "Certificate generation"],
    live: null,
    shot: null,
  },
  {
    client: "Ministry of Education (KSA)",
    title: "Suluk — ethics learning platform",
    desc: "Built a bilingual learning platform with dynamic exams teaching students to recognize and reject harmful behavior, commissioned via Al Faris International School.",
    stack: ["JavaScript", "Bilingual EN/AR", "Dynamic exams"],
    live: "https://suluk-three.vercel.app",
    shot: "/shots/suluk.png",
  },
  {
    client: "Ragaban Law Firm",
    title: "Multi-page firm website",
    desc: "Designed and shipped the firm's web presence — services, team and contact — as a fast static Vite build.",
    stack: ["Vite", "Static site", "Multi-page"],
    live: "https://rn-coral.vercel.app",
    shot: "/shots/ragaban.png",
  },
  {
    client: "Summit & Ivy MUN",
    title: "Conference platforms",
    desc: "Full event sites for two Model UN conferences: committees, delegate guides, schedules and secretariat pages.",
    stack: ["HTML/CSS/JS", "Event sites"],
    live: "https://summitmun.vercel.app",
    shot: "/shots/summit.png",
  },
];

export const experience = [
  {
    when: "Jun 2026 — present",
    role: "AI & Full-Stack Development Intern",
    org: "Trend Micro",
    points: [
      "Independently designed and shipped TrendVision1 — frontend, backend, database and AI architecture.",
      "RAG assistant over internal docs: LangChain agents, OpenAI embeddings, Docling/MarkItDown ingestion.",
      "Sole owner of production: releases, monitoring and iteration on Vercel, Railway and Supabase.",
    ],
  },
  {
    when: "2025 — present",
    role: "Freelance Full-Stack & AI Developer",
    org: "Independent",
    points: [
      "Client delivery for Al-Futtaim (M&S) and Saudi Arabia's Ministry of Education.",
      "Scoped and shipped AI MVPs and automation systems for startup clients, requirements to production.",
      "n8n pipelines for review collection, keyword scraping and Supabase-driven discount codes.",
    ],
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  ai: ["RAG pipelines", "LangChain", "AI agents", "LLM firewalls", "OpenAI / Claude APIs", "n8n"],
  web: ["React", "Next.js", "FastAPI", "REST APIs", "Tailwind"],
  infra: ["Supabase", "PostgreSQL", "Vercel", "Railway", "Git", "Playwright"],
};

export const contact = {
  email: "abdulmajeedtayyar92@gmail.com",
  github: "https://github.com/jedo926",
  location: "Riyadh, Saudi Arabia",
  cv: "/Abdulmajeed_Tayyar_CV.pdf",
};
