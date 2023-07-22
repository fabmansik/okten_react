import {useForm} from "react-hook-form";
import {apiServices} from "../services/apiServices";
import {useContext,} from "react";
import {ReloadContext} from "./CarsComponent";

export const UpdateCarComponent = ({car, setShowUpdateForm}) => {
    const {setReload} = useContext(ReloadContext)
    const {register, handleSubmit} = useForm()
    const onSubmit = (data)=>{
        console.log(data)
        apiServices.axiosCarUpdate(car.id, {price: data.price || car.price,brand: data.brand || car.brand,year: data.year || car.year}, setReload)
        setShowUpdateForm(prevstate=>!prevstate)

    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className='updateForm'>
            <label>Brand:</label>
            <input {...register('brand')}></input>
            <label>Price:</label>
            <input {...register('price')}></input>
            <label>Year:</label>
            <input {...register('year')}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}