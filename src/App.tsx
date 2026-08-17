import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"

function App() {
  return (
    <div className="min-h-svh bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
