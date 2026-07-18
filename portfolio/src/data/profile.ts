export const profile = {
  name: "Maryam Ali",
  title: "Full Stack Software Engineer",
  headline:
    "Full Stack Software Engineer | .NET · React · Next.js | RESTful APIs · SQL Server & PostgreSQL | Writing Clean & Scalable Code",
  location: "Lahore, Punjab, Pakistan",
  email: "mariymali1623@gmail.com",
  phone: "+92 3274756937",
  linkedin: "https://www.linkedin.com/in/maryamali-softwarengineer/",
  github: "https://github.com/merium6",
  available: true,
  availability: "Open to remote & freelance opportunities",
  summary:
    "I craft secure, scalable web applications end to end, robust .NET backends, optimized SQL databases, and polished React & Next.js frontends. I care about clean code, fast systems, and products people enjoy using.",
  capabilities: [
    {
      title: "Backend & APIs",
      detail: "Robust RESTful APIs with ASP.NET Core, secured with JWT auth & RBAC.",
    },
    {
      title: "Frontend Engineering",
      detail: "Responsive, interactive UIs with React.js, Next.js & modern web tech.",
    },
    {
      title: "Databases",
      detail: "Optimized schemas & complex queries across SQL Server, MySQL & PostgreSQL.",
    },
    {
      title: "Scalable Systems",
      detail: "Microservices, real-time features (SignalR) & clean, maintainable architecture.",
    },
  ],
  education: {
    degree: "Bachelor of Computer Science",
    school: "University of the Punjab (PUCIT), Lahore",
    period: "2020 – 2024",
  },
  experience: [
    {
      role: "Software Engineer (.NET)",
      company: "Techverx",
      companyUrl: "https://www.linkedin.com/company/techverx",
      period: "Nov 2025 – Present",
      location: "Lahore, Pakistan",
      highlight:
        "Working on CCF — Common Central Framework: a configurable, multi-tenant microservices platform for dynamic enterprise applications with runtime UI configuration, entity management, and RabbitMQ event-driven communication.",
      points: [
        "Designed a robust Data Import & Export system for complex, dynamic entity structures while preserving schema integrity and relationships.",
        "Built logic to dynamically recreate database tables, configurations, and entity relationships during import operations.",
        "Implemented asynchronous bulk processing with RabbitMQ (MassTransit) for reliable background execution under heavy load.",
        "Managed PostgreSQL configurations to enforce strict tenant-level data isolation in a multi-tenant architecture.",
      ],
    },
    {
      role: "Software Engineer (.NET)",
      company: "Phenologix",
      companyUrl: "https://www.linkedin.com/company/phenologix",
      period: "Oct 2024 – Oct 2025",
      location: "Lahore, Pakistan",
      highlight:
        "Contributed to multiple full-stack projects involving Razor Views frontends and .NET backends, collaborating with designers and QA in Agile sprints.",
      points: [
        "Built and maintained RESTful APIs with ASP.NET Core MVC (.NET 6–8) and legacy ASP.NET MVC.",
        "Improved property listing experiences by fixing bugs, refining UI behavior, and adding feature modules.",
        "Built clean, scalable RESTful APIs for the Axes Law project using .NET Core, focusing on code quality and performance.",
        "Implemented JWT, cookie-based auth, and ASP.NET Identity for secure authentication and authorization.",
        "Designed and optimized SQL Server and MySQL databases; used Git, Swagger, and Postman to streamline delivery.",
      ],
    },
    {
      role: "Freelance Software Engineer",
      company: "Fiverr",
      companyUrl: "https://www.linkedin.com/company/fiverr-com",
      period: "Nov 2023 – Dec 2024",
      location: "Remote",
      highlight:
        "Delivered custom .NET and full-stack solutions for international clients as an independent freelancer.",
      points: [
        "Scoped, built, and shipped client projects end to end with clear communication and on-time delivery.",
        "Worked across APIs, databases, and responsive frontends based on individual client requirements.",
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "AMMAG Technologies",
      companyUrl: "https://www.linkedin.com/company/ammag-tech",
      period: "Jun 2024 – Sep 2024",
      location: "Lahore, Pakistan",
      highlight:
        "API and database development on the Sorrow Place project.",
      points: [
        "Developed and enhanced RESTful APIs, improving functionality and performance.",
        "Tested APIs using Postman.",
        "Designed and managed SQL Server and PostgreSQL databases for reliability and efficiency.",
      ],
    },
  ],
  projects: [
    {
      name: "Friday POS — Restaurant Operating System",
      category: "Restaurant Tech · Techverx",
      image: "/projects/pos-teal.png",
      liveUrl: "https://fridaypos.com/",
      description:
        "A unified restaurant management platform centralizing point-of-sale, inventory, and delivery operations with real-time visibility across single and multi-location setups. Worked on backend APIs, order and inventory workflows, and reporting features supporting high peak-hour volumes.",
      tags: [".NET", "C#", "SQL Server", "REST APIs", "POS"],
      featured: true,
    },
    {
      name: "MojiGurukul — Game-Based Learning",
      category: "EdTech Platform",
      image: "/projects/mojigurukul.jpg",
      liveUrl: "https://mojigurukul.com/",
      description:
        "An online game-based learning platform for grades 6–10 connecting students, parents, and tutors through interactive games, personalised learning paths, and detailed progress insights. Contributed full-stack features across APIs, data models, and responsive, gamified UI flows.",
      tags: ["React.js", "REST APIs", "SQL", "Full Stack"],
      featured: true,
    },
    {
      name: "CCF — Common Central Framework",
      category: "Enterprise Platform · Techverx",
      image: "/projects/ccf-teal.png",
      liveUrl: "",
      description:
        "A configurable multi-tenant microservices platform for building and managing enterprise applications through dynamic entity management and event-driven architecture. Built the Data Import & Export system, dynamic table recreation during migrations, and asynchronous processing with RabbitMQ and MassTransit.",
      tags: [".NET", "PostgreSQL", "RabbitMQ", "MassTransit", "Microservices"],
      featured: true,
    },
    {
      name: "LumaShape",
      category: "Manufacturing & Industrial Tools",
      image: "/projects/lumashape.jpg",
      liveUrl: "https://lumashape.com",
      description:
        "A connected ecosystem for automated tool scanning, layout design, and custom foam insert management. Developed tool inventory and layout management features, APIs for scanning and design workflows, and responsive interfaces for managing layouts and assets.",
      tags: ["Next.js", "Node.js", "Express.js", "MongoDB"],
      featured: true,
    },
    {
      name: "EstheticMatch",
      category: "Healthcare & Wellness",
      image: "/projects/estheticmatch.jpg",
      liveUrl: "https://estheticmatch.com",
      description:
        "A healthcare platform connecting patients with aesthetic practitioners and treatment providers. Built practitioner discovery features, APIs and search for profiles and treatments, responsive UI components, and contributed to cloud deployment and scalability.",
      tags: ["React.js", "Node.js", "PostgreSQL", "AWS"],
      featured: true,
    },
    {
      name: "10 Marla — Property Management System",
      category: "Real Estate",
      image: "/projects/tenmarla.jpg",
      liveUrl: "https://10marla.com/",
      description:
        "A real estate CRM platform for buying, selling, and renting properties in Pakistan — connecting buyers, sellers, and renters. Developed RESTful APIs with ASP.NET Core, backend modules for property and workflow management, and optimized SQL Server database operations.",
      tags: ["ASP.NET Core", "C#", "SQL Server", "EF Core", "React"],
      featured: true,
    },
    {
      name: "Axes Law — Legal Services Platform",
      category: "Legal Services · Phenologix",
      image: "/projects/axeslaw-teal.png",
      liveUrl: "",
      description:
        "Legal services platform where I built clean, scalable RESTful APIs using .NET Core with a focus on code quality, data processing accuracy, and performance.",
      tags: [".NET Core", "REST APIs", "SQL", "Performance"],
      featured: false,
    },
  ],
  skills: {
    "Backend & APIs": [
      "C#",
      ".NET (6–9)",
      "ASP.NET Core MVC",
      "Node.js",
      "REST APIs",
      "Entity Framework Core",
      "LINQ",
      "ASP.NET Identity",
      "JWT Auth",
    ],
    "Frontend": [
      "React.js",
      "Next.js",
      "JavaScript",
      "Razor Pages",
      "HTML",
      "CSS",
      "jQuery",
      "AJAX",
      "Responsive Design",
    ],
    "Databases": ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
    "Architecture & Design": ["MVC", "Clean Architecture", "Microservices", "RBAC"],
    "Integrations & Tools": [
      "RabbitMQ",
      "MassTransit",
      "SignalR",
      "Razorpay",
      "Swagger",
      "Postman",
      "Git",
      "AWS",
    ],
    "Machine Learning": ["ML.NET"],
  },
  softSkills: [
    "Problem-solving mindset",
    "Strong multitasking ability",
    "Excellent verbal and written communication",
    "Attention to detail",
    "Independent & team player",
    "Agile collaboration",
  ],
  coreStack: [".NET", "C#", "React.js", "Next.js", "SQL Server", "PostgreSQL"],
  testimonials: [
    {
      name: "Namit Kapoor",
      role: "Founder, Mojigurukul.com · Certified Educator",
      project: "MojiGurukul",
      skill: "SaaS Development",
      rating: "5.0",
      date: "July 2026",
      linkedin: "https://www.linkedin.com/in/namitkapur",
      quote:
        "I've worked with Maryam for over a year and she has become a reliable and valued team member. She consistently delivers quality backend code and clear technical documentation. She has worked effectively across different development, staging and production environments. I appreciate her professionalism and work ethic.",
    },
  ],
} as const;
