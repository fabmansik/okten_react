import {configureStore} from "@reduxjs/toolkit";
import {carReducer, rmReducer} from "./slices/";
const store = configureStore({
    reducer:{
        cars: carReducer,
        rm: rmReducer
    }
})
export default store