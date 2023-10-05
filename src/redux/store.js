import { applyMiddleware, createStore } from "redux";
import actionReducer from "./Reducer/actionReducer";
import thunk from "redux-thunk";



const store = createStore(actionReducer, applyMiddleware(thunk));

export default store;