import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";
import {ICar} from "../../interfaces/CarInterface";
import {AxiosError} from "axios";
import {IPagination} from "../../interfaces/PaginationInterface";
export interface IState {
    pagination: IPagination<ICar>
    carForUpdate: ICar,
    errors: string,
    isLoading: boolean,
}
const initialState:IState = {
    pagination: {
        items: [],
        next: null,
        prev: null,
        total_items: null,
        total_pages:null
    },
    carForUpdate: null,
    errors: null,
    isLoading: null
}

const all = createAsyncThunk<IPagination<ICar>, string|void>(
    'carsSlice/all',
    async (options, {rejectWithValue}) => {
        try {
            if(typeof options === "string"){
                let {data} = await carService.getAll(options);
                return data
            } else {
                let {data} = await carService.getAll();
                return data
            }


        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<ICar[], {car:ICar, options: string}>(
    'carsSlice/create',
    async ({car, options},thunkAPi) =>{
        try {
            await carService.create(car)
            thunkAPi.dispatch(all(options))
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
            thunkAPi.dispatch(all(data?.options))
        }catch (e){
            const err = e as AxiosError
            return thunkAPi.rejectWithValue(err.response.data)
        }
    }
)
const deleteCar = createAsyncThunk<ICar[], {car_id:number, options:string}>(
    'carsSlice/deleteCar',
    async (data,thunkAPi) =>{
        try {
            await carService.delete(data.car_id)
            thunkAPi.dispatch(all(data?.options))
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
            state.pagination = action.payload
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
