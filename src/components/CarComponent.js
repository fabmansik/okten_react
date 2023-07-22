import {UpdateCarComponent} from "./UpdateCarComponent";
import {useContext, useState} from "react";
import {DeleteCarComponent} from "./DeleteCarComponent";
import {ReloadContext} from "./CarsComponent";

export const CarComponent = ({car}) => {
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const {setReload} = useContext(ReloadContext)
    return(
        <div className='car'>
            <h3>Id: {car.id}</h3>
            <p>Brand: {car.brand}</p>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
            <button onClick={()=>setShowUpdateForm(prevState => !prevState)}>
                {!showUpdateForm && 'Update'}
                {showUpdateForm && 'Hide'}
            </button>
            <button onClick={()=>DeleteCarComponent(car, setReload)}>Delete</button>
            {showUpdateForm && <UpdateCarComponent car={car} setShowUpdateForm={setShowUpdateForm}/>}
        </div>
    )
}