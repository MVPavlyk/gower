import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import css from './UserPage.module.css';
import {logout} from '../../store';
import {ChangePasswordForm, DeleteUserForm, UpdateUserForm} from '../../Components';

const UserPage = () => {
    const {user, error} = useSelector(state => state['userReducers']);

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
        console.log(user);
    };


    return (
        <div className={css.user_page}>
            <UpdateUserForm/>
            <ChangePasswordForm/>
            <DeleteUserForm/>
        </div>
    );
};

export {UserPage};