import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import MenSection from './Components/Products/MenSection/ViewProductsMen.jsx'
import WomenSection from './Components/Products/WomenSection/ViewProductsWomen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Men" element={<MenSection />} />
        <Route path='/' element={<App/>} />
        <Route path='/Women' element={<WomenSection/>} />
        
      </Routes>
    </Router>
  </StrictMode>,
)
