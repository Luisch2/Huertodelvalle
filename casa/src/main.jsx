import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App'
import 'leaflet/dist/leaflet.css';
import { AuthProvider } from './context/AuthContext' 



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <App />
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
