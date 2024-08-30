/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { DarkModeProvider } from './Context/DarkModeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import LeadDetails from './Components/LeadDetails';
import InboxHeader from './Components/Inboxheader';
import ViewMail from './Components/Viewmail';


import InBox from './Pages/InBox';




function App() {
  

  return (
    <DarkModeProvider>
   <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/Inbox" element={<InBox />} />
      <Route path="*" element={<Login />} />
      </Routes>
   </Router>
   </DarkModeProvider>
  )
}

export default App
