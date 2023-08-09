import {useToggle} from "../hooks/useToggle";
import {useFetch} from "../hooks/useFetch";
import {useArray} from "../hooks/useArray";
export const TestHooksComponent = () => {
    const {value, change} = useToggle(true)
    const users = useFetch('/users')
    const posts = useFetch('/posts')
    const comments = useFetch('/comments')
    const numbers = [1,2,3,4,5,6,7,8,9]
    const {add, remove, array} = useArray(numbers)
    console.log(users, posts, comments)
    return(
        <div>
            Status Hook Tester:
            <br/>
            {value.toString()}
            <br/>
            <button onClick={change}>Change Status</button>
            <br/>
            <br/>
            {array}
            <button onClick={()=>add(10)}>Add</button>
            <button onClick={()=>remove(0)}>Remove</button>
        </div>
    )
}