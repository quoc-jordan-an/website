import React, { StrictMode } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {

  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
    
        <Routes>
          <Route exact path= "/" element={<Home/>} />
          <Route exact path= "/projects" element={<Projects/>} />
        </Routes>

      </BrowserRouter> 
    </StrictMode>
    
    
  )
}

export default App;