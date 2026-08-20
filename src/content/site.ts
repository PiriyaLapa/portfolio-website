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
  diagrams?: { label: string; figure: string; image: string; curated?: boolean }[]
  // UX/UI mockup gallery (FR-4-adjacent) — populate once Stitch mockup images
  // (Login, Register, Tasks Dashboard, Summary Dashboard, Upload Purchase)
  // are exported as files; renders nothing until then.
  mockups?: { label: string; figure: string; image: string }[]
  primary: boolean
}

export const site = {
  deployedUrl: "https://portfolio-website-olive-xi-rk40667qsr.vercel.app",

  hero: {
    name: "Piriya (Benz) Lapa",
    role: "Business Analyst / System Analyst",
    tagline: "Transforming retail experience into engineered analytical solutions.",
    statusBadge: "SYSTEM STATUS: READY FOR DEPLOYMENT",
    photoUrl: "/content/Profile_image_Piriya.jpg" as string | null,
  },

  about: {
    docRef: "DOC REF: AB-101",
    // Rewritten 2026-08-20 to a first-person narrative beat structure (Moment
    // → Friction → Pivot → Method → bridge to evidence) per Benz's direction —
    // replacing the earlier formal "My trajectory is defined by..." framing.
    // Kept anchored to the corrected Lumine narrative: leadership set a general
    // follow-up goal, not a formal commission — see git history for the
    // confidentiality-driven rewrite this follows.
    statement: [
      "A customer buys something on the sales floor, says thanks, and walks out — and more often than not, no one ever follows up. I watched that happen for nine years, alongside the daily grind of reconciling sales data by hand and watching promising leads quietly go cold.",
      "Leadership wanted the team to follow up with customers more consistently — a good goal that was hard to actually execute by hand, day after day. Rather than wait for someone else to fix it, I taught myself to build the fix: I own the full system — requirements, architecture, QA — and direct AI agents, seven specialized roles working disciplined sprints, tests written before code, to build to that spec.",
      "None of this is just a claim — here's the proof, step by step.",
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

  // Reviewed 2026-08-18 against docs/Piriya_Resume_BusinessAnalyst.md — Node.js
  // and "Sketchnoting & Visual Metaphor" were dropped from an earlier Stitch draft
  // for lacking evidence in the Lumine/Paws & Pace stacks, but the resume itself
  // confirms both (Node.js from the Transcode role, sketchnoting as a listed
  // Communication skill), so they're back in.
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
        "Node.js",
        "MySQL",
        "AI-Assisted Development",
      ],
    },
    {
      icon: "groups",
      title: "Core Soft Skills",
      items: [
        "Complex-to-Simple Explanation (Sketchnoting & Visual Metaphor)",
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
        "Self-initiated productivity tool, informally discussed with my manager — MVP/pilot stage, in active use",
      summary: {
        problem:
          "Retail sales associates lack a structured way to track client follow-up, so relationship-driven sales opportunities fall through the cracks.",
        solution:
          "A CRM built around a tiered follow-up cadence (near-term, mid-term, long-term touchpoints) that leadership wanted the team to follow — I noticed the team struggling to execute it consistently and independently designed a tool to automate reminders and client history on top of the store's SAP sales data.",
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
        "Customer outreach itself (calls/messages) is currently done manually.",
      ],
      // All 13 exported 2026-08-18 directly from the real, code-verified
      // docs/diagrams/lumine_diagrams.drawio in the project-lumine repo (develop
      // branch) — supersedes the 6-diagram Mermaid draft from earlier the same day
      // (archived at public/content/diagrams/archive/2026-08-18-mermaid-notion-draft/).
      // `curated: true` = shown by default; the rest sit behind "view all 13 diagrams".
      diagrams: [
        { label: "Use Case Diagram", figure: "FIG. 1", image: "/content/diagrams/lumine-use-case.svg", curated: true },
        { label: "System Architecture", figure: "FIG. 2", image: "/content/diagrams/lumine-architecture.svg", curated: true },
        { label: "ER Diagram", figure: "FIG. 3", image: "/content/diagrams/lumine-er-diagram.svg", curated: true },
        { label: "BPMN — Tiered Follow-up Lifecycle", figure: "FIG. 4", image: "/content/diagrams/lumine-bpmn.svg", curated: true },
        { label: "Sequence Diagram", figure: "FIG. 5", image: "/content/diagrams/lumine-sequence-main.svg", curated: true },
        { label: "Sequence — Auto-Touch", figure: "FIG. 6", image: "/content/diagrams/lumine-sequence-auto-touch.svg" },
        { label: "DFD — Level 0 (Context)", figure: "FIG. 7", image: "/content/diagrams/lumine-dfd-level0.svg" },
        { label: "DFD — Level 1", figure: "FIG. 8", image: "/content/diagrams/lumine-dfd-level1.svg" },
        { label: "DFD L2 — Import SAP Data", figure: "FIG. 9", image: "/content/diagrams/lumine-dfd-l2-import-sap.svg" },
        { label: "DFD L2 — Schedule Follow-ups", figure: "FIG. 10", image: "/content/diagrams/lumine-dfd-l2-schedule-followups.svg" },
        { label: "DFD L2 — Complete Follow-up", figure: "FIG. 11", image: "/content/diagrams/lumine-dfd-l2-complete-followup.svg" },
        { label: "DFD L2 — View Customer Profile", figure: "FIG. 12", image: "/content/diagrams/lumine-dfd-l2-view-customer-profile.svg" },
        { label: "DFD L2 — Auto-Touch", figure: "FIG. 13", image: "/content/diagrams/lumine-dfd-l2-auto-touch.svg" },
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
      // docs/diagrams/pawsandpace_diagrams.drawio in the PawsAndPace repo (develop
      // branch) — 7 tabs, each verified against the live backend/mobile code on
      // 2026-08-20. `curated: true` = shown by default; the rest sit behind
      // "view all 7 diagrams".
      diagrams: [
        { label: "Use Case Diagram", figure: "FIG. 1", image: "/content/diagrams/pawsandpace-use-case.svg", curated: true },
        { label: "System Architecture", figure: "FIG. 2", image: "/content/diagrams/pawsandpace-architecture.svg", curated: true },
        { label: "ER Diagram", figure: "FIG. 3", image: "/content/diagrams/pawsandpace-er-diagram.svg", curated: true },
        { label: "BPMN — Run Lifecycle", figure: "FIG. 4", image: "/content/diagrams/pawsandpace-bpmn.svg", curated: true },
        { label: "Sequence — Save Activity", figure: "FIG. 5", image: "/content/diagrams/pawsandpace-sequence.svg" },
        { label: "DFD — Level 0 (Context)", figure: "FIG. 6", image: "/content/diagrams/pawsandpace-dfd-level0.svg" },
        { label: "DFD — Level 1", figure: "FIG. 7", image: "/content/diagrams/pawsandpace-dfd-level1.svg" },
      ],
      primary: false,
    },
  ] as ProjectContent[],

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
    linkedIn: "https://www.linkedin.com/in/piriya-lapa-75b6371b8",
  },
}
