import React, {useEffect, useState} from 'react';
import css from './BookingPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getMyBookings} from '../../store';


const BookingPage = () => {
    const {myBookings} = useSelector(state => state['bookingReducers']);

    const dispatch = useDispatch();

    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        dispatch(getMyBookings({pageNum: pageNum, pageSize: 20}));
    });

    console.log(myBookings);

    return (
        <div className={css.booking_page}>
            BookingPage
        </div>
    );
};

export {BookingPage};