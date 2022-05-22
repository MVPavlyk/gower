import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {ChangePasswordValidator} from '../../Validation';
import {changePsw} from '../../store';
import css from './ChangePasswordForm.module.css';

const ChangePasswordForm = () => {
    const {user, error} = useSelector(state => state['userReducers']);

    const {EN} = useSelector(state => state['languageReducers']);

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(ChangePasswordValidator)});

    const dispatch = useDispatch();

    const [changeP, setChangeP] = useState(false);

    const [changePasError, setChangePasError] = useState(undefined);

    const changePassword = (obj) => {
        if (obj.currentPassword !== obj.newPassword && obj.newPassword === obj.repeatPassword) {
            dispatch(changePsw({email: obj.email, currentPassword: obj.currentPassword, newPassword: obj.newPassword}));
            console.log(obj);
        } else {
            setChangePasError(EN ? 'The new password repeats the previous one or does not match its copy' : 'Новий пароль повторює попередній або не збігається з його копією');
        }
    };

    return (
        <>
            <button className={css.show_form_btn}
                    onClick={() => setChangeP(!changeP)}>{EN ? 'Change password' : 'Змінити пароль'}</button>
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
                        placeholder={EN ? 'Current password' : 'Поточний пароль'}
                        {...register('currentPassword')}
                        className={css.change_p_input}
                    />
                    <input
                        type="password"
                        autoComplete="off"
                        placeholder={EN ? 'New password' : 'Новий пароль'}
                        {...register('newPassword')}
                        className={css.change_p_input}
                    />
                    <input
                        type="password"
                        autoComplete="off"
                        placeholder={EN ? 'Repeat password' : 'Повторіть пароль'}
                        {...register('repeatPassword')}
                        className={css.change_p_input}
                    />

                    {errors.newPassword && <div className={css.error}>{errors.newPassword.message}</div>}

                    {changePasError && <div className={css.error}>{changePasError}</div>}

                    {error && <div className={css.error}>{EN ? 'Error' : 'Помилка'}</div>}
                    <button className={css.change_btn}>{EN ? 'Change' : 'Змінити'}</button>
                </form>
            </div>
        </>
    );
};

export {ChangePasswordForm};