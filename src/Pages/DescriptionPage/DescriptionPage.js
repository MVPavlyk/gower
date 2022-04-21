import React from 'react';
import css from './DescriptionPage.module.css';
import {useSelector} from 'react-redux';

const DescriptionPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);


    return (
        <div className={css.desc_page}>
            {oneRestaurant.desc_p_1}
            <img
                src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.desc_p_1_img}`}
                alt={oneRestaurant.name}
            />
        </div>
    );
};

export {DescriptionPage};