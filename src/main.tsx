import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <PublicRoutes />
    </BrowserRouter>
  </StrictMode>,
)
