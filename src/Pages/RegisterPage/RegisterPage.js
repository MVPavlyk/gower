import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import css from './RegisterPage.module.css';
import {registration} from '../../store';
import {joiResolver} from '@hookform/resolvers/joi/dist/joi';
import {UserValidator} from '../../Validation';

const RegisterPage = () => {

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(UserValidator)});

    const {user, error} = useSelector(state => state['userReducers']);

    const dispatch = useDispatch();

    const submit = (obj) => {
        dispatch(registration(obj));
    };


    return (
        <div className={css.register_page}>

            <form onSubmit={handleSubmit(submit)} className={css.register_form}>
                <input
                    type="text"
                    placeholder="Name"
                    {...register('firstName')}
                    className={css.register_input}
                />

                {errors.firstName && <div className={css.error}>{errors.firstName.message}</div>}

                <input
                    type="text"
                    placeholder="Surname"
                    {...register('lastName')}
                    className={css.register_input}
                />

                {errors.lastName && <div className={css.error}>{errors.lastName.message}</div>}

                <input
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                    className={css.register_input}
                />

                {errors.email && <div className={css.error}>{errors.email.message}</div>}

                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="on"
                    {...register('password')}
                    className={css.register_input}
                />

                {errors.password && <div className={css.error}>{errors.password.message}</div>}

                {error && <div className={css.error}>Хибний email або пароль</div>}

                <button className={css.register_btn}>register</button>
            </form>
        </div>
    );
};

export {RegisterPage};