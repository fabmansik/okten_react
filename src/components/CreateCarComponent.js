import {useForm} from "react-hook-form";
import {apiServices} from "../services/apiServices";
import {useContext} from "react";
import {ReloadContext} from "./CarsComponent";

export const CreateCarComponent = () => {
    const {register, handleSubmit} =useForm()
    const {setReload} = useContext(ReloadContext)
    const onSubmit = (data) =>{
        apiServices.axiosCarPost(data, setReload)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
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