
import './App.css'
import Layout from './pages/layout/Layout'
import { Provider } from "react-redux";
import { store } from './redux/store'
import { Outlet } from 'react-router-dom';
import {RouterProvider} from "react-router-dom";
import { routes } from './routes';

function App() {
  return (
    <div className="App">
      {/* provider allows the accessibility of store for it's child components */}
      
    <Provider store={store}>
      <RouterProvider router={routes}/>
      </Provider>
    </div>
  )
}

export default App
