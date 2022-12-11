import { combineReducers } from "redux";
import postReducer from "./posts";
import { userReducer } from "./user";

// combineReducers function combines all the reducers as an object
const rootReducer=combineReducers({
   posts: postReducer,
   user: userReducer
})
export default rootReducer