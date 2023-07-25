import {apiServices} from "../services/ApiServices";
import {useEffect, useState} from "react";

export const TodosComponent = () => {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        apiServices.AxiosGetTodos(setTodos)
    },[])



    return(
        <div className='todos' style={{display: 'grid', marginRight: "auto", marginLeft: "auto", width: '98%',marginTop: '10vh', grid: 'auto-flow 15vh / repeat(3, 32.66666%)', columnGap: '1%'}}>
            {todos.map(todo=>
            <div className='todo' key={todo.id} style={{padding: '10px'}}>
                <h3>{todo.title}</h3>
                <div className='todo-info'>
                    <p>User Id: {todo.userId}</p>
                    <p>Id: {todo.id}</p>
                    <p>Completed: {(todo.completed).toString()}</p>
                </div>
            </div>)}
        </div>
    )
}