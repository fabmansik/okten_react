import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";
import {ICar} from "../../interfaces/CarInterface";
import {AxiosError} from "axios";
export interface IState {
    cars: ICar[],
    carForUpdate: ICar,
    errors: string,
    isLoading: boolean
}
const initialState:IState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    isLoading: null
}

const all = createAsyncThunk<ICar[], void>(
    'carsSlice/all',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await carService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const create = createAsyncThunk<ICar[], ICar>(
    'carsSlice/create',
    async (car,thunkAPi) =>{
        try {
            await carService.create(car)
            thunkAPi.dispatch(all())
        }catch (e){
            const err = e as AxiosError
            return thunkAPi.rejectWithValue(err.response.data)
        }
    }
)
const update = createAsyncThunk<ICar[], ICar>(
    'carsSlice/update',
    async (data,thunkAPi) =>{
        try {
            await carService.update(data.id, data)
            thunkAPi.dispatch(all())
        }catch (e){
            const err = e as AxiosError
            return thunkAPi.rejectWithValue(err.response.data)
        }
    }
)
const deleteCar = createAsyncThunk<ICar[], number>(
    'carsSlice/deleteCar',
    async (data,thunkAPi) =>{
        try {
            await carService.delete(data)
            thunkAPi.dispatch(all())
        }catch (e){
            const err = e as AxiosError
            return thunkAPi.rejectWithValue(err.response.data)
        }
    }
)
const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(all.fulfilled, (state, action)=>{
            state.cars= action.payload
            state.isLoading= false
        })
        .addCase(all.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(deleteCar.fulfilled, (state)=>{
            state.isLoading=false
        })
        .addCase(deleteCar.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(create.fulfilled, (state)=>{
            state.isLoading=true
        })
        .addCase(create.pending, (state)=>{
            state.isLoading=true
        })

    })
const {reducer: carReducer, actions} = carsSlice;
const carActions = {
    ...actions,
    all, create, update, deleteCar
}
export {
    carReducer, carActions
}
