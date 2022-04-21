import React from 'react';
import css from './MenuPage.module.css'
import {useSelector} from 'react-redux';

const MenuPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (
        <div className={css.menu_page}>
            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.menu.menu_p_1_img}`}
                alt={oneRestaurant.name}
            />
            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.menu.menu_p_2_img}`}
                alt={oneRestaurant.name}
            />
        </div>
    );
};

export {MenuPage};