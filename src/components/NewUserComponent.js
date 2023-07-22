import {useForm} from "react-hook-form";
import {apiServices} from "../services/apiServices";

export const NewUserComponent = () => {
const {register, handleSubmit} = useForm()
        const onSubmit = (data) =>apiServices.axiosUserPost(data)
    return(
        <form onSubmit={handleSubmit(onSubmit)} className='new_User_Form'>
            <h3>User Details</h3>
            <label>ID:</label>
            <input {...register("id",{required: 'Id is necessary'})}></input>
            <label>Name:</label>
            <input {...register('name',{required:''})}></input>
            <label>Username:</label>
            <input {...register('username',{required:''})}></input>
            <label>Email: </label>
            <input {...register('email',{required:''})}></input>
            <label>Phone: </label>
            <input {...register('phone',{required:''})}></input>
            <label>Website: </label>
            <input {...register('website',{required:''})}></input>

            <h3>User Address</h3>
            <label>Street: </label>
            <input {...register('address.street',{required:''})}></input>
            <label>Suite: </label>
            <input {...register('address.suite',{required:''})}></input>
            <label>City: </label>
            <input {...register('address.city',{required:''})}></input>
            <label>Zipcode: </label>
            <input {...register('address.zipcode',{required:''})}></input>
            <h3>Geo:</h3>
                <label>Lat:</label>
            <input {...register('geo.lat',{required:''})}></input>
                <label>Lng:</label>
                <input {...register('geo.lng',{required:''})}></input>
            <h3>Company</h3>
            <label>Name: </label>
            <input {...register('company.name',{required:''})}></input>
            <label>BS: </label>
            <input {...register('company.bs',{required:''})}></input>
            <label>Catch Phrase: </label>
            <input {...register('company.catchPhrase',{required:''})}></input>
                <button type='submit'>Create</button>
        </form>
    )
}