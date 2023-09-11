//global styles
import './index.css'
//components
import App from './App.tsx'
//hooks
import ReactDOM from 'react-dom/client'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
