import React from 'react';
import CarForm from "../components/CarsContainer/CarForm/CarForm";
import Cars from "../components/CarsContainer/Cars/Cars";
import Pagination from "../components/Pagination/Pagination";
const CarsContainer = () => {

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
            <Pagination/>
        </div>
    );
};

export default CarsContainer;