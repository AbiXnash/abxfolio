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
import { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const preventCopy = (e: ClipboardEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('copy', preventCopy);

    return () => {
      document.removeEventListener('copy', preventCopy);
    };
  }, []);

  return <div className='no-select'>
    <Navbar toggle={toggle} />
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Home />
    <About />
    <Publications />
    <Projects />
    <Achievements />
    <Contact />
    <Footer />

    {/* <Router>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Routes>
        <Route path="/abxfolio" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/publications" element={<Publications/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router> */}
  </div>
}

export default App
