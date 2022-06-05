import React, {useEffect, useState} from 'react';
import {getUser} from '../../../root_functions/getUser';
import css from './OwnerBookingRow.module.css';
import {useSelector} from 'react-redux';

const OwnerBookingRow = ({booking}) => {
    const {EN} = useSelector(state => state['languageReducers']);

    console.log(booking);

    const [user, setUser] = useState();

    const bookDate = booking.bookedOn.split('T')[0];

    const bookTime = booking.bookedOn.split('T')[1].split(':');

    useEffect(() => {
        const id = booking.userId;
        getUser(id).then(value => setUser(value));
    }, [booking]);


    return (
        <div className={css.booking_row}>
            <div className={css.booking_block}>
                <div>{EN ? 'Date and time' : 'Дата та час'}:</div>
                <div>{bookDate}</div>
                <div>{`${bookTime[0]}:${bookTime[1]}`}</div>
            </div>
            <div className={css.booking_block}>
                <div>{EN ? 'Client' : 'Клієнт'}:</div>
                <div>{`${user?.firstName} ${user?.lastName}`}</div>
            </div>
            <div className={css.booking_block}>
                <div>{EN ? 'State' : 'Стан'}:</div>
                <div>{booking?.isArchive ? EN ? 'Non active' : 'Неактивний' :  EN ? 'Active' : 'Активний'}</div>
            </div>
        </div>
    );
};

export {OwnerBookingRow};