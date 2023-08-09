import {useState} from "react";

export const useArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue)
    const add = (item) =>{
        setArray([
            ...array, item
        ])
        return array
    }
    const remove = (id) =>{
        array.splice(id,1)
        setArray(prev=>[...prev])
        return array
    }
    return {add, remove, array}
}