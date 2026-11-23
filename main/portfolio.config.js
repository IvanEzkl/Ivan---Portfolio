// ============================================================
//  portfolio.config.js  –  Single source of truth for all content
// ============================================================

const config = {
  name: "Ivan Ezekiel",
  title: "Hello World, my name is",
  timezone: "Asia/Manila",
  resumeUrl: "/Resume - Regodon.pdf",

  roles: [
    "UI/UX Enthusiast",
    "Full Stack Developer",
    "Software Engineer",
    "Systems Builder",
  ],

  bio: {
    heroHeadline: {
      line1: "FROM",
      line2: "IDEA",
      line3: "TO LAUNCH",
    },
    subtitle: "PORTFOLIO 2026",
    line1:
      "I design and build web and mobile products end to end, with React, Laravel and Flutter. Clean interfaces, reliable backends,",
    highlight: "shipped on time.",
    basedIn: "QUEZON CITY, PH",
    focusedOn: "Full Stack & MERN Development",
    learning: "LLM Orchestration & System Analytics",
    outsideOfCode: "Indie Music & Tech Community Events",
  },

  stats: [
    { value: "3+", label: "YEARS EXPERIENCE" },
    { value: "20+", label: "PROJECTS SHIPPED" },
    { value: "MERN", label: "CORE STACK" },
    { value: "NU Manila", label: "UNIVERSITY" },
  ],

  tools: [
    {
      category: "FRONTEND",
      items: [
        "React", "Next.js", "TypeScript", "Inertia.js", "Vite", "Tailwind CSS",
        "Material UI", "React Router", "React Leaflet", "HTML5", "CSS3",
      ],
    },
    {
      category: "BACKEND",
      items: ["PHP", "Laravel", "Node.js", "Express", "Python", "FastAPI", "REST APIs"],
    },
    {
      category: "DATABASE",
      items: ["MySQL", "MongoDB", "Mongoose", "PostgreSQL", "Redis", "Prisma"],
    },
    {
      category: "MOBILE",
      items: ["Flutter", "Dart"],
    },
    {
      category: "DEVOPS",
      items: ["Git", "GitHub", "Docker", "Vercel", "Linux", "Figma"],
    },
    {
      category: "LEARNING",
      items: ["LLM Orchestration", "Prompt Engineering", "AI Engineering", "Automation"],
    },
  ],

  // Hover notes for the tech stack: how I use each tool and why.
  toolNotes: {
    "React": "My go-to for building component-based UIs. Reusable pieces keep big interfaces, like booking grids and dashboards, easy to change.",
    "Next.js": "I reach for it when a site needs server rendering, file-based routing and good SEO out of the box.",
    "TypeScript": "Adds types to JavaScript so mistakes show up while I code, not after deploy. Makes shared code safer to refactor.",
    "Inertia.js": "Connects Laravel and React without a separate API, so I get SPA-style pages with server-side routing and auth.",
    "Vite": "Fast dev server and builds. Changes show up instantly, which keeps iteration quick.",
    "Tailwind CSS": "Utility classes let me style directly in markup and keep designs consistent without maintaining large stylesheets.",
    "Material UI": "Ready-made, accessible components that speed up admin screens and forms when polish matters less than delivery.",
    "React Router": "Handles client-side navigation in React apps, so pages switch instantly without full reloads.",
    "React Leaflet": "Puts interactive maps into React, used for location-based views such as city-level job search.",
    "HTML5": "The semantic foundation of every page. Good structure helps accessibility, SEO and screen readers.",
    "CSS3": "Layouts, animation and theming. I use custom properties and grid to build responsive, themeable interfaces.",
    "PHP": "The language behind Laravel. I use it for server logic on projects that need a proven, widely hosted backend.",
    "Laravel": "My choice for full-featured backends: auth, validation, queues and an ORM, so I spend time on product logic, not plumbing.",
    "Node.js": "JavaScript on the server. One language across frontend and backend makes full-stack work faster for small teams.",
    "Express": "A minimal web framework on Node. I use it for lean REST APIs and serverless-style endpoints, like this site's contact form.",
    "Python": "Strong for data work and analytics. I use it where logic like skill-gap scoring is easier to express than in JavaScript.",
    "FastAPI": "Quick, typed Python APIs with automatic docs. A good fit for serving analytics and matching logic to a React frontend.",
    "REST APIs": "Clear, predictable endpoints between frontend and backend. I design them around resources so they stay easy to consume and test.",
    "MySQL": "Reliable relational storage for structured data like bookings, users and pricing, and the natural pair for Laravel.",
    "MongoDB": "Flexible documents suit data that changes shape, like user profiles and job listings, without constant migrations.",
    "Mongoose": "Adds schemas and validation on top of MongoDB so flexible data still stays consistent.",
    "PostgreSQL": "My pick when I need strong relational integrity, complex queries and room to scale.",
    "Redis": "In-memory store for caching and fast lookups. It takes load off the main database for hot data.",
    "Prisma": "Type-safe database access and migrations, so the schema and the code never drift apart.",
    "Flutter": "One codebase for iOS and Android with smooth native-feeling UI. Faster than building two separate apps.",
    "Dart": "The language Flutter runs on. Fast to write, strongly typed and easy to read.",
    "Git": "Version control for every project. Small commits and branches keep changes reviewable and reversible.",
    "GitHub": "Where code lives and gets reviewed. Pull requests and Actions keep collaboration and deploys organized.",
    "Docker": "Packages an app with its environment so it runs the same on my machine, staging and production.",
    "Vercel": "Push-to-deploy hosting with previews for every branch. I use it for fast, low-maintenance frontend releases.",
    "Linux": "Comfortable on the command line and servers, which helps when deploying and debugging production issues.",
    "Figma": "Where I check designs and spacing before building, so what ships matches what was designed.",
    "LLM Orchestration": "Learning how to chain models, tools and data so AI features behave reliably inside real products.",
    "Prompt Engineering": "Learning to write clear, testable prompts that get consistent results from language models.",
    "AI Engineering": "Learning to build AI-powered features end to end: wiring models into apps, handling data and making them reliable in production.",
    "Automation": "Learning to automate repetitive work with scripts, workflows and AI agents, so routine tasks run without manual effort.",
  },

  socials: [
    { label: "GitHub", url: "https://github.com/IvanEzkl", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ivan-ezekiel-regodon-082a67379/", icon: "linkedin" },
    { label: "Email", url: "mailto:regodonivanezekiel@gmail.com", icon: "mail" },
  ],

  contact: {
    email: "regodonivanezekiel@gmail.com",
    phone: "+63 906 414 1604",
    location: "Quezon City, Metro Manila, Philippines",
    github: "https://github.com/IvanEzkl",
    linkedin: "https://www.linkedin.com/in/ivan-ezekiel-regodon-082a67379/",
  },

  projects: [
    {
      id: "skillmatch",
      num: "01",
      title: "SKILLMATCH",
      url: "https://www.skillmatch.page/login",
      github: "https://github.com/IvanEzkl/skillmatch",
      status: "IN PROGRESS",
      featured: true,
      size: "hero",
      role: "FULL-STACK DEVELOPER",
      problem: "Job seekers can't see which skills stand between them and local openings.",
      highlights: ["Skill-gap analytics", "City-level job matching", "Training recommendations"],
      description:
        "AI-powered city-level job and skills matching portal. Prescriptive analytics engine identifies skill gaps and recommends targeted career training modules.",
      tags: ["REACT", "NODE.JS", "MONGODB", "PYTHON"],
      year: "2024-25",
      archLabel: "SKILLMATCH / FULL STACK",
    },
    {
      id: "court-reservation",
      num: "02",
      title: "COURT RESERVATION",
      url: "https://3ammediatech.com/courts/court-reservation/public/smash-dink",
      github: null,
      status: "IN PROGRESS",
      featured: false,
      size: "tall",
      role: "FRONTEND DEVELOPER",
      problem: "Players book a court, play, and leave with zero footage of the match.",
      highlights: ["Real-time slot booking grid", "Role-based dashboards", "Peak-rate pricing UI"],
      description:
        "Venue SaaS that pairs multi-court booking with automated match recording. I built the frontend: a real-time slot grid that prevents double bookings, dashboards for managers, staff and players, and pricing views driven by the Laravel rate engine.",
      tags: ["REACT", "INERTIA.JS", "TAILWIND", "LARAVEL"],
      year: "2026",
      archLabel: "COURT RESERVATION / VENUE SAAS",
    },
    {
      id: "rice-trader",
      num: "03",
      title: "ARMONYX",
      url: "https://armonyxfitness.com/",
      github: null,
      status: "SHIPPED",
      featured: false,
      size: "default",
      role: "WEB DEVELOPER",
      problem: "A 24/7 gym with four branches needed a site that turns browsers into members.",
      highlights: ["Four-branch directory", "Membership plans", "Classes & facilities"],
      description:
        "Website for Armonyx Fitness, a 24/7 athletic club with branches across Metro Manila. Presents the four membership plans, group classes, facilities like the boxing ring, Pilates studio and saunas, and a branch directory, with clear paths to join or schedule a visit.",
      tags: ["WEB", "RESPONSIVE", "UI DESIGN"],
      year: "2026",
      archLabel: "ARMONYX / FITNESS",
    },
    {
      id: "portfolio-v3",
      num: "04",
      title: "3AM LANDING PAGE",
      url: "https://3ammediatech.com/web/",
      github: "https://github.com/IvanEzkl/Ivan---Portfolio",
      status: "LIVE",
      featured: false,
      size: "default",
      role: "WEB DEVELOPER",
      problem: "A company spanning media, technology and ventures needed one page that explains all three.",
      highlights: ["Media · Tech · Ventures", "Selected work", "Production rentals"],
      description:
        "Company landing page for 3AM Media, Technology and Ventures Inc. Introduces its three channels, showcases selected projects, lists production equipment rentals, and lays out capabilities across media, technology and events.",
      tags: ["WEB", "RESPONSIVE", "UI DESIGN"],
      year: "2026",
      archLabel: "3AM LANDING PAGE / WEB",
    },
  ],

  trajectory: {
    experience: [
      {
        id: "3am",
        isCurrent: true,
        role: "Developer Intern",
        company: "3AM Media & Technology",
        location: "Remote",
        period: "Aug 2026 — Present",
        description:
          "Building NLP-powered tooling and contributing to production features across the full stack using React, Node.js, and Python.",
      },
      {
        id: "aws-legarda",
        isCurrent: true,
        role: "Technical Committee",
        company: "AWS Legarda",
        location: "Manila",
        period: "Aug 2025 — Present",
        description:
          "Organising developer events, workshops, and hackathons. Leading technical sessions on web development and cloud fundamentals.",
      },
    ],
    education: [
      {
        id: "nu-bsit",
        isCurrent: true,
        degree: "BS Information Technology",
        school: "National University",
        location: "Manila, NCR",
        period: "August 2023 — Present",
        description:
          "Core coursework in software engineering, data structures, databases, and systems analysis. Active in campus developer orgs.",
      },
    ],
    organizations: [
      {
        id: "gdg-member",
        role: "Technical Committee Member",
        org: "GDG on Campus • NU",
        period: "Aug 2025 — July 2026",
        description:
          "Supported technical logistics for college IT events and assisted in campus workshops.",
      },
      {
        id: "aws-club",
        role: "Technical Committee Member",
        org: "AWS Legarda",
        period: "Feb 2025 — Present",
        description:
          "Delivering beginner-friendly cloud workshops and technology seminars for fellow students.",
      },
      {
        id: "techfiesta",
        role: "Tech & Design Coordinator",
        org: "TechFiesta 2.0 • NU",
        period: "March 2025",
        description:
          "Coordinated technical logistics and UI/UX design for the university's flagship tech event.",
      },
    ],
  },

  accentPalette: [
    { name: "Orange", value: "#ff6b00" },
    { name: "Green",  value: "#22c55e" },
    { name: "Blue",   value: "#3b82f6" },
    { name: "Amber",  value: "#f59e0b" },
    { name: "Purple", value: "#a855f7" },
    { name: "Red",    value: "#ef4444" },
  ],
};

export default config;
