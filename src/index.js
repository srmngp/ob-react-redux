import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'
import { createAppStore } from './store/config/storeConfig'

const root = ReactDOM.createRoot(document.getElementById('root'))

let appStore = createAppStore()

root.render(
  <Provider store={appStore}>

    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Provider>
)

reportWebVitals()
