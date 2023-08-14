import {CarsTypes} from "../reducers/carsReducer";
import {carService} from "../../services/carService";

export const actions  = {
    setCars: (data)=>({type: CarsTypes.SET_CARS, payload: data}),
    setCarForUpdate: (data) => ({type:CarsTypes.SET_CAR_FOR_UPDATE, payload: data})
}
const getCars = ()=> async dispatch=>{
    const {data} = await carService.getAll()
    dispatch(actions.setCars(data))
}
const createCar = (car)=> async dispatch=>{
    await carService.create(car)
    await dispatch(getCars())
}
const updateCar = (id, data)=> async dispatch=>{
    await carService.updateById(id, data)
    await dispatch(getCars())
}
const deleteCar = (id) => async dispatch=>{
    await carService.deleteById(id)
    await dispatch(getCars())
}
export {
    getCars, createCar, updateCar, deleteCar
}

