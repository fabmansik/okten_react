
export const Post = ({posts}) => {

    return(
        <div>
            {posts.map(post=>(
                <div>
                    <p>Id: {post.id}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                    <p>UserId: {post.userId}</p>
                </div>
            ))}
        </div>
    )
}