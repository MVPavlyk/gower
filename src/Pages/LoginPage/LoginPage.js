import React from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {useDispatch, useSelector} from 'react-redux';
import {getMyRoles, login} from '../../store';
import {Navigate, NavLink} from 'react-router-dom';
import {UserValidator} from '../../Validation';
import css from './LoginPage.module.css';

const LoginPage = () => {

    const {dark} = useSelector(state => state['themeReducers']);
    const {EN} = useSelector(state => state['languageReducers']);

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(UserValidator)});

    const {user, error} = useSelector(state => state['userReducers']);


    const dispatch = useDispatch();

    const submit = (obj) => {

        dispatch(login(obj)).then(user && dispatch(getMyRoles()));
    };

    if (user) {
        return <Navigate to="/" replace/>;
    }

    return (
        <>
            <div className={dark ? css.login_page_dark : css.login_page}>
                <div className={css.login_wrap}>
                    <form onSubmit={handleSubmit(submit)} className={css.login_form}>

                        <input
                            type="text"
                            placeholder={EN ? "Email" : "Пошта"}
                            {...register('email')}
                            className={dark ? css.login_input_dark : css.login_input}
                        />

                        {errors.email && <div className={css.error}>{errors.email.message}</div>}

                        <input
                            type="password"
                            placeholder={EN ? "Password" : "Пароль"}
                            autoComplete="on"
                            {...register('password')}
                            className={dark ? css.login_input_dark : css.login_input}
                        />

                        {errors.password && <div className={css.error}>{errors.password.message}</div>}

                        {error && <div className={css.error}>Хибний email або пароль</div>}

                        <button className={dark ? css.login_btn_dark : css.login_btn}>{EN ? "login" : "вхід"}</button>
                    </form>
                    <NavLink to={'/register'} className={dark ? css.register_link_dark : css.register_link}>
                        {EN ? "Create a new account" : "У вас немає облікового запису? Зареєструватися"}
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export {LoginPage};