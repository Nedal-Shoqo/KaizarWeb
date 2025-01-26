import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import Navbar from './Components/NavBar/Navbar.jsx'
import ViewProducts from './Components/Products/ViewProducts.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Products" element={<ViewProducts />} />
        <Route path='/' element={<App/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
