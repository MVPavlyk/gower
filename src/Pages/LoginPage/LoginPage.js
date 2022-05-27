import React from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store';
import {NavLink} from 'react-router-dom';
import {UserValidator} from '../../Validation';
import css from './LoginPage.module.css';
import {UserPage} from '../UserPage/UserPage';

const LoginPage = () => {

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(UserValidator)});

    const {user, error} = useSelector(state => state['userReducers']);


    const dispatch = useDispatch();

    const submit = (obj) => {
        dispatch(login(obj));
    };

    return (
        <>
            {
                user ?
                    <UserPage/>
                    :
                    <div className={css.login_page}>
                        <div className={css.login_wrap}>
                            <form onSubmit={handleSubmit(submit)} className={css.login_form}>

                                <input
                                    type="text"
                                    placeholder="Email"
                                    {...register('email')}
                                    className={css.login_input}
                                />

                                {errors.email && <div className={css.error}>{errors.email.message}</div>}

                                <input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="on"
                                    {...register('password')}
                                    className={css.login_input}
                                />

                                {errors.password && <div className={css.error}>{errors.password.message}</div>}

                                {error && <div className={css.error}>Хибний email або пароль</div>}

                                <button className={css.login_btn}> login</button>
                            </form>
                            <NavLink to={'/register'} className={css.register_link}>
                                У вас немає облікового запису? Зареєструватися
                            </NavLink>
                        </div>
                    </div>
            }
        </>
    );
};

export {LoginPage};