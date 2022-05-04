import React from 'react';
import {useSelector} from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';

import css from './PhotosPage.module.css';

const PhotosPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (
        <>
            {oneRestaurant.photos &&
                <div className={css.photos_page}>
                    <Carousel className={css.carousel_wrap}>
                        <img src={oneRestaurant.photos.photo_p_1_img} alt={oneRestaurant.name}/>
                        <img src={oneRestaurant.photos.photo_p_1_img} alt={oneRestaurant.name}/>
                        <img src={oneRestaurant.photos.photo_p_1_img} alt={oneRestaurant.name}/>
                    </Carousel>
                </div>
            }
        </>
    );
};

export {PhotosPage};