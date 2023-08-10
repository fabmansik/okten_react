import {RickAndMortyTypes} from "../reducers/rmReducer";
import {UsersTypes} from "../reducers/usersReducer";
export const actions = {
    setCharacters: (data) => ({type: RickAndMortyTypes.SET_CHARACTERS, payload:data}),
    setUsers: (data) => ({type: UsersTypes.SET_USERS, payload:data})
}