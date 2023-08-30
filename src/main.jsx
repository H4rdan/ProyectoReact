import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Thumbnail from './components/pokedex/Thumbnail.jsx'
import Pokedex from './pages/Pokedex.jsx'
import Description from "./pages/Description.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokedex />,
  },

  {
    path: "/description/:id",
    element: <Description />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
