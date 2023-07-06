import {PostsComponent} from "./PostsComponent";
import {useEffect, useState} from "react";

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=> res.json())
            .then((posts)=>setPosts(posts))
    },[])


    return(
        <>
            {posts.map((post, id)=>{
                return <PostsComponent
                    key={id}
                    post={post}
                    />
            })}
        </>
    )
}