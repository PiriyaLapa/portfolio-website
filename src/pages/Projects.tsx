import { site } from "../content/site"
import { QrCode } from "../components/QrCode"
import type { ProjectContent } from "../content/site"

function LumineCard({ project }: { project: ProjectContent }) {
  return (
    <section className="bg-surface-container-lowest border border-border-gray rounded-xl overflow-hidden flex flex-col md:flex-row">
      <div className="p-8 md:w-2/3 flex flex-col gap-6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">{project.name}</h2>
            <div className="flex gap-2 items-center flex-wrap">
              <span className="font-label-sm text-label-sm bg-surface-container text-on-surface px-2 py-1 border border-border-gray rounded">
                {project.tagline}
              </span>
              <span className="font-label-sm text-label-sm text-text-muted border border-border-gray px-2 py-1 rounded border-dashed">
                Status: {project.status}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-tech-blue text-3xl">architecture</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">
              Summary
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-label-sm text-label-sm text-primary font-bold">Problem:</span>
                <p className="text-secondary mt-1">{project.summary.problem}</p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-primary font-bold">Solution:</span>
                <p className="text-secondary mt-1">{project.summary.solution}</p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-primary font-bold">Impact:</span>
                <p className="text-secondary mt-1">{project.summary.impact}</p>
              </div>
            </div>
          </div>
          <div className="bg-surface p-4 border border-border-gray rounded-lg flex flex-col gap-4">
            <h3 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              Technical Detail
            </h3>
            <ul className="flex flex-col gap-3">
              {project.metrics.map((metric) => (
                <li key={metric} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-emerald" />
                  <span className="font-label-sm text-label-sm text-primary">{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.limitations && project.limitations.length > 0 && (
          <div className="border-t border-border-gray pt-6">
            <h3 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">
              Known Limitations
            </h3>
            <ul className="list-disc list-inside text-secondary text-sm">
              {project.limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.diagrams && project.diagrams.length > 0 && (
          <div className="border-t border-border-gray pt-6 mt-2">
            <h3 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4">
              Architecture Diagrams
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.diagrams.map((diagram) => (
                <div
                  key={diagram.figure}
                  className="border border-border-gray bg-surface p-2 rounded relative"
                >
                  <div className="w-full h-24 mb-2 rounded border border-dashed border-border-gray bg-surface-container-low flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline-variant text-3xl">
                      schema
                    </span>
                  </div>
                  <p className="font-label-caps text-label-caps text-center text-text-muted">
                    {diagram.label}
                  </p>
                  <span className="font-label-caps text-label-caps absolute top-3 right-3 bg-surface-container-lowest px-1 border border-border-gray rounded text-text-muted">
                    {diagram.figure}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-text-muted">
              Exported from the .drawio source — pending image export
            </p>
            <div className="mt-4 text-right">
              <span className="font-label-sm text-label-sm text-text-muted inline-flex items-center gap-1">
                View all {site.diagramsTotalCount} diagrams (coming soon)
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="md:w-1/3 bg-surface border-t md:border-t-0 md:border-l border-border-gray p-8 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">
            Project Resources
          </h3>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full p-3 border border-border-gray rounded hover:border-tertiary transition-colors bg-surface-container-lowest group"
            >
              <span className="font-label-sm text-label-sm text-primary font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">code</span>
                GitHub Repo
              </span>
              <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors text-sm">
                open_in_new
              </span>
            </a>
          )}
          {project.links.liveDemo && (
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full p-3 border border-border-gray rounded hover:border-tertiary transition-colors bg-surface-container-lowest group"
            >
              <span className="font-label-sm text-label-sm text-primary font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">play_circle</span>
                Live Demo
              </span>
              <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors text-sm">
                open_in_new
              </span>
            </a>
          )}
          {project.links.srsPdf && (
            <a
              href={project.links.srsPdf}
              className="mt-4 w-full bg-surface-container-lowest border border-tech-blue text-tech-blue font-label-sm text-label-sm py-3 px-4 rounded hover:bg-tech-blue hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Download SRS PDF
            </a>
          )}
        </div>
        <div className="mt-8 pt-8 border-t border-border-gray flex justify-center">
          <QrCode url={site.deployedUrl} caption="Scan to share this evidence hub" />
        </div>
      </div>
    </section>
  )
}

function SecondaryCard({ project }: { project: ProjectContent }) {
  return (
    <section className="bg-surface-container-lowest border border-border-gray rounded-xl overflow-hidden p-8 hover:border-text-muted transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="md:w-2/3">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-headline-md text-headline-md text-primary">{project.name}</h2>
            <span className="font-label-caps text-label-caps bg-surface-container text-on-surface px-2 py-1 border border-border-gray rounded">
              Secondary Project
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="font-label-caps text-label-caps bg-surface-container px-2 py-1 border border-border-gray rounded"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-surface-container-lowest border border-border-gray rounded font-label-sm text-label-sm text-primary hover:border-tertiary transition-colors"
            >
              <span className="material-symbols-outlined text-base">code</span>
              View GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const primary = site.projects.find((p) => p.primary)
  const secondary = site.projects.filter((p) => !p.primary)

  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-gutter py-section-gap flex flex-col gap-section-gap">
      <section>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-stack-md">
          Documented Solutions
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
          A curated repository of technical projects, demonstrating end-to-end architecture,
          documented methodologies, and measurable impact.
        </p>
      </section>

      {primary && <LumineCard project={primary} />}
      {secondary.map((project) => (
        <SecondaryCard key={project.slug} project={project} />
      ))}
    </main>
  )
}
