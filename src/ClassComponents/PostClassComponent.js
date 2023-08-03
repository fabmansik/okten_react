import React from "react";
export class PostClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            posts:[]
        }
    }
    handleFetch(){
        fetch(`https://jsonplaceholder.typicode.com/posts`).then(res=>res.json()).then(res=> {
            this.setState({posts: res})
            console.log(this.state)
        })
    }
    componentDidMount() {
        this.handleFetch()
    }

    render() {
        return(
            <div>
                {this.state.posts.map(post=><div className={'post'} key={post.id}>
                    <p>ID: {post.id}</p>
                    <p>User ID: {post.userId}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                    <br/>
                </div>)}
            </div>
        )
    }
}