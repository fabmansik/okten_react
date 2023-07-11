import {useEffect, useState} from "react";

export const UsersComponent = ({users}) => {
    const [user, setUser] = useState()
    useEffect(()=>{
        setUser(users)
        console.log(users)
    })
    user.map(it=>{
        <UserComponent/>
    })
}