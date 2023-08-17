import React from 'react';
import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";
import {useSelector} from "react-redux";

const CarsContainer = () => {
    const isLoading = useSelector(state => state.isLoading)
    return (
        <div>
            <CarForm/>
            <hr/>
            {!isLoading && <Cars/>}
        </div>
    );
};

export default CarsContainer;