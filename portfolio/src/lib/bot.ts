import { profile } from "@/data/profile";

/**
 * A small retrieval chatbot trained on Maryam's CV. No external AI service:
 * every answer below is written from the CV, and questions are matched to
 * answers by phrase / keyword scoring (with typo tolerance and Roman Urdu).
 * To teach it something new, add an entry to `KNOWLEDGE` or `TECH`.
 */

type Entry = {
  id: string;
  triggers: string[];
  answer: string;
  follow?: string[];
};

const email = profile.email;

const KNOWLEDGE: Entry[] = [
  {
    id: "greeting",
    triggers: ["hi", "hello", "hey", "hii", "salam", "assalam o alaikum", "assalamualaikum", "aoa", "good morning", "good evening", "kaise ho", "kese ho", "how are you", "whats up"],
    answer:
      "Hey, nice to meet you! I'm the AI version of Maryam. I can tell you about my projects, the tech I work with, my experience, or whether I'd fit a role you're hiring for. What would you like to know?",
    follow: ["Tell me about yourself", "What are you working on right now?"],
  },
  {
    id: "thanks",
    triggers: ["thanks", "thank you", "thankyou", "shukriya", "shukria", "jazakallah", "great", "awesome", "nice", "cool", "perfect", "got it"],
    answer: "Anytime! If you'd like to talk properly, my email is " + email + " and I'm easy to find on LinkedIn too.",
    follow: ["How can I contact you?", "Can I download your CV?"],
  },
  {
    id: "bye",
    triggers: ["bye", "goodbye", "see you", "allah hafiz", "khuda hafiz", "take care"],
    answer: "Thanks for stopping by! If you want to continue the conversation, drop me an email at " + email + ".",
  },
  {
    id: "about",
    triggers: ["about yourself", "about you", "who are you", "introduce", "introduction", "tell me about maryam", "about maryam", "who is maryam", "apne bare mein", "apna taaruf", "taaruf", "kaun ho"],
    answer:
      "I'm Maryam, a full-stack .NET developer based in Lahore. My main focus is C#, ASP.NET Core, REST APIs and relational databases, and I've worked on multi-tenant platforms, RabbitMQ messaging, authentication and payment integrations. Right now I'm a Software Engineer at Techverx, working on a low-code framework and the Friday restaurant POS.",
    follow: ["What are your strongest skills?", "Tell me about the Friday POS project"],
  },
  {
    id: "ai",
    triggers: ["are you ai", "are you real", "are you a bot", "are you human", "are you robot", "chatgpt", "is this ai", "how do you work", "who built you", "who made you", "kya tum bot ho", "tum bot ho", "real ho"],
    answer:
      "I'm a small assistant built into this site, so yes, I'm a bot, not Maryam typing live. I'm trained only on her CV and projects, which means I won't make things up, but I also can't answer beyond what's in there. For anything else, email her at " + email + ".",
    follow: ["Tell me about yourself", "How can I contact you?"],
  },
  {
    id: "current",
    triggers: ["working on right now", "currently working", "current job", "current role", "current company", "right now", "abhi kya kar", "kahan kaam kar", "present job", "techverx"],
    answer:
      "Since November 2025 I've been a Software Engineer at Techverx in Lahore. I build ASP.NET Core and PostgreSQL backend services for a multi-tenant low-code framework (CCF), and I'm part of the Friday POS revamp using Next.js, NestJS and TypeScript across the POS and backoffice apps. I also investigate production defects across services and work with product, frontend and QA on releases.",
    follow: ["Tell me about the CCF project", "Tell me about the Friday POS project"],
  },
  {
    id: "experience",
    triggers: ["experience", "work history", "career", "years", "companies", "worked at", "previous jobs", "tajurba", "tajriba", "kitna experience", "where have you worked", "background"],
    answer:
      "Three roles so far. Techverx (Nov 2025 to now) as Software Engineer on a multi-tenant low-code platform and the Friday POS. Phenologix (Oct 2024 to Oct 2025) as Associate Software Engineer, building ASP.NET Core and MVC apps and APIs for real-estate and legal-services products. And Ammag IT Solutions (Jun to Sep 2024), an internship on the live Sorrow Place app with ASP.NET Core and PostgreSQL.",
    follow: ["What did you do at Phenologix?", "What are your strongest skills?"],
  },
  {
    id: "phenologix",
    triggers: ["phenologix", "axes law", "axeslaw", "legal"],
    answer:
      "At Phenologix (Oct 2024 to Oct 2025) I built business apps and REST APIs for real-estate and legal-services products with ASP.NET Core, ASP.NET MVC, EF Core, Razor Views, jQuery and AJAX. I implemented JWT, ASP.NET Identity, cookie auth and role-based access control, and designed SQL Server and MySQL schemas, migrations and queries while helping with production fixes.",
    follow: ["How is your security and auth experience?", "Tell me about the 10Marla project"],
  },
  {
    id: "ammag",
    triggers: ["ammag", "intern", "internship", "sorrow place", "first job"],
    answer:
      "My internship at Ammag IT Solutions ran June to September 2024. I contributed ASP.NET Core APIs and PostgreSQL features to the live Sorrow Place application, fixed defects, validated endpoints with Postman and helped maintain the database.",
    follow: ["Tell me about your experience", "What did you do at Phenologix?"],
  },
  {
    id: "projects",
    triggers: ["projects", "portfolio", "what have you built", "what did you build", "your work", "built", "kaam dikhao", "projects batao"],
    answer:
      "The main ones: Friday POS, a cloud restaurant and payments platform. CCF, a multi-tenant low-code framework. MojiGurukul, an AI-enabled gamified learning platform. And 10Marla, a real-estate CRM and marketplace. There are also LumaShape and EstheticMatch further down the page. Which one should I go deeper on?",
    follow: ["Tell me about the Friday POS project", "Tell me about the CCF project"],
  },
  {
    id: "friday",
    triggers: ["friday", "fridaypos", "pos", "restaurant", "pizzaiolo", "backoffice", "point of sale", "revamp"],
    answer:
      "Friday POS is a cloud restaurant management and POS platform. I worked on the original .NET version and its Next.js and NestJS revamp. On the revamp I built order listing, history and details across POS and backoffice, RabbitMQ-based order sync between the two, and sales reporting. On the original platform I built Global Payments flows (saved cards, charging, Pay-by-Link), fixed tenant data-isolation bugs, and made payment token generation faster and more reliable with caching and nonce-based signing.",
    follow: ["Do you have RabbitMQ experience?", "How do you handle payments?"],
  },
  {
    id: "ccf",
    triggers: ["ccf", "common central framework", "low code", "lowcode", "cis ui", "framework", "multi tenant platform"],
    answer:
      "CCF is a multi-tenant low-code platform built on .NET 8, PostgreSQL, RabbitMQ, MassTransit, Keycloak and Ocelot. I added row reordering, automatic numbering and custom layouts for tenants, improved publishing and import/export so data models and screens move correctly between environments, built Keycloak-backed user and tenant-schema APIs, fixed dynamic CRUD bugs, and hardened the RabbitMQ workers with better retries and failed-message handling.",
    follow: ["Do you have multi-tenancy experience?", "Do you have RabbitMQ experience?"],
  },
  {
    id: "mojigurukul",
    triggers: ["mojigurukul", "moji gurukul", "moji", "gurukul", "edtech", "learning platform", "gamified"],
    answer:
      "MojiGurukul is an AI-enabled gamified learning platform I worked on as a freelance project with ASP.NET Core and PostgreSQL. I connected student profiles, assessment results and game activity to the AI personalization workflows, fixed progress tracking and status transitions, and supported Razorpay subscriptions including payment links and plan upgrades and downgrades.",
    follow: ["How do you handle payments?", "Is there any feedback from clients?"],
  },
  {
    id: "10marla",
    triggers: ["10marla", "10 marla", "ten marla", "tenmarla", "real estate", "property", "crm"],
    answer:
      "10Marla is a real-estate CRM and property marketplace. I built ASP.NET Core APIs for listings, search, filtering, bookings, user accounts and administration, plus Razor interfaces and optimized SQL queries.",
    follow: ["Tell me about your projects", "What databases do you use?"],
  },
  {
    id: "other-projects",
    triggers: ["lumashape", "luma shape", "estheticmatch", "esthetic match", "healthcare", "foam"],
    answer:
      "LumaShape is a tool-scanning and foam layout design platform built with Next.js, Node.js, Express and MongoDB. EstheticMatch connects patients with aesthetic practitioners using React, Node.js, PostgreSQL and AWS. Both are on the projects section of this page.",
    follow: ["Tell me about your projects", "What are your strongest skills?"],
  },
  {
    id: "skills",
    triggers: ["skills", "tech stack", "stack", "technologies", "strongest", "best at", "good at", "expertise", "what do you know", "kya aata hai", "skills batao"],
    answer:
      "My core is C# and ASP.NET Core with REST APIs, Entity Framework Core and PostgreSQL or SQL Server. Around that I work with RabbitMQ and MassTransit for messaging, JWT, Identity and Keycloak for security, Global Payments and Razorpay for payments, and more recently Next.js, NestJS and TypeScript on the Friday revamp.",
    follow: ["Do you have RabbitMQ experience?", "What databases do you use?"],
  },
  {
    id: "databases",
    triggers: ["database", "databases", "sql", "db", "data modeling", "queries"],
    answer:
      "PostgreSQL and SQL Server are the ones I use most, plus MySQL, and Redis and Valkey for caching. I've designed schemas, migrations and queries, and optimized data access, for example reducing EF Core data loading in the CCF background workers.",
    follow: ["Tell me about the CCF project", "What are your strongest skills?"],
  },
  {
    id: "security",
    triggers: ["security", "auth", "authentication", "authorization", "authorisation", "login", "rbac", "role based", "identity"],
    answer:
      "I've implemented JWT, ASP.NET Identity and cookie authentication with role-based access control for multi-user apps, and used Keycloak for user management in CCF. On Friday I also fixed cross-customer access and tenant query-filtering bugs to tighten data isolation.",
    follow: ["Do you have multi-tenancy experience?", "How do you handle payments?"],
  },
  {
    id: "payments",
    triggers: ["payments", "payment", "razorpay", "global payments", "pay by link", "cards", "checkout", "subscriptions"],
    answer:
      "Two integrations. On Friday POS I built Global Payments flows: creating payers, saved and tokenized cards, charging, deleting cards and Pay-by-Link, and improved access-token generation with caching, concurrency control and nonce-based signing. On MojiGurukul I supported Razorpay subscriptions and checkout, including payment links and plan upgrade and downgrade handling.",
    follow: ["Tell me about the Friday POS project", "Tell me about MojiGurukul"],
  },
  {
    id: "multitenancy",
    triggers: ["multi tenant", "multitenant", "multi tenancy", "multitenancy", "tenant", "tenants", "isolation"],
    answer:
      "Yes, it's a big part of my current work. On CCF I built tenant-level features like custom layouts, tenant schema APIs and automatic database setup for new tenants, and on Friday POS I fixed tenant query-filtering and cross-customer access issues to keep each tenant's data isolated.",
    follow: ["Tell me about the CCF project", "How is your security and auth experience?"],
  },
  {
    id: "frontend",
    triggers: ["frontend", "front end", "ui", "react", "nextjs", "next js", "typescript", "nestjs", "nest js", "full stack", "fullstack"],
    answer:
      "Honest answer: my strongest side is backend with .NET, but I'm genuinely full-stack. I've built Razor, jQuery and AJAX interfaces at Phenologix and 10Marla, and I'm using Next.js, NestJS and TypeScript right now on the Friday POS and backoffice revamp, building order workflows and reporting screens.",
    follow: ["Tell me about the Friday POS project", "Would you fit a .NET backend role?"],
  },
  {
    id: "fit",
    triggers: ["fit", "hire", "hiring", "good candidate", "why should", "suitable", "role", "position", "job", "opportunity", "naukri", "kaam milega", "recruit", "recruiter", "backend role", "developer role"],
    answer:
      "If you need a .NET backend or full-stack engineer, I'd say yes. I have hands-on experience with ASP.NET Core APIs, PostgreSQL and SQL Server, multi-tenant platforms, RabbitMQ background processing, auth and payments, and I debug production issues across services. Where I'm newer is the Next.js and NestJS side, which I've picked up on the Friday revamp. Tell me about the role and I'll be upfront about how it lines up.",
    follow: ["What are your strongest skills?", "Are you available to join?"],
  },
  {
    id: "availability",
    triggers: ["available", "availability", "open to work", "notice period", "join", "joining", "salary", "expected salary", "expectation", "relocate", "relocation", "visa", "remote", "onsite", "freelance"],
    answer:
      "That's not something I can answer from my CV, and I don't want to guess. I'm open to new opportunities, but for notice period, salary, remote or relocation, please email me at " + email + " and I'll reply myself.",
    follow: ["How can I contact you?", "Can I download your CV?"],
  },
  {
    id: "education",
    triggers: ["education", "degree", "university", "pucit", "punjab university", "study", "studied", "graduate", "bs", "college", "parhai"],
    answer:
      "I have a BS in Computer Science from the Punjab University College of Information Technology (PUCIT) in Lahore, 2020 to 2024.",
    follow: ["Tell me about your experience", "What are your strongest skills?"],
  },
  {
    id: "contact",
    triggers: ["contact", "email", "mail", "phone", "number", "call", "reach", "linkedin", "github", "whatsapp", "rabta", "message you", "talk to you", "get in touch"],
    answer:
      "Email is the best way: " + email + ". My phone is " + profile.phone + ", and I'm on LinkedIn and GitHub too. Both links are at the bottom of the page.",
    follow: ["Can I download your CV?", "Are you available to join?"],
  },
  {
    id: "location",
    triggers: ["where are you", "location", "based", "city", "country", "lahore", "pakistan", "kahan rehti", "kahan se"],
    answer: "I'm based in Lahore, Pakistan.",
    follow: ["Are you available to join?", "How can I contact you?"],
  },
  {
    id: "cv",
    triggers: ["cv", "resume", "download", "pdf", "curriculum"],
    answer:
      "Sure. There's a Download CV button at the top of the page and in the contact section at the bottom, and it gives you my latest CV as a PDF.",
    follow: ["How can I contact you?", "Tell me about your experience"],
  },
  {
    id: "testimonial",
    triggers: ["testimonial", "feedback", "reference", "references", "recommend", "review", "clients say", "namit"],
    answer:
      "Namit Kapoor, the founder of MojiGurukul, worked with me for over a year and described me as a reliable, valued team member who consistently delivers quality backend code and clear documentation across dev, staging and production. You can read it in the testimonial section on this page.",
    follow: ["Tell me about MojiGurukul", "Tell me about your experience"],
  },
  {
    id: "teamwork",
    triggers: ["team", "teamwork", "collaborate", "collaboration", "communication", "qa", "agile", "production issues", "production defects", "debug", "debugging", "bugs"],
    answer:
      "At Techverx I investigate production defects that cross services, and I work closely with product, frontend and QA on implementation, testing and release readiness. Examples of fixes I'm proud of: duplicate records and bad PostgreSQL data types in dynamic CRUD APIs on CCF, and authentication and transaction failures in the Friday payment flow.",
    follow: ["Tell me about the CCF project", "What are your strongest skills?"],
  },
  {
    id: "messaging",
    triggers: ["background workers", "background jobs", "message queue", "messaging", "event driven", "async processing", "microservices"],
    answer:
      "I work with RabbitMQ and MassTransit for asynchronous processing and background workers. On CCF I made the workers lighter on EF Core data loading and stronger on retries, failed-message handling and recovery, and on Friday I built RabbitMQ-based order sync between POS and backoffice. I also work in a microservices setup with Ocelot as the gateway.",
    follow: ["Tell me about the CCF project", "Tell me about the Friday POS project"],
  },
];

