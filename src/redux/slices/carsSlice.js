import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    isLoading: null
}

const all = createAsyncThunk(
    'carsSlice/all',
    async (_, thunkAPI) => {
        try {
            let {data} = await carService.getAll();
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const create = createAsyncThunk(
    'carsSlice/create',
    async (car,thunkAPi) =>{
        try {
            await carService.create(car)
            thunkAPi.dispatch(all())
        }catch (e){
            return thunkAPi.rejectWithValue(e.response.data)
        }
    }
)
const update = createAsyncThunk(
    'carsSlice/update',
    async (data,thunkAPi) =>{
        try {
            let {car} = await carService.update(data.id, data.data)
            thunkAPi.dispatch(all())
            return car
        }catch (e){
            return thunkAPi.rejectWithValue(e.response.data)
        }
    }
)
const deleteCar = createAsyncThunk(
    'carsSlice/deleteCar',
    async (data,thunkAPi) =>{
        try {
            await carService.delete(data)
            thunkAPi.dispatch(all())
        }catch (e){
            return thunkAPi.rejectWithValue(e.response.data)
        }
    }
)
const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [all.fulfilled]:(state,action)=>{
            state.cars = action.payload
            state.isLoading=false
        },[all.pending]:(state)=>{
            state.isLoading=true
        },
        [deleteCar.fulfilled]:(state)=>{
            state.isLoading=false
        }
        ,[deleteCar.pending]:(state)=>{
            state.isLoading=true
        },
        [create.fulfilled]:(state)=>{
            state.isLoading=false
        },
        [create.pending]:(state)=>{
            state.isLoading=true
        }
    }
})
const {reducer: carReducer, actions} = carsSlice;
const carActions = {
    all, deleteCar, create, update
}
export {
    carReducer, carActions
}
