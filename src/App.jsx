import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Landmarks from './components/Landmarks'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/landmarks" element={<Landmarks />} />
      </Routes>
    </>
  )
}

export default App
