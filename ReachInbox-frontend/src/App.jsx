import { useState } from 'react'
import { DarkModeProvider } from './Context/DarkModeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';



function App() {
  

  return (
    <DarkModeProvider>
   <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      
    </Routes>
   </Router>
   </DarkModeProvider>
  )
}

export default App
