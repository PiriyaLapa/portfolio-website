// Content Convention (see CLAUDE.md): all copy, links, and metrics that change
// independently of layout/logic live here, not inside components.

export interface ProjectContent {
  slug: string
  name: string
  tagline: string
  status: string
  summary: {
    problem: string
    solution: string
    impact: string
  }
  metrics: string[]
  techStack?: { category: string; items: string[] }[]
  links: {
    github?: string
    liveDemo?: string
    srsPdf?: string
  }
  limitations?: string[]
  diagrams?: { label: string; figure: string; image: string }[]
  primary: boolean
}

export const site = {
  deployedUrl: "https://portfolio-website-olive-xi-rk40667qsr.vercel.app",

  hero: {
    name: "Piriya (Benz) Lapa",
    role: "Business Analyst / System Analyst",
    tagline: "Transforming retail experience into engineered analytical solutions.",
    statusBadge: "SYSTEM STATUS: READY FOR DEPLOYMENT",
    idTag: "ID: PL-8092",
    photoUrl: "/content/Profile_image_Piriya.jpg" as string | null,
  },

  about: {
    docRef: "DOC REF: AB-101",
    statement: [
      "My trajectory is defined by a continuous drive to bridge user needs with technical execution. Beginning with over 9 years of frontline retail sales experience, I developed an acute understanding of customer behavior, pain points, and operational bottlenecks. Recognizing the transformative power of technology, I transitioned into a self-taught developer role, acquiring the foundational logic to build solutions.",
      "Today, I synthesize these dual perspectives as an AI-assisted Business and System Analyst. I leverage my retail empathy alongside technical acumen to engineer analytical solutions that are not only robust but inherently user-centric, translating complex business requirements into actionable system architectures.",
    ],
    strengths: [
      {
        icon: "troubleshoot",
        title: "Analytical Precision",
        description: "Translating ambiguity into structured data models and clear requirements.",
      },
      {
        icon: "terminal",
        title: "Technical Fluency",
        description: "Bridging the gap between business stakeholders and engineering teams.",
      },
      {
        icon: "group",
        title: "Stakeholder-Centric Design",
        description: "Rooted in 9+ years of retail, ensuring solutions drive real value.",
      },
    ],
  },

  // Reviewed 2026-08-18: Node.js and "Sketchnoting & Visual Metaphor" were dropped
  // from a Stitch-generated draft of this section — neither is evidenced in the
  // Lumine/Paws & Pace stacks or anywhere else, so they didn't ship.
  competencies: [
    {
      icon: "manage_search",
      title: "Business Analysis",
      items: [
        "Requirements Gathering",
        "SRS / DFD / ERD / Sequence Diagrams",
        "Process Analysis & Optimization",
        "Data Reconciliation",
        "Stakeholder Communication",
        "UAT & Sign-off",
      ],
    },
    {
      icon: "code",
      title: "Technical Stack",
      items: [
        "React & React Native",
        "TypeScript",
        "Python & FastAPI",
        "MySQL",
        "AI-Assisted Development",
      ],
    },
    {
      icon: "groups",
      title: "Core Soft Skills",
      items: [
        "Complex-to-Simple Explanation",
        "English (Working Proficiency)",
        "Thai (Native)",
        "Problem Solving & Critical Thinking",
      ],
    },
  ],

  projects: [
    {
      slug: "lumine",
      name: "Lumine",
      tagline: "Evidence-based CRM for luxury retail sales associates",
      status:
        "Internal initiative proposed to Hugo Boss leadership, MVP/pilot stage, self-dogfooding daily",
      summary: {
        problem:
          "Retail sales associates lack a structured way to track client follow-up, so relationship-driven sales opportunities fall through the cracks.",
        solution:
          "A CRM built around the SAP + 2-2-2 follow-up framework, automating reminders and client history.",
        impact:
          "Deployed and in daily self-use, with a fully tested backend supporting the mobile app.",
      },
      metrics: [
        "331 tests passing",
        "8 routers configured",
        "24 endpoints secured",
        // "CI/CD Pipeline Active" appeared in a Stitch draft of this card — dropped,
        // there's no .github/workflows in project-lumine (checked 2026-08-18).
        "7 specialized AI agent roles (Architect, PM, QA, Dev, Security, DevOps, UX/UI)",
      ],
      techStack: [
        { category: "Frontend", items: ["React Native", "Expo", "TypeScript"] },
        { category: "Backend & DB", items: ["Python (FastAPI)", "SQLAlchemy", "MySQL"] },
        { category: "Infrastructure", items: ["Render", "Google Drive API"] },
      ],
      links: {
        github: "https://github.com/PiriyaLapa/project-lumine",
        liveDemo: "https://lumine-api-qi77.onrender.com",
        // srsPdf: not yet published — add once the Case Study PDF exists
      },
      limitations: [
        // TODO: pull 2-3 honest items from SRS_Lumine_v1_0_Current_State.md
      ],
      diagrams: [
        { label: "Use Case Diagram", figure: "FIG. 1", image: "/content/diagrams/lumine-use-case.svg" },
        { label: "ER Diagram", figure: "FIG. 2", image: "/content/diagrams/lumine-er-diagram.svg" },
        { label: "System Architecture", figure: "FIG. 3", image: "/content/diagrams/lumine-architecture.svg" },
        { label: "BPMN Process Flow", figure: "FIG. 4", image: "/content/diagrams/lumine-bpmn.svg" },
        { label: "Sequence Diagram", figure: "FIG. 5", image: "/content/diagrams/lumine-sequence.svg" },
        { label: "Data Flow Diagram", figure: "FIG. 6", image: "/content/diagrams/lumine-dfd.svg" },
        // 6 of 6 diagrams currently verified against code (docs/diagrams source doesn't exist yet —
        // rendered from Notion "Interview Diagram Prep" Mermaid source, 2026-08-18). Additional diagrams
        // (Auto-Touch sequence, DFD Level 2 breakdowns) referenced in planning notes are not yet built.
      ],
      primary: true,
    },
    {
      slug: "paws-and-pace",
      name: "Paws & Pace",
      tagline: "GPS-driven fitness app with a virtual companion",
      status: "Active build, daily use, built with a sibling as product owner",
      // Real narrative pulled from the project's own CLAUDE.md (2026-08-18) — a
      // Stitch draft of this card previously invented a "canine agility trainer"
      // description that has nothing to do with the actual app.
      summary: {
        problem:
          "Fitness apps track steps and distance, but abstract numbers rarely keep people moving day after day.",
        solution:
          "A React Native app where a virtual cat's hunger and evolution are driven directly by real-world GPS activity — a time-decay game engine that turns movement into the thing keeping the cat alive.",
        impact:
          "In daily personal use, with a tested FastAPI backend and mobile app built alongside a sibling as product owner.",
      },
      metrics: ["116/116 backend tests passing", "113/113 mobile tests passing"],
      techStack: [
        { category: "Frontend", items: ["React Native", "Expo", "TypeScript"] },
        { category: "Backend & DB", items: ["Python (FastAPI)", "TiDB"] },
      ],
      links: {
        github: "https://github.com/PiriyaLapa/PawsAndPace",
      },
      primary: false,
    },
  ] as ProjectContent[],

  diagramsTotalCount: 6,

  resume: {
    label: "Download Business Analyst Resume",
    // Place the actual file at public/content/Piriya_Resume_BusinessAnalyst.pdf
    fileUrl: "/content/Piriya_Resume_BusinessAnalyst.pdf",
    fileLabel: "Resume.pdf",
  },

  caseStudy: {
    label: "Download Case Study",
    fileUrl: null as string | null, // null = not built yet, render disabled/hidden
  },

  demoVideo: {
    youtubeId: null as string | null, // null = not recorded yet, render "coming soon"
  },

  contact: {
    email: "piriyalapa@gmail.com",
    linkedIn: "https://www.linkedin.com/in/PLACEHOLDER", // TODO: replace with real profile URL
  },
}
