import {useState} from "react";
import {memo} from "react";


const TestUseCallbackComponent = ({data, func}) => {
    console.log('Todo Render')
    return(
        <div>
            Your todos:
            {data.map(todo=><p key={todo}>{todo}</p>)}
            <button onClick={func}>Add Todo</button>

        </div>
    )
}
export default memo(TestUseCallbackComponent)