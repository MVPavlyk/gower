import React, {useState} from 'react';
import css from './DeleteUserForm.module.css';
import {deleteUser} from '../../store';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

const DeleteUserForm = () => {
    const {user} = useSelector(state => state['userReducers']);

    const {EN} = useSelector(state => state['languageReducers']);

    const {
        register, handleSubmit, formState: {errors}
    } = useForm();

    const dispatch = useDispatch();


    const [showDelete, setShowDelete] = useState(false);

    const [delError, setDelError] = useState(false);

    const deleteU = (obj) => {
        if (obj.firstName === user.firstName) {
            dispatch(deleteUser());
        } else {
            setDelError(true);
        }

    };

    return (
        <>
            <button className={css.show_delete_btn}
                    onClick={() => setShowDelete(!showDelete)}>{EN ? 'Delete user' : 'Видалити користувача'}</button>
            <form className={showDelete ? css.delete_form : css.hide} onSubmit={handleSubmit(deleteU)}>

                <h4 className={css.delete_text}>
                    {EN ? 'Enter firstname for confirmation' : 'Введіть ім\'я для підтвердження'}
                </h4>
                <input
                    className={css.delete_input}
                    {...register('firstName')}
                    placeholder={EN ? 'Firstname:' : 'Ім\'я:'}
                />
                {delError && <h4 className={css.error}>{EN ? 'Error' : 'Помилка'}</h4>}
                <button className={css.full_delete_btn}>{EN ? 'Delete' : 'Видалити'}</button>
            </form>
        </>
    );
};

export {DeleteUserForm};