import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    // TODO React Plugin for Web Mode to Disable Strict Mode Echo 
  <StrictMode>
    <App />
  </StrictMode>,
);
