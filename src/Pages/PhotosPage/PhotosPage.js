import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';

import css from './PhotosPage.module.css';
import {getPhoto} from '../../root_functions/getPhoto';

const PhotosPage = () => {
    const {onePlace} = useSelector(state => state['placesReducers']);
    const {dark} = useSelector(state => state['themeReducers']);

    const [carousel1, setCarousel1] = useState();

    const [carousel2, setCarousel2] = useState();

    useEffect(() => {
        const id = onePlace.id;
        getPhoto(7, id).then(value => setCarousel1(value.filePath));
        getPhoto(8, id).then(value => setCarousel2(value.filePath));
    }, []);

    return (
        <>
            {carousel1 && <div className={dark ? css.photos_page_dark : css.photos_page}>
                <Carousel className={css.carousel_wrap}>
                    <img src={`https://glitch4.s3.eu-central-1.amazonaws.com/${carousel1}`} alt={onePlace.name}/>
                    <img src={`https://glitch4.s3.eu-central-1.amazonaws.com/${carousel2}`} alt={onePlace.name}/>
                </Carousel>
            </div>
            }

        </>
    );
};

export {PhotosPage};