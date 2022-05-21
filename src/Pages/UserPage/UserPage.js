import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import css from './UserPage.module.css';
import {logout, changePsw, deleteUser} from '../../store';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi/dist/joi';
import {ChangePasswordValidator} from '../../Validation';

const UserPage = () => {
    const {user, error} = useSelector(state => state['userReducers']);

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(ChangePasswordValidator)});

    const dispatch = useDispatch();

    const [changeP, setChangeP] = useState(false);

    const [changePasError, setChangePasError] = useState(undefined);

    const logOut = () => {
        dispatch(logout());
        console.log(user);
    };

    const changePassword = (obj) => {
        if (obj.currentPassword !== obj.newPassword && obj.newPassword === obj.repeatPassword) {
            dispatch(changePsw({email: obj.email, currentPassword: obj.currentPassword, newPassword: obj.newPassword}));
            console.log(obj);
        } else {
            setChangePasError('Новий пароль повторює попередній або новий пароль не збігається з його копією');
        }
    };

    return (
        <div className={css.user_page}>
            <div>Firstname: {user.firstName}</div>
            <div>Lastname: {user.lastName}</div>
            <div>Email: {user.email}</div>
            <div onClick={() => logOut()} className={css.logout_btn}>logout</div>
            <button onClick={() => setChangeP(!changeP)}> Змінити пароль</button>

            <div className={changeP ? css.change_p_block : css.none}>

                <form onSubmit={handleSubmit(changePassword)} className={css.change_psw_form}>
                    <input
                        type="text"
                        {...register('email')}
                        defaultValue={user.email}
                        style={{display: 'none'}}
                    />
                    <input
                        type="password"
                        autoComplete="off"
                        placeholder="current password"
                        {...register('currentPassword')}
                        className={css.change_p_input}
                    />
                    <input
                        type="password"
                        autoComplete="off"
                        placeholder="new password"
                        {...register('newPassword')}
                        className={css.change_p_input}
                    />
                    <input
                        type="password"
                        autoComplete="off"
                        placeholder="repeat newPassword"
                        {...register('repeatPassword')}
                        className={css.change_p_input}
                    />

                    {errors.newPassword && <div className={css.error}>{errors.newPassword.message}</div>}

                    {changePasError && <div className={css.error}>{changePasError}</div>}

                    {error && <div className={css.error}>Помилка</div>}
                    <button>змінити</button>
                </form>
            </div>

            <button onClick={() => dispatch(deleteUser())}> видалити</button>

        </div>
    );
};

export {UserPage};