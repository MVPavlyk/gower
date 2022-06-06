import React, {useEffect, useState} from 'react';
import css from './BookingRow.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getRestaurantName} from '../../../root_functions/getRestaurantName';
import {deleteBooking, getMyBookings, setBookPageNum} from '../../../store';
import {Link} from 'react-router-dom';


const BookingRow = ({booking}) => {
    const {dark} = useSelector(state => state['themeReducers']);

    const {EN} = useSelector(state => state['languageReducers']);

    const bookDate = booking.bookedOn.split('T')[0];

    const bookTime = booking.bookedOn.split('T')[1].split(':');

    const dispatch = useDispatch();

    const [restaurant, setRestaurant] = useState();


    useEffect(() => {
        const placeId = booking.placeId;
        getRestaurantName(placeId).then(value => setRestaurant(value));
    }, [booking.id]);

    const delBooking = () => {
        const id = booking.id;
        dispatch(deleteBooking(id)).then(setTimeout(() => {
            dispatch(getMyBookings({pageNum: 1, pageSize: 20}));
        }, 40));
    };


    return (
        <div className={css.booking_row}>
            <div className={dark ? css.booking_block_dark : css.booking_block}>
                <div>{EN ? 'Date and time' : 'Дата та час'}:</div>
                <div>{bookDate}</div>
                <div>{`${bookTime[0]}:${bookTime[1]}`}</div>
            </div>
            <div className={dark ? css.booking_block_dark : css.booking_block}>
                <div>{EN ? 'Place' : 'Заклад'}:</div>
                <Link to={`/place/${restaurant?.id}`}>{restaurant?.name}</Link>
            </div>
            {booking.isArchive ?
                <div className={dark ? css.non_active_dark : css.non_active}>{EN ? 'Not active' : 'Неактивне'}</div>
                :
                <div className={css.del_btn} onClick={() => delBooking()}>
                    {EN ? 'Cancel' : 'Скасувати'}
                </div>
            }
        </div>
    );
};

export {BookingRow};