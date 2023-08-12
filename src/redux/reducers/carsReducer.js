const InitialState = {
    results:[],
    count: 0,
    error: ''
}
export const CarsTypes = {
    SET_CARS: 'SET_CARS'
}
const carsReducer = (state = InitialState, action)=>{
    switch (action.type){
        case CarsTypes.SET_CARS:
            return{
            ...state,
                results: action.payload,
                count: + 1,
            }
        default: return state
    }
}
export default carsReducer