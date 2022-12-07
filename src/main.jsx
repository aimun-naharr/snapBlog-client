import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Provider from 'redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* provider allows the accessibility of store for it's child components */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
