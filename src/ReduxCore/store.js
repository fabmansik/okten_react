import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import rmReducer from "./reducers/rmReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
    rickAndMorty: rmReducer,
    users: usersReducer
})
const composeEnhances = composeWithDevTools({
    trace: true,
    traceLimit: 25
})
const store
    = createStore(rootReducer, composeEnhances())
export default store;
