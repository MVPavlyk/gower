import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {useDispatch, useSelector} from 'react-redux';
import {UserValidator} from '../../Validation';
import {updateUser} from '../../store';
import css from './UpdateUserForm.module.css';

const UpdateUserForm = () => {
    const {user, error} = useSelector(state => state['userReducers']);

    const {EN} = useSelector(state => state['languageReducers']);

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(UserValidator)});

    const dispatch = useDispatch();

    const [updateError, setUpdateError] = useState(false);

    const updateU = (obj) => {
        if (!(obj.firstName === user.firstName && obj.lastName === user.lastName && obj.email === user.email)) {
            dispatch(updateUser(obj));
            setUpdateError(false);
        } else {
            setUpdateError(true);
        }

    };

    return (
        <form className={css.user_update} onSubmit={handleSubmit(updateU)}>
            <h4 className={css.user_update_text}>{EN ? 'Firstname:' : 'Ім\'я:'}</h4>
            <input
                type="text"
                {...register('firstName')}
                defaultValue={user.firstName}
                className={css.user_update_input}
            />
            <div className={css.error}>{errors.firstName ? EN ? 'Incorrect name' : 'Некоректне ім\'я' : ''}</div>
            <h4 className={css.user_update_text}>{EN ? 'Lastname:' : 'Прізвище:'}</h4>
            <input
                type="text"
                {...register('lastName')}
                defaultValue={user.lastName}
                className={css.user_update_input}
            />
            <div className={css.error}>{errors.lastName ? EN ? 'Incorrect lastname' : 'Некоректне Прізвище' : ''}</div>
            <h4 className={css.user_update_text}>{EN ? 'Email:' : 'Електронна пошта:'}</h4>
            <input
                type="text"
                {...register('email')}
                defaultValue={user.email}
                className={css.user_update_input}
            />
            <div className={css.error}>{errors.email ? EN ? 'Incorrect email' : 'Хибна пошта' : ''}</div>

            <div className={css.error}>{updateError ? EN ? 'Update error' : 'Помилка оновлення' : ''}</div>
            <button className={css.update_user_btn}>{EN ? 'Update user data' : 'Оновити дані користувача'}</button>
        </form>
    );
};

export {UpdateUserForm};