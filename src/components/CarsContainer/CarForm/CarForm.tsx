import React from 'react';
import {useForm} from "react-hook-form";
import {carActions} from "../../../redux/";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {ICar} from "../../../interfaces/CarInterface";
const CarForm = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit} = useForm();
    const onSubmit = async (data:ICar) =>{
        await dispatch(carActions.create(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={'brand'} {...register('brand')}></input>
                <input placeholder={'price'} {...register('price')}></input>
                <input placeholder={'year'} {...register('year')}></input>
                <button type={'submit'}>Submit</button>
            </form>
        </div>
    );
};

export default CarForm;