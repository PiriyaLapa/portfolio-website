import type { ProjectContent } from "../content/site"

export function ProjectCard({ project }: { project: ProjectContent }) {
  return (
    <article
      className={`rounded-xl border border-gray-200 p-6 dark:border-gray-800 ${
        project.primary ? "sm:p-8" : ""
      }`}
    >
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
          {project.name}
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-500">
          {project.status}
        </span>
      </div>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        {project.tagline}
      </p>

      {project.primary && (
        <div className="mb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {project.summary.problem && (
            <p>
              <span className="font-medium">Problem — </span>
              {project.summary.problem}
            </p>
          )}
          {project.summary.solution && (
            <p>
              <span className="font-medium">Solution — </span>
              {project.summary.solution}
            </p>
          )}
          {project.summary.impact && (
            <p>
              <span className="font-medium">Impact — </span>
              {project.summary.impact}
            </p>
          )}
        </div>
      )}

      {project.metrics.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <li
              key={metric}
              className="rounded-full bg-purple-50 px-3 py-1 text-xs text-purple-700 dark:bg-purple-950 dark:text-purple-300"
            >
              {metric}
            </li>
          ))}
        </ul>
      )}

      {project.limitations && project.limitations.length > 0 && (
        <div className="mb-4">
          <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-500">
            Known limitations
          </p>
          <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
            {project.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-4 text-sm">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-purple-600 hover:underline dark:text-purple-400"
          >
            GitHub repo
          </a>
        )}
        {project.links.liveDemo && (
          <a
            href={project.links.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-purple-600 hover:underline dark:text-purple-400"
          >
            Live demo
          </a>
        )}
        {project.links.srsPdf && (
          <a
            href={project.links.srsPdf}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-purple-600 hover:underline dark:text-purple-400"
          >
            Download SRS PDF
          </a>
        )}
      </div>
    </article>
  )
}
