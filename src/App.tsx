//views
import Home from './views/Home'
import Projects from './views/Projects'
import About from './views/About'
//components
import Navbar from './components/Navbar'
//hooks
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='bg-white dark:bg-black min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
