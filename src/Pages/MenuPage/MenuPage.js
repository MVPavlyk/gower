import React, {useEffect, useState} from 'react';
import css from './MenuPage.module.css';
import {useSelector} from 'react-redux';
import {Carousel} from 'react-responsive-carousel';
import {getPhoto} from '../../root_functions/getPhoto';

const MenuPage = () => {
    const {onePlace} = useSelector(state => state['placesReducers']);

    const {dark} = useSelector(state => state['themeReducers']);

    const [menu, setMenu] = useState();

    useEffect(() => {
        const id = onePlace.id;
        getPhoto(9, id).then(value => setMenu(value.filePath));
    }, []);


    return (
        <>
            <div className={dark ? css.menu_page_dark : css.menu_page}>
                <Carousel className={css.carousel}>
                    {menu && <img
                        src={`https://glitch4.s3.eu-central-1.amazonaws.com/${menu}`}
                        alt={onePlace.name}
                    />}
                </Carousel>
            </div>
        </>
    );
};

export {MenuPage};