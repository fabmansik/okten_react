import {useEffect, useState} from "react";
import {CarComponent} from "./CarComponent";
import {CarForm} from "./CarForm";

export const CarsContainer = () =>{
    const [cars, setCars] = useState([])
    const [onSave, setOnSave] = useState(false)
    useEffect(()=>{
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars`).then(res=>res.json()).then(value => setCars(value))
    },[onSave])


    return(

        <div className='carsList'>
            <CarForm setOnSave={setOnSave}/>
            {cars.map(car=><CarComponent key={car.id} car={car} setOnSave={setOnSave}/>)}
        </div>

    )
}