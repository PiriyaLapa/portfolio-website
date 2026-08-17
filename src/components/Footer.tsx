import { site } from "../content/site"

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-border-gray w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-stack-md px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-4">
        <span className="font-headline-md text-headline-md font-bold text-tertiary text-lg">
          Benz Lapa
        </span>
        <span className="text-text-muted text-sm text-center">
          © 2026 Benz Lapa. Documented record of engineered solutions.
        </span>
        <nav className="flex gap-6 font-label-caps text-label-caps text-text-muted">
          <a
            href={site.contact.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="hover:text-tech-blue transition-colors uppercase"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="hover:text-tech-blue transition-colors uppercase"
          >
            Email
          </a>
          <a
            href={site.projects[0]?.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-tech-blue transition-colors uppercase"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
