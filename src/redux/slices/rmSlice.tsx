import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {rmService} from "../../services/rmService";
import {AxiosError} from "axios";
import {ICharacter, IEpisode, IInfo, IRMRes} from "../../interfaces/RMInterfaces";
export interface IRMState{
    info: IInfo,
    results: {
        episodes: IEpisode[],
        characters:ICharacter[]
    }
    errors:string,
    isLoading:boolean
}
const initialState:IRMState = {
    info: {},
    results: {
        episodes:[],
        characters:[]
    },
    errors: null,
    isLoading: null
}

const episodes = createAsyncThunk<IRMRes>(
    'rmSlice/episodes',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await rmService.getEpisodes()
            return {info: data.info, results: {
                episodes: data.results,
                characters: []}}
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)        }
    }
)
const pageEpisodes = createAsyncThunk<IRMRes, number>(
    'rmSlice/pageEpisodes',
    async (page, {rejectWithValue}) => {
        try {
            let {data} = await rmService.getEpisode(page)
            return {info: data.info, results: {
                    episodes: data.results,
                    characters: []}}
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)        }
    }
)
const characters = createAsyncThunk<ICharacter[], string[]>(
    'rmSlice/characters',
    async (characters, {rejectWithValue}) => {
        try {
            let {data} = await rmService.getCharacters(characters)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)        }
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
            state.results.characters = action.payload
        })

})
const {reducer: rmReducer, actions} = rmSlice;
const rmActions = {
    ...actions,
    episodes, pageEpisodes, characters
}
export {
    rmReducer, rmActions
}