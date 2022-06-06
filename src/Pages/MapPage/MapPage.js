import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Map, ReservedTable, ReserveForms} from '../../Components';
import css from './MapPage.module.css';
import {createBooking, sendReserve} from '../../store';
import {useForm} from 'react-hook-form';

const MapPage = () => {
    const {onePlace} = useSelector(state => state['placesReducers']);

    const {tables} = useSelector(state => state['tableReducers']);

    const {user} = useSelector(state => state['userReducers']);

    const {dark} = useSelector(state => state['themeReducers']);

    const {EN} = useSelector(state => state['languageReducers']);

    const {error, status} = useSelector(state => state['bookingReducers']);

    const dispatch = useDispatch();

    const {register, handleSubmit} = useForm();

    const [dateTime, setDateTime] = useState('');

    const [localError, setLocalError] = useState(false);

    function handleChange(ev) {
        const dt = ev.target['value'] + ':00Z';
        setDateTime(dt);
    }

    useEffect(() => {
        dispatch(sendReserve());
    }, []);


    const send = () => {
        if ((dateTime === '')) return setLocalError(true);

        const time = +(dateTime.split('T')[1]).split(':')[0];

        if ((time >= 10 && time < 22)) {
            setLocalError(false);
            for (const table of tables) {
                const reqObj = {
                    id: 0,
                    userId: user.id,
                    placeId: onePlace.id,
                    tableId: table.id,
                    isArchive: false,
                    bookedOn: dateTime
                };
                dispatch(createBooking(reqObj));
            }
            setTimeout(() => {
                dispatch(sendReserve());
            }, 100);
        } else {
            setLocalError(true);
        }
    };

    useEffect(() => {
        setLocalError(false);
    }, [tables.length]);


    return (

        <div className={dark ? css.map_page_dark : css.map_page}>
            <div className={css.map_wrap}>
                <Map id={onePlace.id}/>
            </div>


            {!!tables.length &&
                <>
                    <ReservedTable tables={tables}/>
                    {/* <div className={css.reserve_forms_wrap}>
                            <input type="text" className={css.reserve_input}
                                   placeholder={EN ? 'First and last name' : 'Ім\'я та прізвище'}/>
                            <input type="text" className={css.reserve_input}
                                   placeholder={EN ? 'Phone number' : 'Номер телефону'}/>
                        </div>*/}
                    <form
                        className={css.reserve_form}
                        onSubmit={handleSubmit(send)}
                    >
                        <input
                            type="datetime-local"
                            value={(dateTime || '').toString().substring(0, 16)}
                            onChange={handleChange}
                            className={css.time_input}
                        />
                        {(localError || error) && <div className={css.error}>
                            {EN ? 'Something wrong' : 'Щось не так'}
                        </div>}
                        <button className={css.reserve_btn}>
                            {EN ? 'Send' : 'Зарезервувати'}
                        </button>
                    </form>
                </>
            }
        </div>
    );
};

export {MapPage};