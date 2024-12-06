import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Achievements from './pages/Achievements/Achievements'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Publications from './pages/Publications/Publications'

const App = () => {
  return <>
    <Header />
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
