export const UserDetails = ({id, name, username, email, phone, website})=>{
    return(
        <div className={"UserDetails:"}>
            <h3>User Details</h3>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}