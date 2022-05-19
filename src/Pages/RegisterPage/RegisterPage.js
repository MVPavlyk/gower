import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import css from './RegisterPage.module.css'
import {registration} from '../../store';

const RegisterPage = () => {

    const {
        register, handleSubmit, setValue, formState: {errors}
    } = useForm();

    const {user} = useSelector(state => state['userReducers']);

    const dispatch = useDispatch();

    console.log(user);


    const submit = (obj) => {
        console.log(obj);
        dispatch(registration(obj))
    };

    return (
        <div className={css.register_page}>
            <form onSubmit={handleSubmit(submit)} className={css.register_form}>
                <input
                    type="text"
                    placeholder="Name"
                    {...register('name')}
                    className={css.register_input}
                />
                <input
                    type="text"
                    placeholder="Surname"
                    {...register('surname')}
                    className={css.register_input}
                />
                <input
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                    className={css.register_input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                    className={css.register_input}
                />
                <button className={css.register_btn}>register</button>
            </form>
        </div>
    );
};

export {RegisterPage};