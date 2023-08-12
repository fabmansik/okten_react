import {useEffect} from "react";
import {actions} from "../ReduxCore/actions/actions";
import {useDispatch, useSelector} from "react-redux";

export const UsersComponent = () => {
    const dispatch = useDispatch()
    const users = useSelector(store => store.users.results)
    const isLoading = useSelector(store=>store.users.isLoading)
    useEffect(()=>{
        dispatch(actions.setIsLoading(true, 'users'))
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res=>res.json())
            .then(res => {
                dispatch(actions.setUsers(res))
                console.log(res)
            })
    },[])
    return(
        <div>
            {isLoading? <h1>Loading...</h1>:users.map(user=><p>{user.name}</p>) }
        </div>


    )
}