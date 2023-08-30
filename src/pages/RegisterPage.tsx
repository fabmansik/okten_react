import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/AuthInterface";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {authActions} from "../redux/slices/authSlice";
import {useNavigate} from "react-router";

const RegisterPage = () => {
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {errors} = useAppSelector(state => state.auth)
    const registerUser: SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}}=await dispatch(authActions.register({user}))
        if (requestStatus === 'fulfilled'){
            reset()
            navigate('/login')
        }
    }
    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type={`text`} placeholder={`username`} {...register(`username`)}/>
            <input type={`text`} placeholder={`password`} {...register(`password`)}/>
            <button type={"submit"}>Register</button>
            {errors?.username && <span>username already exists</span>}
        </form>
    );
};

export default RegisterPage;