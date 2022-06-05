import React from 'react';
import css from './AdminPage.module.css';
import {
    CreatePlaceForm,
    CreateTableForm,
    DeletePlaceForm,
    GetUsersPanel,
    UserPersonalBlock
} from '../../Components';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

const AdminPage = () => {
    const {user, roles} = useSelector(state => state['userReducers']);

    const {dark} = useSelector(state => state['themeReducers']);
    const {EN} = useSelector(state => state['languageReducers']);

    if (user && (!(roles.includes('Admin')))) {
        return <Navigate to="/user" replace/>;
    }

    return (
        <div className={dark ? css.admin_page_dark : css.admin_page}>
            <div className={css.admin_page_left}>
                <CreatePlaceForm/>
                <DeletePlaceForm/>
                <CreateTableForm/>
            </div>
            <div className={css.admin_page_right}>
                <h4>{EN ? "Users" : "Користувачі"}</h4>
                <UserPersonalBlock/>
                <GetUsersPanel/>
            </div>
        </div>
    );
};

export {AdminPage};