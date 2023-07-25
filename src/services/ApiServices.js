import axios from "axios";
export const apiServices = {
    AxiosGetTodos: (setTodos)=> {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>setTodos(res.data))
    },
    AxiosGetAlbums: (setAlbums)=> {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>setAlbums(res.data))
    },
    AxiosGetComments: (setComments) =>{
        axios.get('https://jsonplaceholder.typicode.com/comments').then(res=>setComments(res.data))
    },
    AxiosGetPost: (id, setPost) =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>setPost(res.data))
    }
}