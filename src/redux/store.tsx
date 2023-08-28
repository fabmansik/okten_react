import {configureStore} from "@reduxjs/toolkit";
import {carReducer, rmReducer} from "./slices/";
const store = configureStore({
    reducer:{
        cars: carReducer,
        rm: rmReducer
    }
})
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export type {
    RootState,
    AppDispatch
}
export default store