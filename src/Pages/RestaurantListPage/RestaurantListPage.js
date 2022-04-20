import React from 'react';
import {RestaurantBlock} from '../../Components';
import {Navbar} from '../../Components';
import css from './RestaurantPageList.module.css';
import storage from '../../db';

const RestaurantListPage = () => {

    return (
        <>
            <Navbar/>
            <div className={css.restaurant__wrap}>

                {
                    storage.map(restaurant => <RestaurantBlock key={restaurant.id} restaurant={restaurant}/>)
                }
            </div>
        </>
    );
};

export {RestaurantListPage};