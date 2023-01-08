import { applyMiddleware, legacy_createStore as createStore } from "redux";
import {favouriteReducer} from './Reducer'
import thunk from 'redux-thunk'
const store=createStore(favouriteReducer,applyMiddleware(thunk))
export default store