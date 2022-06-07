import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';

import css from './PhotosPage.module.css';
import {getPhoto} from '../../root_functions/getPhoto';
import {cloudUrl} from '../../config/cloudUrl';

const PhotosPage = () => {
    const {onePlace} = useSelector(state => state['placesReducers']);
    const {dark} = useSelector(state => state['themeReducers']);

 /*   const [carousel1, setCarousel1] = useState();

    const [carousel2, setCarousel2] = useState();

    useEffect(() => {
        const id = onePlace.id;
        getPhoto(7, id).then(value => setCarousel1(value.filePath));
        getPhoto(8, id).then(value => setCarousel2(value.filePath));
    }, []);*/

 /*   console.log(carousel1);*/


    return (
        <>
            {onePlace && <div className={dark ? css.photos_page_dark : css.photos_page}>
                <Carousel className={css.carousel_wrap}>
                    <img src={`${cloudUrl}/images/${onePlace.id}/RestaurantPhoto1/7.png`} alt={onePlace.name}/>
                    <img src={`${cloudUrl}/images/${onePlace.id}/RestaurantPhoto2/8.png`} alt={onePlace.name}/>
                </Carousel>
            </div>
            }

        </>
    );
};

export {PhotosPage};