import React from 'react';
import css from './MenuPage.module.css';
import {useSelector} from 'react-redux';
import {Carousel} from 'react-responsive-carousel';

const MenuPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (
        <>
            {oneRestaurant.menu &&
                <div className={css.menu_page}>
                    <Carousel className={css.carousel}>
                        {oneRestaurant.menu.map(image =>
                            <img
                                src={`${image}`}
                                alt={oneRestaurant.name}
                                key={`${image}`}
                            />
                        )}
                    </Carousel>
                </div>
            }
        </>
    );
};

export {MenuPage};