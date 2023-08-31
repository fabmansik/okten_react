import React from 'react';
import CarForm from "../components/CarForm";
import Cars from "../components/Cars";
import Pagination from "../components/Pagination/Pagination";
const CarsContainer = () => {

    return (
        <div className={'cars-div'}>
            <CarForm/>
            <hr/>
            <Cars/>
            <Pagination/>
        </div>
    );
};

export default CarsContainer;