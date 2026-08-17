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
  diagrams?: { label: string; figure: string }[]
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
      diagrams: [
        { label: "ER Diagram", figure: "FIG. 1" },
        { label: "BPMN Process", figure: "FIG. 2" },
        { label: "Use Case Diagram", figure: "FIG. 3" },
        // Remaining 9 of 13 diagrams: exported once docs/diagrams/lumine_diagrams.drawio is rendered
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

  diagramsTotalCount: 13,

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
