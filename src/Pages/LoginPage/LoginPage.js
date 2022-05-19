import React from 'react';
import {useForm} from 'react-hook-form';

import css from './LoginPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store';
import {NavLink} from 'react-router-dom';


const LoginPage = () => {

    const {
        register, handleSubmit, setValue, formState: {errors}
    } = useForm();

    const {user} = useSelector(state => state['userReducers']);

    const dispatch = useDispatch();

    console.log(user);


    const submit = (obj) => {
        console.log(obj);
        dispatch(login(obj));
    };


    return (
        <div className={css.login_page}>
            <form onSubmit={handleSubmit(submit)} className={css.login_form}>
                <input
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                    className={css.login_input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                    className={css.login_input}
                />
                <button className={css.login_btn}> login</button>
            </form>
            <NavLink to={'/register'} className={css.register_link}>У вас немає облікового запису? Зареєструватися</NavLink>
        </div>
    );
};

export {LoginPage};