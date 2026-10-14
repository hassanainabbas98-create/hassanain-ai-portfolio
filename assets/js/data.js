/**
 * Portfolio Data Configuration
 * Edit this file to easily update your personal info, projects, skills, and experience!
 */

window.PORTFOLIO_DATA = {
  personal: {
    name: "Alex Morgan",
    role: "Full-Stack Software Engineer",
    typingRoles: [
      "Full-Stack Software Engineer",
      "Cloud & System Architect",
      "React & Node.js Specialist",
      "Open Source Contributor"
    ],
    bio: "Passionate engineer with 4+ years of building high-performance, scalable web applications and clean APIs. Dedicated to bridging user-centric design with resilient backend architectures.",
    location: "San Francisco, CA (Open to Remote)",
    email: "alex.morgan.dev@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    resumeUrl: "#resume",
    availability: "Available for new roles & projects",
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Completed Projects", value: "25+" },
      { label: "Code Commits", value: "1.8k+" },
      { label: "Happy Clients", value: "15+" }
    ]
  },

  skills: {
    frontend: [
      { name: "React.js / Next.js", level: "Advanced", icon: "code" },
      { name: "TypeScript", level: "Advanced", icon: "file-code" },
      { name: "Tailwind CSS", level: "Expert", icon: "layout" },
      { name: "HTML5 & Modern CSS3", level: "Expert", icon: "globe" },
      { name: "Vue.js / Nuxt", level: "Intermediate", icon: "layers" },
      { name: "Redux / Zustand", level: "Advanced", icon: "database" }
    ],
    backend: [
      { name: "Node.js / Express", level: "Advanced", icon: "server" },
      { name: "Python / FastAPI", level: "Advanced", icon: "cpu" },
      { name: "RESTful & GraphQL APIs", level: "Expert", icon: "network" },
      { name: "Microservices", level: "Intermediate", icon: "box" },
      { name: "Authentication (OAuth, JWT)", level: "Advanced", icon: "shield-check" }
    ],
    databaseCloud: [
      { name: "PostgreSQL / MySQL", level: "Advanced", icon: "database" },
      { name: "MongoDB", level: "Advanced", icon: "hard-drive" },
      { name: "Redis Caching", level: "Intermediate", icon: "zap" },
      { name: "Docker & Containers", level: "Intermediate", icon: "container" },
      { name: "AWS (S3, EC2, Lambda)", level: "Intermediate", icon: "cloud" },
      { name: "CI/CD (GitHub Actions)", level: "Advanced", icon: "git-merge" }
    ],
    tools: [
      { name: "Git & Version Control", level: "Expert", icon: "git-branch" },
      { name: "VS Code & Neovim", level: "Advanced", icon: "terminal" },
      { name: "Figma to Code", level: "Intermediate", icon: "figma" },
      { name: "Jest & Playwright Testing", level: "Intermediate", icon: "check-circle" },
      { name: "Postman & Swagger API Docs", level: "Expert", icon: "send" }
    ]
  },

  projects: [
    {
      id: "cloudscale-saas",
      title: "CloudScale Analytics SaaS",
      category: "fullstack",
      subtitle: "Real-time infrastructure monitoring dashboard",
      description: "A comprehensive SaaS platform providing real-time telemetry, query latency heatmaps, and automated incident alerting for distributed microservices.",
      fullDescription: "Built with Next.js on the frontend and an event-driven Node.js backend. Features live WebSocket updates, time-series metrics visualization with Chart.js, Redis caching layer to handle 10k+ requests/min, and multi-tenant authorization using JWT and PostgreSQL row-level security.",
      image: "assets/images/project1.svg",
      tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"],
      highlights: [
        "Architected distributed pub/sub pipeline reducing notification latency by 45%",
        "Designed responsive glassmorphism dark mode UI with interactive time-series charts",
        "Implemented role-based access control (RBAC) and Stripe billing subscriptions"
      ],
      liveUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/cloudscale-saas"
    },
    {
      id: "nexus-ecommerce",
      title: "Nexus Modern E-Commerce",
      category: "fullstack",
      subtitle: "High-performance headless online store",
      description: "Ultra-fast headless e-commerce store with instant search, optimistic cart management, dynamic currency conversion, and checkout pipeline.",
      fullDescription: "Designed with React 19, Tailwind CSS, and a Node.js microservice architecture. Achieved 99+ Google Lighthouse score through aggressive image optimization, server-side caching, and lightweight bundle footprint.",
      image: "assets/images/project2.svg",
      tags: ["React", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
      highlights: [
        "Instant elastic search filtering with debounced indexing",
        "End-to-end checkout integration with webhook verification and invoice generation",
        "Sub-second page transitions with optimistic state updates"
      ],
      liveUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/nexus-ecommerce"
    },
    {
      id: "taskflow-ai",
      title: "TaskFlow Collaborative Hub",
      category: "frontend",
      subtitle: "Kanban board & team workflow platform",
      description: "Interactive real-time collaboration board with drag-and-drop task workflows, markdown documentation editor, and AI task breakdown assistant.",
      fullDescription: "Features fluid drag-and-drop interactions, live cursor tracking across concurrent team sessions, and smart tagging. Uses HTML5 drag-and-drop APIs, WebSockets, and state persistence with offline sync support.",
      image: "assets/images/project3.svg",
      tags: ["TypeScript", "Tailwind CSS", "WebSockets", "Zustand", "Vite"],
      highlights: [
        "Zero-jank 60fps drag & drop with custom reordering algorithms",
        "Conflict-free sync engine across collaborative multi-user editing sessions",
        "Full keyboard accessibility (a11y) shortcuts and focus trapping"
      ],
      liveUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/taskflow-ai"
    },
    {
      id: "hyper-api-gateway",
      title: "HyperGate Distributed API Gateway",
      category: "backend",
      subtitle: "High-throughput reverse proxy & rate limiter",
      description: "Lightweight, configurable API gateway featuring token bucket rate limiting, automated SSL termination, and dynamic routing telemetry.",
      fullDescription: "Constructed with Node.js and Redis cluster backing. Handles request sanitization, IP throttling, health check failover, and structured JSON logging with OpenTelemetry tracing.",
      image: "assets/images/project4.svg",
      tags: ["Node.js", "Redis", "Docker", "REST API", "Microservices"],
      highlights: [
        "Benchmark throughput: sustains 18,000 requests/sec with < 5ms added latency",
        "Configurable token-bucket rate limiter per API key and client IP",
        "Comprehensive Swagger/OpenAPI documentation and automated health checks"
      ],
      liveUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/hyper-api-gateway"
    }
  ],

  experiences: [
    {
      role: "Senior Full-Stack Engineer",
      company: "TechNova Solutions",
      period: "2023 - Present",
      location: "San Francisco, CA (Hybrid)",
      description: "Lead developer for core customer-facing web applications. Mentored 4 junior engineers, orchestrated migration to modern TypeScript/React stack, and improved application load times by 38%.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      role: "Software Developer",
      company: "Vanguard Digital Lab",
      period: "2021 - 2023",
      location: "Remote",
      description: "Engineered scalable RESTful APIs, designed reusable UI component libraries with Tailwind CSS, and managed deployment pipelines using Docker and GitHub Actions.",
      technologies: ["JavaScript", "Express", "MongoDB", "Docker", "Tailwind CSS"]
    },
    {
      role: "Junior Web Developer",
      company: "Alpha Byte Studios",
      period: "2020 - 2021",
      location: "Remote",
      description: "Developed responsive landing pages, integrated payment gateways, and resolved accessibility and cross-browser bugs across client portfolios.",
      technologies: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Git"]
    }
  ]
};
