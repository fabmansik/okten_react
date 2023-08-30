import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {authActions} from "../redux/slices/authSlice";
import {IAuth} from "../interfaces/AuthInterface";
import {useNavigate} from "react-router";

const LoginPage = () => {
    const {errors, isLoading} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {register, reset, handleSubmit} = useForm()
    const loginUser: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user}))
        if (requestStatus === 'fulfilled') {
            reset()
            navigate('/cars')
        }
    }

    return (
        <div>
            {!isLoading ?
                <form onSubmit={handleSubmit(loginUser)}>
                    <input type={"text"} placeholder={'username'} {...register('username')}/>
                    <input type={"text"} placeholder={'password'} {...register('password')}/>
                    <button type={"submit"}>Login</button>
                    {errors && <span>{errors.detail}</span>}
                </form>: <p>Loading...</p>}
        </div>
    );
};

export default LoginPage;