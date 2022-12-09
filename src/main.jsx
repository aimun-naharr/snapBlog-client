import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
 
  RouterProvider,
  Route,
} from "react-router-dom";
import { routes } from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
