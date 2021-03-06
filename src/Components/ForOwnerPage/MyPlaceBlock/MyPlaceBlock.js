import React, {useEffect, useState} from 'react';
import css from './MyPlaceBlock.module.css';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {getBookingsForToday, getTablesOfPlace, uploadPhoto} from '../../../store';
import arrowSide from '../../../img/arrow-side.svg';
import arrowSide_dark from '../../../img/arrow-side-dark.svg';
import {MyPlaceTable} from '../MyPlaceTable/MyPlaceTable';
import {OwnerBookingRow} from '../OwnerBookingRow/OwnerBookingRow';
import {getTables} from '../../../root_functions/getTables';
import {getBookingByPlace} from '../../../root_functions/getBookingByPlace';

const MyPlaceBlock = ({place}) => {
    const {EN} = useSelector(state => state['languageReducers']);
    const {dark} = useSelector(state => state['themeReducers']);

    const {changePoint} = useSelector(state => state['tableReducers']);

    // const {bookingsForToday} = useSelector(state => state['bookingReducers']);
    //
    const {
        register, handleSubmit
    } = useForm();

    const dispatch = useDispatch();

    const formData = new FormData();

    const [type, setType] = useState(0);

    const [string, setString] = useState('-');

    const [showDrop, setShowDrop] = useState(false);

    const [showDesc, setShowDesc] = useState(false);

    const [placeTables, setPlaceTables] = useState([]);

    const [bookingsForToday, setBookingsForToday] = useState([]);

    useEffect(() => {
        getTables(place.id).then(value => setPlaceTables(value));
        getBookingByPlace(place.id).then(value => setBookingsForToday(value));
    }, [changePoint]);


    useEffect(() => {
        (type >= 3 && type <= 6) ? setShowDesc(true) : setShowDesc(false);
    }, [type]);

    const sendPhoto = (req) => {
        formData.append('file', req.file[0]);
        dispatch(uploadPhoto({type: type, placeId: place.id, file: formData, description: req.description}));
    };

    const switchType = (number, string) => {
        setType(number);
        setString(string);
        setShowDrop(false);
    };
    return (
        <div className={css.place_block}>
            <div className={css.place_header}>
                {place.name}
            </div>
            <div className={css.block_title}>{EN ? 'Add photo' : '???????????? ????????'}</div>
            <form onSubmit={handleSubmit(sendPhoto)} className={css.send_photo_form}>
                <div className={css.dropdown_wrap}>
                    <div className={css.drop_btn} onClick={() => setShowDrop(!showDrop)}>
                        <div>{string}</div>
                        <img src={dark ? arrowSide_dark : arrowSide} className={showDrop ? css.hide_btn : css.show_btn}
                             alt="arrow"/>
                    </div>
                    <div className={showDrop ? dark ? css.dropdown_menu_dark : css.dropdown_menu : css.dropdown_menu_hide}>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(1, 'Mini-bg')}
                        >
                            Mini-bg
                        </div>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(2, 'Big-bg')}
                        >
                            Big-bg
                        </div>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(3, 'Description 1')}
                        >
                            Description 1
                        </div>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(4, 'Description 2')}
                        >
                            Description 2
                        </div>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(5, 'Description 3')}
                        >
                            Description 3
                        </div>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(6, 'Description 4')}
                        >
                            Description 4
                        </div>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(7, 'Carousel 1')}
                        >
                            Carousel 1
                        </div>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(8, 'Carousel 2')}
                        >
                            Carousel 2
                        </div>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(9, 'Menu')}
                        >
                            Menu
                        </div>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(10, 'Map')}
                        >
                            Map
                        </div>
                        <div
                            className={css.dropdown_point}
                            onClick={() => switchType(11, 'Exterior')}
                        >
                            Exterior
                        </div>
                    </div>
                </div>
                <input
                    type="text"
                    {...register('description')}
                    placeholder="Description"
                    className={showDesc ? css.desc_input : css.none}
                />
                <input
                    type="file"
                    {...register('file')}
                />
                <button className={dark ? css.send_photo_btn_dark : css.send_photo_btn}>{EN ? 'Send photo' : '?????????????????? ????????'}</button>
            </form>
            <div className={css.block_title}>{EN ? 'My tables' : '?????? ??????????????'}</div>
            {placeTables && !!placeTables?.length && placeTables.map(table => <MyPlaceTable placeId={place.id}
                                                                                            key={table.id}
                                                                                            table={table}/>)
            }
            <div className={css.block_title}>{EN ? 'Bookings for today' : '???????????????????? ???? ????????????????'}</div>
            {bookingsForToday?.map(booking => <OwnerBookingRow key={booking.id} booking={booking}/>)}
        </div>
    );
};

export {MyPlaceBlock};