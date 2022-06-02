import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
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
    const {EN} = useSelector(state => state['languageReducers']);
    const dispatch = useDispatch();

    const [repeatError, setRepeatError] = useState(false);

    const submit = (obj) => {
        if (obj.password === obj.repeatPassword) {
            dispatch(registration({
                firstName: obj.firstName,
                lastName: obj.lastName,
                email: obj.email,
                password: obj.password
            }));
            setRepeatError(false);
        } else {
            setRepeatError(true);
        }

    };

    if (user) {
        return <Navigate to="/" replace/>;
    }

    return (
        <div className={dark ? css.register_page_dark : css.register_page}>

            <form onSubmit={handleSubmit(submit)} className={dark ? css.register_form_dark : css.register_form}>
                <input
                    type="text"
                    placeholder={EN ? "Name" : "Ім'я"}
                    {...register('firstName')}
                    className={dark ? css.register_input_dark : css.register_input}
                />

                {errors.firstName && <div className={css.error}>{errors.firstName.message}</div>}

                <input
                    type="text"
                    placeholder={EN ? "Surname" : "Прізвище"}
                    {...register('lastName')}
                    className={dark ? css.register_input_dark : css.register_input}
                />

                {errors.lastName && <div className={css.error}>{errors.lastName.message}</div>}

                <input
                    type="text"
                    placeholder={EN ? "Email" : "Пошта"}
                    {...register('email')}
                    autoComplete="off"
                    autoCorrect="off"
                    className={dark ? css.register_input_dark : css.register_input}
                />

                {errors.email && <div className={css.error}>{errors.email.message}</div>}

                <input
                    type="password"
                    placeholder={EN ? "Password" : "Пароль"}
                    autoComplete="off"
                    {...register('password')}
                    className={dark ? css.register_input_dark : css.register_input}
                />

                {errors.password && <div className={css.error}>{errors.password.message}</div>}

                <input
                    type="password"
                    placeholder={EN ? "Repeat password" : "Повторіть пароль"}
                    autoComplete="off"
                    {...register('repeatPassword')}
                    className={dark ? css.register_input_dark : css.register_input}
                />

                {repeatError && <div className={css.error}>{EN ? 'Error repeat password' : 'Помилка повтору пароля'}</div>}

                {error && <div className={css.error}>Хибний email або пароль</div>}

                <button className={dark ? css.register_btn_dark : css.register_btn}>{EN ? "register" : "реєстрація"}</button>
            </form>
        </div>
    );
};

export {RegisterPage};