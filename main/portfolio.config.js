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
    phone: "+63 961 310 3393",
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
      description:
        "AI-powered city-level job and skills matching portal. Prescriptive analytics engine identifies skill gaps and recommends targeted career training modules.",
      tags: ["REACT", "NODE.JS", "MONGODB", "PYTHON"],
      year: "2024-25",
      archLabel: "SKILLMATCH / FULL STACK",
    },
    {
      id: "rice-trader",
      num: "02",
      title: "RICE TRADER",
      url: "ricetrader.app",
      github: "https://github.com/IvanEzkl/rice-trader",
      status: "SHIPPED",
      featured: false,
      description:
        "Full-stack SME inventory & sales management platform. Real-time stock levels, purchase orders, and JWT authentication built for small businesses.",
      tags: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
      year: "2024",
      archLabel: "RICE TRADER / INVENTORY POS",
    },
    {
      id: "cookithow",
      num: "03",
      title: "COOKITHOW",
      url: "cookithow.app",
      github: "https://github.com/IvanEzkl/cookithow",
      status: "SHIPPED",
      featured: false,
      description:
        "Interactive recipe & cooking web app delivering step-by-step guides with interactive media and an optimised cross-device experience.",
      tags: ["REACT", "TAILWIND", "VITE"],
      year: "2024",
      archLabel: "COOKITHOW / WEB APP",
    },
    {
      id: "portfolio-v3",
      num: "04",
      title: "PORTFOLIO V3",
      url: "ivanezekiel.dev",
      github: "https://github.com/IvanEzkl/Ivan---Portfolio",
      status: "LIVE",
      featured: false,
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
        id: "gdg-tech-com",
        isCurrent: true,
        role: "Technical Committee",
        company: "GDG on Campus • NU Manila",
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
        period: "Aug 2025 — June 2026",
        description:
          "Supported technical logistics for college IT events and assisted in campus workshops.",
      },
      {
        id: "aws-club",
        role: "Technical Committee Member",
        org: "AWS Learning Club",
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
