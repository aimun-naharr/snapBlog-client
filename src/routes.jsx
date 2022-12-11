import { createBrowserRouter} from "react-router-dom";
import App from "./App";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Layout from "./pages/layout/Layout";
export const routes = createBrowserRouter([
        {
          path: "/",
          element: <Signup/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
       {
        path: "/home",
        element: <Layout/>
       },
      ]);