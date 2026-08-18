import { site } from "../content/site"

export function ResumeContact() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-16 flex flex-col items-center justify-center gap-16">
      <section className="text-center w-full max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center justify-center px-3 py-1 border border-outline rounded-full bg-surface-container-lowest mb-4">
          <span className="w-2 h-2 rounded-full bg-primary-container mr-2" />
          <span className="font-annotation text-annotation text-on-surface-variant tracking-widest uppercase">
            Verified Record
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">
          Professional Documentation
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Detailed business analysis, engineered solutions, and project history available for
          review.
        </p>
      </section>

      <section className="w-full max-w-lg mx-auto bg-surface-container-lowest border border-outline rounded-lg p-8 shadow-[0_4px_20px_rgba(15,23,42,0.05)] text-center space-y-6">
        <div className="w-16 h-16 mx-auto bg-surface-container-low rounded-lg flex items-center justify-center border border-outline">
          <span className="material-symbols-outlined text-secondary text-3xl">description</span>
        </div>
        <div className="space-y-2">
          <h2 className="font-headline-md text-headline-md text-primary">{site.resume.fileLabel}</h2>
        </div>
        <div className="pt-4">
          <a
            href={site.resume.fileUrl}
            download
            className="w-full inline-flex items-center justify-center bg-primary-container hover:bg-primary text-white font-annotation text-annotation px-6 py-4 rounded transition-colors"
          >
            <span className="material-symbols-outlined mr-2 text-lg">download</span>
            {site.resume.label}
          </a>
        </div>
        <div className="pt-4 border-t border-outline">
          <p className="font-annotation text-annotation text-on-surface-variant flex items-center justify-center">
            <span className="material-symbols-outlined text-sm mr-1">lock</span>
            Secure direct download
          </p>
        </div>
      </section>

      <section id="contact" className="w-full max-w-3xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href={`mailto:${site.contact.email}`}
            className="group block p-6 bg-surface-container-lowest border border-outline rounded-lg hover:border-primary transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-surface-container-low rounded group-hover:bg-primary-container/20 transition-colors border border-outline">
                <span className="material-symbols-outlined text-secondary">mail</span>
              </div>
              <div>
                <h3 className="font-annotation text-annotation text-on-surface-variant mb-1">
                  DIRECT INQUIRY
                </h3>
                <p className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors break-all">
                  {site.contact.email}
                </p>
              </div>
            </div>
          </a>
          <a
            href={site.contact.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="group block p-6 bg-surface-container-lowest border border-outline rounded-lg hover:border-primary transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-surface-container-low rounded group-hover:bg-secondary/10 transition-colors border border-outline">
                <span className="material-symbols-outlined text-secondary">link</span>
              </div>
              <div>
                <h3 className="font-annotation text-annotation text-on-surface-variant mb-1">
                  PROFESSIONAL NETWORK
                </h3>
                <p className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
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
