import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useLocation, useParams} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {getRestaurant} from '../../store';
import css from './OneRestaurantPage.module.css';

const OneRestaurantPage = () => {
    const restaurantId = useParams();

    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    const {dark} = useSelector(state => state['themeReducers']);

    const dispatch = useDispatch();


    const {pathname} = useLocation();

    const {EN} = useSelector(state => state['languageReducers']);

    useEffect(() => {

        dispatch(getRestaurant(restaurantId));

    }, [restaurantId.id]);


    return (
        <div className={css.one_page}>
            <div className={css.one_page_bg}
                 style={
                     {background: `url(${oneRestaurant.bg_img}) center top / cover`}
                 }>
                <div className={css.one_bg_gradient}>
                </div>
                <div className={css.one_title}>
                    {oneRestaurant.short_name}
                </div>
                <div className={dark ? css.tab_header_dark : css.tab_header}>
                    <NavLink
                        to={`/place/${oneRestaurant.id}`}
                        className={pathname === `/place/${restaurantId.id}` ? css.active_link : css.tab_link}
                    >
                        {EN ? "Description" : "Опис"}
                    </NavLink>
                    <NavLink
                        to={`/place/${oneRestaurant.id}/photos`}
                        className={({isActive}) =>
                            (isActive ? css.active_link : css.tab_link)}
                    >
                        {EN ? "Photos" : "Фото"}
                    </NavLink>
                    <NavLink
                        to={`/place/${oneRestaurant.id}/menu`}
                        className={({isActive}) =>
                            (isActive ? css.active_link : css.tab_link)}
                    >
                        {EN ? "Menu" : "Меню"}
                    </NavLink>
                    <NavLink
                        to={`/place/${oneRestaurant.id}/map`}
                        className={({isActive}) =>
                            (isActive ? css.active_link : css.tab_link)}
                    >
                        {EN ? "Tables" : "Столики"}
                    </NavLink>
                    <NavLink
                        to={`/place/${oneRestaurant.id}/location`}
                        className={({isActive}) =>
                            (isActive ? css.active_link : css.tab_link)}
                    >
                        {EN ? "Location" : "Локація"}
                    </NavLink>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export {OneRestaurantPage};