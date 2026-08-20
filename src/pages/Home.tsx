import { Link } from "react-router-dom"
import { site } from "../content/site"
import { QrCode } from "../components/QrCode"

export function Home() {
  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-12 pb-24 w-full">
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-24">
        <div className="md:col-span-8 flex flex-col items-start justify-center space-y-6">
          <h3 className="font-annotation text-annotation text-on-surface-variant uppercase tracking-widest border-b border-outline pb-2 inline-block">
            01 // Identity
          </h3>
          <div className="inline-flex items-center px-3 py-1 bg-surface-container-low border border-outline rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary-container mr-2" />
            <span className="font-annotation text-annotation text-on-surface-variant uppercase">
              {site.hero.statusBadge}
            </span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface tracking-tight">
            {site.hero.name}
          </h1>
          <h2 className="font-headline-md text-headline-md text-secondary">{site.hero.role}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-outline pl-4">
            {site.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-emerald hover:bg-brand-emerald-dark text-white rounded font-annotation text-annotation font-bold transition-all"
            >
              View Projects
              <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
            </Link>
            <a
              href={site.resume.fileUrl}
              download
              className="inline-flex items-center justify-center px-6 py-3 border border-tech-blue text-tech-blue hover:bg-tech-blue/5 rounded font-annotation text-annotation font-bold transition-all"
            >
              Download Resume
              <span className="material-symbols-outlined ml-2 text-base">download</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center md:justify-end mt-8 md:mt-0 relative group">
          <div className="absolute inset-0 bg-surface-container-high translate-x-4 translate-y-4 border border-outline -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
          <div className="w-full max-w-[320px] aspect-3/4 bg-surface-container-lowest border border-outline relative p-2">
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
          </div>
        </div>
      </section>

      {/* About / Career Trajectory */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h3 className="font-annotation text-annotation text-on-surface-variant mb-2 uppercase tracking-widest border-b border-outline pb-2 inline-block">
            02 // Career Trajectory
          </h3>
          <h2 className="font-headline-md text-headline-md text-on-surface mt-4">
            The Evolution of an Analyst
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-container-lowest border border-outline p-6 relative hover:border-brand-emerald transition-colors group">
            <div className="absolute top-0 right-0 p-4">
              <span className="font-annotation text-annotation bg-surface-container-high px-2 py-1 text-on-surface-variant group-hover:text-on-surface transition-colors uppercase">
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
                className="bg-surface-container-lowest border border-outline p-5 flex flex-col hover:-translate-y-1 transition-transform"
              >
                <span className="material-symbols-outlined text-tech-blue mb-4 text-3xl">
                  {strength.icon}
                </span>
                <h4 className="font-annotation text-annotation text-on-surface font-bold mb-2">
                  {strength.title}
                </h4>
                <p className="text-on-surface-variant text-sm">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Competencies */}
      <section className="mb-24">
        <h3 className="font-annotation text-annotation text-on-surface-variant mb-8 uppercase tracking-widest border-b border-outline pb-2 inline-block">
          03 // Technical Competencies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {site.competencies.map((group) => (
            <div key={group.title} className="bg-surface-container-lowest border border-outline p-6 flex flex-col">
              <div className="flex items-center mb-6">
                <span className="material-symbols-outlined text-brand-emerald mr-3 text-3xl">
                  {group.icon}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">{group.title}</h4>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center font-annotation text-annotation text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects preview — real projects only, teasing the full /projects page */}
      <section className="mb-24">
        <div className="flex justify-between items-end border-b border-outline pb-4 mb-8">
          <div>
            <h3 className="font-annotation text-annotation text-on-surface-variant mb-1 uppercase tracking-widest">
              04 // Selected Evidence
            </h3>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Engineered Solutions
            </h2>
          </div>
          <Link
            to="/projects"
            className="font-annotation text-annotation text-tech-blue hover:text-primary transition-colors flex items-center"
          >
            View Complete Log
            <span className="material-symbols-outlined ml-1 text-sm">arrow_outward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">
          {site.projects.map((project) => (
            <Link
              key={project.slug}
              to="/projects"
              className={`bg-surface-container-lowest border border-outline group relative overflow-hidden flex flex-col justify-end p-6 hover:border-brand-emerald transition-colors ${
                project.primary ? "md:col-span-8" : "md:col-span-4"
              }`}
            >
              <div className="absolute top-4 right-4">
                <span className="font-annotation text-annotation bg-surface-container-low px-2 py-1 text-on-surface uppercase border border-outline">
                  {project.primary ? "CASE_STUDY: 001" : "COMPANION"}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{project.name}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-4">
                {project.tagline}
              </p>
              {project.metrics.length > 0 && (
                <div className="font-annotation text-annotation text-on-surface-variant border-t border-outline pt-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container mr-2" />
                  {project.metrics[0]}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* QR Code */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-surface-container-lowest border border-outline p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 border border-outline rounded-full translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border border-outline rounded-full -translate-x-1/2 translate-y-1/2 opacity-20 pointer-events-none" />
        <div className="md:col-span-8 z-10">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
            Portfolio Access Protocol
          </h3>
          <p className="text-on-surface-variant max-w-md">
            Scan the QR code to instantly save or share this evidence hub. Ideal for quick
            reference during interviews or team evaluations.
          </p>
        </div>
        <div className="md:col-span-4 flex justify-center md:justify-end z-10">
          <QrCode url={site.deployedUrl} caption="Scan to share this portfolio" />
        </div>
      </section>
    </main>
  )
}
