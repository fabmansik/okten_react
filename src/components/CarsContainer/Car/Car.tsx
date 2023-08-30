import React, {FC, PropsWithChildren, useState} from 'react';
import {carActions} from "../../../redux/";
import {useForm} from "react-hook-form";
import {ICar} from "../../../interfaces/CarInterface";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";
interface IProps{
    car:ICar
}
const Car:FC<PropsWithChildren<IProps>> = ({car}) => {
    const {register, handleSubmit} = useForm()
    const dispatch = useAppDispatch();
    const [querry] = useSearchParams()
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const update = (data:ICar):void=>{
        dispatch(carActions.update({id:car.id, options:querry.toString(), ...data}))
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
                    <input placeholder={`${car.price}`} {...register('price')}></input>
                    <input placeholder={`${car.year}`} {...register('year')}></input>
                    <button type={"submit"}>Submit</button>
                </form>}
            <button onClick={()=>dispatch(carActions.deleteCar({car_id: car.id, options: querry.toString()}))}>Delete</button>

            <hr/>
        </div>
    );
};

export default Car;