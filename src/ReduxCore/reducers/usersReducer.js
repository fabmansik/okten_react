const InitialState = {
    results: [],
    count: 0,
    error: '',
    isLoading: false
}
export const UsersTypes = {
    SET_USERS: 'SET_USERS',
    SET_IS_LOADING: 'SET_IS_LOADING'
}
export const usersReducer = (state = InitialState, action)=>{
    switch (action.type){
        case UsersTypes.SET_USERS:
            return{
                ...state,
                results: action.payload,
                count: state.count + 1,
                isLoading: false
            }
        case UsersTypes.SET_IS_LOADING:
            return{
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}
export default usersReducer