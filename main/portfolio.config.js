// ============================================================
//  portfolio.config.js  –  Single source of truth for all content
// ============================================================

const config = {
  name: "Ivan Ezekiel",
  title: "Hello World, my name is",
  timezone: "Asia/Manila",

  roles: [
    "Junior Developer",
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ],

  bio: {
    line1:
      "I build responsive web applications with a focus on clean interfaces and reliable systems.",
    highlight: "bridging practical backend architecture with focused frontend design",
    line2:
      "Currently engineering modern web solutions and exploring data-driven features.",
    basedIn: "Quezon City, PH",
    focusedOn: "Full Stack & MERN Development",
    learning: "LLM Orchestration & System Analytics",
    outsideOfCode: "Indie Music & Tech Community Events",
  },

  tools: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs", "GraphQL", "Python", "FastAPI"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Mongoose"],
    },
    {
      category: "Workflow",
      items: ["Git", "GitHub", "Docker", "Figma", "VS Code", "Postman", "Vercel", "Linux"],
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
      title: "SkillMatch",
      url: "skillmatch.app",
      github: "https://github.com/IvanEzkl/skillmatch",
      status: "In Progress",
      featured: true,
      description:
        "An AI-powered city-level job and skills matching portal using the MERN stack with prescriptive analytics logic to identify candidate skill gaps and suggest targeted career training modules.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Python"],
      year: "2024 — Present",
      mockType: "skillmatch",
    },
    {
      id: "rice-trader",
      title: "Rice Trader",
      url: "ricetrader.app",
      github: "https://github.com/IvanEzkl/rice-trader",
      status: "Shipped",
      featured: false,
      description:
        "Full-stack SME inventory & sales management platform streamlining trading operations with real-time stock levels, purchase orders, JWT auth, and automated audit logs.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      year: "2024",
      mockType: "ricetrader",
    },
    {
      id: "cookithow",
      title: "CookItHow",
      url: "cookithow.app",
      github: "https://github.com/IvanEzkl/cookithow",
      status: "Shipped",
      featured: false,
      description:
        "Interactive recipe & cooking web application delivering step-by-step recipe guides, interactive media assets, and optimized cross-device performance.",
      tags: ["React", "HTML5", "CSS3", "Git"],
      year: "2024",
      mockType: "cookithow",
    },
  ],

  experience: [
    {
      id: "3am-intern",
      badge: "3AM",
      role: "Developer Intern",
      period: "Aug 2026 — Present",
      company: "NLP Business • 3am Media & Technology",
      headline: "Developing NLP pipelines, automated business tools, and responsive software solutions.",
      points: [
        "Engineering full-stack web software and natural language processing pipelines for client and business workflows.",
        "Developing scalable backend APIs and integrating automated analytics logic for media and technology services.",
        "Collaborating across agile sprints to design, test, and deploy resilient digital products.",
      ],
    },
    {
      id: "gdg-nu",
      badge: "GDG",
      role: "Technical Committee Member",
      period: "Aug 2025 — Present",
      company: "GDG on Campus • NU Manila",
      headline: "Managed technical infrastructure and workshop environments for 40+ attendees.",
      points: [
        "Managed technical infrastructure and hardware setup for workshops including Build With AI and Zero to One with Firebase Studio, catering to 40+ attendees.",
        "Configured development environments, presentation tools, and network hardware to maintain continuous event uptime.",
        "Assisted participants with real-time software setup and system troubleshooting during live technical sessions.",
      ],
    },
    {
      id: "aws-learning-club",
      badge: "AWS",
      role: "Technical Committee Member",
      period: "Feb 2025 — Present",
      company: "AWS Learning Club • Legarda & Wizard Circle",
      headline: "Executed end-to-end tech setup and hardware troubleshooting across tech events.",
      points: [
        "Executed end-to-end setup and hardware troubleshooting for laptops, projection systems, and audio-visual equipment across university tech events.",
        "Collaborated with event leads to coordinate technical logistics, preventing equipment bottlenecks and setup delays.",
      ],
    },
    {
      id: "techfiesta",
      badge: "TF",
      role: "Technical & Design Coordinator",
      period: "March 2025",
      company: "TechFiesta 2.0 • National University",
      headline: "Spearheaded promotional branding assets and spatial technical equipment planning.",
      points: [
        "Designed digital promotional assets and branding graphics using Figma and Canva.",
        "Planned booth layouts and technical equipment placement to optimize spatial flow and power accessibility.",
      ],
    },
    {
      id: "skillmatch-exp",
      badge: "SM",
      role: "Full-Stack Developer • SkillMatch",
      period: "2024 — 2025",
      company: "AI-Powered Job & Skills Portal",
      headline: "Engineered city-level job matching portal with prescriptive skill-gap analytics.",
      points: [
        "Built city-level job and skills matching portal using the MERN stack to connect local applicants with employment opportunities.",
        "Integrated prescriptive analytics logic to identify candidate skill gaps and suggest targeted training modules.",
        "Designed responsive UI components in React and created backend REST APIs to process user profiles, job postings, and skill metrics.",
      ],
    },
  ],

  accentPalette: [
    { name: "Purple", value: "#a855f7" },
    { name: "Green",  value: "#22c55e" },
    { name: "Blue",   value: "#3b82f6" },
    { name: "Amber",  value: "#f59e0b" },
    { name: "Red",    value: "#ef4444" },
  ],
};

export default config;
