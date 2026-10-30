export const profile = {
  name: "Maryam Ali",
  title: "Software Engineer",
  location: "Lahore, Pakistan",
  email: "mariyamali1623@gmail.com",
  phone: "+92 327 4756937",
  linkedin: "https://www.linkedin.com/in/maryamali-softwarengineer/",
  github: "https://github.com/merium6",
  cv: "/Maryam-Ali-CV.pdf",
  available: true,
  availability: "Open to new opportunities",
  summary:
    "Software Engineer specializing in backend and full-stack development using C#, ASP.NET Core, REST APIs and relational databases. My experience includes multi-tenant platforms, RabbitMQ messaging, authentication, payment integrations and AI-assisted workflows with Python/FastAPI and LLM APIs, with recent Next.js, NestJS and TypeScript work across restaurant POS and backoffice applications.",
  capabilities: [
    {
      title: "Backend & APIs",
      detail: "ASP.NET Core REST APIs secured with JWT, ASP.NET Identity and role-based access control.",
    },
    {
      title: "Multi-tenant platforms",
      detail: "Tenant isolation, dynamic CRUD and import/export on a low-code microservices framework.",
    },
    {
      title: "Messaging & payments",
      detail: "RabbitMQ / MassTransit workers, Global Payments and Razorpay integrations.",
    },
    {
      title: "Modern full-stack",
      detail: "Next.js, NestJS and TypeScript across POS and backoffice applications.",
    },
  ],
  education: {
    degree: "BS in Computer Science",
    school: "Punjab University College of Information Technology (PUCIT), Lahore",
    period: "2020 – 2024",
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Techverx",
      companyUrl: "https://www.linkedin.com/company/techverx",
      period: "Nov 2025 – Present",
      location: "Lahore, Pakistan",
      highlight:
        "Delivering backend and full-stack features for a multi-tenant low-code framework and a restaurant POS and payments platform.",
      points: [
        "Build backend services with ASP.NET Core and PostgreSQL.",
        "Contribute to the Friday POS revamp using Next.js, NestJS and TypeScript across POS and backoffice applications.",
        "Contribute to selected AI-assisted workflows using Python/FastAPI and LLM APIs, with practical exposure to LangChain and LangGraph.",
        "Investigate cross-service production defects and work with product, frontend and QA on implementation, testing and release readiness.",
      ],
      tech: [
        "ASP.NET Core",
        "PostgreSQL",
        "RabbitMQ",
        "MassTransit",
        "Keycloak",
        "Next.js",
        "NestJS",
        "TypeScript",
        "Python/FastAPI",
        "Global Payments",
      ],
    },
    {
      role: "Software Engineer — Part-time",
      company: "MojiGurukul",
      companyUrl: "https://www.linkedin.com/company/mojigurukul",
      period: "2024 – Present",
      location: "Remote",
      highlight:
        "Contributing backend features to an AI-enabled gamified learning platform on a part-time, project-based basis.",
      points: [
        "Connected student profiles, assessment outcomes, game activity and learning progress to AI personalization workflows.",
        "Corrected progress persistence and status transitions for in-progress, completed and replayed activities, and resolved tutorial sequencing and navigation issues.",
        "Supported Razorpay subscriptions and checkout, including payment links, plan handling and upgrade/downgrade state management.",
      ],
      tech: ["ASP.NET Core", "MySQL", "REST APIs", "Razorpay", "SignalR"],
    },
    {
      role: "Associate Software Engineer",
      company: "Phenologix",
      companyUrl: "https://www.linkedin.com/company/phenologix",
      period: "Oct 2024 – Oct 2025",
      location: "Lahore, Pakistan",
      highlight:
        "Built business applications and REST APIs for real-estate and legal-services products.",
      points: [
        "Worked with ASP.NET Core, ASP.NET MVC, EF Core, Razor Views, jQuery and AJAX.",
        "Implemented JWT, ASP.NET Identity, cookie authentication and role-based access controls for multi-user workflows.",
        "Designed SQL Server and MySQL schemas, migrations and queries, and optimized data access while supporting production fixes.",
      ],
      tech: [
        "ASP.NET Core",
        "ASP.NET MVC",
        "EF Core",
        "Razor Views",
        "jQuery",
        "AJAX",
        "JWT",
        "ASP.NET Identity",
        "SQL Server",
        "MySQL",
      ],
    },
    {
      role: "Associate Software Engineer Intern",
      company: "Ammag IT Solutions",
      companyUrl: "https://www.linkedin.com/company/ammag-tech",
      period: "Jun 2024 – Sep 2024",
      location: "Lahore, Pakistan",
      highlight:
        "Contributed ASP.NET Core APIs and PostgreSQL features to the live Sorrow Place application.",
      points: [
        "Resolved defects, validated endpoints with Postman and handled database maintenance.",
      ],
      tech: ["ASP.NET Core", "PostgreSQL", "Postman"],
    },
  ],
  projects: [
    {
      name: "Friday POS — Cloud Restaurant Management Platform",
      category: "Restaurant Tech · Techverx · 2025 – Present",
      images: ["/projects/friday-home.png", "/projects/friday-menu.png", "/projects/friday-login.png"],
      caption:
        "Pizzaiolo Backoffice, a restaurant tenant running on Friday: menu management and sign-in.",
      liveUrl: "https://fridaypos.com/",
      demoUrl: "https://pizzaiolo.backoffice-v3.preprod.fridaypos.com/login",
      description:
        "Worked on the original .NET platform and its Next.js / NestJS revamp across POS and backoffice. On the revamp: order listing, history and details, RabbitMQ-based order sync between POS and backoffice, and sales reporting. On the original platform: Global Payments workflows (tokenized cards, charging, Pay-by-Link), tenant data-isolation fixes, and faster, more reliable payment token generation.",
      tags: ["Next.js", "NestJS", "TypeScript", "ASP.NET Core", "PostgreSQL", "RabbitMQ", "Global Payments"],
    },
    {
      name: "CCF — Common Central Framework",
      category: "Multi-tenant Low-Code Platform · Techverx · 2025 – Present",
      images: ["/projects/ccf-teal.png"],
      liveUrl: "https://admin.ccf-test.customis.net/",
      description:
        "Added row reordering, automatic numbering, custom layouts and automatic Conversation Agent database setup for new tenants; improved publishing and import/export so data models, screens and settings move correctly between environments; built chatbot, database-schema and Keycloak-backed user and tenant APIs; contributed to AI-assisted workflows using Python/FastAPI and LLM APIs; fixed dynamic CRUD issues; and hardened RabbitMQ / MassTransit workers with better retries and failed-message handling.",
      tags: [".NET 8", "PostgreSQL", "RabbitMQ", "MassTransit", "Keycloak", "Ocelot", "Python/FastAPI", "LangChain", "LangGraph"],
    },
    {
      name: "MojiGurukul — AI-Enabled Gamified Learning",
      category: "EdTech · Software Engineer (Part-time/Project-based)",
      images: ["/projects/mojigurukul.jpg"],
      liveUrl: "https://mojigurukul.com/",
      description:
        "Connected student profiles, assessment outcomes and game activity to AI personalization workflows, fixed progress persistence and status transitions, and supported Razorpay subscriptions including payment links and plan upgrades and downgrades.",
      tags: ["ASP.NET Core", "MySQL", "REST APIs", "Razorpay", "SignalR"],
    },
    {
      name: "10 Marla — Real-Estate CRM & Marketplace",
      category: "Real Estate · Phenologix · 2024 – 2025",
      images: ["/projects/tenmarla.jpg"],
      liveUrl: "https://10marla.com/",
      description:
        "Built APIs for property listings, search, filtering, bookings, user accounts and administration, plus Razor interfaces and optimized SQL queries.",
      tags: ["ASP.NET Core", "Razor Views", "SQL"],
    },
    {
      name: "EstheticMatch",
      category: "Healthcare & Wellness · Fiverr",
      images: ["/projects/estheticmatch.jpg"],
      liveUrl: "https://estheticmatch.com",
      description:
        "Built practitioner search and profile APIs for a platform connecting patients with aesthetic practitioners. Worked with AWS S3 buckets and implemented image upload and storage functionality.",
      tags: ["React.js", "PostgreSQL", "AWS S3"],
    },
  ],
  skills: {
    Backend: [
      "C#",
      "ASP.NET Core",
      ".NET 8",
      "ASP.NET MVC",
      "REST APIs",
      "Entity Framework Core",
      "Dapper",
      "LINQ",
      "Python",
      "FastAPI",
      "NestJS",
    ],
    "AI & Integrations": ["OpenAI API", "LLM APIs", "LangChain", "LangGraph"],
    Frontend: ["Next.js", "React", "TypeScript", "Razor Views", "HTML", "CSS", "jQuery", "AJAX"],
    "Databases & Caching": ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis", "Valkey"],
    "Architecture & Messaging": [
      "Microservices",
      "Multi-Tenancy",
      "RabbitMQ",
      "MassTransit",
      "SignalR",
      "Background Workers",
    ],
    Security: ["Keycloak", "JWT", "ASP.NET Identity", "Role-Based Access Control"],
    Payments: ["Global Payments", "Razorpay"],
    "Tools & Observability": [
      "Git",
      "Docker",
      "Cursor",
      "Claude",
      "AWS S3 (buckets and image uploads)",
      "Postman",
      "Swagger",
      "Grafana Loki",
      "Structured Logging",
    ],
  },
  testimonials: [
    {
      name: "Namit Kapoor",
      role: "Founder, Mojigurukul.com · Certified Educator",
      project: "MojiGurukul",
      linkedin: "https://www.linkedin.com/in/namitkapur",
      quote:
        "I've worked with Maryam for over a year and she has become a reliable and valued team member. She consistently delivers quality backend code and clear technical documentation. She has worked effectively across different development, staging and production environments. I appreciate her professionalism and work ethic.",
    },
  ],
} as const;
