import {useRef} from "react";

export const CommentComponent = () =>{
    const id = useRef('')
    const name = useRef('')
    const email = useRef('')
    const body = useRef('')
    const postId = useRef('')
    console.log(id)
    const SendComment = async () =>{
        fetch('https://jsonplaceholder.typicode.com/comments',{
            method: 'POST',
            body: JSON.stringify({
                postId: postId.current.value,
                id: id.current.value,
                name: name.current.value,
                email: email.current.value,
                body: body.current.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        SendComment()
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3>Create comment</h3>
            <label>PostId:</label>
            <input type="number" ref={postId}></input>
            <label>Id:</label>
            <input type="number" ref={id}></input>
            <label>Name:</label>
            <input type="text" ref={name}></input>
            <label>Email:</label>
            <input type="email" ref={email}></input>
            <label>Body:</label>
            <input type="text" ref={body}></input>
            <button type="submit">Send</button>
        </form>
    )
}