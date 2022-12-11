
import './App.css'
import Layout from './pages/layout/Layout'
import { Provider } from "react-redux";
import { store } from './redux/store'
import { Outlet, useLocation } from 'react-router-dom';
import {RouterProvider, Navigate} from "react-router-dom";
import { routes } from './routes';

function App() {
  const user=JSON.parse(localStorage.getItem('user'))?.user
 
 
  return (
    <div className="relative">
      {/* provider allows the accessibility of store for it's child components */}
      
    <Provider store={store}>
      <RouterProvider router={routes}/>
      </Provider>
    </div>
  )
}

export default App
