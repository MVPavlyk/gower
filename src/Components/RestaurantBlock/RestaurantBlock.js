import React from 'react';
import css from "../../Pages/RestaurantListPage/RestaurantPageList.module.css";
import stars from "../../img/stars.svg";
import location from "../../img/location.svg";
const RestaurantBlock = ({restaurant}) => {
    return (
        <div className={css.restaurant_block}>
            <img src={
                restaurant.id === 1 ? require('../../img/u_marty.png') :  require('../../img/panorama.png')
            } alt={restaurant.name}/>
            <div className={css.restaurant_info}>
                <div className={css.restaurant_details}>
                    <h1>{restaurant.name}</h1>
                    <button className={css.nav_link}>
                        DETAILS
                    </button>
                </div>
                <img src={
                    restaurant.id === 1 ? stars :  stars
                } alt={"stars"}/>
                <div className={css.restaurant_location}>
                    <img src={location} alt="location"/> {restaurant.address}
                </div>
                <div className={css.restaurant_time}>
                    {restaurant.time}
                </div>
            </div>
        </div>
    );
};

export {RestaurantBlock};