//global styles
import './index.css'
//app
import App from './App.tsx'
//hooks
import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
//store redux
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
