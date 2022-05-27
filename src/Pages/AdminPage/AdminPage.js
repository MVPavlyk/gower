import React from 'react';
import css from './AdminPage.module.css';
import {
    CreatePlaceForm,
    CreateTableForm,
    DeletePlaceForm
} from '../../Components';

const AdminPage = () => {
    return (
        <div className={css.admin_page}>
            <CreatePlaceForm/>
            <DeletePlaceForm/>
            <CreateTableForm/>
        </div>
    );
};

export {AdminPage};