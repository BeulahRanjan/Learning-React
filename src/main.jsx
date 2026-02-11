import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Chapter1 from './Chapter-1-Pure React.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chapter1 />
  </StrictMode>,
)
