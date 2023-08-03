import React from "react";
export class CommentsClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            comments:[]
        }
    }
    handleFetch(){
        fetch(`https://jsonplaceholder.typicode.com/comments`).then(res=>res.json()).then(res=> {
            this.setState({comments: res})
            console.log(this.state)
        })
    }
    componentDidMount() {
        this.handleFetch()
    }

    render() {
        return(
            <div>
                {this.state.comments.map(comment=><div className={'comment'} key={comment.id}>
                    <p>ID: {comment.id}</p>
                    <p>Post ID: {comment.postId}</p>
                    <p>Email: {comment.email}</p>
                    <p>Name: {comment.name}</p>
                    <p>Body: {comment.body}</p>
                    <br/>
                </div>)}
            </div>
        )
    }
}