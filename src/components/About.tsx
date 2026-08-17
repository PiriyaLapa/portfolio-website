import { site } from "../content/site"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
        About
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">{site.about.journey}</p>
      <ul className="grid gap-3 sm:grid-cols-3">
        {site.about.strengths.map((strength) => (
          <li
            key={strength}
            className="rounded-lg border border-gray-200 p-4 text-sm text-gray-700 dark:border-gray-800 dark:text-gray-300"
          >
            {strength}
          </li>
        ))}
      </ul>
    </section>
  )
}
