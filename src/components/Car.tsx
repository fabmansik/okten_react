import React, {FC, PropsWithChildren, useRef, useState} from 'react';
import {carActions} from "../redux";
import {useForm} from "react-hook-form";
import {ICar} from "../interfaces/CarInterface";
import {useAppDispatch} from "../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";
// @ts-ignore
import empty from "../assets/images/noIMG.jpg";
import {carService} from "../services";


interface IProps{
    car:ICar
}
const Car:FC<PropsWithChildren<IProps>> = ({car}) => {
    const {id, price, year, photo, brand} = car
    const {register, handleSubmit} = useForm()
    const dispatch = useAppDispatch();
    const [querry] = useSearchParams()
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [image, setImage] = useState(null)
    let fileInput = useRef<HTMLInputElement>();
    const update = (data:ICar):void=>{
        dispatch(carActions.update({id:car.id, options:querry.toString(), ...data}))
    }
    const addPhoto = async () =>{
        let formData = new FormData();
        let file: Blob = fileInput.current.files[0];
        formData.append('photo', file)
        await carService.addPhoto(id,formData)
        setImage(URL.createObjectURL(file))
    }
    return (
        <div>
            <div className={'car-details'}>
                <img
                    src={image||photo || empty}
                    alt={brand}
                    style={{cursor:'pointer'}}
                    onClick={()=>{fileInput.current.click()}}
                />
                Id: {id} <br/>
                Brand: {brand}<br/>
                Price: {price}<br/>
                Year: {year}<br/>
            </div>

            <button onClick={()=>setShowUpdateForm(prev=>!prev)}>Update</button>
            {showUpdateForm &&
                <form onSubmit={handleSubmit(update)}>
                    <input placeholder={brand} {...register('brand')}></input>
                    <input placeholder={`${price}`} {...register('price')}></input>
                    <input placeholder={`${year}`} {...register('year')}></input>
                    <button type={"submit"}>Submit</button>
                </form>}
            <button onClick={()=>
                dispatch(carActions.deleteCar({car_id: id, options: querry.toString()}))}>
                Delete
            </button>
            <input type={"file"}
                   accept={'image/jpeg, image/png'}
                   style={{display:'none'}}
                   onChange={addPhoto}
                   ref={fileInput}/>
            <hr/>
        </div>
    );
};

export default Car;