import React from 'react';
import css from './RestaurantBlock.module.css';
import stars from '../../img/stars.svg';
import location from '../../img/location.svg';
import {Link} from 'react-router-dom';

const RestaurantBlock = ({restaurant}) => {
    return (
        <div className={css.restaurant_block}>
            <div className={css.restaurant_block_left}>
                <img src={restaurant.mini_img} alt={restaurant.name}/>
                <div className={css.restaurant_info}>
                    <h1 className={css.restaurant_title}>{restaurant.name}</h1>
                    <img src={stars} alt={'stars'}/>
                    <div className={css.restaurant_location}>
                        <img src={location} alt="location"/> {restaurant.address}
                    </div>
                    <div className={css.restaurant_time}>
                        {restaurant.time}
                    </div>
                </div>
            </div>
            <Link to={`/place/${restaurant.id}`} className={css.restaurant_details}>
                DETAILS
            </Link>
        </div>
    );
};

export {RestaurantBlock};