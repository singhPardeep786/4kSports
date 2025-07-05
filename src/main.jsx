import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import HomePage from './components/home_page/HomePage.jsx'
import AboutPage from './components/about_page/AboutPage'
import Products from './components/products/Products'
import Sports from './components/sports/Sports'
import Clients from './components/clients/Clients'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Lenis from 'lenis'

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='products' element={<Products />} />
          <Route path='sports' element={<Sports />} />
          <Route path='clients' element={<Clients />} />
          <Route path='services' element={<Services />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
