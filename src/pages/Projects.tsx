import { useState } from "react"
import { site } from "../content/site"
import { QrCode } from "../components/QrCode"
import type { ProjectContent } from "../content/site"

function LumineCard({ project }: { project: ProjectContent }) {
  const [showAllDiagrams, setShowAllDiagrams] = useState(false)
  const hasCuration = project.diagrams?.some((d) => d.curated)
  const visibleDiagrams =
    hasCuration && !showAllDiagrams
      ? project.diagrams?.filter((d) => d.curated)
      : project.diagrams

  return (
    <section className="bg-surface-container-lowest border border-outline rounded-xl overflow-hidden flex flex-col md:flex-row">
      <div className="p-6 md:p-8 md:w-2/3 flex flex-col gap-6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">{project.name}</h2>
            <div className="flex gap-2 items-center flex-wrap">
              <span className="font-annotation text-annotation bg-surface-container-low text-on-surface px-2 py-1 border border-outline rounded">
                {project.tagline}
              </span>
              <span className="font-annotation text-annotation text-on-surface-variant border border-outline px-2 py-1 rounded border-dashed">
                Status: {project.status}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-secondary text-3xl">architecture</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-annotation text-annotation text-on-surface-variant uppercase tracking-widest mb-2">
              Summary
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-annotation text-annotation text-on-surface font-bold">Problem:</span>
                <p className="text-on-surface-variant mt-1">{project.summary.problem}</p>
              </div>
              <div>
                <span className="font-annotation text-annotation text-on-surface font-bold">Solution:</span>
                <p className="text-on-surface-variant mt-1">{project.summary.solution}</p>
              </div>
              <div>
                <span className="font-annotation text-annotation text-on-surface font-bold">Impact:</span>
                <p className="text-on-surface-variant mt-1">{project.summary.impact}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-surface-container-low p-4 border border-outline rounded-lg flex flex-col gap-4">
              <h3 className="font-annotation text-annotation text-on-surface-variant uppercase tracking-widest">
                Technical Detail
              </h3>
              <ul className="flex flex-col gap-3">
                {project.metrics.map((metric) => (
                  <li key={metric} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-container mt-1.5 shrink-0" />
                    <span className="font-annotation text-annotation text-on-surface">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
            {project.techStack && project.techStack.length > 0 && (
              <div className="bg-surface-container-low p-4 border border-outline rounded-lg flex flex-col gap-3">
                <h3 className="font-annotation text-annotation text-on-surface-variant uppercase tracking-widest">
                  Technology Stack
                </h3>
                {project.techStack.map((group) => (
                  <div key={group.category}>
                    <span className="font-annotation text-annotation text-on-surface-variant block mb-1">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="font-annotation text-annotation bg-surface-container-lowest border border-outline px-2 py-0.5 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {project.limitations && project.limitations.length > 0 && (
          <div className="border-t border-outline pt-6">
            <h3 className="font-annotation text-annotation text-on-surface-variant uppercase tracking-widest mb-2">
              Known Limitations
            </h3>
            <ul className="list-disc list-inside text-on-surface-variant text-sm">
              {project.limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.mockups && project.mockups.length > 0 && (
          <div className="border-t border-outline pt-6 mt-2">
            <h3 className="font-annotation text-annotation text-on-surface-variant uppercase tracking-widest mb-4">
              UX/UI Design
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.mockups.map((mockup) => (
                <a
                  key={mockup.figure}
                  href={mockup.image}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-outline bg-surface-container-low p-2 rounded relative block hover:border-primary transition-colors"
                >
                  <div className="w-full h-40 mb-2 rounded border border-outline bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={mockup.image}
                      alt={`${project.name} ${mockup.label} interface mockup`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-annotation text-annotation text-center text-on-surface-variant">
                    {mockup.label}
                  </p>
                  <span className="font-annotation text-annotation absolute top-3 right-3 bg-surface-container-lowest px-1 border border-outline rounded text-on-surface-variant uppercase">
                    {mockup.figure}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {project.diagrams && project.diagrams.length > 0 && (
          <div className="border-t border-outline pt-6 mt-2">
            <h3 className="font-annotation text-annotation text-on-surface-variant uppercase tracking-widest mb-4">
              Architecture Diagrams
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visibleDiagrams?.map((diagram) => (
                <a
                  key={diagram.figure}
                  href={diagram.image}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-outline bg-surface-container-low p-2 rounded relative block hover:border-primary transition-colors"
                >
                  <div className="w-full h-40 mb-2 rounded border border-outline bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={diagram.image}
                      alt={`${project.name} ${diagram.label}, verified against the live codebase`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-annotation text-annotation text-center text-on-surface-variant">
                    {diagram.label}
                  </p>
                  <span className="font-annotation text-annotation absolute top-3 right-3 bg-surface-container-lowest px-1 border border-outline rounded text-on-surface-variant uppercase">
                    {diagram.figure}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs text-on-surface-variant">
                Grounded in the current codebase — {site.diagramsTotalCount} diagrams total
              </p>
              {hasCuration && (
                <button
                  type="button"
                  onClick={() => setShowAllDiagrams((prev) => !prev)}
                  className="font-annotation text-annotation text-tech-blue hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {showAllDiagrams
                    ? "Show fewer diagrams"
                    : `View all ${site.diagramsTotalCount} diagrams`}
                  <span className="material-symbols-outlined text-sm">
                    {showAllDiagrams ? "expand_less" : "expand_more"}
                  </span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="md:w-1/3 bg-surface-container-low border-t md:border-t-0 md:border-l border-outline p-6 md:p-8 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="font-annotation text-annotation text-on-surface-variant uppercase tracking-widest mb-2">
            Project Resources
          </h3>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full p-3 border border-outline rounded hover:border-primary transition-colors bg-surface-container-lowest group"
            >
              <span className="font-annotation text-annotation text-on-surface font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">code</span>
                GitHub Repo
              </span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-sm">
                open_in_new
              </span>
            </a>
          )}
          {project.links.liveDemo && (
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full p-3 border border-outline rounded hover:border-primary transition-colors bg-surface-container-lowest group"
            >
              <span className="font-annotation text-annotation text-on-surface font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">play_circle</span>
                Live Demo
              </span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-sm">
                open_in_new
              </span>
            </a>
          )}
          {project.links.srsPdf && (
            <a
              href={project.links.srsPdf}
              className="mt-4 w-full bg-surface-container-lowest border border-secondary text-secondary font-annotation text-annotation py-3 px-4 rounded hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Download SRS PDF
            </a>
          )}
        </div>
        <div className="mt-8 pt-8 border-t border-outline flex justify-center">
          <QrCode url={site.deployedUrl} caption="Scan to share this evidence hub" />
        </div>
      </div>
    </section>
  )
}

function SecondaryCard({ project }: { project: ProjectContent }) {
  const hasNarrative = project.summary.solution.length > 0

  return (
    <section className="bg-surface-container-lowest border border-outline rounded-xl overflow-hidden p-6 md:p-8 hover:border-outline-variant transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="md:w-2/3">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-headline-md text-headline-md text-on-surface">{project.name}</h2>
            <span className="font-annotation text-annotation bg-surface-container-low text-on-surface px-2 py-1 border border-outline rounded">
              Secondary Project
            </span>
          </div>
          {hasNarrative && (
            <p className="font-body-md text-body-md text-on-surface-variant">{project.summary.solution}</p>
          )}
          <div className="mt-4 flex flex-col gap-3">
            {project.techStack && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-annotation text-annotation text-on-surface-variant uppercase tracking-widest">
                  Stack:
                </span>
                {project.techStack.flatMap((group) => group.items).map((item) => (
                  <span
                    key={item}
                    className="font-annotation text-annotation bg-surface-container-low border border-outline px-2 py-0.5 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="font-annotation text-annotation bg-surface-container px-2 py-1 border border-outline rounded"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline rounded font-annotation text-annotation text-on-surface hover:border-primary transition-colors"
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
    <main className="flex-grow max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex flex-col gap-12 md:gap-20">
      <section>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
          Documented Solutions
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
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
