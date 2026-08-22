import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { ProjectContent } from "../content/site"
import {
  DiagramGallery,
  LogicVsLive,
  ProductionGallery,
  Projects,
  ProjectResourceLinks,
} from "./Projects"

function buildProject(overrides: Partial<ProjectContent> = {}): ProjectContent {
  return {
    slug: "test-project",
    name: "Test Project",
    tagline: "A test project tagline",
    status: "Live",
    summary: { problem: "p", solution: "s", impact: "i" },
    metrics: [],
    links: {},
    headerIcon: "code",
    primary: true,
    ...overrides,
  }
}

describe("ProjectResourceLinks", () => {
  const allLinks = {
    github: "https://github.com/example/repo",
    liveDemo: "https://example.com/demo",
    srsPdf: "https://example.com/srs.pdf",
  }

  it("renders all three links with sidebar labels and open_in_new on github/liveDemo but not srsPdf", () => {
    render(<ProjectResourceLinks links={allLinks} variant="sidebar" />)

    expect(screen.getByText("GitHub Repo")).toBeInTheDocument()
    expect(screen.getByText("Live Demo")).toBeInTheDocument()
    expect(screen.getByText("Download SRS PDF")).toBeInTheDocument()
    expect(screen.getAllByText("open_in_new")).toHaveLength(2)
  })

  it("renders compact labels, with open_in_new on github/liveDemo (both open in a new tab) but not srsPdf", () => {
    render(<ProjectResourceLinks links={allLinks} variant="compact" />)

    expect(screen.getByText("View GitHub")).toBeInTheDocument()
    expect(screen.getByText("Live Demo")).toBeInTheDocument()
    expect(screen.getByText("Download SRS PDF")).toBeInTheDocument()
    expect(screen.getAllByText("open_in_new")).toHaveLength(2)
  })

  it("renders nothing when there are no links", () => {
    const { container } = render(<ProjectResourceLinks links={{}} variant="sidebar" />)

    expect(container).toBeEmptyDOMElement()
  })

  it("renders only the github link when only github is present", () => {
    render(<ProjectResourceLinks links={{ github: allLinks.github }} variant="sidebar" />)

    expect(screen.getByText("GitHub Repo")).toBeInTheDocument()
    expect(screen.queryByText("Live Demo")).not.toBeInTheDocument()
    expect(screen.queryByText("Download SRS PDF")).not.toBeInTheDocument()
  })
})

describe("DiagramGallery", () => {
  it("renders nothing when there are no diagrams", () => {
    const { container } = render(<DiagramGallery project={buildProject()} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("shows only curated diagrams by default and reveals the rest on toggle", async () => {
    const user = userEvent.setup()
    const project = buildProject({
      diagrams: [
        { label: "Use Case", figure: "Fig 1", image: "/fig1.png", curated: true },
        { label: "ER Diagram", figure: "Fig 2", image: "/fig2.png", curated: false },
      ],
    })
    render(<DiagramGallery project={project} />)

    expect(screen.getByText("Use Case")).toBeInTheDocument()
    expect(screen.queryByText("ER Diagram")).not.toBeInTheDocument()

    await user.click(screen.getByText(/View all 2 diagrams/))

    expect(screen.getByText("ER Diagram")).toBeInTheDocument()
  })
})

describe("ProductionGallery", () => {
  it("renders nothing when there are no screenshots", () => {
    const { container } = render(<ProductionGallery project={buildProject()} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("shows no prev/next controls with exactly one screenshot", () => {
    const project = buildProject({
      uiScreenshots: [{ label: "Home", caption: "The home screen", image: "/shot1.png" }],
    })
    render(<ProductionGallery project={project} />)

    expect(screen.queryByLabelText("Next screenshot")).not.toBeInTheDocument()
    expect(screen.queryByLabelText("Previous screenshot")).not.toBeInTheDocument()
  })

  it("advances and wraps around with multiple screenshots", async () => {
    const user = userEvent.setup()
    const project = buildProject({
      uiScreenshots: [
        { label: "First", caption: "c1", image: "/1.png" },
        { label: "Second", caption: "c2", image: "/2.png" },
      ],
    })
    render(<ProductionGallery project={project} />)

    expect(screen.getByText("First")).toBeInTheDocument()

    await user.click(screen.getByLabelText("Next screenshot"))
    expect(screen.getByText("Second")).toBeInTheDocument()

    await user.click(screen.getByLabelText("Next screenshot"))
    expect(screen.getByText("First")).toBeInTheDocument()
  })
})

describe("LogicVsLive", () => {
  it("renders nothing when empty", () => {
    const { container } = render(<LogicVsLive project={buildProject()} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("renders entries when present", () => {
    const project = buildProject({
      logicVsLive: [
        {
          label: "Customer Profile",
          diagramImage: "/diagram.png",
          screenshotImage: "/screenshot.png",
          caption: "Diagram vs. live screen",
        },
      ],
    })
    render(<LogicVsLive project={project} />)

    expect(screen.getByText("Diagram vs. live screen")).toBeInTheDocument()
  })
})

describe("Projects page", () => {
  it("renders exactly one primary section and one secondary section from real site content", () => {
    render(<Projects />)

    expect(screen.getByText("Secondary Project")).toBeInTheDocument()
    expect(screen.getAllByText("Project Resources")).toHaveLength(2)
  })
})
