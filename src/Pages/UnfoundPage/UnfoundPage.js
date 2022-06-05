import React from 'react';
import {useSelector} from 'react-redux';
import css from './UnfoundPage.module.css';
import {NavLink} from 'react-router-dom';


const UnfoundPage = () => {
    const {dark} = useSelector(state => state['themeReducers']);
    const {EN} = useSelector(state => state['languageReducers']);

    return (
        <div className={dark ? css.page_dark : css.page}>
            <div className={dark ? css.dark_title : css.title}>
                {EN ? 'UPS, something get wrong...' : 'Ой, щось пішло не так...'}
            </div>
            <NavLink className={dark ? css.dark_link : css.link} to={'/'}>{EN ? 'Back to main page' : 'На головну'}</NavLink>

        </div>
    );
};

export {UnfoundPage};