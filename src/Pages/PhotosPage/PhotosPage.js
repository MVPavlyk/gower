import React from 'react';
import css from './PhotosPage.module.css'
import {useSelector} from 'react-redux';



const PhotosPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (
        <div className={css.photos_page}>
            PhotosPage
        </div>
    );
};

export {PhotosPage};