import { site } from "../content/site"
import { QrCode } from "./QrCode"

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center"
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
        Contact
      </h2>
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <a
          href={`mailto:${site.contact.email}`}
          className="font-medium text-purple-600 hover:underline dark:text-purple-400"
        >
          {site.contact.email}
        </a>
        <a
          href={site.contact.linkedIn}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-purple-600 hover:underline dark:text-purple-400"
        >
          LinkedIn
        </a>
      </div>
      <QrCode url={site.deployedUrl} />
    </section>
  )
}