/** Technology → where I used it. Drives "do you know X?" questions. */
const TECH: Record<string, { names: string[]; answer: string }> = {
  csharp: { names: ["csharp", "c#"], answer: "Yes, C# is my main language. I use it every day for ASP.NET Core APIs and background services at Techverx, and I used it at Phenologix and Ammag before that." },
  dotnet: { names: ["dotnet", "net core", "aspnet", "asp net", "net 8", "net8", "mvc"], answer: "Yes, .NET is my core stack: ASP.NET Core and ASP.NET MVC, with .NET 8 on CCF. I've built REST APIs, Razor apps and background workers with it across all three of my roles." },
  efcore: { names: ["entity framework", "ef core", "efcore", "dapper", "linq"], answer: "Yes. I use Entity Framework Core and LINQ regularly, and Dapper too. On CCF I improved the background workers by reducing EF Core data loading, and I've written migrations and optimized queries at Phenologix." },
  rabbitmq: { names: ["rabbitmq", "rabbit mq", "masstransit", "mass transit"], answer: "Yes. On CCF I improved RabbitMQ and MassTransit background workers with better retries, failed-message handling and recovery. On the Friday POS revamp I built RabbitMQ-based order synchronization between POS and backoffice." },
  postgres: { names: ["postgres", "postgresql", "postgre"], answer: "Yes, PostgreSQL is the database I use most right now. It's behind CCF and Friday POS, and I've also fixed PostgreSQL data-type and relationship issues in the CCF dynamic CRUD APIs." },
  sqlserver: { names: ["sql server", "sqlserver", "mssql", "mysql"], answer: "Yes. At Phenologix I designed SQL Server and MySQL schemas, migrations and queries, and optimized data access. SQL Server also powers the 10Marla backend." },
  redis: { names: ["redis", "valkey", "caching", "cache"], answer: "Yes, I've worked with Redis and Valkey for caching. On Friday I used caching and concurrency control to make payment access-token generation faster and more reliable." },
  keycloak: { names: ["keycloak"], answer: "Yes. On CCF I built APIs that manage users through Keycloak, which supports screen building and tenant administration." },
  nextjs: { names: ["nextjs", "next js"], answer: "Yes, but recently. I've been using Next.js for the frontend of the Friday POS revamp, building order listing, history, order details and sales reporting across POS and backoffice." },
  nestjs: { names: ["nestjs", "nest js"], answer: "Yes, on the Friday POS revamp. NestJS is the backend there, and I worked on order workflows, the RabbitMQ order sync and sales reporting with it." },
  typescript: { names: ["typescript", "tsx"], answer: "Yes, mainly on the Friday POS revamp, where I write TypeScript and TSX with Next.js and NestJS across the POS and backoffice apps." },
  react: { names: ["react", "reactjs"], answer: "Yes, React is on my skills list, and I've used it on projects like EstheticMatch. Most of my recent frontend work is Next.js, which is React-based." },
  nodejs: { names: ["nodejs", "node js", "express"], answer: "Yes. I've used Node.js and Express on projects like LumaShape and EstheticMatch, and NestJS, which runs on Node, on the Friday revamp." },
  signalr: { names: ["signalr", "websocket", "websockets", "realtime", "real time"], answer: "Yes, I've used SignalR for real-time features, for example on MojiGurukul." },
  jwt: { names: ["jwt", "oauth", "token"], answer: "Yes. I've implemented JWT, ASP.NET Identity and cookie authentication with role-based access control, and I've worked on payment access-token generation on Friday." },
  docker: { names: ["docker", "container", "containers"], answer: "Yes, Docker is part of my toolset, alongside Git, Postman and Swagger." },
  observability: { names: ["prometheus", "grafana", "loki", "logging", "observability", "monitoring"], answer: "Yes. I use structured logging with Grafana Loki and Prometheus for observability, which helps a lot when tracking down production issues across services." },
  frontendbasics: { names: ["jquery", "ajax", "razor", "html", "css", "javascript"], answer: "Yes. I've built Razor Views interfaces with JavaScript, jQuery, AJAX, HTML and CSS at Phenologix and on 10Marla, and these days I write TypeScript on the Friday revamp." },
  mongodb: { names: ["mongodb", "mongo"], answer: "I've used MongoDB on the LumaShape project, alongside Next.js and Node.js. It's not my main database though. Most of my work is PostgreSQL and SQL Server." },
  aws: { names: ["aws", "amazon web services"], answer: "I touched AWS on the EstheticMatch project for deployment, but it's not a core strength. My day-to-day is .NET backend work." },
};

