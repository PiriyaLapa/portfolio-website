import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

function renderAppAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe("App routing smoke test", () => {
  it("renders Home at /", () => {
    renderAppAt("/")
    expect(screen.getByRole("heading", { name: "The Evolution of an Analyst" })).toBeInTheDocument()
  })

  it("renders Projects at /projects", () => {
    renderAppAt("/projects")
    expect(screen.getByRole("heading", { name: "Documented Solutions" })).toBeInTheDocument()
  })

  it("renders ResumeContact at /resume", () => {
    renderAppAt("/resume")
    expect(screen.getByRole("heading", { name: "Professional Documentation" })).toBeInTheDocument()
  })
})
