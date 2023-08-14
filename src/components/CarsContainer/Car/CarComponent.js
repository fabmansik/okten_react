import {useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {deleteCar, updateCar} from "../../../redux/actions/carsActions";
export const CarComponent = ({car}) => {
    const dispatch = useDispatch()
    const [showUpdateForm, setShowUpdateForm]=useState(false)
    const { register, handleSubmit, } = useForm();
    const onSubmit = data =>{
        dispatch(updateCar(car.id, data))
    }
    return(
        <div>
            Id: {car.id} <br/>
            Brand: {car.brand}<br/>
            Price: {car.price}<br/>
            Year: {car.year}<br/>
            <button onClick={()=>setShowUpdateForm(prevState => !prevState)}>Update</button>
            <button onClick={()=>dispatch(deleteCar(car.id))}>Delete</button>
            <div>
                {showUpdateForm && <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder={car.brand} {...register('brand')}></input>
                    <input placeholder={car.pric}{...register('price')}></input>
                    <input placeholder={car.year}{...register('year')}></input>
                    <button type='submit'>Submit</button>
                </form>}
            </div>
            <hr/>
        </div>
    )
}