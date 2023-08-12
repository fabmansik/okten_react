import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import carsReducer from "./reducers/carsReducer";

const rootReducer = combineReducers({
    cars: carsReducer
})
const composeEnhances = composeWithDevTools({
    trace: true,
    traceLimit: 25
})
const store = createStore(rootReducer, composeEnhances())
export default store