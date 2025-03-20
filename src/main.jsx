import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { UIProvider } from './context/UIContext' // Add this import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UIProvider>  {/* add UI*/}
      <App />
    </UIProvider>
  </StrictMode>
)