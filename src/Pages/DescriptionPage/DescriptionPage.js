import React from 'react';
import css from './DescriptionPage.module.css';
import {useSelector} from 'react-redux';

const DescriptionPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (

        <div className={css.desc_page}>
            <div className={css.desc_P}>
            {oneRestaurant.desc_P}
            </div>
            <div className={css.desc_page1}>
                <div className={css.desc_page_text}>
            {oneRestaurant.desc_p_1}
                </div>

                <div className={css.desc_page_photo}>
            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.desc_p_1_img}`}
                alt={oneRestaurant.name}
            /></div>
            </div>
            <div className={css.desc_page1}>

                <div className={css.desc_page_photo}>
            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.desc_p_2_img}`}
                alt={oneRestaurant.name}
            /></div>
                <div className={css.desc_page_text}>
                {oneRestaurant.desc_p_2}
                </div>
            </div>
            <div className={css.desc_page1}>
                <div className={css.desc_page_text}>
            {oneRestaurant.desc_p_3}
                </div>
                <div className={css.desc_page_photo}>
            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.desc_p_3_img}`}
                alt={oneRestaurant.name}
            /></div>
            </div>
            <div className={css.desc_page1}>
                <div className={css.desc_page_photo}>
            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.desc_p_4_img}`}
                alt={oneRestaurant.name}
            /></div>
                <div className={css.desc_page_text}>
                {oneRestaurant.desc_p_4}
                </div>
            </div>

        </div>

    );
};

export {DescriptionPage};