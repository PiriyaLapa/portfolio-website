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
  links: {
    github?: string
    liveDemo?: string
    srsPdf?: string
  }
  limitations?: string[]
  primary: boolean
}

export const site = {
  deployedUrl: "https://benzlapa-portfolio.example.com", // TODO: replace once deployed

  hero: {
    name: "Piriya (Benz) Lapa",
    role: "Business Analyst / System Analyst",
    narrative:
      "9+ years in retail sales, self-taught into software development, now applying that as AI-assisted BA/SA work.",
  },

  about: {
    journey:
      "9+ years of retail sales experience, self-taught software development, now pivoting into Business Analyst / System Analyst roles using AI-assisted engineering practice.",
    strengths: [
      "Bridges business and technical stakeholders from real retail-floor experience",
      "Ships and documents real, code-verified systems — not just diagrams",
      "Self-directed learner comfortable owning a project end to end",
    ],
  },

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
        "Deployed on Render",
        "8 routers / 24 endpoints",
      ],
      links: {
        github: "https://github.com/PiriyaLapa/project-lumine",
        liveDemo: "https://lumine-api-qi77.onrender.com",
        // srsPdf: not yet published — add once the Case Study PDF exists
      },
      limitations: [
        // TODO: pull 2-3 honest items from SRS_Lumine_v1_0_Current_State.md
      ],
      primary: true,
    },
    {
      slug: "paws-and-pace",
      name: "Paws & Pace",
      tagline: "Companion project",
      status: "Active",
      summary: {
        problem: "",
        solution: "",
        impact: "",
      },
      metrics: ["116/116 backend tests passing", "113/113 mobile tests passing"],
      links: {
        github: "https://github.com/PiriyaLapa/PawsAndPace",
      },
      primary: false,
    },
  ] as ProjectContent[],

  resume: {
    label: "Download Resume",
    // Place the actual file at public/content/Piriya_Resume_BusinessAnalyst.pdf
    fileUrl: "/content/Piriya_Resume_BusinessAnalyst.pdf",
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
