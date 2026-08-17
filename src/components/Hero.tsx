import { site } from "../content/site"

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[80svh] flex-col items-center justify-center gap-6 px-6 py-16 text-center md:min-h-0 md:py-28"
    >
      <p className="text-sm font-medium tracking-wide text-purple-600 uppercase dark:text-purple-400">
        {site.hero.role}
      </p>
      <h1 className="text-4xl font-semibold text-gray-900 sm:text-6xl dark:text-gray-50">
        {site.hero.name}
      </h1>
      <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400">
        {site.hero.narrative}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-700"
        >
          View Projects
        </a>
        <a
          href={site.resume.fileUrl}
          download
          className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:border-gray-400 dark:border-gray-700 dark:text-gray-100"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:border-gray-400 dark:border-gray-700 dark:text-gray-100"
        >
          Contact
        </a>
      </div>
    </section>
  )
}
