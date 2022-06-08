import React, {useEffect, useState} from 'react';
import {useJsApiLoader} from '@react-google-maps/api';
import {useSelector} from 'react-redux';

import css from './LocationPage.module.css';
import {GoogleLocateMap} from '../../Components';

import phone from '../../img/LocationPage/phone_logo.svg';
import phone_dark from '../../img/LocationPage/phone_logo_dark.svg';
import instagram from '../../img/LocationPage/instagram_icon.svg';
import instagram_dark from '../../img/LocationPage/instagram_icon_dark.svg';
import email from '../../img/LocationPage/email_logo.svg';
import email_dark from '../../img/LocationPage/email_logo_dark.svg';
import {cloudUrl} from '../../config/cloudUrl';


const API_KEY = process.env.REACT_APP_API_KEY;

const LocationPage = () => {

    const {onePlace} = useSelector(state => state['placesReducers']);
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
                    {onePlace && <img src={`${cloudUrl}/images/${onePlace.id}/Exterior/11.png`}
                          alt={onePlace.name}
                    />}
                </div>
                <div className={css.google_map}>
                    <div className={css.title}>
                        {EN ? 'Map' : 'Карта'}
                    </div>
                    <div className={css.map_wrap}>
                        {isLoaded && <GoogleLocateMap center={{
                            lat: onePlace.latitude,
                            lng: onePlace.longitude
                        }}/>}
                    </div>
                </div>
            </div>
            <div className={dark ? css.contacts_dark : css.contacts}>
                <div>{EN ? 'Contacts:' : 'Контакти:'}</div>
                <div className={css.contacts_info}><img src={dark ? phone_dark : phone} alt="phone"/>{onePlace?.phoneNumber}</div>
                <div className={css.contacts_info}><img src={dark ? instagram_dark : instagram} alt="phone"/>{onePlace?.instagramName}</div>
                <div className={css.contacts_info}><img src={dark ? email_dark : email} alt="phone"/>{onePlace?.email}
                </div>
            </div>
        </>
    );
};


export {LocationPage};