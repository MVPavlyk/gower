import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import css from './UserPage.module.css';
import {ChangePasswordForm, DeleteUserForm, UpdateUserForm} from '../../Components';

const UserPage = () => {
    const {user, error} = useSelector(state => state['userReducers']);

    return (
        <div className={css.user_page}>
            <UpdateUserForm/>
            <ChangePasswordForm/>
            <DeleteUserForm/>
        </div>
    );
};

export {UserPage};