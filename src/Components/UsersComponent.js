import {useEffect, useState} from "react";
import {UserComponent} from "./UserComponent";

export const UsersComponent = () =>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setUsers(users); console.log(users)})

    },[])
    return(
        users.map(user=><UserComponent user={user}/>)
    )
}