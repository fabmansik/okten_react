import {useState} from "react";

export const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)
    const change = () =>{
      setValue(prev => !prev)
    }
    return {value, change}
}