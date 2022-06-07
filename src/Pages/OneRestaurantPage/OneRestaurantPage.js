import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useLocation, useParams} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {getOnePlace} from '../../store';
import css from './OneRestaurantPage.module.css';
import {getPhoto} from '../../root_functions/getPhoto';
import {cloudUrl} from '../../config/cloudUrl';

const OneRestaurantPage = () => {
    const restaurantId = useParams();

    const {onePlace} = useSelector(state => state['placesReducers']);

    const {dark} = useSelector(state => state['themeReducers']);

    const dispatch = useDispatch();

    const {pathname} = useLocation();

    const {EN} = useSelector(state => state['languageReducers']);

    const [bigBg, setBigBg] = useState();

    useEffect(() => {
        const id = restaurantId.id;
        dispatch(getOnePlace(id));
        getPhoto(2, id).then(value => setBigBg(value.filePath));

    }, [restaurantId.id]);

    return (
        <>
            {onePlace &&
                <div className={css.one_page}>
                    <div className={css.one_page_bg}
                         style={
                             {background: `url(${cloudUrl}/images/${onePlace.id}/BigBackground/2.png) center top / cover`}
                         }>
                        <div className={css.one_bg_gradient}>
                        </div>
                        <div className={css.one_title}>
                            {onePlace?.shortName}
                        </div>
                        <div className={dark ? css.tab_header_dark : css.tab_header}>
                            <NavLink
                                to={`/place/${onePlace.id}`}
                                className={pathname === `/place/${restaurantId.id}` ? css.active_link : css.tab_link}
                            >
                                {EN ? 'Description' : 'Опис'}
                            </NavLink>
                            <NavLink
                                to={`/place/${onePlace.id}/photos`}
                                className={({isActive}) =>
                                    (isActive ? css.active_link : css.tab_link)}
                            >
                                {EN ? 'Photos' : 'Фото'}
                            </NavLink>
                            <NavLink
                                to={`/place/${onePlace.id}/menu`}
                                className={({isActive}) =>
                                    (isActive ? css.active_link : css.tab_link)}
                            >
                                {EN ? 'Menu' : 'Меню'}
                            </NavLink>
                            <NavLink
                                to={`/place/${onePlace.id}/map`}
                                className={({isActive}) =>
                                    (isActive ? css.active_link : css.tab_link)}
                            >
                                {EN ? 'Tables' : 'Столики'}
                            </NavLink>
                            <NavLink
                                to={`/place/${onePlace.id}/location`}
                                className={({isActive}) =>
                                    (isActive ? css.active_link : css.tab_link)}
                            >
                                {EN ? 'Location' : 'Локація'}
                            </NavLink>
                        </div>
                    </div>
                    <Outlet/>
                </div>
            }
        </>
    );
};

export {OneRestaurantPage};