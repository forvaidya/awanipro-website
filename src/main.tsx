import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { logVersionInfo } from './utils/version'

// Log version info to console
logVersionInfo()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
