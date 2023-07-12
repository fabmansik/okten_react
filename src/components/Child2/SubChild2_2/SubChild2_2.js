import {useContext} from "react";
import {Context} from "../../../App";

export const SubChild2_2 = () => {
    const {setData} = useContext(Context);
    return(
        <div>
            <button onClick={()=>setData(prev=>[...prev, 5])}>push 5</button>
        </div>
    )
}