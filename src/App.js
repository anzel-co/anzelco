import { Routes, Route } from 'react-router-dom'
import Anzel from './pages/Anzel'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Anzel />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
