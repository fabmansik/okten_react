import {useEffect, useState} from "react";

export const useFetch = (defaultValue) => {
    const [result, setResult] = useState(defaultValue)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com${defaultValue}`)
            .then(response => response.json())
            .then(json => setResult(json))
    },[])
    return result
}