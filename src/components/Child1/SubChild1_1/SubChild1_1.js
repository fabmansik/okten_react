import {useContext} from "react";
import {Context} from "../../../App";

export const SubChild1_1 = () => {
    const {data} = useContext(Context)
    return(
        <div>
            {data.map(item=><div key={item}>{item}</div>)}
        </div>
    )
}