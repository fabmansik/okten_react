import React, {useEffect} from 'react';
import {carActions} from "../redux";
import Car from "./Car";
import {ICar} from "../interfaces/CarInterface";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {useLocation, useSearchParams} from "react-router-dom";

const Cars = () => {
    const dispatch = useAppDispatch()
    const {pagination, isLoading} = useAppSelector(state => state.cars)
    const {items} = pagination
    const location = useLocation()
    console.log(location)
    const [querry] = useSearchParams()
    console.log(querry.toString())
    useEffect(() => {
            dispatch(carActions.all(querry.toString()))
    }, [querry.get('page'), querry.get('page_size')])

    return (
        <div>
            {!isLoading && items.map((car: ICar) => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;