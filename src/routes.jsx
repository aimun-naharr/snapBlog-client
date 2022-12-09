import { createBrowserRouter} from "react-router-dom";
import App from "./App";
import Signup from "./pages/auth/Signup";
export const routes = createBrowserRouter([
        {
          path: "/",
          element: <Signup/>,
          
        },
      ]);