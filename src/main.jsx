import React from 'react'
import ReactDOM from 'react-dom/client'
import { MusicApp } from './MusicApp'
import Axios from 'axios';
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'

Axios.defaults.baseURL = 'http://localhost:5000';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        < MusicApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
