import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Destinations from './Pages/Destinations'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  return (
    <div>
      <Router>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Routes>
          <Route path="/" element={<Home setActiveTab={setActiveTab} />} />
          <Route
            path="/destinations"
            element={<Destinations activeTab={activeTab} />}
          />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
