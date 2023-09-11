//views
import Home from './views/Home'
import Projects from './views/Projects'
import About from './views/About'
//components
import Navbar from './components/Navbar'
//hooks
import { Routes, Route } from 'react-router-dom'
import Services from './views/Services'
import Team from './views/Team'

function App() {
  return (
    <div className='bg-white dark:bg-black min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </div>
  )
}

export default App
