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
