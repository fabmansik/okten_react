import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {rmService} from "../../services/rmService";

const initialState = {
    info: {},
    results: [],
    characters: [],
    errors: null,
    isLoading: null
}

const episodes = createAsyncThunk(
    'rmSlice/episodes',
    async (_, thunkApi) => {
        try {
            let {data} = await rmService.getEpisodes()
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)
const pageEpisodes = createAsyncThunk(
    'rmSlice/pageEpisodes',
    async (page, thunkApi) => {
        try {
            let {data} = await rmService.getEpisode(page)
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)
const characters = createAsyncThunk(
    'rmSlice/characters',
    async (characters, thunkApi) => {
        try {
            let {data} = await rmService.getCharacters(characters)
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

const rmSlice = createSlice({
    name: 'rmSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(episodes.fulfilled, (state, action) => {
            state.results = action.payload.results
            state.info = action.payload.info
        })
        .addCase(pageEpisodes.fulfilled, (state, action) => {
            state.info = action.payload.info
            state.results = action.payload.results
        })
        .addCase(characters.fulfilled, (state, action) => {
            state.characters = action.payload
        })
    // extraReducers:{
    //     [episodes.fulfilled]:(state, action)=>{
    //         state.results = action.payload.results
    //         state.info = action.payload.info
    //     }
    // }
})
const {reducer: rmReducer, actions} = rmSlice;
const rmActions = {
    episodes, pageEpisodes, characters
}
export {
    rmReducer, rmActions
}