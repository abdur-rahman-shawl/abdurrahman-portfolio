export interface ProjectData {
  slug: string;
  title: string;
  meta: {
    role: string;
    timeline: string;
    context: string;
    status: string;
  };
  techStack: string[];
  problemStatement: string;
  solutionArchitecture: string;
  impactMetrics: { value: string; label: string }[];
  nextProjectSlug: string | null;
  prevProjectSlug: string | null;
  animType: "rotate" | "scan" | "wave";
}

export const projectsData: ProjectData[] = [
  {
    slug: "semantic-job-resolver",
    title: "Semantic Job Resolver",
    meta: {
      role: "Lead GenAI Engineer",
      timeline: "Q3 2023",
      context: "Enterprise Search Pipeline",
      status: "Operational"
    },
    techStack: ["Python", "Apache SOLR", "BIO NER", "Vector Embeddings", "SpaCy", "FastAPI"],
    problemStatement: "Traditional keyword matching completely fails to capture the true intent behind millions of messy, real-world job titles. The existing legacy system was returning highly irrelevant results, resulting in a severe drop in platform conversion metrics and a degraded user experience for candidates seeking specific niche roles.",
    solutionArchitecture: "Engineered a high-performance NLP categorization engine. Bypassed literal text matching entirely by developing a custom NLP pipeline with BIO NER tagging. Generated precise vector embeddings fed into Apache SOLR, transforming the search from naive lexical matching into strict intent-based semantic retrieval.",
    impactMetrics: [
      { value: "100M+", label: "Listings Resolved" },
      { value: "3x", label: "Relevance Speed" },
      { value: "40%", label: "Conversion Lift" }
    ],
    prevProjectSlug: null,
    nextProjectSlug: "lucy-ai-assistant",
    animType: "rotate"
  },
  {
    slug: "lucy-ai-assistant",
    title: "Lucy AI Assistant",
    meta: {
      role: "AI Systems Architect",
      timeline: "Q4 2023",
      context: "Consumer B2C App",
      status: "Live in 4 Countries"
    },
    techStack: ["GPT-4", "Flask", "Microservices", "SpaCy", "CORS iframe", "React"],
    problemStatement: "Job seekers are chronically overwhelmed by static search filters and massive boolean query inputs. The lack of personalized, human-like guidance meant high bounce rates at the initial search phase, losing valuable candidate data and engagement.",
    solutionArchitecture: "Architected 'Lucy'—a conversational AI agent that guides users through career searches mimicking human recruiter behavior. Orchestrated as a secure Flask-based microservice combining GPT-4 reasoning with SpaCy extraction, served globally via a custom CORS-enabled iframe for seamless integration.",
    impactMetrics: [
      { value: "10k+", label: "Active Users" },
      { value: "4", label: "Nations Deployed" },
      { value: "1st", label: "Of its kind in UK" }
    ],
    prevProjectSlug: "semantic-job-resolver",
    nextProjectSlug: "autonomous-agents",
    animType: "wave"
  },
  {
    slug: "autonomous-agents",
    title: "Autonomous Agents",
    meta: {
      role: "Generative AI Engineer",
      timeline: "Q1 2024",
      context: "Internal Infrastructure",
      status: "Production Executing"
    },
    techStack: ["LangChain", "OpenAI Functions", "PostgreSQL", "Python", "Vector DB"],
    problemStatement: "Basic LLM chatbots are limited strictly to static Q&A capabilities based on localized context windows. We needed systems that could 'think', formulate multi-step plans, and securely 'act' upon raw relational databases without human intervention.",
    solutionArchitecture: "Transitioned from simple RAG to fully autonomous agency. Utilized LangChain and OpenAI Function Calling to create an agent capable of strict task planning and execution. Designed a zero-trust Natural Language-to-SQL pipeline where the agent securely queries a PostgreSQL database, interprets findings, and self-corrects its logic.",
    impactMetrics: [
      { value: "100%", label: "Autonomous Execs" },
      { value: "0", label: "SQL Injections" },
      { value: "Async", label: "Parallel Workflows" }
    ],
    prevProjectSlug: "lucy-ai-assistant",
    nextProjectSlug: "ai-seo-architect",
    animType: "scan"
  },
  {
    slug: "ai-seo-architect",
    title: "AI SEO Architect",
    meta: {
      role: "SEO / AI Engineer",
      timeline: "Q2 2024",
      context: "Growth & Acquisition",
      status: "Active Indexing"
    },
    techStack: ["Python", "Google Trends API", "Schema.org", "HTML parsers", "Next.js"],
    problemStatement: "Manually creating SEO-optimized descriptions and structured FAQs for millions of highly specific landing pages is physically impossible. The platform was losing massive amounts of organic traffic due to thin content and poor crawl traversal.",
    solutionArchitecture: "Built a fully autonomous pipeline that generates high-standard, SEO-optimized content mapped directly to real-time search trends. Integrated hardcoded Google Rich Snippets natively into the payload and ran an automated hyperlinking engine to build a massive internal PageRank web.",
    impactMetrics: [
      { value: "5M+", label: "Internal Links Built" },
      { value: "Auto", label: "Rich Snippets" },
      { value: "10x", label: "Crawlability Rate" }
    ],
    prevProjectSlug: "autonomous-agents",
    nextProjectSlug: "global-resume-parser",
    animType: "rotate"
  },
  {
    slug: "global-resume-parser",
    title: "Global Resume Parser",
    meta: {
      role: "Lead Full-Stack AI",
      timeline: "Q3 2024",
      context: "Data Pipeline",
      status: "Processing"
    },
    techStack: ["Google GenAI", "RAG", "Node.js", "JSON mapping", "Cloud Functions"],
    problemStatement: "To build a superior employer-candidate matching engine, we required structured, high-fidelity data extraction at an unprecedented scale, handling resumes across multiple languages and wildly varying PDF structures.",
    solutionArchitecture: "Leveraged the Google GenAI SDK combined with advanced Retrieval-Augmented Generation (RAG) to dynamically extract, normalize, and validate complex resume data. The pipeline translates fuzzy human input into strictly standardized JSON profiles for precise downstream algorithmic matching.",
    impactMetrics: [
      { value: "2M+", label: "Resumes Parsed" },
      { value: "40+", label: "Countries Scaled" },
      { value: "15", label: "Languages Handled" }
    ],
    prevProjectSlug: "ai-seo-architect",
    nextProjectSlug: "whatjobs-native-pwa",
    animType: "scan"
  },
  {
    slug: "whatjobs-native-pwa",
    title: "WhatJobs Native PWA",
    meta: {
      role: "Sole Architect",
      timeline: "Q4 2024",
      context: "Mobile Ecosystem",
      status: "Live in Stores"
    },
    techStack: ["Lit", "Flask", "PWA", "Service Workers", "Firebase / FCM", "Capacitor"],
    problemStatement: "Web-only platforms suffer heavily in candidate retention. We needed a device-native presence in iOS and Android ecosystem stores that could deliver instant push notifications and operate robustly under offline or poor-network conditions.",
    solutionArchitecture: "Single-handedly architected a cutting-edge Progressive Web App utilizing Lit components and Python Flask. Packaged natively for app stores, it implements custom Service Workers for aggressive offline caching and integrates Firebase Cloud Messaging (FCM) for sub-second real-time push notification delivery.",
    impactMetrics: [
      { value: "1", label: "Unified Codebase" },
      { value: "Sub 1s", label: "Push Latency" },
      { value: "100%", label: "Offline Capable" }
    ],
    prevProjectSlug: "global-resume-parser",
    nextProjectSlug: null,
    animType: "wave"
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(p => p.slug === slug);
}
