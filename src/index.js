import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'
import { RecoilRoot } from 'recoil'
import { ToastProvider } from './context/ToastContext'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RecoilRoot>
      <ToastProvider>
        <App />
      </ToastProvider>
    </RecoilRoot>
  </Provider>,
)
