import { site } from "../content/site"

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-8 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto gap-4">
        <span className="font-headline-md text-headline-md font-bold text-primary text-lg">
          Benz Lapa
        </span>
        <span className="text-on-surface-variant text-sm text-center">
          © {new Date().getFullYear()} Benz Lapa. Documented record of engineered solutions.
        </span>
        <nav className="flex gap-6 font-annotation text-annotation text-on-surface-variant">
          <a
            href={site.contact.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors uppercase"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="hover:text-primary transition-colors uppercase"
          >
            Email
          </a>
          <a
            href={site.projects[0]?.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors uppercase"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
