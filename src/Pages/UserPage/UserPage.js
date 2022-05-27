import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import css from './UserPage.module.css';
import {logout} from '../../store';
import {ChangePasswordForm, DeleteUserForm, UpdateUserForm} from '../../Components';

const UserPage = () => {
    const {user, error} = useSelector(state => state['userReducers']);

    const {dark} = useSelector(state => state['themeReducers']);


    return (
        <div className={dark ? css.user_page_dark : css.user_page}>
            <UpdateUserForm/>
            <ChangePasswordForm/>
            <DeleteUserForm/>
        </div>
    );
};

export {UserPage};