import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../../../redux/actions/carsActions";
import {CarComponent} from "../Car/CarComponent";
import {CarFormContainer} from "../CarForm/CarFormContainer";

const CarsContainer = () => {
    const dispatch = useDispatch()
    const cars = useSelector(store=>store.cars.results)
    useEffect(()=>{
        dispatch(getCars())
    },[])
    return (
        <div>
            {cars.map(car=><CarComponent car={car} key={car.id}/>)}
            <CarFormContainer/>
        </div>
    );
};

export default CarsContainer;