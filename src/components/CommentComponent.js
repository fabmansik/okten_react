import {apiServices} from "../services/ApiServices";

export const CommentComponent = ({comment, setPost}) => {

    return(
            <div className='comment' onClick={()=>{apiServices.AxiosGetPost(comment.postId, setPost); console.log(1)}}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <div className='comment-info'>
                <p>Post Id: {comment.postId}</p>
                <p>Id: {comment.id}</p>
                <p>Email: {comment.email}</p>
            </div>

        </div>

    )
}