import {useForm} from "react-hook-form";
import {apiServices} from "../services/apiServices";

export const NewCommentComponent = () => {
    const {register, handleSubmit}=useForm()
    const onSubmit = (data) => apiServices.axiosCommentPost(data)
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>ID:</label>
            <input type="number" {...register("id", {required: "ID is necessary!"})}></input>
            <label>Name:</label>
            <input type="text"{...register("name",{required:'Name is necessary!'})}></input>
            <label>Email:</label>
            <input type="email" {...register("email",{required:'Email is necessary!'})}></input>
            <label>Body:</label>
            <input type='text' {...register("body",{required:'Body is necessary!'})}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}