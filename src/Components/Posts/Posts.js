import {Post} from "./Post";
import {useEffect, useState} from "react";
export const Posts = ({userId}) => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/user/${userId}/posts`).then(res=>res.json()).then(value => setPosts(value))
    },[userId])
    return(
        <div key={userId}>
            <Post userId={userId} posts={posts}/>
        </div>
    )
}