import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import LoginPage from './pages/auth/login'
import RegisterPage from './pages/auth/register'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <LoginPage/>
  </React.StrictMode>,
)
