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
    const {user} = useSelector(state => state['userReducers']);

    if (user && (!(user.id === 1))) {
        return <Navigate to="/user" replace/>;
    }

    return (
        <div className={css.admin_page}>
            <div className={css.admin_page_left}>
                <CreatePlaceForm/>
                <DeletePlaceForm/>
                <CreateTableForm/>
            </div>
            <div className={css.admin_page_right}>
                <h4>Users</h4>
                <UserPersonalBlock/>
                <GetUsersPanel/>
            </div>
        </div>
    );
};

export {AdminPage};