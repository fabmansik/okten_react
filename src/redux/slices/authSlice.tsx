import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IAuth} from "../../interfaces/AuthInterface";
import {authService} from "../../services/authService";
import {IUser} from "../../interfaces/UserInterface";

export interface IState {
    errors: {
        username?: string[],
        detail?: string
    },
    me:IUser,
    isLoading: boolean
}

const initialState: IState = {
    errors: null,
    me:null,
    isLoading: null
}
const register = createAsyncThunk<void, { user: IAuth }>(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    })
const login = createAsyncThunk<IUser, { user: IAuth }>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user);
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const me = createAsyncThunk<IUser, void>(
    'authSlice/me',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await authService.me()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
}
)
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(login.fulfilled, (state, action)=>{
            state.me = action.payload
            state.isLoading = false
        })
        .addCase(me.fulfilled, (state, action)=>{
            state.me = action.payload
        })
        .addCase(login.pending, (state)=>{
            state.isLoading = true
        })
        .addMatcher(isRejected(), (state, action) => {
            state.errors = action.payload
            state.isLoading = false
        })
        .addMatcher(isFulfilled(), state => {
            state.errors = null
        })

})
const {reducer: authReducer, actions} = authSlice
const authActions = {
    ...actions,
    register, login, me
}
export {authReducer, authActions}
