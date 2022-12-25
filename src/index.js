import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Root from './Components/Root'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Inquire from './Components/Inquire'
import Resources from './Components/Resources'
import theme from './util/theme'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/inquire",
        element: <Inquire />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
