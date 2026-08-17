import { site } from "../content/site"

export function ResumeContact() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap flex flex-col items-center justify-center gap-section-gap">
      <section className="text-center w-full max-w-2xl mx-auto space-y-stack-md">
        <div className="inline-flex items-center justify-center px-3 py-1 border border-border-gray rounded-full bg-surface-container-lowest mb-4">
          <span className="w-2 h-2 rounded-full bg-status-success mr-2" />
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
            Verified Record
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">
          Professional Documentation
        </h1>
        <p className="font-body-lg text-body-lg text-text-muted">
          Detailed business analysis, engineered solutions, and project history available for
          review.
        </p>
      </section>

      <section className="w-full max-w-lg mx-auto bg-surface-container-lowest border border-border-gray rounded-lg p-8 shadow-[0_4px_20px_rgba(15,23,42,0.05)] text-center space-y-6">
        <div className="w-16 h-16 mx-auto bg-surface-container-low rounded-full flex items-center justify-center border border-border-gray">
          <span className="material-symbols-outlined text-tech-blue text-3xl">description</span>
        </div>
        <div className="space-y-2">
          <h2 className="font-headline-md text-headline-md text-primary">
            {site.resume.fileLabel}
          </h2>
        </div>
        <div className="pt-4">
          <a
            href={site.resume.fileUrl}
            download
            className="w-full inline-flex items-center justify-center bg-brand-emerald hover:bg-tertiary text-white font-label-sm text-label-sm px-6 py-4 rounded transition-colors"
          >
            <span className="material-symbols-outlined mr-2 text-lg">download</span>
            {site.resume.label}
          </a>
        </div>
      </section>

      <section id="contact" className="w-full max-w-3xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href={`mailto:${site.contact.email}`}
            className="group block p-6 bg-surface-container-lowest border border-border-gray rounded-lg hover:border-brand-emerald transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-surface-container-low rounded group-hover:bg-status-success/40 transition-colors">
                <span className="material-symbols-outlined text-secondary">mail</span>
              </div>
              <div>
                <h3 className="font-label-sm text-label-sm text-text-muted mb-1">
                  DIRECT INQUIRY
                </h3>
                <p className="font-headline-md text-headline-md text-primary group-hover:text-tech-blue transition-colors text-lg break-all">
                  {site.contact.email}
                </p>
              </div>
            </div>
          </a>
          <a
            href={site.contact.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="group block p-6 bg-surface-container-lowest border border-border-gray rounded-lg hover:border-brand-emerald transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-surface-container-low rounded group-hover:bg-tech-blue/10 transition-colors">
                <span className="material-symbols-outlined text-secondary group-hover:text-tech-blue">
                  link
                </span>
              </div>
              <div>
                <h3 className="font-label-sm text-label-sm text-text-muted mb-1">
                  PROFESSIONAL NETWORK
                </h3>
                <p className="font-headline-md text-headline-md text-primary group-hover:text-tech-blue transition-colors text-lg">
                  LinkedIn Profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}
