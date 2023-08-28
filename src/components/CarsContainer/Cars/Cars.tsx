import React, {useEffect} from 'react';
import {carActions} from "../../../redux/";
import Car from "../Car/Car";
import {ICar} from "../../../interfaces/CarInterface";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";

const Cars = () => {
const dispatch = useAppDispatch()
    const {cars} = useAppSelector(state=>state.cars)
    useEffect(()=>{
        dispatch(carActions.all())
    },[])
    return (
        <div>
            {cars.map((car:ICar)=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;