import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {getRestaurant} from '../../store';
import css from './OneRestaurantPage.module.css';

const OneRestaurantPage = () => {
    const restaurantId = useParams();

    const navigate = useNavigate();

    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    const dispatch = useDispatch();


    useEffect(() => {
        const restaurant = async () => {
            dispatch(getRestaurant(restaurantId));
        };
        restaurant().then(toDesc);

    }, [restaurantId.id]);


    const toDesc = () => {
        navigate(`/place/${restaurantId.id}/description`);
    };


    return (
        <div className={css.one_page}>
            <div className={css.one_page_bg}>
                <img
                    src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.bg_img}`}
                    alt={oneRestaurant.name}
                    className={css.bg_img}
                />
                <div className={css.one_bg_gradient}>
                </div>
                <div className={css.one_title}>
                    {oneRestaurant.short_name}
                </div>
                <div className={css.tab_header}>
                    <NavLink
                        to={`/place/${oneRestaurant.id}/description`}
                        className={({isActive}) =>
                            (isActive ? css.active_link : undefined)}
                    >
                        Опис
                    </NavLink>
                    <NavLink
                        to={`/place/${oneRestaurant.id}/photos`}
                        className={({isActive}) =>
                            (isActive ? css.active_link : undefined)}
                    >
                        Фото
                    </NavLink>
                    <NavLink
                        to={`/place/${oneRestaurant.id}/menu`}
                        className={({isActive}) =>
                            (isActive ? css.active_link : undefined)}
                    >
                        Меню
                    </NavLink>
                    <NavLink
                        to={`/place/${oneRestaurant.id}/map`}
                        className={({isActive}) =>
                            (isActive ? css.active_link : undefined)}
                    >
                        Карта столиків
                    </NavLink>
                    <NavLink
                        to={`/place/${oneRestaurant.id}/location`}
                        className={({isActive}) =>
                            (isActive ? css.active_link : undefined)}
                    >
                        Локація
                    </NavLink>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export {OneRestaurantPage};