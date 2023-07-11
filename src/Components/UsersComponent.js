import {useEffect, useState} from "react";
import {UserComponent} from "./UserComponent";

export const UsersComponent = ({users}) => {
    return(
        <div className="Users">
            {users.map(user=>{
                return (

                    <UserComponent user={user}/>
                )
        })}
        </div>

    )

}