/** Technologies that are NOT in my CV, so the bot answers honestly. */
const MISSING = ["python", "django", "flask", "java", "spring", "angular", "vue", "svelte", "kubernetes", "k8s", "azure", "gcp", "graphql", "golang", "go lang", "php", "laravel", "flutter", "react native", "swift", "kotlin", "rust", "ruby", "rails", "terraform", "kafka", "elasticsearch", "machine learning", "tensorflow", "pytorch", "devops", "cicd"];

const FALLBACK =
  "Hmm, I don't have that in my CV, and I'd rather not guess. You can ask me about my projects, skills, experience or whether I'd fit a role, or email me at " +
  email +
  " for anything else.";

export const STARTERS = [
  "What are you working on right now?",
  "Tell me about the Friday POS project",
  "Do you have RabbitMQ experience?",
  "Would you fit a .NET backend role?",
];

function normalize(text: string): string {
  return (
    " " +
    text
      .toLowerCase()
      .replace(/c#/g, "csharp")
      .replace(/\.net/g, "dotnet")
      .replace(/[.\-_/]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim() +
    " "
  );
}

function edits1(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  let j = 0;
  let diff = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++diff > 1) return false;
    if (a.length > b.length) i++;
    else if (a.length < b.length) j++;
    else {
      i++;
      j++;
    }
  }
  return diff + (a.length - i) + (b.length - j) <= 1;
}

