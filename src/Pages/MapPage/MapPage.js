import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Map, ReservedTable, ReserveForms} from '../../Components';
import css from './MapPage.module.css';
import {sendReserve} from '../../store';

const MapPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);
    const {tables} = useSelector(state => state['tableReducers']);
    const {dark} = useSelector(state => state['themeReducers']);
    const dispatch = useDispatch();
    const {EN} = useSelector(state => state['languageReducers']);

    const send = () => {
        dispatch(sendReserve());
    };

    return (
        <>

            {oneRestaurant.halls &&
            <div className={dark ? css.map_page_dark : css.map_page}>
                <div className={css.map_wrap}>
                    {oneRestaurant.halls.map(hall => <Map hall={hall} key={hall.number}/>)}
                </div>
                {!!tables.length &&
                <>
                    <ReservedTable tables={tables}/>
                    <div className={css.reserve_forms_wrap}>
                        <input type="text" className={css.reserve_input} placeholder={EN ? "First and last name" : "Ім'я та прізвище"}/>
                        <input type="text" className={css.reserve_input} placeholder={EN ? "Phone number" : "Номер телефону"}/>
                    </div>
                    <div className={css.reserve_btn} onClick={() => send()}>
                        {EN ? "Send" : "Зарезервувати"}
                    </div>
                </>
                }
            </div>
            }

        </>
    );
};

export {MapPage};