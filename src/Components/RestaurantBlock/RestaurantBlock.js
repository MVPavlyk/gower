import React from 'react';
import css from './RestaurantBlock.module.css';
import star from '../../img/star.svg';
import location from '../../img/location.svg';
import {Link} from 'react-router-dom';

import {useSelector} from 'react-redux';

const RestaurantBlock = ({restaurant}) => {

    const {dark} = useSelector(state => state['themeReducers']);

    return (
        <>
            <div className={dark ? css.block_border_dark : css.block_border}>
            </div>
            <Link to={`/place/${restaurant.id}`} className={dark ? css.restaurant_block_dark : css.restaurant_block}>
                <div className={css.restaurant_block_left}>
                    <img src={restaurant.mini_img} alt={restaurant.name}/>
                    <div className={css.restaurant_info}>
                        <h1 className={css.restaurant_title}>{restaurant.name}</h1>
                        <div className={css.rating}>
                            <img src={star} alt={'star'}/>
                            <div>{`${restaurant.rating}/5`}</div>
                        </div>
                        <div className={css.restaurant_location}>
                            <img src={location} alt="location"/> {restaurant.address}
                        </div>
                        <div className={css.restaurant_time}>
                            {restaurant.time}
                        </div>
                    </div>
                </div>
            </Link>

        </>
    );
};

export {RestaurantBlock};