import React from 'react';
import {RestaurantBlock} from '../../Components';
import {Navbar} from '../../Components';
import css from './RestaurantPageList.module.css';
import storage from '../../db';

import {useSelector} from 'react-redux';

const RestaurantListPage = () => {

    const {dark} = useSelector(state => state['themeReducers']);

    return (
        <>
            <Navbar/>
            <div className={dark ? css.restaurant__wrap_dark : css.restaurant__wrap}>

                {
                    storage.map(restaurant => <RestaurantBlock key={restaurant.id} restaurant={restaurant}/>)
                }
            </div>
        </>
    );
};

export {RestaurantListPage};