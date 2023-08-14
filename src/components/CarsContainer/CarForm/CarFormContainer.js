import {useForm} from "react-hook-form";
import {createCar} from "../../../redux/actions/carsActions";
import {useDispatch} from "react-redux";

export const CarFormContainer = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, } = useForm();
    const onSubmit = data =>{
        dispatch(createCar(data))
    }
    return(
        <div style={{position:"fixed", top:'0px', right:'10px', width:'200px', height:'200px', zIndex:0, backgroundColor:'white', border:'1px solid black'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={'Brand'} {...register('brand')}></input>
                <input placeholder={'Price'}{...register('price')}></input>
                <input placeholder={'Year'}{...register('year')}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}