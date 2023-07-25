import {useEffect, useState} from "react";
import {apiServices} from "../services/ApiServices";
import {CommentComponent} from "./CommentComponent";

export const CommentsComponent = () => {
    const [comments, setComments] = useState([])
    const [post, setPost] = useState()
    console.log(post)
    useEffect(()=>{
        apiServices.AxiosGetComments(setComments)
    },[])

    return(
        <div className='comments'>
            {comments.map(comment=><CommentComponent key={comment.id} comment={comment} setPost={setPost}/>)}
            {post && <div className='post'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p>User Id: {post.userId}</p>
                <p>Post id: {post.id}</p>
                <button onClick={()=>setPost(null)}>Hide</button>
            </div>}
        </div>

    )
}