import { combineReducers } from "redux";
import postReducer from "./posts";

// combineReducers function combines all the reducers as an object
const rootReducer=combineReducers({
   posts: postReducer
})
export default rootReducer