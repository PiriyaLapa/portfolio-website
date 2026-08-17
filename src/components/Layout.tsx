import { Outlet } from "react-router-dom"
import { Nav } from "./Nav"
import { Footer } from "./Footer"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md text-body-md antialiased selection:bg-tech-blue selection:text-white">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
