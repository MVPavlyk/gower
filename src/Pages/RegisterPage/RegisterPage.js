import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom'
import css from './RegisterPage.module.css';
import {registration} from '../../store';
import {joiResolver} from '@hookform/resolvers/joi/dist/joi';
import {UserValidator} from '../../Validation';

const RegisterPage = () => {

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(UserValidator)});

    const {user, error} = useSelector(state => state['userReducers']);
    const {dark} = useSelector(state => state['themeReducers']);
    const dispatch = useDispatch();

    const submit = (obj) => {
        dispatch(registration(obj));
    };

    if (user) {
        return <Navigate to="/" replace/>;
    }

    return (
        <div className={dark ? css.register_page_dark : css.register_page}>

            <form onSubmit={handleSubmit(submit)} className={dark ? css.register_form_dark : css.register_form}>
                <input
                    type="text"
                    placeholder="Name"
                    {...register('firstName')}
                    className={dark ? css.register_input_dark : css.register_input}
                />

                {errors.firstName && <div className={css.error}>{errors.firstName.message}</div>}

                <input
                    type="text"
                    placeholder="Surname"
                    {...register('lastName')}
                    className={dark ? css.register_input_dark : css.register_input}
                />

                {errors.lastName && <div className={css.error}>{errors.lastName.message}</div>}

                <input
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                    autoComplete="off"
                    autoCorrect="off"
                    className={dark ? css.register_input_dark : css.register_input}
                />

                {errors.email && <div className={css.error}>{errors.email.message}</div>}

                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    {...register('password')}
                    className={dark ? css.register_input_dark : css.register_input}
                />

                {errors.password && <div className={css.error}>{errors.password.message}</div>}

                {error && <div className={css.error}>Хибний email або пароль</div>}

                <button className={dark ? css.register_btn_dark : css.register_btn}>register</button>
            </form>
        </div>
    );
};

export {RegisterPage};