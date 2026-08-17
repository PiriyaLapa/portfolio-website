import { Link } from "react-router-dom"
import { site } from "../content/site"
import { QrCode } from "../components/QrCode"

export function Home() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-12 pb-24 w-full">
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-section-gap">
        <div className="md:col-span-8 flex flex-col items-start justify-center space-y-6">
          <div className="inline-flex items-center px-3 py-1 bg-surface-container-low border border-border-gray rounded-full">
            <span className="w-2 h-2 rounded-full bg-status-success mr-2" />
            <span className="font-label-caps text-label-caps text-text-muted">
              {site.hero.statusBadge}
            </span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary tracking-tight">
            {site.hero.name}
          </h1>
          <h2 className="font-headline-md text-headline-md text-secondary">{site.hero.role}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-border-gray pl-4">
            {site.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-emerald hover:bg-brand-emerald-dark text-white rounded font-label-sm text-label-sm font-bold transition-all"
            >
              View Projects
              <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
            </Link>
            <a
              href={site.resume.fileUrl}
              download
              className="inline-flex items-center justify-center px-6 py-3 border border-tech-blue text-tech-blue hover:bg-tech-blue/5 rounded font-label-sm text-label-sm font-bold transition-all"
            >
              Download Resume
              <span className="material-symbols-outlined ml-2 text-base">download</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center md:justify-end mt-8 md:mt-0 relative group">
          <div className="absolute inset-0 bg-surface-container-highest translate-x-4 translate-y-4 border border-border-gray -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
          <div className="w-full max-w-[320px] aspect-3/4 bg-surface-container-lowest border border-border-gray relative p-2">
            {site.hero.photoUrl ? (
              <img
                className="w-full h-full object-cover"
                src={site.hero.photoUrl}
                alt={site.hero.name}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-surface-container-low">
                <span className="font-headline-lg text-headline-lg text-outline">PL</span>
              </div>
            )}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur px-3 py-2 border border-border-gray flex justify-between items-center">
              <span className="font-label-caps text-label-caps text-primary">{site.hero.idTag}</span>
              <span className="font-label-caps text-label-caps text-text-muted">VERIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mb-section-gap grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h3 className="font-label-sm text-label-sm text-text-muted mb-2 uppercase tracking-widest border-b border-border-gray pb-2 inline-block">
            01 // Career Trajectory
          </h3>
          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            The Evolution of an Analyst
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-container-lowest border border-border-gray p-6 relative hover:border-brand-emerald transition-colors group">
            <div className="absolute top-0 right-0 p-4">
              <span className="font-label-caps text-label-caps bg-surface-container-high px-2 py-1 text-text-muted group-hover:text-primary transition-colors">
                {site.about.docRef}
              </span>
            </div>
            {site.about.statement.map((paragraph) => (
              <p key={paragraph} className="text-on-surface-variant leading-relaxed mt-4 first:mt-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {site.about.strengths.map((strength) => (
              <div
                key={strength.title}
                className="bg-surface-container-lowest border border-border-gray p-5 flex flex-col hover:-translate-y-1 transition-transform"
              >
                <span className="material-symbols-outlined text-tech-blue mb-4 text-3xl">
                  {strength.icon}
                </span>
                <h4 className="font-label-sm text-label-sm text-primary font-bold mb-2">
                  {strength.title}
                </h4>
                <p className="text-text-muted text-sm">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview — real projects only, teasing the full /projects page */}
      <section className="mb-section-gap">
        <div className="flex justify-between items-end border-b border-border-gray pb-4 mb-8">
          <div>
            <h3 className="font-label-sm text-label-sm text-text-muted mb-1 uppercase tracking-widest">
              02 // Selected Evidence
            </h3>
            <h2 className="font-headline-md text-headline-md text-primary">
              Engineered Solutions
            </h2>
          </div>
          <Link
            to="/projects"
            className="font-label-sm text-label-sm text-tech-blue hover:text-primary transition-colors flex items-center"
          >
            View Complete Log
            <span className="material-symbols-outlined ml-1 text-sm">arrow_outward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {site.projects.map((project) => (
            <Link
              key={project.slug}
              to="/projects"
              className={`bg-surface-container-lowest border border-border-gray p-6 hover:border-brand-emerald transition-colors flex flex-col justify-between ${
                project.primary ? "md:row-span-1" : ""
              }`}
            >
              <div>
                <span className="font-label-caps text-label-caps bg-surface-container px-2 py-1 border border-border-gray">
                  {project.primary ? "CASE_STUDY" : "COMPANION"}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mt-3 mb-2">
                  {project.name}
                </h3>
                <p className="text-text-muted">{project.tagline}</p>
              </div>
              {project.metrics.length > 0 && (
                <div className="font-label-caps text-label-caps text-text-muted border-t border-border-gray pt-2 mt-4 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-success mr-2" />
                  {project.metrics[0]}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* QR Code */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-surface-container-lowest border border-border-gray p-8">
        <div className="md:col-span-8">
          <h3 className="font-headline-md text-headline-md text-primary mb-2">
            Portfolio Access Protocol
          </h3>
          <p className="text-on-surface-variant max-w-md">
            Scan the QR code to instantly save or share this evidence hub. Ideal for quick
            reference during interviews or team evaluations.
          </p>
        </div>
        <div className="md:col-span-4 flex justify-center md:justify-end">
          <QrCode url={site.deployedUrl} caption="Scan to share this portfolio" />
        </div>
      </section>
    </main>
  )
}
