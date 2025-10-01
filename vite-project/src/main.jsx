import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Array from './Array.jsx'
import LifecycleClassComponent from './LifecycleClassComponent.jsx'
import DataComponent from './DataComponent.jsx'
import { Suspense } from 'react'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Array />
    <LifecycleClassComponent />
    <DataComponent />
  </StrictMode>,
)
