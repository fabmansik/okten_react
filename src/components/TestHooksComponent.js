import {useToggle} from "../hooks/useToggle";
export const TestHooksComponent = () => {
    const {value, change} = useToggle(true)
    return(
        <div>
            Hook Tester:
            {value.toString()}
            <button onClick={change}>Change Status</button>
        </div>
    )
}