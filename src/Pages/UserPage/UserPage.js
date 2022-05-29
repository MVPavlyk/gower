import React from 'react';
import {useSelector} from 'react-redux';
import css from './UserPage.module.css';
import updateCss from '../../Components/UpdateUserForm/UpdateUserForm.module.css';
import {ChangePasswordForm, DeleteUserForm, UpdateUserForm} from '../../Components';
import {Navigate, NavLink} from 'react-router-dom';

const UserPage = () => {
    const {user} = useSelector(state => state['userReducers']);

    const {dark} = useSelector(state => state['themeReducers']);

    const {EN} = useSelector(state => state['languageReducers']);

    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    return (
        <div className={dark ? css.user_page_dark : css.user_page}>
            <UpdateUserForm/>
            <ChangePasswordForm/>
            {user.id === 1 &&
                <NavLink to={'/admin'}>
                    <button className={dark ? updateCss.update_user_btn_dark : updateCss.update_user_btn}>
                        {EN ? 'Admin tools' : 'Засоби адміністратора'}
                    </button>
                </NavLink>}
            <DeleteUserForm/>
        </div>
    );
};

export {UserPage};