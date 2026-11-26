import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Electricity from './electricity'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Electricity />
  </StrictMode>,
)
