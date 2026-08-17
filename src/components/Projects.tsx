import { site } from "../content/site"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-50">
        Projects
      </h2>
      <div className="space-y-6">
        {site.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {/* Diagram viewer (FR-4) and demo video embed (FR-7) go here once the
          exported diagram images and recorded video exist — see CLAUDE.md
          Content Convention and "Current Phase" for status. */}
    </section>
  )
}
