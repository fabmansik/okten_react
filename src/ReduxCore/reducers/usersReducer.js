const InitialState = {
    results: [],
    count: 0,
    error: ''
}
export const UsersTypes = {
    SET_USERS: 'SET_USERS'
}
export const usersReducer = (state = InitialState, action)=>{
    switch (action.type){
        case UsersTypes.SET_USERS:
            return{
                ...state,
                results: action.payload,
                count: state.count + 1
            }
        default:
            return state
    }
}
export default usersReducer