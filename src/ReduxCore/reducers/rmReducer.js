const InitialState = {
    info: {},
    results: [],
    count: 0,
    error: ''
}
export const RickAndMortyTypes = {
    SET_CHARACTERS: 'SET_CHARACTERS',
    ADD_CHARACTERS: 'ADD_CHARACTERS'
}
const rmReducer = (state = InitialState, action) =>{
    switch (action.type){
        case RickAndMortyTypes.ADD_CHARACTERS:
            return {
                ...state,
                results: [
                    ...state.results,
                    ...action.payload.results
                ],
                info: action.payload.info,
                count: state.count+1
            }
        case RickAndMortyTypes.SET_CHARACTERS:
            return {
                ...state,
                results: action.payload.results,
                info: action.payload.info,
                count: state.count+1
            }
        default:
            return state
    }
}
export default rmReducer