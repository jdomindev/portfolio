import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div id="page-container">
        <Header />
        <main id="content-wrap">

        </main>
        <Footer />
      </div>

      <Routes>
        {/* <Route path="/about" element={<Header />}/> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  )
}

export default App
