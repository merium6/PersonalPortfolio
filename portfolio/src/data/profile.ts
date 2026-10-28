export const profile = {
  name: "Maryam Ali",
  title: "Software Engineer | .NET & TypeScript",
  location: "Lahore, Pakistan",
  email: "mariyamali1623@gmail.com",
  phone: "+92 327 4756937",
  linkedin: "https://www.linkedin.com/in/maryamali-softwarengineer/",
  github: "https://github.com/merium6",
  cv: "/Maryam-Ali-CV.pdf",
  available: true,
  availability: "Open to new opportunities",
  summary:
    "Software Engineer specializing in backend and full-stack development using C#, ASP.NET Core, REST APIs and relational databases. My experience includes multi-tenant platforms, RabbitMQ messaging, authentication and payment integrations, with recent Next.js, NestJS and TypeScript work across restaurant POS and backoffice applications.",
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
        "Global Payments",
      ],
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
      category: "Restaurant Tech · Techverx",
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
      category: "Multi-tenant Low-Code Platform · Techverx",
      images: ["/projects/ccf-teal.png"],
      liveUrl: "https://admin.ccf-test.customis.net/",
      description:
        "Added row reordering, automatic numbering and custom layouts for tenants; improved publishing and import/export so data models, screens and settings move correctly between environments; built Keycloak-backed user and tenant-schema APIs; fixed dynamic CRUD issues; and hardened RabbitMQ / MassTransit workers with better retries and failed-message handling.",
      tags: [".NET 8", "PostgreSQL", "RabbitMQ", "MassTransit", "Keycloak", "Ocelot"],
    },
    {
      name: "MojiGurukul — AI-Enabled Gamified Learning",
      category: "EdTech · Software Engineer (Part-time/Project-based)",
      images: ["/projects/mojigurukul.jpg"],
      liveUrl: "https://mojigurukul.com/",
      description:
        "Connected student profiles, assessment outcomes and game activity to AI personalization workflows, fixed progress persistence and status transitions, and supported Razorpay subscriptions including payment links and plan upgrades and downgrades.",
      tags: ["ASP.NET Core", "PostgreSQL", "REST APIs", "Razorpay", "SignalR"],
    },
    {
      name: "10 Marla — Real-Estate CRM & Marketplace",
      category: "Real Estate",
      images: ["/projects/tenmarla.jpg"],
      liveUrl: "https://10marla.com/",
      description:
        "Built APIs for property listings, search, filtering, bookings, user accounts and administration, plus Razor interfaces and optimized SQL queries.",
      tags: ["ASP.NET Core", "Razor Views", "SQL"],
    },
    {
      name: "LumaShape",
      category: "Manufacturing & Industrial Tools · Freelance",
      images: ["/projects/lumashape.jpg"],
      liveUrl: "https://lumashape.com",
      description:
        "Built APIs and responsive interfaces for tool scanning and foam-insert layout workflows as a freelance contributor.",
      tags: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      name: "EstheticMatch",
      category: "Healthcare & Wellness · Freelance",
      images: ["/projects/estheticmatch.jpg"],
      liveUrl: "https://estheticmatch.com",
      description:
        "Built practitioner search and profile APIs and contributed to AWS deployment for a healthcare platform connecting patients with aesthetic practitioners, as a freelance contributor.",
      tags: ["React.js", "Node.js", "PostgreSQL", "AWS"],
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
      "Node.js",
      "NestJS",
      "Express.js",
    ],
    Frontend: ["React", "Next.js", "TypeScript", "Razor Views", "HTML", "CSS", "jQuery", "AJAX"],
    "Databases & Caching": ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis", "Valkey"],
    "Architecture & Messaging": [
      "Microservices",
      "Multi-Tenancy",
      "RabbitMQ",
      "MassTransit",
      "SignalR",
      "Ocelot",
      "Background Workers",
    ],
    Security: ["Keycloak", "JWT", "ASP.NET Identity", "Role-Based Access Control"],
    Payments: ["Global Payments", "Razorpay"],
    "Tools & Observability": [
      "Git",
      "Docker",
      "AWS (deployment contributions)",
      "Postman",
      "Swagger",
      "Prometheus",
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
