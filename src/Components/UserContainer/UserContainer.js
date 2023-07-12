import {useEffect, useState} from "react";
import {UserComponent} from "./UserComponent";

export const UserContainer = ({setUserId}) => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`).then(res=>res.json()).then(value => setUsers(value))
    },[])

    return(
        <div>
            {users.map(user=><UserComponent key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    )
}