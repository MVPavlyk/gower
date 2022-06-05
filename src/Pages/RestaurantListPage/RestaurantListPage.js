import React, {useEffect} from 'react';
import {RestaurantBlock} from '../../Components';
import {Navbar} from '../../Components';
import css from './RestaurantPageList.module.css';

import {useDispatch, useSelector} from 'react-redux';
import {getPlacesPaginated} from '../../store';

const RestaurantListPage = () => {
    const {dark} = useSelector(state => state['themeReducers']);
    const {placesPage} = useSelector(state => state['placesReducers']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlacesPaginated({pageNum: 1, pageSize: 5}));
    }, []);

    return (
        <>
            <Navbar/>
            <div className={dark ? css.restaurant__wrap_dark : css.restaurant__wrap}>
                {
                    placesPage && !!placesPage.length && placesPage.map(restaurant => <RestaurantBlock
                        key={restaurant.id} restaurant={restaurant}/>)
                }
            </div>
        </>
    );
};

export {RestaurantListPage};