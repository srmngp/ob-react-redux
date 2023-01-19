import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'
import { createAppAsyncStore, createAppStore } from './store/config/storeConfig'
import AppReduxSaga from './AppReduxSaga'

const root = ReactDOM.createRoot(document.getElementById('root'))

let appStore = createAppStore()
let appAsyncStore = createAppAsyncStore()

root.render(
  <Provider store={appAsyncStore}>

    <React.StrictMode>
      <AppReduxSaga />
    </React.StrictMode>

  </Provider>
)

reportWebVitals()
