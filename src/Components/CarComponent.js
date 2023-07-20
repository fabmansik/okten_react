import {CarUpdateContainer} from "./CarUpdateContainer";
import {useState} from "react";

export const CarComponent = ({car, setOnSave}) =>{
    const{id, brand, price, year} = car;
    const [showUpdate, setShowUpdate] = useState(false)
    const carDelete = async (id) =>{
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,
            {method: "DELETE",
            }).then(res=>console.log(res)).then(()=>setOnSave(car))
    }
    return(
        <div>
            <p>Id: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button onClick={()=>carDelete(id)}>Delete</button>
            <button onClick={()=>setShowUpdate(true)}>Update</button>
            {showUpdate && <CarUpdateContainer setShowUpdate={setShowUpdate} setOnSave={setOnSave} car={car}/>}
        </div>
    )
}