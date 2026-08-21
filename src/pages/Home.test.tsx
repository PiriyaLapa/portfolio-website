import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import type { ProjectContent } from "../content/site"

function buildProject(overrides: Partial<ProjectContent> = {}): ProjectContent {
  return {
    slug: "test-project",
    name: "Test Project",
    tagline: "A test project tagline",
    status: "Live",
    summary: { problem: "p", solution: "s", impact: "i" },
    metrics: ["1,000 users"],
    links: {},
    headerIcon: "code",
    primary: true,
    ...overrides,
  }
}

function buildSite(overrides: { photoUrl?: string | null; projects?: ProjectContent[] } = {}) {
  return {
    deployedUrl: "https://example.com",
    hero: {
      name: "Test Person",
      role: "Business Analyst",
      tagline: "A tagline",
      statusBadge: "SYSTEM STATUS: READY",
      photoUrl: overrides.photoUrl ?? null,
    },
    resume: { fileUrl: "/content/resume.pdf" },
    about: {
      docRef: "DOC-001",
      statement: ["Paragraph one."],
      strengths: [{ title: "Strength", icon: "star", description: "desc" }],
    },
    competencies: [{ title: "Group", icon: "code", items: ["Item"] }],
    projects: overrides.projects ?? [buildProject()],
  }
}

async function renderHomeWithSite(overrides: Parameters<typeof buildSite>[0]) {
  vi.resetModules()
  vi.doMock("../content/site", () => ({ site: buildSite(overrides) }))
  const { Home } = await import("./Home")
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )
}

describe("Home", () => {
  afterEach(() => {
    vi.doUnmock("../content/site")
  })

  it("renders the hero photo when photoUrl is set", async () => {
    await renderHomeWithSite({ photoUrl: "/content/photo.jpg" })

    const img = screen.getByAltText("Test Person")
    expect(img).toHaveAttribute("src", "/content/photo.jpg")
    expect(screen.queryByText("PL")).not.toBeInTheDocument()
  })

  it("renders the initials fallback when photoUrl is null", async () => {
    await renderHomeWithSite({ photoUrl: null })

    expect(screen.queryByAltText("Test Person")).not.toBeInTheDocument()
    expect(screen.getByText("PL")).toBeInTheDocument()
  })

  it("shows a project's first metric when metrics exist", async () => {
    await renderHomeWithSite({
      projects: [buildProject({ metrics: ["331 tests passing"] })],
    })

    expect(screen.getByText("331 tests passing")).toBeInTheDocument()
  })

  it("hides the metrics line when a project has no metrics", async () => {
    await renderHomeWithSite({
      projects: [buildProject({ metrics: [] })],
    })

    expect(screen.queryByText(/tests passing/)).not.toBeInTheDocument()
  })

  it("labels a primary project CASE_STUDY: 001 and a non-primary COMPANION", async () => {
    await renderHomeWithSite({
      projects: [
        buildProject({ slug: "primary", primary: true }),
        buildProject({ slug: "secondary", name: "Secondary Project", primary: false }),
      ],
    })

    expect(screen.getByText("CASE_STUDY: 001")).toBeInTheDocument()
    expect(screen.getByText("COMPANION")).toBeInTheDocument()
  })

  it("renders the QR code pointing at the deployed URL", async () => {
    await renderHomeWithSite({})

    expect(screen.getByText("Scan to share this portfolio")).toBeInTheDocument()
    expect(document.querySelector("svg")).toBeInTheDocument()
  })
})
