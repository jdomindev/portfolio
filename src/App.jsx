import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div id="page-container">
        <Header />
        <main id="content-wrap">
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
