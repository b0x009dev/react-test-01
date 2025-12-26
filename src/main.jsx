import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Header } from './Header'
import { Content } from './Content'
import { Footer } from './Footer'

import './style.css'

console.log(Header)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="layout">
      <Header />
      <Content />
      <Footer />
    </div>
  </StrictMode>,
)
