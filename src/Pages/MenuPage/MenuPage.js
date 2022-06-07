import React, {useEffect, useState} from 'react';
import css from './MenuPage.module.css';
import {useSelector} from 'react-redux';
import {Carousel} from 'react-responsive-carousel';
import {getPhoto} from '../../root_functions/getPhoto';
import {cloudUrl} from '../../config/cloudUrl';

const MenuPage = () => {
    const {onePlace} = useSelector(state => state['placesReducers']);

    const {dark} = useSelector(state => state['themeReducers']);

 /*   const [menu, setMenu] = useState();

    useEffect(() => {
        const id = onePlace.id;
        getPhoto(9, id).then(value => setMenu(value.filePath));
    }, []);
*/

    return (
        <>
            <div className={dark ? css.menu_page_dark : css.menu_page}>
                <Carousel className={css.carousel}>
                    {onePlace && <img
                        src={`${cloudUrl}/images/${onePlace.id}/Menu/9.png`}
                        alt={onePlace.name}
                    />}
                </Carousel>
            </div>
        </>
    );
};

export {MenuPage};