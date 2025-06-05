import './App.css'
import "./i18n.js"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import AboutMe from "./pages/AboutMe"
import Skills from "./pages/Skills"
import Education from "./pages/Education"
import WorkHistory from "./pages/WorkHistory"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="workhistory" element={<WorkHistory />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
