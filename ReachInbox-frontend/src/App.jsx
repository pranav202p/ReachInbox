/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { DarkModeProvider } from './Context/DarkModeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import LeadDetails from './Components/LeadDetails';



function App() {
  

  return (
    <DarkModeProvider>
   <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lead" element={<LeadDetails/>}/>
    </Routes>
   </Router>
   </DarkModeProvider>
  )
}

export default App