/** Whole-phrase match, plus one-typo tolerance for longer single words. */
function matches(query: string, tokens: string[], trigger: string): boolean {
  const t = normalize(trigger);
  if (query.includes(t)) return true;
  const word = t.trim();
  if (word.length >= 6 && !word.includes(" ")) {
    return tokens.some((token) => edits1(token, word));
  }
  return false;
}

function score(query: string, tokens: string[], triggers: string[]): number {
  let total = 0;
  for (const trigger of triggers) {
    if (matches(query, tokens, trigger)) {
      total += 1 + normalize(trigger).trim().split(" ").length * 0.6;
    }
  }
  return total;
}

export type BotReply = { text: string; follow: string[] };

export function reply(question: string): BotReply {
  const query = normalize(question);
  const tokens = query.trim().split(" ");

  // 1. A specific technology being asked about wins.
  const askedAboutTech = /(experience|know|use|used|using|work|worked|familiar|skill|comfortable|hands on|knowledge|about|aata|aati|karti|kiya)/.test(
    query,
  );
  for (const tech of Object.values(TECH)) {
    if (tech.names.some((name) => matches(query, tokens, name))) {
      if (askedAboutTech || tokens.length <= 3) {
        return { text: tech.answer, follow: ["What are your strongest skills?", "Tell me about your projects"] };
      }
    }
  }

  // 2. A technology that is not in the CV: be honest.
  const missing = MISSING.find((name) => query.includes(normalize(name)));
  if (missing) {
    return {
      text: `${missing[0].toUpperCase()}${missing.slice(1)} isn't something I've listed on my CV, so I won't claim it. My strengths are C# and ASP.NET Core, PostgreSQL and SQL Server, RabbitMQ, and Next.js and NestJS on the Friday revamp. I learn quickly though, so email me at ${email} if it's important for your role.`,
      follow: ["What are your strongest skills?", "Would you fit a .NET backend role?"],
    };
  }

  // 3. Best matching topic.
  let best: Entry | null = null;
  let bestScore = 0;
  for (const entry of KNOWLEDGE) {
    const s = score(query, tokens, entry.triggers);
    if (s >= bestScore && s > 0) {
      best = entry;
      bestScore = s;
    }
  }

  if (best && bestScore >= 1.5) {
    return { text: best.answer, follow: best.follow ?? STARTERS.slice(0, 2) };
  }
  return { text: FALLBACK, follow: STARTERS.slice(0, 3) };
}
