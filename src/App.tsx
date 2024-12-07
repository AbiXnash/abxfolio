import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Achievements from './pages/Achievements/Achievements'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Publications from './pages/Publications/Publications'
import './App.css'
import Navbar from './components/Header/Navbar/Navbar'
import Sidebar from './components/Header/Sidebar/Sidebar'
import { useState } from 'react'
const App = () => {
  const [IsOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!IsOpen)
  }
  return <>
    <Navbar toggle={toggle} />
    <Sidebar isOpen={IsOpen} toggle={toggle} />
    <Home />
    <About />
    <Publications />
    <Projects />
    <Achievements />
    <Contact />
    <Footer />
  </>
}

export default App
