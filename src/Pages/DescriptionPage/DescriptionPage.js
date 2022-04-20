import React from 'react';
import css from './DescriptionPage.module.css';
import {useSelector} from 'react-redux';

const DescriptionPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (
        <div className={css.desc_page}>
            <div className={css.desc_page1}>
            {oneRestaurant.desc_p_1}
            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.desc_p_1_img}`}
                alt={oneRestaurant.name}
            />
            </div>
            <div className={css.desc_page1}>

            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.desc_p_2_img}`}
                alt={oneRestaurant.name}
            />
                {oneRestaurant.desc_p_2}
            </div>
            <div className={css.desc_page1}>
            {oneRestaurant.desc_p_3}
            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.desc_p_3_img}`}
                alt={oneRestaurant.name}
            />
            </div>
            <div className={css.desc_page1}>

            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.desc_p_4_img}`}
                alt={oneRestaurant.name}
            />
                {oneRestaurant.desc_p_4}
            </div>

        </div>

    );
};

export {DescriptionPage};