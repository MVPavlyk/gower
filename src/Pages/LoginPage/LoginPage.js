import React from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../store';
import {useNavigate, NavLink} from 'react-router-dom';
import {UserValidator} from '../../Validation';
import css from './LoginPage.module.css';
import {UserPage} from '../UserPage/UserPage';

const LoginPage = () => {

    const {dark} = useSelector(state => state['themeReducers']);

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
                    <div className={dark ? css.login_page_dark : css.login_page}>
                        <div className={css.login_wrap}>
                            <form onSubmit={handleSubmit(submit)} className={css.login_form}>

                                <input
                                    type="text"
                                    placeholder="Email"
                                    {...register('email')}
                                    className={dark ? css.login_input_dark : css.login_input}
                                />

                                {errors.email && <div className={css.error}>{errors.email.message}</div>}

                                <input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="on"
                                    {...register('password')}
                                    className={dark ? css.login_input_dark : css.login_input}
                                />

                                {errors.password && <div className={css.error}>{errors.password.message}</div>}

                                {error && <div className={css.error}>Хибний email або пароль</div>}

                                <button className={dark ? css.login_btn_dark : css.login_btn}> login</button>
                            </form>
                            <NavLink to={'/register'} className={dark ? css.register_link_dark : css.register_link}>
                                У вас немає облікового запису? Зареєструватися
                            </NavLink>
                        </div>
                    </div>
            }
        </>
    );
};

export {LoginPage};