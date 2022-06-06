import React, {useEffect, useState} from 'react';
import css from './BookingPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getMyBookings, setAllPagesCount, setBookPageNum} from '../../store';
import {BookingRow} from '../../Components';
import arrow_left from '../../img/arrow-left.svg';
import arrow_right from '../../img/arraw-right.svg';
import {Navigate} from 'react-router-dom';


const BookingPage = () => {
    const {user} = useSelector(state => state['userReducers']);
    const {myBookings, currentBookPage} = useSelector(state => state['bookingReducers']);
    const {dark} = useSelector(state => state['themeReducers']);
    const {EN} = useSelector(state => state['languageReducers']);

    const dispatch = useDispatch();

    const [allPages, setAllPages] = useState(1)

    useEffect(()=> {
        dispatch(setBookPageNum(1));
    }, [])

    useEffect(() => {
        dispatch(getMyBookings({pageNum: currentBookPage, pageSize: 10 }))
    }, [currentBookPage]);

    useEffect(()=> {
        setAllPages(myBookings?.pageCount)
    }, [myBookings])

    const prevPage = () => {
        if (!(currentBookPage === 1)) {
            const number = currentBookPage - 1;
            dispatch(setBookPageNum(number));
        }
    };

    const nextPage = () => {
        if (!(currentBookPage >= allPages)) {
            const number = currentBookPage + 1;
            dispatch(setBookPageNum(number));
        }
    };

    if (!user) {
        return <Navigate to="/" replace/>;
    }

    return (
        <div className={css.booking_page}>
            <div className={css.booking_header}>
                {EN ? 'My bookings' : 'Мої бронювання'}
            </div>
            {myBookings && !!myBookings?.results?.length && myBookings?.results?.map(booking => <BookingRow
                key={booking.id} booking={booking}/>)}
            {myBookings && !!myBookings?.results?.length && <div className={css.page_buttons}>
                <img src={arrow_left} alt="arrowLeft" onClick={() => prevPage()}/>
                <div className={css.page_number}>
                    {EN ? 'Page ' : 'Сторінка '} {currentBookPage} {EN ? ' from ' : ' з '} {allPages}
                </div>
                <img src={arrow_right} alt="arrowRight" onClick={() => nextPage()}/>
            </div>}
        </div>
    );
};

export {BookingPage};