import {useEffect} from "react";
import {actions} from "../ReduxCore/actions/actions";
import {useDispatch, useSelector} from "react-redux";

export const UsersComponent = () => {
    const dispatch = useDispatch()
    const users = useSelector(store => store.users.results)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res=>res.json())
            .then(res => {
                dispatch(actions.setUsers(res))
                console.log(res)
            })
    },[])
    return(
        users.map(user=><p>{user.name}</p>)
    )
}