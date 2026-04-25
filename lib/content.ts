import type { SiteContent } from "./types";

export const content: SiteContent = {
  person: {
    name: "Pratik Wadke",
    role: "SOFTWARE DEVELOPER — DATA ENGINEERING",
    company: {
      name: "Apollo Global Management",
      href: "https://www.apolloglobal.com/",
    },
    location: "Mumbai",
    availability: "Open to work",
    heroTagline:
      "I build the substrate that makes enterprise data fast, governed, and discoverable.",
    aboutLede:
      "I build scalable data platforms and the services that sit on top of them.",
    aboutBody: [
      "At Apollo Global Management, I work on the enterprise data platform that makes multi-million-row Snowflake datasets behave like well-indexed APIs. My work spans the layer between storage and consumption — metadata-driven query engines, governance workflows, and AI-native discovery using vector search and embeddings.",
      "I care about the unglamorous scaffolding — distributed systems, data quality, observability — that lets every other team move fast without breaking production. Currently exploring AI-native platforms and scalable semantic search at enterprise scale.",
    ],
    currentlyBuilding:
      "Next-generation data governance — row- and column-level quality evaluation as durable, observable workflows.",
    email: "pratikwadke02@gmail.com",
    phone: "+91 8108871865",
    socials: [
      { label: "Email", href: "mailto:pratikwadke02@gmail.com", display: "pratikwadke02@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/pratik-wadke", display: "linkedin.com/in/pratik-wadke" },
      { label: "GitHub", href: "https://github.com/pratikwadke02", display: "github.com/pratikwadke02" },
      { label: "Resume", href: "/resume.pdf", display: "resume.pdf" },
    ],
    resumeUrl: "/resume.pdf",
  },
  experience: [
    {
      id: "apollo-software-developer",
      company: "Apollo Global Management",
      role: "Software Developer — Data Engineering",
      location: "Mumbai",
      startDate: "2024-06",
      endDate: null,
      isCurrent: true,
      outcome:
        "Building Delphi — Apollo's enterprise data platform, where multi-million-row Snowflake datasets behave like well-indexed APIs.",
      bullets: [
        {
          text: "Engineered the Delphi Data API — a keyset-paginated, metadata-driven Data Viewer Service that eliminated repetitive Information Schema scans and significantly reduced query latency on multi-million-row Snowflake datasets.",
        },
        {
          text: "Built a Metrics Service for data-asset governance using Temporal workflows. Row- and column-level quality evaluation with Prometheus observability and structured MDC logging made platform reliability auditable.",
        },
        {
          text: "Developed an AI-driven MCP server for the Delphi Marketplace. Metadata-powered dynamic tools enable natural-language question answering and intelligent discovery of enterprise data assets.",
        },
        {
          text: "Designed semantic search using Snowflake Cortex embeddings and vector search — replacing keyword-match discovery with meaning-aware retrieval across the data catalog.",
        },
        {
          text: "Integrated Collibra (REST + GraphQL) to surface governance scores, enriched metadata, and live data-quality insights inside the marketplace.",
        },
        {
          text: "Deployed backend microservices on Azure AKS with Redis-backed indexing and caching, operating under production SLAs.",
        },
      ],
      stack: [
        "Java",
        "Kotlin",
        "Spring Boot",
        "Spring WebFlux",
        "Snowflake",
        "Temporal",
        "Azure AKS",
        "Redis",
        "Prometheus",
        "GraphQL",
      ],
    },
    {
      id: "kenmark-backend",
      company: "Kenmark ITan Solutions",
      role: "Backend Developer",
      location: "Remote",
      startDate: "2023-11",
      endDate: "2024-06",
      outcome:
        "Built the backend for a multi-tenant B2B/B2C commerce platform supporting sellers, customers, admins, and medical representatives.",
      bullets: [
        {
          text: "Designed modular Node.js services supporting four distinct user roles with role-specific API surfaces.",
        },
        {
          text: "Implemented RESTful APIs and optimized database interactions for improved performance and scalability.",
        },
        {
          text: "Collaborated with frontend and product teams to deliver end-to-end features in an agile environment.",
        },
      ],
      stack: ["Node.js", "Express", "REST APIs"],
    },
    {
      id: "apollo-intern",
      company: "Apollo Global Management",
      role: "Data Engineering Intern",
      location: "Mumbai",
      startDate: "2023-06",
      endDate: "2023-08",
      outcome:
        "Built ETL pipelines and backend services for Apollo's enterprise data platform.",
      bullets: [
        {
          text: "Authored Azure Data Factory pipelines for ingesting and transforming enterprise datasets.",
        },
        {
          text: "Developed Spring Boot services supporting data-platform workflows and integrations.",
        },
        {
          text: "Ran Snowflake load tests in JMeter to analyze and optimize warehouse performance.",
        },
      ],
      stack: ["Azure Data Factory", "Spring Boot", "Snowflake", "JMeter"],
    },
    {
      id: "parkit-backend",
      company: "ParkIt.biz",
      role: "Backend Developer",
      location: "Mumbai",
      startDate: "2022-12",
      endDate: "2023-05",
      outcome:
        "Built backend services for a parking management platform — booking, availability tracking, and real-time parking data.",
      bullets: [
        {
          text: "Designed APIs for booking, availability tracking, and user management.",
        },
        {
          text: "Integrated database operations for real-time parking data at scale.",
        },
        {
          text: "Contributed to system reliability and performance through structured backend design.",
        },
      ],
      stack: ["Node.js", "Express"],
    },
    {
      id: "tech-astute-fullstack",
      company: "Tech Astute",
      role: "Full Stack Developer",
      location: "India",
      startDate: "2022-07",
      endDate: "2024-06",
      outcome:
        "Shipped a client-facing dashboard with regional language support and secure OTP authentication.",
      bullets: [
        {
          text: "Built a dashboard in React + Redux + Material-UI with admin panel, OTP authentication, and regional language support.",
        },
        {
          text: "Developed RESTful APIs using Node.js and MySQL for handling user data and application workflows.",
        },
        {
          text: "Implemented responsive UI components and efficient state management for a smoother user experience.",
        },
      ],
      stack: ["React", "Redux", "Material-UI", "Node.js", "MySQL"],
    },
  ],
  projects: [
    {
      id: "delphi-data-api",
      kind: "work",
      title: "Delphi Data API",
      tagline:
        "Metadata-driven, keyset-paginated data service for multi-million-row Snowflake datasets.",
      description: [
        "A Data Viewer Service that makes multi-million-row Snowflake datasets behave like well-indexed APIs. Uses keyset pagination and metadata-driven query patterns to eliminate the repetitive Information Schema scans that used to dominate query latency.",
        "Built on Spring WebFlux with reactive streams end-to-end. Deployed on Azure AKS with Redis-backed indexing for hot-path caching.",
      ],
      stack: ["Java", "Kotlin", "Spring WebFlux", "Snowflake", "Redis", "Azure AKS"],
      year: "2024–present",
      role: "Lead",
      featured: true,
      monogram: "D",
    },
    {
      id: "ai-mcp-server",
      kind: "work",
      title: "Delphi AI MCP Server",
      tagline:
        "Natural-language discovery across enterprise data assets via a metadata-powered MCP server.",
      description: [
        "An AI-driven MCP server for the Delphi Marketplace. Generates tools dynamically from metadata, enabling natural-language question answering and intelligent discovery of enterprise data.",
      ],
      stack: ["Kotlin", "MCP", "LLMs", "Snowflake"],
      year: "2024",
      featured: false,
      monogram: "A",
    },
    {
      id: "metrics-service",
      kind: "work",
      title: "Metrics Service",
      tagline:
        "Temporal-workflow-powered data quality platform with row- and column-level evaluation.",
      description: [
        "A governance service for data assets. Runs row- and column-level data quality evaluations as durable Temporal workflows. Structured MDC logging and Prometheus observability make every run auditable.",
      ],
      stack: ["Java", "Temporal", "Prometheus", "Snowflake"],
      year: "2024",
      featured: false,
      monogram: "M",
    },
    {
      id: "semantic-search",
      kind: "work",
      title: "Semantic Search",
      tagline:
        "Vector-search-backed enterprise data discovery using Snowflake Cortex embeddings.",
      description: [
        "Replaced keyword-match discovery in the marketplace with meaning-aware retrieval. Built on Snowflake Cortex embeddings and vector search for a lower-friction path from user intent to relevant data assets.",
      ],
      stack: ["Snowflake Cortex", "Vector Search", "Embeddings"],
      year: "2024",
      featured: false,
      monogram: "S",
    },
    {
      id: "personal-project-placeholder",
      kind: "personal",
      title: "Personal Project",
      tagline: "Coming soon — a personal project showcasing end-to-end work.",
      description: [
        "// TODO: Add a personal project here. Pratik — update this entry in lib/content.ts.",
      ],
      stack: ["TypeScript", "React"],
      year: "TBD",
      featured: false,
      monogram: "·",
      links: {
        // TODO: add github / live URLs
      },
    },
  ],
  skills: [
    {
      category: "CURRENTLY WORKING WITH",
      skills: [
        { name: "Java", provenance: "apollo" },
        { name: "Kotlin", provenance: "apollo" },
        { name: "Spring Boot", provenance: "apollo" },
        { name: "Spring WebFlux", provenance: "apollo" },
        { name: "Snowflake", provenance: "apollo" },
        { name: "Temporal", provenance: "apollo" },
        { name: "Azure AKS", provenance: "apollo" },
        { name: "Redis", provenance: "apollo" },
        { name: "Prometheus", provenance: "apollo" },
        { name: "GraphQL", provenance: "apollo" },
        { name: "SQL", provenance: "apollo" },
      ],
    },
    {
      category: "EXPLORING",
      skills: [
        { name: "Vector Search", provenance: "apollo", note: "Snowflake Cortex + semantic retrieval" },
        { name: "Embeddings", provenance: "apollo" },
        { name: "LLM Integrations", provenance: "side-projects" },
        { name: "MCP", provenance: "apollo" },
        { name: "AI-Native Data Platforms", provenance: "self-taught" },
      ],
    },
    {
      category: "PRIOR EXPERIENCE",
      skills: [
        { name: "React", provenance: "side-projects" },
        { name: "Node.js", provenance: "side-projects" },
        { name: "Express", provenance: "side-projects" },
        { name: "MongoDB", provenance: "side-projects" },
        { name: "MySQL", provenance: "side-projects" },
        { name: "Python", provenance: "academic" },
        { name: "C++", provenance: "academic" },
        { name: "JavaScript", provenance: "side-projects" },
        { name: "Redux", provenance: "side-projects" },
        { name: "Material-UI", provenance: "side-projects" },
      ],
    },
  ],
  education: [
    {
      institution: "Dwarkadas J. Sanghvi College of Engineering",
      degree: "B.Tech, Information Technology · Honors in DevOps",
      startYear: "2020",
      endYear: "2024",
      note: "CGPA 9.3 / 10",
      location: "Mumbai",
    },
    {
      institution: "Nirmala Memorial Foundation Junior College",
      degree: "Higher Secondary Certificate · Maharashtra State Board",
      startYear: "2018",
      endYear: "2020",
      note: "82%",
      location: "Mumbai",
    },
  ],
  certifications: [],
  marqueeKeywords: [
    "KEYSET PAGINATION",
    "TEMPORAL WORKFLOWS",
    "VECTOR SEARCH",
    "AZURE AKS",
    "SNOWFLAKE CORTEX",
    "MCP",
    "COLLIBRA",
    "REDIS",
    "REACTIVE PROGRAMMING",
    "DISTRIBUTED SYSTEMS",
  ],
  colophonTech: [
    { name: "Next.js", version: "14.2", url: "https://nextjs.org" },
    { name: "Framer Motion", version: "11", url: "https://www.framer.com/motion/" },
    { name: "Fraunces", version: "variable", url: "https://fonts.google.com/specimen/Fraunces" },
    { name: "Inter", version: "variable", url: "https://rsms.me/inter/" },
    { name: "JetBrains Mono", version: "latest", url: "https://www.jetbrains.com/lp/mono/" },
    { name: "Vercel", version: "edge", url: "https://vercel.com" },
  ],
  contactStatement:
    "Open to conversations about data platforms, distributed systems, and AI-native search. I reply within a day or two.",
  seo: {
    title: "Pratik Wadke — Software Developer @ Apollo Global Management",
    description:
      "Data engineer building scalable data platforms at Apollo Global Management. Distributed systems, Snowflake, Azure, and AI-native search.",
    siteUrl: "https://pratikwadke.vercel.app",
    ogImagePath: "/og-image.jpg",
  },
};
