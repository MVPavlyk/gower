import React from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../store';
import {useNavigate, NavLink} from 'react-router-dom';
import {UserValidator} from '../../Validation';
import css from './LoginPage.module.css';

const LoginPage = () => {

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(UserValidator)});

    const {user, error} = useSelector(state => state['userReducers']);


    const dispatch = useDispatch();

    // console.log(user);

    const logOut = () => {
        dispatch(logout())
        console.log(user);
    }

    // logOut()

    const submit = (obj) => {
        dispatch(login(obj));
    };

    return (
        <div className={css.login_page}>
            {user ?
                <div className={css.user_page}>
                    <div>Firstname: {user.firstName}</div>
                    <div>Lastname: {user.lastName}</div>
                    <div>Email: {user.email}</div>
                    <div onClick={() => logOut()} className={css.logout_btn}>logout</div>
                </div>
                :
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
            }
        </div>
    );
};

export {LoginPage};