import { useState } from "react"
import { NavLink } from "react-router-dom"

const links = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
]

function linkClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? "font-label-sm text-label-sm text-primary font-bold border-b-2 border-primary pb-1 px-3 py-2"
    : "font-label-sm text-label-sm text-secondary hover:text-primary hover:bg-surface-container-low transition-colors px-3 py-2 rounded"
}

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-surface/90 backdrop-blur-sm w-full top-0 sticky border-b border-border-gray z-50">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-16">
        <NavLink
          to="/"
          className="font-headline-md text-headline-md font-bold text-tertiary tracking-tight"
        >
          Benz Lapa
        </NavLink>

        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="/resume#contact"
          className="hidden md:inline-flex items-center justify-center font-label-sm text-label-sm bg-primary text-on-primary px-4 py-2 rounded hover:bg-tertiary/90 transition-colors"
        >
          Contact
        </a>

        <button
          type="button"
          className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border-gray bg-surface px-margin-mobile py-stack-md flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/resume#contact"
            className="font-label-sm text-label-sm bg-primary text-on-primary px-3 py-2 rounded text-center mt-1"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
