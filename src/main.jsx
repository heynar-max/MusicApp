import React from 'react'
import ReactDOM from 'react-dom/client'
import { MusicApp } from './MusicApp'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        < MusicApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
