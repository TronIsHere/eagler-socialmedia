import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import LoginPage from './pages/auth/login'
import App from './App'
import RegisterPage from './pages/auth/register'
import NotFoundPage from './pages/404'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<NotFoundPage></NotFoundPage>
  },
  {
    path:'/auth/login',
    element:<LoginPage></LoginPage>
  },
  {
    path:'/auth/register',
    element:<RegisterPage></RegisterPage>
  },
  

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
