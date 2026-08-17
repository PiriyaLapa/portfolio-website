import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { ResumeContact } from "./pages/ResumeContact"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<ResumeContact />} />
      </Route>
    </Routes>
  )
}

export default App
