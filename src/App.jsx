
import './App.css'
import Layout from './pages/layout/Layout'
import { Provider } from "react-redux";
import { store } from './redux/store'

function App() {
  return (
    <div className="App">
      {/* provider allows the accessibility of store for it's child components */}
    <Provider store={store}>
      <Layout/>
      </Provider>
    </div>
  )
}

export default App
