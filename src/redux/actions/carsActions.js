import {CarsTypes} from "../reducers/carsReducer";

export const carsActions = {
    setCars: (data)=>({type: CarsTypes.SET_CARS, payload: data})
}