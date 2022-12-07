import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension"
import thunk from 'redux-thunk'


// createStore function takes two parameters. first one is reducers and the othe one is middlewares
export const store=createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))