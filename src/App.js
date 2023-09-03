import React, { StrictMode } from 'react'
import { HashRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {

  return (
    <StrictMode>
      <HashRouter>
        <Navbar />
    
        <Routes>
          <Route exact path= "/" element={<Home/>} />
          <Route exact path= "/projects" element={<Projects/>} />
        </Routes>

      </HashRouter> 
    </StrictMode>
    
    
  )
}

export default App;
