import {UserDetails} from "./UserDetails";
import {UserAddress} from "./UserAddress";
import {Company} from "./Company";

export const UserComponent = ({user}) =>{
    return(
        <div className={'user'} id={user.id}>
            <UserDetails id={user.id} name={user.name} username={user.username} email={user.email} phone={user.phone} website={user.website}/>
            <UserAddress address={user.address}/>
            <Company company={user.company}/>
        </div>
    )

}