import {apiServices} from "../services/apiServices";
import {createContext, useEffect, useState} from "react";
import {CarComponent} from "./CarComponent";
import {CreateCarComponent} from "./CreateCarComponent";
export const ReloadContext = createContext()
export const CarsComponent = () => {
    const [cars, setCars] = useState([])
    const [reload, setReload] = useState(null)
    useEffect(()=>{ apiServices.axiosCarGet(setCars)},[reload])
    return(
        <div className='cars'>
            <ReloadContext.Provider value={{setReload}}>
            <div className="carsList">
                    {cars.map(car=> <CarComponent key={car.id} car={car}/>)}
            </div>
            <div className="carsForm">
                <CreateCarComponent/>
            </div>
            </ReloadContext.Provider>
        </div>
    )

}