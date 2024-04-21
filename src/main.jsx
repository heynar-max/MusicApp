import React from 'react'
import ReactDOM from 'react-dom/client'
import { MusicApp } from './MusicApp'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      < MusicApp />
    </BrowserRouter>
  </React.StrictMode>,
)
