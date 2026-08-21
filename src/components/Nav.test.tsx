import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { Nav } from "./Nav"

function renderNav(initialEntry: string) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Nav />
    </MemoryRouter>,
  )
}

describe("Nav", () => {
  it("highlights only Home as active at /", () => {
    renderNav("/")

    expect(screen.getAllByText("About")[0]).toHaveClass("text-primary")
    expect(screen.getAllByText("Projects")[0]).not.toHaveClass("text-primary")
  })

  it("highlights only Projects as active at /projects, not Home (exact-match guard)", () => {
    renderNav("/projects")

    expect(screen.getAllByText("Projects")[0]).toHaveClass("text-primary")
    expect(screen.getAllByText("About")[0]).not.toHaveClass("text-primary")
  })

  it("toggles the mobile menu open and closes it again when a link is clicked", async () => {
    const user = userEvent.setup()
    renderNav("/")

    const toggle = screen.getByLabelText("Toggle navigation menu")
    expect(toggle).toHaveAttribute("aria-expanded", "false")

    await user.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "true")

    const mobileProjectsLink = screen.getAllByText("Projects")[1]
    await user.click(mobileProjectsLink)
    expect(toggle).toHaveAttribute("aria-expanded", "false")
  })
})
