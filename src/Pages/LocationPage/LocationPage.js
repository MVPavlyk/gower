import React from 'react';
import {useJsApiLoader} from '@react-google-maps/api';
import {useSelector} from 'react-redux';

import css from './LocationPage.module.css';
import {GoogleLocateMap} from '../../Components';


const API_KEY = process.env.REACT_APP_API_KEY;


const LocationPage = () => {

    const {oneRestaurant} = useSelector(state => state['placeReducers']);
    const {dark} = useSelector(state => state['themeReducers']);
    const {EN} = useSelector(state => state['languageReducers']);

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    });

    return (

        <div className={dark ? css.location_page_dark : css.location_page}>
            <div className={css.exterior}>
                <div className={css.title}>
                    {EN ? "Exterior" : "Екстер'єр"}
                </div>


                    {oneRestaurant.exterior.map(photo =>
                        <img src={`${photo}`}
                             alt={oneRestaurant.name}
                             key={`${photo}`}
                        />)
                    }


            </div>
            <div className={css.google_map}>
                <div className={css.title}>
                    {EN ? "Map" : "Карта"}
                </div>
                <div className={css.map_wrap}>
                    {isLoaded && <GoogleLocateMap center={oneRestaurant.coordinates}/>}
                </div>
            </div>

        </div>

    );
};


export {LocationPage};