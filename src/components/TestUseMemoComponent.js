import {useMemo, useState, useCallback} from "react";
import TestUseCallbackComponent from "./TestUseCallbackComponent";
export const TestUseMemoComponent = ({data}) => {
    const [dataCount, setDataCount] = useState(data)
    const [addData, setAddData] = useState(data)
    const [todos, setTodos] = useState([1,2,3])
    console.log('RENDER')
    const expensiveCalc = (number) =>{
        console.log('Expensive Calculation Render')
        for (let i = 0; i < 1000000000; i++) {number += 1}
        return number
    }
    const calc = useMemo(()=> {
        return expensiveCalc(dataCount)
    },[dataCount])

    const changeNum = (type) =>{
        setDataCount(type==='dec'? dataCount  - 1: dataCount + 1)
    }
    const addTodo = useCallback(()=>{
        setTodos([...todos, 'New Todo'])
        console.log('Todo Render')
    },[todos])
        // console.log(data, calc)
    return(
        <div>
            Your calc is:
            {calc}
            <button onClick={()=> {
                changeNum('inc');
            }}>Add one</button>
            <button onClick={()=>changeNum('dec')}>Subtract one</button>
            {addData}
            <button onClick={()=>setAddData(prev=>prev+1)}>Add to data</button>
            <hr/>
            <TestUseCallbackComponent data={todos} func={addTodo}/>
        </div>
    )
}