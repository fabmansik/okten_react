import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../../redux/";
import {useForm} from "react-hook-form";
const Car = ({car}) => {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch();
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const update = (data) =>{
        const carData = {id:car.id, data:data}
        dispatch(carActions.update(carData))
    }
    return (
        <div>
            Id: {car.id} <br/>
            Brand: {car.brand}<br/>
            Price: {car.price}<br/>
            Year: {car.year}<br/>
            <button onClick={()=>setShowUpdateForm(prev=>!prev)}>Update</button>
            {showUpdateForm &&
                <form onSubmit={handleSubmit(update)}>
                    <input placeholder={car.brand} {...register('brand')}></input>
                    <input placeholder={car.price} {...register('price')}></input>
                    <input placeholder={car.year} {...register('year')}></input>
                    <button type={"submit"}>Submit</button>
                </form>}
            <button onClick={()=>dispatch(carActions.deleteCar(car.id))}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;