import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Map, ReservedTable, ReserveForms} from '../../Components';
import css from './MapPage.module.css';
import {sendReserve} from '../../store';

const MapPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);
    const {tables} = useSelector(state => state['tableReducers']);

    const dispatch = useDispatch();

    const send = () => {
        dispatch(sendReserve());
    };

    return (
        <>
            {oneRestaurant.halls &&
                <div className={css.map_page}>
                    <div className={css.map_wrap}>
                        {oneRestaurant.halls.map(hall => <Map hall={hall} key={hall.number}/>)}
                    </div>
                    {!!tables.length &&
                        <>
                            <ReservedTable tables={tables}/>
                            <div className={css.reserve_forms_wrap}>
                                <input type="text" className={css.reserve_input} placeholder="Ім'я та прізвище"/>
                                <input type="text" className={css.reserve_input} placeholder="Номер телефону"/>
                            </div>
                            <div className={css.reserve_btn} onClick={() => send()}>
                                Зарезервувати
                            </div>
                        </>
                    }
                </div>
            }
        </>
    );
};

export {MapPage};