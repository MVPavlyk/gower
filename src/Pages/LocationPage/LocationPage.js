import React from 'react';
import {useJsApiLoader} from '@react-google-maps/api';
import {useSelector} from 'react-redux';

import css from './LocationPage.module.css';
import {GoogleLocateMap} from '../../Components';

import phone from '../../img/phone.svg';
import phone_dark from '../../img/phone_dark.svg';
import instagram from '../../img/insta.svg';
import instagram_dark from '../../img/insta_dark.svg';
import email from '../../img/mail.svg';
import email_dark from '../../img/mail_dark.svg';


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

        <>
            <div className={dark ? css.location_page_dark : css.location_page}>
                <div className={css.exterior}>
                    <div className={css.title}>
                        {EN ? 'Exterior' : 'Екстер\'єр'}
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
                        {EN ? 'Map' : 'Карта'}
                    </div>
                    <div className={css.map_wrap}>
                        {isLoaded && <GoogleLocateMap center={oneRestaurant.coordinates}/>}
                    </div>

                </div>
            </div>
            <div className={dark ? css.contacts_dark : css.contacts}>
                <div>{EN ? 'Contacts:' : 'Контакти:'}</div>
                <div className={css.contacts_info}><img src={dark ? phone_dark : phone} alt="phone"/>+38096758218</div>
                <div className={css.contacts_info}><img src={dark ? instagram_dark : instagram} alt="phone"/>Panorama_Lviv
                </div>
                <div className={css.contacts_info}><img src={dark ? email_dark : email} alt="phone"/>panorama@gmail.com
                </div>
            </div>
        </>
    );
};


export {LocationPage};