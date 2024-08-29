import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThreadIdProvider } from './Context/ThreadIdContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThreadIdProvider>
  
    <App />
 
  </ThreadIdProvider>,
)
