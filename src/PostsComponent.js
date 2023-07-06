import './post.css'
import {useState} from "react";
export const PostsComponent = (props) =>{
    const {post} = props
    const [showPostInfo, setShowPostInfo] = useState(false)
    const [showButton, setShowButton] = useState(true)
    return(
        <>
            <div id={'post_'+post.id} className={'posts_info'}>
                <h3>Post id:</h3>
                <p>{post.id}</p>
                <h3>Post title:</h3>
                <p>{post.title}</p>
                {showPostInfo && <h3>Post userID:</h3>}
                {showPostInfo && <p>{post.userId}</p>}
                {showPostInfo && <h3>Post body:</h3>}
                {showPostInfo && <p>{post.body}</p>}

                <div className={'buttonDiv'}>

                    {showButton && <button onClick={()=>{setShowPostInfo(true); setShowButton(false)}}>Post Details</button>}
                    {!showButton && <button onClick={()=>{setShowPostInfo(false); setShowButton(true)}}>Hide Details</button>}
                </div>
                <div className={'info'}></div>
            </div>
        </>
    )
}