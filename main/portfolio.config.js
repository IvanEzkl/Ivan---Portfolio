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
      line1: "BUILDING",
      line2: "ROBUST",
      line3: "SYSTEMS",
    },
    subtitle: "PORTFOLIO 2026",
    line1:
      "Developing scalable, high-performance web applications and software systems with a focus on clean code and",
    highlight: "intuitive design.",
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
      items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      category: "BACKEND",
      items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
    },
    {
      category: "DATABASE",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
    },
    {
      category: "DEVOPS",
      items: ["Git", "GitHub", "Docker", "Vercel", "Linux", "Figma"],
    },
    {
      category: "LEARNING",
      items: ["LLM Orchestration", "Prompt Engineering", "tRPC", "Bun"],
    },
  ],

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
      url: "skillmatch.app",
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
      url: null,
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
      title: "RICE TRADER",
      url: "ricetrader.app",
      github: "https://github.com/IvanEzkl/rice-trader",
      status: "SHIPPED",
      featured: false,
      size: "default",
      role: "FULL-STACK DEVELOPER",
      problem: "Small rice traders still track stock and sales on paper.",
      highlights: ["Real-time stock levels", "Purchase orders", "JWT auth"],
      description:
        "Full-stack SME inventory & sales management platform. Real-time stock levels, purchase orders, and JWT authentication built for small businesses.",
      tags: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
      year: "2024",
      archLabel: "RICE TRADER / INVENTORY POS",
    },
    {
      id: "portfolio-v3",
      num: "04",
      title: "PORTFOLIO V3",
      url: "ivanezekiel.dev",
      github: "https://github.com/IvanEzkl/Ivan---Portfolio",
      status: "LIVE",
      featured: false,
      size: "default",
      role: "DESIGNER & DEVELOPER",
      problem: "A portfolio that shows how I build, not just what I list.",
      highlights: ["Live UI mockups", "Theme customizer", "Three.js scenes"],
      description:
        "This site — designed and built from scratch with brutalist structure and glassmorphism polish. React + Vite + Tailwind CSS v4.",
      tags: ["REACT", "VITE", "TAILWIND"],
      year: "2026",
      archLabel: "PORTFOLIO V3 / SYSTEM",
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
