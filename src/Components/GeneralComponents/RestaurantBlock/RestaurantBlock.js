import React from 'react';
import css from './RestaurantBlock.module.css';
import star from '../../../img/RestaurantBlock/star.svg';
import location from '../../../img/RestaurantBlock/location.svg';
import location_dark from '../../../img/RestaurantBlock/location_dark.svg';
import {Link} from 'react-router-dom';

import {useSelector} from 'react-redux';
import {cloudUrl} from '../../../config/cloudUrl';

const RestaurantBlock = ({restaurant}) => {

    const {dark} = useSelector(state => state['themeReducers']);

    return (
        <>
            <div className={dark ? css.block_border_dark : css.block_border}>
            </div>
            <Link to={`/place/${restaurant.id}`} className={dark ? css.restaurant_block_dark : css.restaurant_block}>
                <div className={css.restaurant_block_left}>
                    <img src={`${cloudUrl}/images/${restaurant.id}/MiniBackground/1.png`} alt={restaurant.name}/>
                    <div className={css.restaurant_info}>
                        <h1 className={css.restaurant_title}>{restaurant.name}</h1>
                        <div className={css.rating}>
                            <img src={star} alt={'star'}/>
                            <div>{`${restaurant.rating}/5`}</div>
                        </div>
                        <div className={css.restaurant_location}>
                            <img src={dark ? location_dark : location} alt="location"/> {restaurant.location}
                        </div>
                        <div className={css.restaurant_time}>
                            {restaurant.workTime}
                        </div>
                    </div>
                </div>
            </Link>

        </>
    );
};

export {RestaurantBlock};