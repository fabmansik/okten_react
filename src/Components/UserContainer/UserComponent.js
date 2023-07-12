export const UserComponent = ({user, setUserId}) => {
    const {id, name, username} = user
    return(
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <button onClick={()=>setUserId(id)}>Get Posts</button>
        </div>
    )
}